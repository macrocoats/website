const checklist = [
  {
    label: 'Enhanced Corrosion',
    sub: 'Protection',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    label: 'Improved Performance',
    sub: '& Durability',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06A1.65 1.65 0 004.6 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06A1.65 1.65 0 009 4.6a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
      </svg>
    ),
  },
  {
    label: 'Environment Friendly',
    sub: 'Chemistry',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 019.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    ),
  },
  {
    label: 'Consistent Quality',
    sub: 'Assurance',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 2v6L4 20a1 1 0 001 2h14a1 1 0 001-2L15 8V2" />
        <path d="M9 2h6" />
        <path d="M8 15h8" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-media">
        <img
          className="hero-media-img"
          src="/images/hero-cleaning-zinc-phosphate-stages.webp"
          alt="Precision metal gear showing surface treatment stages from dirty raw steel to cleaned bare metal and then zinc phosphate coated finish"
          width="1671"
          height="941"
          loading="eager"
        />
        <video
          className="hero-media-video"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/images/hero-cleaning-zinc-phosphate-stages.webp"
          aria-hidden="true"
        >
          <source src="/videos/coating.mp4" type="video/mp4" />
        </video>
        <div className="hero-scrim" aria-hidden="true"></div>

        <div className="hero-overlay">
          <div className="hero-overlay-inner">
            <h1 className="hero-h1">Superior Chemistry.<br /><span className="hero-h1-accent">Stronger Protection.</span></h1>
            <p className="hero-sub">Complete surface treatment solutions for industries that build the world — phosphating, corrosion protection, and IoT-monitored process chemistry, engineered since 1993.</p>

            <div className="hero-divider">
              <span className="hero-divider-line"></span>
              <span>30+ Years of Engineering Excellence</span>
              <span className="hero-divider-line"></span>
            </div>

            <div className="hero-cta-row">
              <a href="#contact" className="hero-cta-solid">
                Request a Quote
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#products" className="hero-cta-outline">
                Explore Products
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-trust-strip">
        <ul className="hero-checklist hero-checklist--row">
          {checklist.map((item) => (
            <li key={item.label}>
              <span className="hero-check-icon">{item.icon}</span>
              <span>{item.label}<br />{item.sub}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
