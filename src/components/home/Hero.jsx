const stats = [
  { value: '1993', label: 'Established' },
  { value: '30', suffix: '+', label: 'Years R&D' },
  { value: '500', suffix: '+', label: 'Industrial clients' },
  { value: '100', suffix: '%', label: 'Custom formulation' },
];

export default function Hero() {
  return (
    <section className="v3-hero" aria-labelledby="home-title">
      <img
        className="v3-hero__image"
        src="/images/hero-surface-treatment-gear-v2.webp"
        alt="Industrial gears shown before, during, and after surface treatment"
        width="1916"
        height="821"
        loading="eager"
        fetchPriority="high"
      />
      <div className="v3-hero__scrim" aria-hidden="true" />
      <div className="v3-hero__rail" aria-hidden="true" />
      <div className="v3-hero__formula" aria-hidden="true">Zn₃(PO₄)₂ · FePO₄ · Mn₃(PO₄)₂</div>
      <div className="v3-hero__content">
        <div className="v3-kicker"><span />Capabilities overview · 2026</div>
        <div className="v3-hero__copy">
          <h1 id="home-title">Surface Treatment Is <span>a System, Not a Product.</span></h1>
          <p>Chemistry engineered to your water profile, throughput, and compliance requirements.</p>
          <div className="v3-hero__actions">
            <a className="v3-button v3-button--light" href="#contact">Request a Quote <span aria-hidden="true">→</span></a>
            <a className="v3-button v3-button--outline" href="#products">Explore the Portfolio <span aria-hidden="true">→</span></a>
          </div>
        </div>
        <div className="v3-hero__meta">
          <span>Macro Coats P Ltd · Formerly Technical Electroless Chemical Co.</span>
          <span>Est. 1993 · Chennai, India</span>
        </div>
      </div>
      <div className="v3-stats" aria-label="Company facts">
        {stats.map((stat) => (
          <div className="v3-stat" key={stat.label}>
            <div>{stat.value}<sup>{stat.suffix}</sup></div>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
