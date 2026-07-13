import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  function close() { setIsOpen(false); }

  function goToSection(e, id) {
    close();
    if (isHome) return; // let the native #anchor jump handle it
    e.preventDefault();
    navigate(`/#${id}`);
  }

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link to="/" className="logo" onClick={close}>
          <img src="/images/logo.png" alt="MacroCoats" className="logo-mark" />
          <div>
            <div className="logo-text">Macro Coats Pvt Ltd</div>
            <div className="logo-subtext">Process-Engineered Chemistry</div>
          </div>
        </Link>

        <ul className={`nav-links${isOpen ? ' nav-links--open' : ''}`}>
          <li><a href="#about" onClick={(e) => goToSection(e, 'about')}>About</a></li>
          <li><Link to="/products" onClick={close}>Products</Link></li>
          <li><a href="#industries" onClick={(e) => goToSection(e, 'industries')}>Industries</a></li>
          <li><a href="#services" onClick={(e) => goToSection(e, 'services')}>Services</a></li>
          <li><Link to="/technology" onClick={close}>Technology</Link></li>
          <li><Link to="/blog" onClick={close}>Blog</Link></li>
          <li><a href="#contact" onClick={(e) => goToSection(e, 'contact')}>Contact</a></li>
          <li className="nav-mobile-cta">
            <a href="#contact" className="nav-cta" onClick={(e) => goToSection(e, 'contact')}>
              Talk to an Expert
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </li>
        </ul>

        <a href="#contact" className="nav-cta nav-cta--desktop" onClick={(e) => goToSection(e, 'contact')}>
          Talk to an Expert
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </a>

        <button
          className="nav-hamburger"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
        >
          {isOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M3 8h18M3 16h18" />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
}
