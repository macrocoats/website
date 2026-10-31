import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const outputDir = path.resolve('public/images/responsive');
const images = [
  ['hero-surface-treatment-gear-v2.webp', [480, 960, 1440]],
  ['products-phosphating-parts.webp', [480, 960]],
  ['products-surface-prep.webp', [480, 960]],
  ['products-corrosion-protection.webp', [480, 960]],
];

await fs.mkdir(outputDir, { recursive: true });
await Promise.all(images.flatMap(([filename, widths]) => widths.map(async (width) => {
  const source = path.resolve('public/images', filename);
  const basename = filename.replace(/\.webp$/, '');
  const destination = path.join(outputDir, `${basename}-${width}.webp`);
  const [sourceStat, destinationStat] = await Promise.all([
    fs.stat(source),
    fs.stat(destination).catch(() => null),
  ]);
  if (destinationStat?.mtimeMs >= sourceStat.mtimeMs) return;
  await sharp(source).resize({ width, withoutEnlargement: true }).webp({ quality: 78 }).toFile(destination);
})));

console.log('Responsive image variants are ready.');
