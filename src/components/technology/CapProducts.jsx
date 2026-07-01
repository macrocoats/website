const phosphating = [
  {
    code: 'UNIKOAT ZN-NI',
    name: 'Zinc-Nickel Phosphating',
    spec: 'ASTM B117 · 500h+',
    desc: 'Highest salt-spray endurance in the range. Engineered for Tier-1 automotive OEM requirements where 500-hour ASTM B117 compliance is mandatory.',
    uses: ['Automotive body panels', 'Chassis & suspension', 'OEM export components'],
    tags: ['Zn · Ni', 'Cr-FREE', 'REACH'],
    gradient: 'linear-gradient(135deg, #1E3A8A 0%, #0F1F3D 100%)',
    wide: true,
  },
  {
    code: 'UNIKOAT LT450',
    name: 'Low-Temperature Zinc',
    spec: '45°C · energy save',
    desc: 'Full zinc phosphate performance at 45°C bath temperature. Reduces energy consumption 30–40% versus standard lines with no loss in coating weight.',
    uses: ['High-volume lines', 'Barrel operations', 'Heat-sensitive alloys'],
    tags: ['Zn²⁺', 'LOW-TEMP', 'ECO'],
    gradient: 'linear-gradient(135deg, #5B2A86 0%, #1E3A8A 100%)',
    wide: true,
  },
  {
    code: 'UNIKOAT ZP-3',
    name: 'Standard Zinc Phosphate',
    spec: 'IS 6005 · paint base',
    desc: 'Workhorse zinc phosphate for pre-paint and pre-powder coat on mild steel. Consistent 1.8–3.2 g/m² coating weight across varied water hardness.',
    uses: ['General fabrication', 'Pre-paint lines'],
    tags: ['Zn²⁺', 'IS 6005'],
    gradient: 'linear-gradient(135deg, #1E3A8A 0%, #0F2D6B 100%)',
    wide: false,
  },
  {
    code: 'UNIKOAT MN-70',
    name: 'Manganese Phosphate',
    spec: 'Anti-wear · 1000h',
    desc: 'Dense manganese crystal for wear-resistant applications. Break-in retention for gears, pistons, and high-torque fasteners.',
    uses: ['Gears & pistons', 'Fastener barrels', 'Defence hardware'],
    tags: ['Mn²⁺', 'ANTI-WEAR'],
    gradient: 'linear-gradient(135deg, #059669 0%, #065F46 100%)',
    wide: false,
  },
  {
    code: 'UNIKOAT MN-LS',
    name: 'Mn Low-Sludge',
    spec: 'Sludge −35%',
    desc: 'Manganese formulation with advanced sludge-suppression chemistry. Extends bath life and reduces downtime on continuous production lines.',
    uses: ['High-volume Mn lines', 'Rail & defence'],
    tags: ['Mn²⁺', 'LOW-SLUDGE'],
    gradient: 'linear-gradient(135deg, #047857 0%, #064E3B 100%)',
    wide: false,
  },
  {
    code: 'UNIKOAT FE-3',
    name: 'Iron Phosphate',
    spec: 'pH 4.5–5.5 · fast',
    desc: 'Single-stage iron phosphate for light-duty pre-paint applications. Short cycle time and minimal maintenance make it suitable for manual spray operations.',
    uses: ['Light fabrication', 'Powder coat prep', 'Appliance panels'],
    tags: ['Fe²⁺', 'FAST-CYCLE'],
    gradient: 'linear-gradient(135deg, #1F2937 0%, #374151 100%)',
    wide: false,
  },
  {
    code: 'UNIKOAT FE-HT',
    name: 'Iron High-Throw',
    spec: 'Complex profiles',
    desc: 'High-throw iron phosphate for recessed profiles and welded assemblies. Penetrates weld seams and geometry that standard spray lines miss.',
    uses: ['Welded frames', 'Tubular assemblies', 'Motor housings'],
    tags: ['Fe²⁺', 'HIGH-THROW'],
    gradient: 'linear-gradient(135deg, #374151 0%, #1F2937 100%)',
    wide: false,
  },
];

