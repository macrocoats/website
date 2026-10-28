// Fails the build if any internal link in the built HTML, or any sitemap URL,
// points at a path with no file behind it. Since vercel.json has no catch-all
// rewrite, such a link would be a 404 in production.
//
// Usage: node scripts/check-links.js [outDir]   (default: dist)
import fs from 'node:fs/promises'
import path from 'node:path'

const OUT_DIR = path.resolve(process.argv[2] ?? 'dist')
const SITE = 'https://www.macrocoats.in'

const htmlFiles = (await fs.readdir(OUT_DIR, { recursive: true }))
  .filter((f) => f.endsWith('.html') && f !== '404.html')

const links = new Map() // path -> first file that links to it
for (const file of htmlFiles) {
  const html = await fs.readFile(path.join(OUT_DIR, file), 'utf8')
  for (const [, href] of html.matchAll(/href="(\/[^"#?]*)/g)) {
    if (!links.has(href)) links.set(href, file)
  }
}
const sitemap = await fs.readFile(path.join(OUT_DIR, 'sitemap.xml'), 'utf8')
for (const [, loc] of sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)) {
  const href = loc.replace(SITE, '') || '/'
  if (!links.has(href)) links.set(href, 'sitemap.xml')
}

const missing = []
for (const [href, from] of links) {
  if (!(await resolves(href))) missing.push(`  ${href}  (linked from ${from})`)
}

if (missing.length) {
  console.error(`${missing.length} internal link(s) have no matching file in ${OUT_DIR}:\n${missing.join('\n')}`)
  process.exit(1)
}
console.log(`Checked ${links.size} internal links across ${htmlFiles.length} pages — all resolve.`)

async function resolves(href) {
  const p = path.join(OUT_DIR, decodeURI(href))
  for (const candidate of [p, path.join(p, 'index.html'), `${p.replace(/\/$/, '')}.html`]) {
    try {
      if ((await fs.stat(candidate)).isFile()) return true
    } catch {}
  }
  return false
}
