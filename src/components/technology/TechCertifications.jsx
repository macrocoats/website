const certs = [
  {
    name: 'IS 6005 : 2011',
    sub: 'PHOSPHATING SPEC',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="3" width="20" height="26" rx="2" />
        <path d="M11 10h10M11 15h10M11 20h6" />
      </svg>
    ),
  },
  {
    name: 'ISO 9001 : 2015',
    sub: 'QUALITY MGMT',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="16" r="12" />
        <path d="M11 16l4 4 6-7" />
      </svg>
    ),
  },
  {
    name: 'BIS Compliance',
    sub: 'BUREAU OF STANDARDS',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="16,3 28,9 28,23 16,29 4,23 4,9" />
        <path d="M12 16l3 3 5-5" />
      </svg>
    ),
  },
  {
    name: 'RoHS Compliant',
    sub: 'HAZARDOUS SUBSTANCES',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 3l2.5 8h8l-6.5 5 2.5 8L16 19l-6.5 5 2.5-8L5.5 11h8z" />
      </svg>
    ),
  },
  {
    name: 'Cr(VI)-Free',
    sub: 'CHROMIUM-FREE',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4l9 4.5V17c0 5.5-4 9.5-9 11-5-1.5-9-5.5-9-11V8.5L16 4z" />
        <path d="M12 16l3 3 6-6" />
      </svg>
    ),
  },
  {
    name: 'MSDS Compliant',
    sub: 'SAFETY DATA',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="16" r="12" />
        <path d="M16 11v5" strokeWidth="2" />
        <circle cx="16" cy="20" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function TechCertifications() {
  return (
    <section className="tech-certs">
      <div className="container">
        <div className="section-head">
          <div className="section-eyebrow tech-certs__eyebrow">QUALITY &amp; COMPLIANCE</div>
          <h2 className="section-title tech-certs__title">
            Chemistry you can certify. Processes built to <em>standard.</em>
          </h2>
        </div>
        <div className="tech-certs__badges">
          {certs.map((c) => (
            <div className="tech-certs__badge" key={c.name}>
              <div className="tech-certs__badge-icon">{c.icon}</div>
              <div className="tech-certs__badge-name">{c.name}</div>
              <div className="tech-certs__badge-sub">{c.sub}</div>
              <div className="tech-certs__badge-bar"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
