import { Link } from 'react-router-dom';

export default function BlogNav() {
  return (
    <nav className="blog-nav">
      <div className="nav-inner">
        <Link to="/" className="logo">
          <div className="logo-mark"></div>
          <div>
            <div className="logo-text">Macro Coats Pvt Ltd</div>
            <div className="logo-subtext">Process-Engineered Chemistry</div>
          </div>
        </Link>
        <Link to="/#process-audit" className="nav-cta">
          Free Process Audit
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </nav>
  );
}
