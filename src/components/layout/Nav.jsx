import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#" className="logo">
          <div className="logo-mark"></div>
          <div>
            <div className="logo-text">Macro Coats Pvt Ltd</div>
            <div className="logo-subtext">Process-Engineered Chemistry</div>
          </div>
        </a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#industries">Industries</a></li>
          <li><a href="#services">Services</a></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#contact" className="nav-cta">
          Talk to an Expert
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </nav>
  );
}
