export default function ClientValue() {
  return (
    <section className="value">
      <div className="container">
        <div className="section-head">
          <div className="section-eyebrow">Client Value</div>
          <h2 className="section-title">Outcomes that <em>compound across plants.</em></h2>
        </div>

        <div className="value-grid">
          <div className="value-card purple">
            <div className="value-icon">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
            </div>
            <h4>Financial</h4>
            <div className="value-metric"><span className="value-metric-num">30%</span><span className="value-metric-label">reject-rate reduction</span></div>
            <ul>
              <li>Improved chemical efficiency through optimized dosing</li>
              <li>Lower total cost of ownership across the surface treatment line</li>
              <li>60% reduction in sludge disposal costs</li>
            </ul>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <svg viewBox="0 0 24 24"><path d="M3 3v18h18M7 14l4-4 4 4 5-5" /></svg>
            </div>
            <h4>Operational</h4>
            <div className="value-metric"><span className="value-metric-num">0</span><span className="value-metric-label">paint failures in 18-month runs</span></div>
            <ul>
              <li>Consistent, repeatable outcomes across multi-location operations</li>
              <li>Reduced rework, scrap, and unplanned downtime</li>
              <li>Faster line-clearance and changeover times</li>
            </ul>
          </div>

          <div className="value-card eco">
            <div className="value-icon">
              <svg viewBox="0 0 24 24"><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" /><path d="M9 12l2 2 4-4" /></svg>
            </div>
            <h4>Safety &amp; Compliance</h4>
            <div className="value-metric"><span className="value-metric-num">REACH · RoHS</span><span className="value-metric-label">Railway Board certified</span></div>
            <ul>
              <li>Improved plant safety through controlled chemistry</li>
              <li>Audit and compliance readiness for environmental standards</li>
              <li>Chromium-free, low-sludge eco-grade systems</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
