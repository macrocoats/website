const aluminium = [
  {
    code: 'UNIPASS-AL CC',
    name: 'Chrome Conversion',
    type: 'Aluminium — Chrome',
    spec: 'MIL-DTL-81706',
    desc: 'Chromate conversion coating for aluminium per MIL spec. Maximum corrosion resistance and paint adhesion for aerospace and defence applications.',
    tags: ['Cr⁶⁺', 'MIL-SPEC', 'AEROSPACE'],
    gradient: 'linear-gradient(135deg, #1E3A8A 0%, #0F1F3D 100%)',
  },
  {
    code: 'UNIPASS-AL NC',
    name: 'Non-Chrome Conversion',
    type: 'Aluminium — Chrome-Free',
    spec: 'REACH · RoHS · EU ELV',
    desc: 'Trivalent-chromium-free passivation for aluminium. Equivalent corrosion performance to chrome conversion without hexavalent chromium concerns.',
    tags: ['Cr-FREE', 'REACH', 'RoHS'],
    gradient: 'linear-gradient(135deg, #059669 0%, #065F46 100%)',
  },
  {
    code: 'UNIPASS-AL ST',
    name: 'Standard Conversion',
    type: 'Aluminium — Standard',
    spec: 'IS 6005 · light duty',
    desc: 'Cost-effective aluminium passivation for light industrial applications. Compatible with acrylic, polyurethane, and epoxy topcoat systems.',
    tags: ['Al', 'IS 6005', 'PAINT BASE'],
    gradient: 'linear-gradient(135deg, #5B2A86 0%, #4C1D95 100%)',
  },
];

const iron = [
  {
    code: 'UNIPASS-FE CH',
    name: 'Chrome Passivation',
    type: 'Iron / Steel — Chrome',
    spec: 'Cr⁶⁺ · 500h salt spray',
    desc: 'High-performance chrome passivation for phosphated steel. Seals the phosphate crystal structure and delivers 500+ hours ASTM B117 endurance.',
    tags: ['Cr⁶⁺', 'ASTM B117', '500h+'],
    gradient: 'linear-gradient(135deg, #1E3A8A 0%, #1D4ED8 100%)',
  },
  {
    code: 'UNIPASS-FE NC',
    name: 'Non-Chrome Passivation',
    type: 'Iron / Steel — Chrome-Free',
    spec: 'Cr-FREE · REACH',
    desc: 'Organic seal system that replaces hexavalent chrome on phosphated steel. Satisfies RoHS, REACH, and EU ELV directives with no performance compromise on tested systems.',
    tags: ['Cr-FREE', 'REACH', 'RoHS'],
    gradient: 'linear-gradient(135deg, #059669 0%, #064E3B 100%)',
  },
];

const auxiliaries = [
  {
    code: 'UNIKCONDITIONER',
    name: 'Bath Conditioner',
    spec: 'Sludge control',
    desc: 'Dispersant additive that keeps phosphate sludge in suspension, reducing dragout and extending bath drain intervals.',
    gradient: 'linear-gradient(135deg, #5B2A86 0%, #7C3AED 100%)',
  },
  {
    code: 'UNIKTONER',
    name: 'Crystal Toner',
    spec: 'Grain refiner',
    desc: 'Grain-refining additive for zinc phosphate. Reduces crystal size to below 4 µm for dense, uniform coatings and improved paint inter-adhesion.',
    gradient: 'linear-gradient(135deg, #7C3AED 0%, #5B2A86 100%)',
  },
  {
    code: 'UNIKGUARD RPI',
    name: 'Rust Preventive',
    spec: 'Inter-op storage',
    desc: 'Water-displacing rust preventive for inter-operation storage of phosphated components. Thin film, easily removed before final coating.',
    gradient: 'linear-gradient(135deg, #1E3A8A 0%, #5B2A86 100%)',
  },
];

function GlassCard({ p }) {
  return (
    <div className="cap-passiv__card">
      <div className="cap-passiv__card-head" style={{ background: p.gradient }}>
        <div className="cap-passiv__card-type">{p.type}</div>
        <div className="cap-passiv__card-code">{p.code}</div>
        <div className="cap-passiv__card-name">{p.name}</div>
        <div className="cap-passiv__card-spec">{p.spec}</div>
      </div>
      <div className="cap-passiv__card-body">
        <p className="cap-passiv__card-desc">{p.desc}</p>
        {p.tags && (
          <div className="cap-passiv__card-tags">
            {p.tags.map((t) => <span className="cap-passiv__tag" key={t}>{t}</span>)}
          </div>
        )}
      </div>
    </div>
  );
}

function AuxCard({ p }) {
  return (
    <div className="cap-passiv__aux-card">
      <div className="cap-passiv__aux-head" style={{ background: p.gradient }}>
        <div className="cap-passiv__aux-code">{p.code}</div>
        <div className="cap-passiv__aux-name">{p.name}</div>
        <div className="cap-passiv__aux-spec">{p.spec}</div>
      </div>
      <p className="cap-passiv__aux-desc">{p.desc}</p>
    </div>
  );
}

export default function CapPassivation() {
  return (
    <section className="cap-passiv">
      <div className="container">
        <div className="section-head">
          <div className="section-eyebrow cap-passiv__eyebrow">Passivation &amp; Sealing</div>
          <h2 className="section-title cap-passiv__title">
            Aluminium &amp; Steel: Protection <em>Without Compromise.</em>
          </h2>
        </div>

        <div className="cap-passiv__sub-eyebrow">Aluminium Passivation</div>
        <div className="cap-passiv__grid cap-passiv__grid--3">
          {aluminium.map((p) => <GlassCard key={p.code} p={p} />)}
        </div>

        <div className="cap-passiv__sub-eyebrow" style={{ marginTop: '48px' }}>Iron &amp; Steel Passivation</div>
        <div className="cap-passiv__grid cap-passiv__grid--2">
          {iron.map((p) => <GlassCard key={p.code} p={p} />)}
        </div>

        <div className="cap-passiv__divider" />

        <div className="section-head">
          <div className="section-eyebrow cap-passiv__eyebrow">Bath Auxiliaries</div>
          <h2 className="section-title cap-passiv__title" style={{ fontSize: 'var(--text-2xl)' }}>
            Keep Your Bath in <em>Specification.</em>
          </h2>
        </div>

        <div className="cap-passiv__aux-grid">
          {auxiliaries.map((p) => <AuxCard key={p.code} p={p} />)}
        </div>
      </div>
    </section>
  );
}
