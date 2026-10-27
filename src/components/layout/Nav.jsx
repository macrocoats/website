import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const menu = menuRef.current;
    const focusable = menu?.querySelectorAll('a[href], button:not([disabled])');
    focusable?.[0]?.focus();

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setIsOpen(false);
        menuButtonRef.current?.focus();
        return;
      }
      if (event.key !== 'Tab' || !focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  function close() { setIsOpen(false); }

  function goToSection(e, id) {
    close();
    if (isHome) return; // let the native #anchor jump handle it
    e.preventDefault();
    navigate(`/#${id}`);
  }

  return (
    <>
    <a className="skip-link" href="#main-content">Skip to main content</a>
    <nav className="nav" aria-label="Primary navigation">
      <div className="nav-inner">
        <Link to="/" className="logo" onClick={close} aria-current={isHome && !location.hash ? 'page' : undefined}>
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

        <ul ref={menuRef} id="primary-navigation" className={`nav-links${isOpen ? ' nav-links--open' : ''}`}>
          <li><a href="#about" aria-current={isHome && location.hash === '#about' ? 'page' : undefined} onClick={(e) => goToSection(e, 'about')}>About</a></li>
          <li><a href="#services" aria-current={isHome && location.hash === '#services' ? 'page' : undefined} onClick={(e) => goToSection(e, 'services')}>Process</a></li>
          <li><Link to="/products" aria-current={location.pathname.startsWith('/products') ? 'page' : undefined} onClick={close}>Products</Link></li>
          <li><a href="#industries" aria-current={isHome && location.hash === '#industries' ? 'page' : undefined} onClick={(e) => goToSection(e, 'industries')}>Industries</a></li>
          <li><Link to="/blog" aria-current={location.pathname.startsWith('/blog') ? 'page' : undefined} onClick={close}>Blog</Link></li>
          <li><Link to="/technology" aria-current={location.pathname === '/technology' ? 'page' : undefined} onClick={close}>Compliance</Link></li>
          <li><a href="#contact" aria-current={isHome && location.hash === '#contact' ? 'page' : undefined} onClick={(e) => goToSection(e, 'contact')}>Contact</a></li>
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
          ref={menuButtonRef}
          className="nav-hamburger"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
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
    </>
  );
}
