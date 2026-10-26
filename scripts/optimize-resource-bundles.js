import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const resourceFiles = [
  'public/resources/brochure.html',
  'public/resources/macrocoats-corporate-brochure.html',
  'public/resources/macrocoats-product-portfolio.html',
]

const manifestPattern = /(<script type="__bundler\/manifest">\s*)([\s\S]*?)(\s*<\/script>)/

for (const relativePath of resourceFiles) {
  const absolutePath = path.resolve(relativePath)
  const source = await fs.readFile(absolutePath, 'utf8')
  const match = source.match(manifestPattern)

  if (!match) {
    throw new Error(`No embedded resource manifest found in ${relativePath}`)
  }

  const manifest = JSON.parse(match[2])
  let convertedCount = 0

  for (const resource of Object.values(manifest)) {
    if (resource.compressed || !/^image\/(png|jpe?g)$/i.test(resource.mime)) continue

    const original = Buffer.from(resource.data, 'base64')
    const optimized = await sharp(original)
      .webp({ quality: 82, alphaQuality: 90, effort: 6, smartSubsample: true })
      .toBuffer()

    if (optimized.length >= original.length) continue

    resource.mime = 'image/webp'
    resource.data = optimized.toString('base64')
    convertedCount += 1
  }

  const optimizedSource = source.replace(
    manifestPattern,
    (_, open, _manifest, close) => `${open}${JSON.stringify(manifest)}${close}`,
  )

  await fs.writeFile(absolutePath, optimizedSource)

  const savedBytes = Buffer.byteLength(source) - Buffer.byteLength(optimizedSource)
  console.log(`${relativePath}: converted ${convertedCount} images, saved ${(savedBytes / 1024 / 1024).toFixed(2)} MB`)
}
