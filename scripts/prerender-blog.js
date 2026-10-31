// Prerenders every React route into static HTML after `vite build`,
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
  server: { middlewareMode: true, hmr: false },
  appType: 'custom',
  // Load react-router's ESM build (its "module-sync" export) like Node does natively.
  ssr: { resolve: { externalConditions: ['module-sync'] } },
})

try {
  const { render, ARTICLE_MAP, PROCESS_AUDIT_TITLE, PRODUCTS } = await vite.ssrLoadModule('/src/entry-server.jsx')
  const templatePath = path.join(OUT_DIR, 'blog/index.html')
  const template = await fs.readFile(templatePath, 'utf8')

  await fs.writeFile(templatePath, withBody(withPageHead(template, {
    title: 'Technical Blog — Surface Treatment & Process Chemistry | MacroCoats',
    description: 'Technical articles on phosphating, surface preparation, corrosion protection, compliance and IoT bath monitoring for industrial manufacturers.',
    url: `${SITE}/blog/`,
  }), await render('/blog/')))

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
    schema: {
      '@context': 'https://schema.org', '@type': 'Service',
      name: 'Industrial Surface Treatment Process Chemistry Audit',
      description: 'Plant visit, bath-log review and written process recommendations for industrial phosphating and metal surface treatment lines.',
      provider: { '@type': 'Organization', '@id': `${SITE}/#organization`, name: 'MacroCoats Pvt. Ltd.' },
      areaServed: { '@type': 'Country', name: 'India' },
      url: `${SITE}/process-audit`,
    },
  }), await render('/process-audit')))

  const staticPages = [
    {
      path: '/products',
      title: 'Industrial Surface Treatment Chemicals | MacroCoats',
      description: 'Explore MacroCoats phosphating, degreasing, aluminium and ferrous passivation, rust-preventive and process-control chemicals for industrial metal finishing.',
      image: `${SITE}/images/products-phosphating-parts.webp`,
    },
    {
      path: '/technology',
      title: 'Surface Treatment Technology & Process Capabilities | MacroCoats',
      description: 'See MacroCoats capabilities in metal pretreatment chemistry, phosphating, passivation, corrosion protection, line audits and IoT bath monitoring.',
      image: `${SITE}/images/hero-surface-treatment-plant.webp`,
    },
  ]
  for (const page of staticPages) {
    await writeRoute(page.path, withBody(withPageHead(template, {
      ...page,
      url: `${SITE}${page.path}`,
    }), await render(page.path)))
  }

  for (const product of PRODUCTS) {
    const route = `/products/${product.slug}`
    const image = productImage(product.slug)
    const description = truncate(product.description, 160)
    const url = `${SITE}${route}`
    const schema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Product', '@id': `${url}#product`, name: `${product.code} ${product.name}`,
          description: product.description, image, url, category: product.familyLabel,
          brand: { '@type': 'Brand', name: 'MacroCoats' },
          manufacturer: { '@type': 'Organization', '@id': `${SITE}/#organization` },
          additionalProperty: product.params.map(({ label, value }) => ({ '@type': 'PropertyValue', name: label, value })),
        },
        {
          '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`,
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
            { '@type': 'ListItem', position: 2, name: 'Products', item: `${SITE}/products` },
            { '@type': 'ListItem', position: 3, name: product.code, item: url },
          ],
        },
      ],
    }
    const head = withPageHead(template, {
      title: `${product.code} ${product.name} | MacroCoats`, description, url, image, schema,
    })
    await writeRoute(route, withBody(head, await render(route)))
  }

  const notFound = withBody(withPageHead(template, {
    title: 'Page Not Found | MacroCoats',
    description: 'The requested MacroCoats page could not be found.',
    url: `${SITE}/404`,
  }).replace(/(<meta name="robots" content=")[^"]*/, '$1noindex, follow'), await render('/404'))
  await fs.writeFile(path.join(OUT_DIR, '404.html'), notFound)

  console.log(`Prerendered ${Object.keys(ARTICLE_MAP).length} articles, ${PRODUCTS.length} products, core routes and 404 into ${OUT_DIR}/`)

  async function writeRoute(route, html) {
    const file = path.join(OUT_DIR, route.replace(/^\//, ''), 'index.html')
    await fs.mkdir(path.dirname(file), { recursive: true })
    await fs.writeFile(file, html)
  }
} finally {
  await vite.close()
}

function withBody(template, body) {
  if (!template.includes('<div id="root"></div>')) throw new Error('No empty #root in blog template')
  return template.replace('<div id="root"></div>', () => `<div id="root">${body}</div>`)
}

function withPageHead(template, { title, description, url, image = DEFAULT_IMAGE, schema }) {
  const t = attr(title)
  const d = attr(description)
  return template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*/, `$1${d}`)
    .replace(/(<link rel="canonical" href=")[^"]*/, `$1${url}`)
    .replace(/(<meta property="og:title" content=")[^"]*/, `$1${t}`)
    .replace(/(<meta property="og:description" content=")[^"]*/, `$1${d}`)
    .replace(/(<meta property="og:url" content=")[^"]*/, `$1${url}`)
    .replace(/(<meta property="og:image" content=")[^"]*/, `$1${image}`)
    .replace('</head>', () => [
      `    <meta name="twitter:title" content="${t}">`,
      `    <meta name="twitter:description" content="${d}">`,
      `    <meta name="twitter:image" content="${attr(image)}">`,
      ...(schema ? [`    <script type="application/ld+json">${JSON.stringify(schema).replace(/</g, '\\u003c')}</script>`] : []),
      '  </head>',
    ].join('\n'))
}

function productImage(slug) {
  const corrosion = ['unipass-al-chrome', 'unipass-al-non-chrome', 'unipass-al', 'unipass-fe-chrome', 'unipass-fe-non-chrome', 'unikguard-rpi']
  const preparation = ['unklean-al', 'unisolve-h3', 'unisolve', 'uniklean-sp', 'uniklean-3-in-1', 'unikstrip']
  if (corrosion.includes(slug)) return `${SITE}/images/products-corrosion-protection.webp`
  if (preparation.includes(slug)) return `${SITE}/images/products-surface-prep.webp`
  return `${SITE}/images/products-phosphating-parts.webp`
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
