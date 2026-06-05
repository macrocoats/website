export default function Solutions() {
  return (
    <section className="solutions" id="about">
      <div className="container">
        <div className="section-head">
          <div className="section-eyebrow">Our Answer</div>
          <h2 className="section-title">Process-engineered chemical systems, <em>not products on a shelf.</em></h2>
        </div>

        <div className="solutions-grid">
          <div className="sol-card">
            <div className="sol-bg">
              <img src="https://www.kingchem.com/content/uploads/2024/08/shutterstock_1944817174.jpg" alt="Custom formulation engineering" />
            </div>
            <div className="sol-content">
              <span className="sol-num">/ 01</span>
              <div className="sol-icon">
                <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 2v6.5L4 18a2 2 0 002 3h12a2 2 0 002-3l-5-9.5V2" />
                  <path d="M8 2h8M9 14h6" />
                </svg>
              </div>
              <h3>Custom Formulation Engineering</h3>
              <p>Chemistry built around your specific process, water chemistry, organic load, and throughput. On-site trials. SOP alignment. Validated results.</p>
              <div className="sol-tags">
                <span className="sol-tag">Water analysis</span>
                <span className="sol-tag">On-site trials</span>
                <span className="sol-tag">SOP-aligned</span>
              </div>
            </div>
          </div>

          <div className="sol-card">
            <div className="sol-bg">
              <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800" alt="Surface treatment and phosphating" />
            </div>
            <div className="sol-content">
              <span className="sol-num">/ 02</span>
              <div className="sol-icon">
                <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 8l10 6 10-6-10-6z" />
                  <path d="M2 14l10 6 10-6" />
                  <path d="M2 11l10 6 10-6" />
                </svg>
              </div>
              <h3>Surface Treatment &amp; Phosphating</h3>
              <p>Zinc, iron, and manganese phosphating systems engineered for superior corrosion resistance, paint adhesion, and batch-to-batch consistency.</p>
              <div className="sol-tags">
                <span className="sol-tag">Zinc</span>
                <span className="sol-tag">Iron</span>
                <span className="sol-tag">Manganese</span>
              </div>
            </div>
          </div>

          <div className="sol-card">
            <div className="sol-bg">
              <img src="https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=800" alt="Corrosion protection" />
            </div>
            <div className="sol-content">
              <span className="sol-num">/ 03</span>
              <div className="sol-icon">
                <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <h3>Corrosion Protection</h3>
              <p>Rust preventives, chromium-free passivation, and eco-friendly sealants designed for long service life across storage, handling, and field deployment.</p>
              <div className="sol-tags">
                <span className="sol-tag">Cr-free</span>
                <span className="sol-tag">Low-sludge</span>
                <span className="sol-tag">Eco-compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
