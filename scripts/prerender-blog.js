// Prerenders the blog list, every article, /process-audit, /products (+ each
// product) and /technology into static HTML after `vite build`,
// each with its own title, description, canonical URL, social tags and
// BlogPosting structured data. Crawlers get full content without running JS;
// in the browser, src/main.jsx hydrates the markup.
//
// Usage: node scripts/prerender-blog.js [outDir]   (default: dist)
import fs from 'node:fs/promises'
import path from 'node:path'
import { createServer } from 'vite'

const OUT_DIR = path.resolve(process.argv[2] ?? 'dist')
const SITE = 'https://www.macrocoats.in'
const DEFAULT_IMAGE = `${SITE}/images/hero-cleaning-zinc-phosphate-stages.webp`
const MONTHS = ['january', 'february', 'march', 'april', 'may', 'june', 'july',
  'august', 'september', 'october', 'november', 'december']

const vite = await createServer({
  logLevel: 'error',
  server: { middlewareMode: true },
  appType: 'custom',
  // Load react-router's ESM build (its "module-sync" export) like Node does natively.
  ssr: { resolve: { externalConditions: ['module-sync'] } },
})

try {
  const { render, ARTICLE_MAP, PROCESS_AUDIT_TITLE, PRODUCTS } = await vite.ssrLoadModule('/src/entry-server.jsx')
  const templatePath = path.join(OUT_DIR, 'blog/index.html')
  const template = await fs.readFile(templatePath, 'utf8')

  await fs.writeFile(templatePath, withBody(template, await render('/blog/')))

  for (const [slug, { title }] of Object.entries(ARTICLE_MAP)) {
    const body = await render(`/blog/${slug}`)
    const page = withBody(withArticleHead(template, slug, title, body), body)
    const file = path.join(OUT_DIR, 'blog', slug, 'index.html')
    await fs.mkdir(path.dirname(file), { recursive: true })
    await fs.writeFile(file, page)
  }

  const auditFile = path.join(OUT_DIR, 'process-audit', 'index.html')
  await fs.mkdir(path.dirname(auditFile), { recursive: true })
  await fs.writeFile(auditFile, withBody(withPageHead(template, {
    title: PROCESS_AUDIT_TITLE,
    description: 'Book a free process chemistry audit: a plant visit, bath log review and a written report with specific recommendations for your phosphating or surface treatment line.',
    url: `${SITE}/process-audit`,
  }), await render('/process-audit')))

  // Without these files a direct visit or reload fell through to the homepage export.
  const pages = [
    {
      route: '/products',
      title: 'Products — MacroCoats Process-Engineered Chemistry',
      description: 'Phosphating, surface preparation, passivation and corrosion-protection chemicals from MacroCoats, with process stages, applications and technical data for each product.',
    },
    {
      route: '/technology',
      title: 'Capabilities Brochure 2026 — MacroCoats Process-Engineered Chemistry',
      description: 'How MacroCoats engineers surface treatment as a system: process chemistry, bath control, IoT monitoring and on-site technical support for industrial lines.',
    },
    ...PRODUCTS.map((p) => ({
      route: `/products/${p.slug}`,
      title: `${p.name} — MacroCoats`,
      description: truncate(p.description.replace(/\s+/g, ' ').trim(), 160),
    })),
  ]
  for (const { route, title, description } of pages) {
    const file = path.join(OUT_DIR, route, 'index.html')
    await fs.mkdir(path.dirname(file), { recursive: true })
    await fs.writeFile(file, withBody(withPageHead(template, { title, description, url: `${SITE}${route}` }), await render(route)))
  }

  console.log(`Prerendered /blog/, ${Object.keys(ARTICLE_MAP).length} articles, /process-audit and ${pages.length} product/technology pages into ${OUT_DIR}/`)
} finally {
  await vite.close()
}

function withBody(template, body) {
  if (!template.includes('<div id="root"></div>')) throw new Error('No empty #root in blog template')
  return template.replace('<div id="root"></div>', () => `<div id="root">${body}</div>`)
}

function withPageHead(template, { title, description, url }) {
  const t = attr(title)
  const d = attr(description)
  return template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*/, `$1${d}`)
    .replace(/(<link rel="canonical" href=")[^"]*/, `$1${url}`)
    .replace(/(<meta property="og:title" content=")[^"]*/, `$1${t}`)
    .replace(/(<meta property="og:description" content=")[^"]*/, `$1${d}`)
    .replace(/(<meta property="og:url" content=")[^"]*/, `$1${url}`)
}

function withArticleHead(template, slug, title, body) {
  const url = `${SITE}/blog/${slug}`
  const headline = text(body.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1]) || title
  const description = truncate(text(body.match(/class="article-deck"[^>]*>([\s\S]*?)<\/p>/)?.[1]), 160)
  const author = text(body.match(/class="byline-name"[^>]*>([\s\S]*?)<\/div>/)?.[1]) || 'MacroCoats'
  const published = isoMonth(text(body.match(/class="article-date"[^>]*>([\s\S]*?)<\/span>/)?.[1]))
  if (!description) throw new Error(`No .article-deck found for ${slug}`)

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline,
    description,
    image: DEFAULT_IMAGE,
    url,
    mainEntityOfPage: url,
    ...(published && { datePublished: published }),
    author: author === 'MacroCoats'
      ? { '@type': 'Organization', name: 'MacroCoats Pvt. Ltd.', url: SITE }
      : { '@type': 'Person', name: author.replace(/^Mr\.\s*/, '') },
    publisher: {
      '@type': 'Organization',
      name: 'MacroCoats Pvt. Ltd.',
      url: SITE,
      logo: { '@type': 'ImageObject', url: `${SITE}/images/logo.png` },
    },
  }

  const t = attr(title)
  const d = attr(description)
  return template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*/, `$1${d}`)
    .replace(/(<link rel="canonical" href=")[^"]*/, `$1${url}`)
    .replace(/(<meta property="og:type" content=")[^"]*/, '$1article')
    .replace(/(<meta property="og:title" content=")[^"]*/, `$1${t}`)
    .replace(/(<meta property="og:description" content=")[^"]*/, `$1${d}`)
    .replace(/(<meta property="og:url" content=")[^"]*/, `$1${url}`)
    .replace('</head>', () => [
      `    <meta name="twitter:title" content="${t}">`,
      `    <meta name="twitter:description" content="${d}">`,
      `    <script type="application/ld+json">${JSON.stringify(ld).replace(/</g, '\\u003c')}</script>`,
      '  </head>',
    ].join('\n'))
}

function text(html) {
  if (!html) return ''
  return html.replace(/<!--[\s\S]*?-->/g, '').replace(/<[^>]+>/g, '')
    .replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim()
}

function truncate(s, max) {
  if (s.length <= max) return s
  return s.slice(0, s.lastIndexOf(' ', max - 1)).replace(/[,;:.\s—-]+$/, '') + '…'
}

function isoMonth(label) {
  const m = label.toLowerCase().match(/([a-z]+)\s+(\d{4})/)
  const month = m ? MONTHS.indexOf(m[1]) : -1
  return month < 0 ? null : `${m[2]}-${String(month + 1).padStart(2, '0')}-01`
}

function escapeHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function attr(s) {
  return escapeHtml(s).replace(/"/g, '&quot;')
}