const surfacePrep = [
  {
    code: 'UNICLEAN AD-7',
    name: 'Alkaline Degreaser',
    spec: 'pH 12.4 · 65°C',
    desc: 'Heavy-duty alkaline degreaser for stamping oils, coolant residues, and metallic fines on steel and CI. Free-rinse formulation.',
    tags: ['ALKALINE', 'STEEL', 'CI'],
    gradient: 'linear-gradient(135deg, #1E3A8A 0%, #1E40AF 100%)',
  },
  {
    code: 'UNICLEAN AD-3L',
    name: 'Low-Foam Degreaser',
    spec: 'pH 11.8 · spray line',
    desc: 'Low-foam alkaline degreaser formulated for high-pressure spray wash systems. Suppresses foam without compromising degreasing efficiency.',
    tags: ['LOW-FOAM', 'SPRAY'],
    gradient: 'linear-gradient(135deg, #1D4ED8 0%, #1E3A8A 100%)',
  },
  {
    code: 'UNIETCH AC-5',
    name: 'Acid Pickle',
    spec: 'HCl-based · inhibited',
    desc: 'Inhibited hydrochloric acid pickle for oxide and mill-scale removal. Over-etch inhibitor minimises base metal attack on thin-gauge stampings.',
    tags: ['ACID', 'INHIBITED', 'HCl'],
    gradient: 'linear-gradient(135deg, #5B2A86 0%, #4C1D95 100%)',
  },
  {
    code: 'UNIACT NR-2',
    name: 'Activator — Zn / Mn',
    spec: 'Ti-colloid · 60 sec',
    desc: 'Titanium colloidal activator that nucleates phosphate crystal growth to 1–2 µm. Dramatically improves coating weight uniformity on deep-drawn stampings.',
    tags: ['Ti-COLLOID', 'ACTIVATION'],
    gradient: 'linear-gradient(135deg, #059669 0%, #065F46 100%)',
  },
  {
    code: 'UNIACT NR-FE',
    name: 'Activator — Fe',
    spec: 'Iron-specific',
    desc: 'Iron-specific activation bath for iron phosphate lines. Removes residual alkalinity from the degreaser stage and conditions the surface for uniform Fe conversion.',
    tags: ['Fe-SPECIFIC'],
    gradient: 'linear-gradient(135deg, #065F46 0%, #059669 100%)',
  },
  {
    code: 'UNIRINSE CR-FREE',
    name: 'Chrome-Free Rinse Aid',
    spec: 'REACH · RoHS',
    desc: 'Final rinse additive that seals the phosphate crystal and extends salt-spray performance without hexavalent chromium. EU ELV compliant.',
    tags: ['Cr-FREE', 'REACH', 'RoHS'],
    gradient: 'linear-gradient(135deg, #1F2937 0%, #374151 100%)',
  },
];

function ProductCard({ p, wide }) {
  return (
    <div className={`cap-products__card${wide ? ' cap-products__card--wide' : ''}`}>
      <div className="cap-products__card-head" style={{ background: p.gradient }}>
        <div className="cap-products__card-code">{p.code}</div>
        <div className="cap-products__card-name">{p.name}</div>
        <div className="cap-products__card-spec">{p.spec}</div>
      </div>
      <div className="cap-products__card-body">
        <p className="cap-products__card-desc">{p.desc}</p>
        {p.uses && (
          <ul className="cap-products__card-uses">
            {p.uses.map((u) => <li key={u}>{u}</li>)}
          </ul>
        )}
        <div className="cap-products__card-tags">
          {p.tags.map((t) => <span className="cap-products__tag" key={t}>{t}</span>)}
        </div>
      </div>
    </div>
  );
}

export default function CapProducts() {
  const flagship = phosphating.filter((p) => p.wide);
  const standard = phosphating.filter((p) => !p.wide);

  return (
    <section className="cap-products">
      <div className="container">

        {/* Sub-section A — Phosphating */}
        <div className="section-head">
          <div className="section-eyebrow cap-products__eyebrow">Product Portfolio — Phosphating</div>
          <h2 className="section-title cap-products__title">
            Phosphating: Foundation of <em>Every Surface.</em>
          </h2>
        </div>

        <div className="cap-products__grid cap-products__grid--flagship">
          {flagship.map((p) => <ProductCard key={p.code} p={p} wide />)}
        </div>

        <div className="cap-products__grid cap-products__grid--standard">
          {standard.map((p) => <ProductCard key={p.code} p={p} />)}
        </div>

        {/* Divider */}
        <div className="cap-products__rule" />

        {/* Sub-section B — Surface Prep */}
        <div className="section-head">
          <div className="section-eyebrow cap-products__eyebrow">Product Portfolio — Surface Preparation</div>
          <h2 className="section-title cap-products__title">
            Clean Surfaces Begin With <em>Smart Degreasing.</em>
          </h2>
        </div>

        <div className="cap-products__grid cap-products__grid--prep">
          {surfacePrep.map((p) => <ProductCard key={p.code} p={p} />)}
        </div>

      </div>
    </section>
  );
}
