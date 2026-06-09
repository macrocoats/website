export default function Leadership() {
  return (
    <section className="leadership">
      <div className="container">
        <div className="section-head">
          <div className="section-eyebrow">Leadership</div>
          <h2 className="section-title">Decades of <em>process-critical expertise.</em></h2>
        </div>

        <div className="lead-grid">
          <div className="lead-card">
            <div className="lead-portrait">S</div>
            <div className="lead-info">
              <h4>Mr. Santhanam</h4>
              <div className="lead-role">Founder &amp; Technical Director</div>
              <p className="lead-bio">
                Founder of MacroCoats since 1993, Mr. Santhanam has spent over four decades developing
                process-engineered chemical solutions for India's most demanding industrial environments.
                His formulations serve Tier-1 automotive manufacturers, Indian Railways, and heavy
                engineering clients across the country.
              </p>
              <div className="lead-credentials">
                <span className="spec-badge">M.Sc. Applied Chemistry</span>
                <span className="spec-badge">40+ Years Industry</span>
                <span className="spec-badge">Est. MacroCoats 1993</span>
              </div>
              <ul>
                <li>Developed 200+ proprietary formulations across phosphating, passivation, and corrosion protection</li>
                <li>Specialist in bath chemistry optimisation for automotive pre-treatment and OEM paint shop lines</li>
                <li>Technical authority on zinc, iron, and manganese phosphating systems for Tier-1 &amp; Tier-2 suppliers</li>
              </ul>
              <a href="#process-audit" className="product-link lead-cta">
                Book a free process audit
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
              </a>
            </div>
          </div>

          <div className="lead-card">
            <div className="lead-portrait">A</div>
            <div className="lead-info">
              <h4>Mr. Aswin Kumar</h4>
              <div className="lead-role">Operations &amp; Automation Lead</div>
              <p className="lead-bio">
                Leading MacroCoats' digital transformation, Mr. Aswin Kumar bridges advanced industrial
                automation with chemical process management. He architects the company's IoT bath
                monitoring systems and oversees technical installations and client operations pan-India.
              </p>
              <div className="lead-credentials">
                <span className="spec-badge">B.E. Electronics &amp; Instrumentation</span>
                <span className="spec-badge">15+ Years Industry</span>
                <span className="spec-badge">IoT Systems Specialist</span>
              </div>
              <ul>
                <li>Designed MacroCoats' real-time IoT bath monitoring and auto-dosing platform</li>
                <li>Manages technical installations across 50+ client facilities in Tamil Nadu, Maharashtra, and Gujarat</li>
                <li>Leads integration of Industry 4.0 practices into legacy chemical treatment operations</li>
              </ul>
              <a href="#process-audit" className="product-link lead-cta">
                Discuss IoT monitoring for your line
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
