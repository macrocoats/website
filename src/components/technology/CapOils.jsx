const oils = [
  {
    name: 'Rust Preventive Oils',
    desc: 'Temporary corrosion protection for stored and transported components.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3 Q6 11 6 15 A6 6 0 0 0 18 15 Q18 11 12 3 Z"/>
      </svg>
    ),
  },
  {
    name: 'Industrial Lubricants',
    desc: 'High-performance lubrication for bearings, gears, and sliding surfaces.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="6"/>
        <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none"/>
        <line x1="12" y1="3" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="21"/>
        <line x1="3" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="21" y2="12"/>
      </svg>
    ),
  },
  {
    name: 'Duncan Oil',
    desc: 'Specialty oil for electrical transformer maintenance and insulation.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="4" width="12" height="16" rx="1"/>
        <line x1="6" y1="9" x2="18" y2="9"/>
        <path d="M9 14 H15 M9 17 H13" opacity="0.6"/>
      </svg>
    ),
  },
  {
    name: 'Coolants',
    desc: 'Water-based and semi-synthetic coolants for machining and grinding.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 14 Q6 12 9 14 T15 14 T21 14"/>
        <path d="M3 18 Q6 16 9 18 T15 18 T21 18" opacity="0.6"/>
        <path d="M12 4 V11" opacity="0.6"/>
        <circle cx="12" cy="6" r="1.2" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    name: 'Cutting Oils',
    desc: 'Neat and soluble cutting oils for turning, milling, drilling, and tapping.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4 L20 20"/>
        <path d="M16 4 L20 8 L16 12" opacity="0.7"/>
        <path d="M8 12 L4 16 L8 20" opacity="0.7"/>
      </svg>
    ),
  },
  {
    name: 'Dewatering Fluids',
    desc: 'Displaces moisture from metal surfaces to prevent flash rust post-cleaning.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 4 Q4 9 4 13 A4 4 0 0 0 12 13 Q12 9 8 4 Z"/>
        <path d="M16 18 L20 14 M16 14 L20 18" opacity="0.7"/>
      </svg>
    ),
  },
];

export default function CapOils() {
  return (
    <section className="cap-oils">
      <div className="container">
        <div className="section-head">
          <div className="section-eyebrow cap-oils__eyebrow">Extended Portfolio</div>
          <h2 className="section-title cap-oils__title">
            Industrial Oils &amp; <em>Process Fluids</em>
          </h2>
        </div>

        <div className="cap-oils__image-wrap">
          <img
            src="/brochure/oils-process-fluids.jpg"
            alt="Industrial process oils and fluids"
            className="cap-oils__image"
            loading="lazy"
          />
          <div className="cap-oils__image-caption">
            Six categories · Industrial grade · Formulated for Indian conditions
          </div>
        </div>

        <div className="cap-oils__grid">
          {oils.map((oil) => (
            <div className="cap-oils__cell" key={oil.name}>
              <div className="cap-oils__icon">{oil.icon}</div>
              <div>
                <div className="cap-oils__name">{oil.name}</div>
                <p className="cap-oils__desc">{oil.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
