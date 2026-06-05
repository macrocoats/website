export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg-img">
        <img src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=1600" alt="" />
      </div>

      <div className="hero-inner">
        <div>
          <div className="eyebrow">Industrial Chemical Specialists · Est. 1993</div>
          <h1>Chemistry,<br />engineered to your <em>process.</em></h1>
          <p className="hero-sub">Specialty chemical formulations designed around your operating conditions, water chemistry, and scale — not generic supply. Three decades of process-critical reliability for India's most demanding industrial operations.</p>
          <div className="hero-ctas">
            <a href="#products" className="btn-primary">
              Explore Solutions
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#contact" className="btn-secondary">Request Consultation</a>
          </div>
        </div>

        <div className="hero-visual">
          <svg className="connector-svg" viewBox="0 0 500 560" preserveAspectRatio="none">
            <path id="cp1" className="c-path" d="M 110 85 Q 250 112 380 198" />
            <path id="cp2" className="c-path" d="M 380 198 Q 275 315 140 460" />
            <path id="cp3" className="c-path" d="M 140 460 Q 280 492 375 495" />

            <path className="c-glow c-glow-1" d="M 110 85 Q 250 112 380 198" />
            <path className="c-glow c-glow-2" d="M 380 198 Q 275 315 140 460" />
            <path className="c-glow c-glow-3" d="M 140 460 Q 280 492 375 495" />

            <circle r="3" opacity="0" fill="rgba(96,165,250,0.95)" style={{ filter: 'drop-shadow(0 0 5px #60A5FA)' }}>
              <animate attributeName="opacity" from="0" to="1" dur="0.01s" begin="3.2s" fill="freeze" />
              <animateMotion dur="2.8s" begin="3.2s" repeatCount="indefinite">
                <mpath href="#cp1" />
              </animateMotion>
            </circle>
            <circle r="3" opacity="0" fill="rgba(96,165,250,0.95)" style={{ filter: 'drop-shadow(0 0 5px #60A5FA)' }}>
              <animate attributeName="opacity" from="0" to="1" dur="0.01s" begin="3.6s" fill="freeze" />
              <animateMotion dur="3.4s" begin="3.6s" repeatCount="indefinite">
                <mpath href="#cp2" />
              </animateMotion>
            </circle>
            <circle r="3" opacity="0" fill="rgba(96,165,250,0.95)" style={{ filter: 'drop-shadow(0 0 5px #60A5FA)' }}>
              <animate attributeName="opacity" from="0" to="1" dur="0.01s" begin="4.0s" fill="freeze" />
              <animateMotion dur="2.2s" begin="4.0s" repeatCount="indefinite">
                <mpath href="#cp3" />
              </animateMotion>
            </circle>
          </svg>

          <div className="process-card process-card-1">
            <div className="pc-label">Process / Phosphating</div>
            <div className="pc-value">Zinc · Iron · Mn</div>
            <div className="pc-detail">Conversion coatings, controlled bath</div>
          </div>

          <div className="process-card process-card-2">
            <div className="pc-label">Live Monitoring</div>
            <div className="pc-value">pH 3.2 · 48°C</div>
            <div className="pc-detail">TDS 1,240 ppm — within spec</div>
            <div className="pc-bar"></div>
          </div>

          <div className="process-card process-card-3">
            <div className="pc-label">Formulation</div>
            <div className="pc-value">Custom</div>
            <div className="pc-detail">Water chemistry matched</div>
          </div>

          <div className="process-card process-card-4">
            <div className="pc-label">Outcome</div>
            <div className="pc-value">Cr-free · Low-sludge</div>
            <div className="pc-detail">Eco-compliant, audit-ready</div>
          </div>
        </div>
      </div>

      <div className="hero-stats">
        <div className="stat">
          <div className="stat-num">30<span>+</span></div>
          <div className="stat-label">Years of process<br />chemistry expertise</div>
        </div>
        <div className="stat">
          <div className="stat-num">7<span>+</span></div>
          <div className="stat-label">Industrial sectors<br />actively served</div>
        </div>
        <div className="stat">
          <div className="stat-num">100<span>%</span></div>
          <div className="stat-label">Custom-engineered<br />formulations</div>
        </div>
        <div className="stat">
          <div className="stat-num">IoT</div>
          <div className="stat-label">Live monitoring<br />&amp; auto-dosing</div>
        </div>
      </div>
    </section>
  );
}
