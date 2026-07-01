const logos = [
  { src: '/images/logo-indian-railways.svg', alt: 'Indian Railways' },
  { src: '/images/logo-lnt.svg',             alt: 'Larsen & Toubro' },
  { src: '/images/logo-tvs.webp',            alt: 'TVS Group' },
  { src: '/images/logo-rane.webp',           alt: 'Rane Group' },
  { src: '/images/logo-chemplast.webp',      alt: 'Chemplast Sanmar' },
  { src: '/images/logo-tube-investments.webp', alt: 'Tube Investments' },
];

const reasons = [
  {
    title: 'Formulation Intelligence',
    desc: 'Every batch is co-developed with your process engineer. We analyse your incoming water, steel grade, and downstream paint system before recommending chemistry.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4"/>
        <path d="M12 3V6 M12 18V21 M3 12H6 M18 12H21"/>
        <path d="M5.5 5.5L7.5 7.5 M16.5 16.5L18.5 18.5 M5.5 18.5L7.5 16.5 M16.5 7.5L18.5 5.5"/>
      </svg>
    ),
  },
  {
    title: 'Environmental Compliance',
    desc: 'Chrome-free passivation, REACH-registered concentrates, and full RoHS/EU ELV certification built in — not added as an afterthought.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3 C6 7 4 12 6 17 A8 8 0 0 0 18 17 C20 12 18 7 12 3 Z"/>
        <path d="M12 3 C12 9 10 14 9 17" opacity="0.5"/>
        <path d="M12 3 C12 9 14 14 15 17" opacity="0.5"/>
      </svg>
    ),
  },
  {
    title: 'Extended Bath Life',
    desc: 'Proprietary sludge suppressants and in-bath buffering technology extend bath life 2–3× versus standard concentrates, reducing drain-and-refill downtime.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9"/>
        <polyline points="12 6 12 12 15.5 15.5"/>
      </svg>
    ),
  },
  {
    title: 'Resident Process Chemists',
    desc: 'We do not have a helpline. We have on-site process chemists who validate your bath at startup, quarterly, and whenever your steel supplier changes.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3H15L16 9 C16 11 14 12 12 12 C10 12 8 11 8 9 Z"/>
        <path d="M8 9 L5 20 M16 9 L19 20 M5 20 H19" opacity="0.6"/>
        <circle cx="12" cy="7" r="1.2" fill="currentColor" stroke="none" opacity="0.5"/>
      </svg>
    ),
  },
];

export default function CapWhy() {
  return (
    <section className="cap-why">
      <div className="container">

        {/* Client logos */}
        <div className="cap-why__logo-band">
          <div className="cap-why__logo-label">Trusted by India's leading industrials</div>
          <div className="cap-why__logos">
            {logos.map((l) => (
              <div className="cap-why__logo-cell" key={l.alt}>
                <img src={l.src} alt={l.alt} className="cap-why__logo" loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        <div className="cap-why__divider" />

        {/* Why section */}
        <div className="section-head">
          <div className="section-eyebrow cap-why__eyebrow">Why Choose MacroCoats</div>
          <h2 className="section-title cap-why__title">
            Four Reasons Engineers <em>Specify Us.</em>
          </h2>
        </div>

        <div className="cap-why__grid">
          {reasons.map((r) => (
            <div className="cap-why__card" key={r.title}>
              <div className="cap-why__card-icon">{r.icon}</div>
              <h3 className="cap-why__card-title">{r.title}</h3>
              <p className="cap-why__card-desc">{r.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
