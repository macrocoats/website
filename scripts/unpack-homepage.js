// Unpacks the self-contained homepage export (design/homepage.bundle.html) into a
// plain static index.html plus hashed, long-cacheable files in public/home/.
//
// The export ships React, the dc-runtime and every font as base64 inside one
// ~500 KB HTML file and decodes them in JS before anything paints. Unpacking at
// build time lets the browser stream the page, fetch scripts in parallel, pick
// only the font subsets it needs (unicode-range) and cache everything.
//
// Re-run after re-exporting the homepage: npm run unpack-home
import fs from 'node:fs/promises'
import path from 'node:path'
import crypto from 'node:crypto'
import zlib from 'node:zlib'

const SOURCE = 'design/homepage.bundle.html'
const OUTPUT = 'index.html'
const ASSET_DIR = 'public/home'
const ASSET_URL = '/home'

const EXT = { 'text/javascript': 'js', 'font/woff2': 'woff2' }

const source = await fs.readFile(SOURCE, 'utf8')

function island(type) {
  const m = source.match(new RegExp(`<script type="__bundler/${type}">\\s*([\\s\\S]*?)\\s*</script>`))
  if (!m) throw new Error(`Missing __bundler/${type} block in ${SOURCE}`)
  return JSON.parse(m[1])
}

const manifest = island('manifest')
const extResources = island('ext_resources')
let template = island('template')

// Write each embedded asset under a content hash so it can be cached immutably.
await fs.rm(ASSET_DIR, { recursive: true, force: true })
await fs.mkdir(ASSET_DIR, { recursive: true })
const urls = {}
let totalBytes = 0
for (const [uuid, entry] of Object.entries(manifest)) {
  const ext = EXT[entry.mime]
  if (!ext) throw new Error(`Unhandled asset type ${entry.mime} (${uuid})`)
  let bytes = Buffer.from(entry.data, 'base64')
  if (entry.compressed) bytes = zlib.gunzipSync(bytes)
  const hash = crypto.createHash('sha256').update(bytes).digest('hex').slice(0, 12)
  const name = `${hash}.${ext}`
  await fs.writeFile(path.join(ASSET_DIR, name), bytes)
  urls[uuid] = `${ASSET_URL}/${name}`
  totalBytes += bytes.length
}

// Same SEO carry-over and small-screen fixes the bundle loader applied at runtime.
const head = source.slice(0, source.indexOf('</head>'))
const seoMarkup = [
  /<title>[\s\S]*?<\/title>/,
  /<meta name="description"[^>]*>/,
  /<meta name="robots"[^>]*>/,
  /<meta name="theme-color"[^>]*>/,
  /<link rel="canonical"[^>]*>/,
  /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
].map((re) => head.match(re)?.[0] ?? '')
  .concat(head.match(/<meta (?:property="og:|name="twitter:)[^>]*>/g) ?? [])
  .join('\n')

template = template.replace(
  '.site-nav__mobile{display:block;position:relative}',
  '.site-nav__inner{position:relative}.site-nav__mobile{display:block!important;position:absolute!important;right:20px;top:9px;z-index:70}'
).replace(
  '.site-hero__main h1{font-size:clamp(42px,12vw,56px)!important;line-height:1.02!important;margin-bottom:24px!important;text-wrap:auto!important;overflow-wrap:anywhere}',
  '.site-hero__main{min-width:0!important;width:100%!important;max-width:100%!important;overflow:hidden}.site-hero__main h1{font-size:clamp(38px,10.5vw,48px)!important;line-height:1.04!important;margin-bottom:24px!important;max-width:100%!important;white-space:normal!important;text-wrap:auto!important;overflow-wrap:normal!important}'
).replace(
  '.site-hero__kicker{font-size:10px!important}',
  '.site-hero__kicker{font-size:10px!important}.site-hero__main h1{font-size:38px!important;letter-spacing:-.035em!important}'
).replace(
  /<details class="site-nav__mobile"[\s\S]*?<\/details>/,
  '<div class="site-nav__mobile" style="display:flex"><a href="/blog/">Blog</a><a href="#contact">Contact&nbsp;→</a></div>'
).replace(
  '.site-nav__inner{position:relative}.site-nav__mobile{display:block!important;position:absolute!important;right:20px;top:9px;z-index:70}',
  '.site-nav__inner{position:relative}.site-nav__mobile{display:flex!important;position:absolute!important;right:20px;top:11px;z-index:70;align-items:center;gap:6px}.site-nav__mobile a{min-height:40px;padding:10px 11px;border:1px solid #D3D9DF;color:#10243A;display:flex;align-items:center;font:600 12px/1 IBM Plex Sans,sans-serif}'
).replace(
  '<a href="#industries" style="color:#3E4C59" style-hover="color:#10243A">Industries</a>',
  '<a href="#industries" style="color:#3E4C59" style-hover="color:#10243A">Industries</a><a href="/blog/" style="color:#3E4C59" style-hover="color:#10243A">Blog</a>'
).replace(
  "{ t: 'Industries', href: '#industries' }]",
  "{ t: 'Industries', href: '#industries' }, { t: 'Blog', href: '/blog/' }]"
)

// The 526px PNG logo (120 KB) is shown at 46px; the 5 KB WebP is the same mark.
template = template.split('/images/logo.png').join('/images/logo-brochure.webp')

for (const [uuid, url] of Object.entries(urls)) template = template.split(uuid).join(url)
template = template.replace(/\s+integrity="[^"]*"/gi, '').replace(/\s+crossorigin="[^"]*"/gi, '')

// The dc-runtime loads React from window.__resources when present, so point it
// at the local copies and preload them while the runtime script downloads.
const resourceMap = Object.fromEntries(extResources.map((r) => [r.id, urls[r.uuid]]))
const preloads = extResources
  .map((r) => `<link rel="preload" href="${urls[r.uuid]}" as="script">`)
  .join('\n')
const GA4 = `<script async src="https://www.googletagmanager.com/gtag/js?id=G-4L2PBC9WHB"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-4L2PBC9WHB');
</script>`
const headInject = [
  GA4,
  seoMarkup,
  `<script>window.__resources=${JSON.stringify(resourceMap).replace(/<\//g, '<\\/')};</script>`,
  preloads,
].join('\n')

// Insert after the viewport meta so charset stays first in <head>.
const anchor = template.match(/<meta name="viewport"[^>]*>/i) ?? template.match(/<head[^>]*>/i)
if (!anchor) throw new Error('Template has no <head>')
const at = anchor.index + anchor[0].length
template = template.slice(0, at) + '\n' + headInject + template.slice(at)
template = template.replace(/<html>/i, '<html lang="en">').replace(/\n{3,}/g, '\n\n')

await fs.writeFile(OUTPUT, template)
console.log(
  `${OUTPUT}: ${(Buffer.byteLength(source) / 1024).toFixed(0)} KB bundle -> ` +
  `${(Buffer.byteLength(template) / 1024).toFixed(0)} KB page + ` +
  `${Object.keys(urls).length} files (${(totalBytes / 1024).toFixed(0)} KB) in ${ASSET_DIR}/`
)
