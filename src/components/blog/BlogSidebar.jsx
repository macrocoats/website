import { Link } from 'react-router-dom';

export default function BlogSidebar() {
  return (
    <aside className="blog-sidebar">
      <div className="sidebar-card">
        <span className="sidebar-label">Free Offer</span>
        <h4>Free Process Chemistry Audit</h4>
        <p>2-hour plant visit from Mr. Santhanam. Bath log review. Written report with specific recommendations. No cost, no obligation.</p>
        <Link to="/#process-audit" className="sidebar-btn">
          Request Audit
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      <div className="sidebar-card">
        <span className="sidebar-label">Topics</span>
        <ul className="topic-list">
          <li><a href="#">Phosphating <span className="topic-count">4</span></a></li>
          <li><a href="#">Surface Preparation <span className="topic-count">2</span></a></li>
          <li><a href="#">Corrosion Protection <span className="topic-count">2</span></a></li>
          <li><a href="#">IoT &amp; Automation <span className="topic-count">3</span></a></li>
          <li><a href="#">Compliance &amp; Regulatory <span className="topic-count">2</span></a></li>
          <li><a href="#">Quality &amp; Testing <span className="topic-count">2</span></a></li>
        </ul>
      </div>

      <div className="sidebar-card">
        <span className="sidebar-label">Our Authors</span>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <div style={{ width: '36px', height: '36px', background: 'var(--primary)', borderRadius: '50%', display: 'grid', placeItems: 'center', fontFamily: 'var(--sans)', fontSize: '13px', fontWeight: 600, color: 'white', flexShrink: 0 }}>S</div>
            <div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ink)', marginBottom: '2px' }}>Mr. Santhanam</div>
              <div style={{ fontSize: '12px', color: 'var(--slate)', lineHeight: 1.4 }}>Technical Director · 40+ years in chemical formulation &amp; surface treatment</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <div style={{ width: '36px', height: '36px', background: 'var(--purple)', borderRadius: '50%', display: 'grid', placeItems: 'center', fontFamily: 'var(--sans)', fontSize: '13px', fontWeight: 600, color: 'white', flexShrink: 0 }}>A</div>
            <div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ink)', marginBottom: '2px' }}>Mr. Aswin Kumar</div>
              <div style={{ fontSize: '12px', color: 'var(--slate)', lineHeight: 1.4 }}>Automation &amp; Business Operations · 15+ years in IoT &amp; industrial control</div>
            </div>
          </div>
        </div>
      </div>

      <div className="sidebar-card">
        <span className="sidebar-label">Our Products</span>
        <p style={{ fontSize: '13px', color: 'var(--slate)', lineHeight: 1.5, margin: '8px 0 12px' }}>Zinc, iron &amp; manganese phosphating systems, surface preparation chemistry, and Cr-free corrosion protection — matched to your process line.</p>
        <Link to="/#products" className="sidebar-btn">
          View Product Portfolio
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      <div className="sidebar-card">
        <span className="sidebar-label">Contact</span>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <a href="tel:9444961815" style={{ fontSize: '13px', color: 'var(--ink)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.37 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            +91 9444961815
          </a>
          <a href="mailto:info@macrocoats.in" style={{ fontSize: '13px', color: 'var(--ink)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5">
              <rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" />
            </svg>
            info@macrocoats.in
          </a>
        </div>
      </div>
    </aside>
  );
}
