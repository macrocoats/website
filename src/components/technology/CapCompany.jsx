const stats = [
  { num: '1993', label: 'Established' },
  { num: '30+',  label: 'Years of R&D' },
  { num: '500+', label: 'Industrial Clients' },
  { num: '100%', label: 'Custom Formulation' },
];

const pillars = [
  {
    label: 'Water-Smart Chemistry',
    desc: 'Every molecule matched to your incoming water hardness, chloride load, and dissolved iron. Real process intelligence, not guesswork.',
  },
  {
    label: 'Real-Time Confirmation',
    desc: 'Salt spray validation, paint adhesion testing, crystal microscopy. Every batch certified before dispatch.',
  },
  {
    label: 'Global Standards Built In',
    desc: 'REACH-registered, RoHS-compliant, EU ELV-certified, IS 6005:2011, ISO 9001:2015, BIS-approved. Chrome-free options available.',
  },
];

const industries = [
  {
    name: 'Automotive',
    meta: 'Zn · Fe',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 16 V11 L6 8 H18 L21 11 V16 H18 Q18 18 16 18 Q14 18 14 16 H10 Q10 18 8 18 Q6 18 6 16 Z"/>
        <line x1="6" y1="11" x2="18" y2="11" opacity="0.5"/>
      </svg>
    ),
  },
  {
    name: 'Fasteners & Hardware',
    meta: 'Zn · Mn',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="8" r="3"/><line x1="8" y1="11" x2="8" y2="20"/>
        <path d="M5 14 H11" opacity="0.5"/>
        <circle cx="17" cy="16" r="2.5"/><line x1="17" y1="13.5" x2="17" y2="6"/>
      </svg>
    ),
  },
  {
    name: 'Heavy Engineering',
    meta: 'Mn · Fe',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4"/>
        <path d="M12 3V6 M12 18V21 M3 12H6 M18 12H21 M5.5 5.5L7.5 7.5 M16.5 16.5L18.5 18.5 M5.5 18.5L7.5 16.5 M16.5 7.5L18.5 5.5"/>
      </svg>
    ),
  },
  {
    name: 'Rail & Defence',
    meta: 'Fe · Zn',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 6 L21 6 L18 12 L21 18 L3 18 L6 12 Z"/>
        <line x1="6" y1="12" x2="18" y2="12" opacity="0.5"/>
      </svg>
    ),
  },
];

export default function CapCompany() {
  return (
    <section className="cap-company">
      <div className="container">

        {/* Stats band */}
        <div className="cap-company__stats">
          {stats.map((s) => (
            <div className="cap-company__stat" key={s.label}>
              <div className="cap-company__stat-num">{s.num}</div>
              <div className="cap-company__stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Approach copy */}
        <div className="cap-company__approach">
          <div className="cap-company__approach-left">
            <div className="section-eyebrow cap-company__eyebrow">The MacroCoats Approach</div>
            <h2 className="cap-company__heading">
              We Begin With<br/><em>Your Constraints.</em>
            </h2>
          </div>
          <div className="cap-company__approach-right">
            <p className="cap-company__lead">
              Most suppliers deliver a concentrate and leave. MacroCoats engineers the full pre-treatment system — from your first rinse tank to your final passivation stage.
            </p>
            <p className="cap-company__body">
              The result holds specification across every shift, every operator, and every season. Not because your operators are more attentive — because the system doesn't wait for them to act.
            </p>
          </div>
        </div>

        {/* Pillars */}
        <div className="cap-company__pillars">
          {pillars.map((p) => (
            <div className="cap-company__pillar" key={p.label}>
              <div className="cap-company__pillar-label">{p.label}</div>
              <p className="cap-company__pillar-desc">{p.desc}</p>
            </div>
          ))}
        </div>

      </div>

      {/* Industries strip — full width dark */}
      <div className="cap-company__ind-strip">
        <div className="container">
          <div className="cap-company__ind-inner">
            <div className="cap-company__ind-heading">Industries Served</div>
            {industries.map((ind) => (
              <div className="cap-company__ind-cell" key={ind.name}>
                <div className="cap-company__ind-icon">{ind.icon}</div>
                <div>
                  <div className="cap-company__ind-name">{ind.name}</div>
                  <div className="cap-company__ind-meta">{ind.meta}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
