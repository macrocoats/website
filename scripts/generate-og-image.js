import sharp from 'sharp';
import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, '../public/og-image.png');

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <!-- Background -->
  <rect width="1200" height="630" fill="#0D1B2A"/>

  <!-- Subtle diagonal grid lines -->
  <g opacity="0.04" stroke="#C9A84C" stroke-width="1">
    <line x1="0" y1="0" x2="1200" y2="1200"/>
    <line x1="200" y1="0" x2="1200" y2="1000"/>
    <line x1="400" y1="0" x2="1200" y2="800"/>
    <line x1="600" y1="0" x2="1200" y2="600"/>
    <line x1="800" y1="0" x2="1200" y2="400"/>
    <line x1="1000" y1="0" x2="1200" y2="200"/>
    <line x1="0" y1="200" x2="1000" y2="1200"/>
    <line x1="0" y1="400" x2="800" y2="1200"/>
  </g>

  <!-- Gold left accent bar -->
  <rect x="0" y="0" width="6" height="630" fill="#C9A84C"/>

  <!-- Gold top-right corner accent -->
  <rect x="1100" y="0" width="100" height="4" fill="#C9A84C" opacity="0.4"/>
  <rect x="1196" y="0" width="4" height="120" fill="#C9A84C" opacity="0.4"/>

  <!-- Logo mark -->
  <circle cx="110" cy="136" r="46" fill="none" stroke="#C9A84C" stroke-width="1.5"/>
  <text x="110" y="148" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="30" fill="#C9A84C">MC</text>

  <!-- Company name -->
  <text x="180" y="158" font-family="Georgia, 'Times New Roman', serif" font-weight="700" font-size="64" fill="#FFFFFF" letter-spacing="-1">MacroCoats</text>

  <!-- Gold dot separator -->
  <circle cx="182" cy="198" r="3" fill="#C9A84C"/>

  <!-- Tagline -->
  <text x="196" y="206" font-family="Arial, Helvetica, sans-serif" font-weight="400" font-size="17" fill="#C9A84C" letter-spacing="4">PROCESS-ENGINEERED CHEMISTRY</text>

  <!-- Divider -->
  <line x1="80" y1="252" x2="1120" y2="252" stroke="#C9A84C" stroke-width="0.5" opacity="0.25"/>

  <!-- Descriptor line 1 -->
  <text x="80" y="316" font-family="Arial, Helvetica, sans-serif" font-size="28" fill="#8A9BB0">Industrial Phosphating &amp; Surface Treatment</text>

  <!-- Descriptor line 2 -->
  <text x="80" y="362" font-family="Arial, Helvetica, sans-serif" font-size="24" fill="#6B7F94">Corrosion Protection  ·  IoT Bath Monitoring  ·  Custom Formulation</text>

  <!-- Three stat boxes -->
  <g transform="translate(80, 420)">
    <!-- Box 1 -->
    <rect width="220" height="80" rx="8" fill="#C9A84C" fill-opacity="0.08" stroke="#C9A84C" stroke-width="0.8" stroke-opacity="0.3"/>
    <text x="110" y="30" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="26" fill="#C9A84C">30+</text>
    <text x="110" y="56" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="13" fill="#8A9BB0">Years Experience</text>

    <!-- Box 2 -->
    <rect x="240" width="220" height="80" rx="8" fill="#C9A84C" fill-opacity="0.08" stroke="#C9A84C" stroke-width="0.8" stroke-opacity="0.3"/>
    <text x="350" y="30" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="26" fill="#C9A84C">500h+</text>
    <text x="350" y="56" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="13" fill="#8A9BB0">Salt Spray Tested</text>

    <!-- Box 3 -->
    <rect x="480" width="220" height="80" rx="8" fill="#C9A84C" fill-opacity="0.08" stroke="#C9A84C" stroke-width="0.8" stroke-opacity="0.3"/>
    <text x="590" y="30" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="26" fill="#C9A84C">ISO</text>
    <text x="590" y="56" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="13" fill="#8A9BB0">9001:2015 Certified</text>
  </g>

  <!-- Bottom divider -->
  <line x1="80" y1="536" x2="1120" y2="536" stroke="#C9A84C" stroke-width="0.5" opacity="0.2"/>

  <!-- URL -->
  <text x="80" y="574" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="20" fill="#C9A84C">macrocoats.in</text>

  <!-- Location -->
  <text x="1120" y="574" text-anchor="end" font-family="Arial, Helvetica, sans-serif" font-size="16" fill="#6B7F94">Chennai, India  ·  Est. 1993</text>
</svg>
`.trim();

const buf = Buffer.from(svg);

await sharp(buf)
  .png({ quality: 90, compressionLevel: 9 })
  .resize(1200, 630)
  .toFile(OUT);

console.log(`OG image written to ${OUT}`);
