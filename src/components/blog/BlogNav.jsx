import { Link } from 'react-router-dom';

export default function BlogNav() {
  return (
    <nav className="blog-nav">
      <div className="nav-inner">
        <Link to="/" className="logo">
          <img src="/images/logo.png" alt="MacroCoats" className="logo-mark" />
          <div>
            <div className="wordmark-main">
              <span className="wm-macro">Macro</span><span className="wm-coats">Coats</span>
            </div>
            <div className="wordmark-sub">
              <span className="wm-rule wm-rule-navy"></span>
              <span className="wm-suffix">Pvt. Ltd.</span>
              <span className="wm-rule wm-rule-red"></span>
            </div>
          </div>
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <Link to="/blog" style={{ fontFamily: 'var(--sans)', fontSize: '13px', fontWeight: 500, color: 'var(--slate)', textDecoration: 'none' }}>
            All Articles
          </Link>
          <Link to="/#process-audit" className="nav-cta">
            Free Process Audit
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
}
