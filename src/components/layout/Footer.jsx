import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="logo">
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
          </div>
          <p>Specialty chemical formulations engineered for consistency, scale, and control. Formerly Technical Electroless Chemical Co. Pvt. Ltd.</p>
        </div>

        <div className="footer-col">
          <h5>Products</h5>
          <ul>
            <li><Link to="/products">Phosphating</Link></li>
            <li><Link to="/products">Surface Prep</Link></li>
            <li><Link to="/products">Corrosion Protection</Link></li>
            <li><Link to="/products">Specialty Chemicals</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>Services</h5>
          <ul>
            <li><a href="/#services">Turnkey Treatment</a></li>
            <li><Link to="/technology">IoT Monitoring</Link></li>
            <li><a href="/#services">Process Consulting</a></li>
            <li><a href="/#about">Sustainability</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>Resources</h5>
          <ul>
            <li><a href="/#process-audit">Free Process Audit</a></li>
            <li>
              <a href="/resources/macrocoats-corporate-brochure.html" target="_blank" rel="noreferrer">
                Corporate Brochure
              </a>
            </li>
            <li>
              <a href="/resources/macrocoats-product-portfolio.html" target="_blank" rel="noreferrer">
                Portfolio
              </a>
            </li>
            <li><Link to="/blog">Technical Blog</Link></li>
            <li>
              <Link to="/blog/inconsistent-salt-spray-test-results-phosphating-bath">
                Salt Spray Guide
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>Contact</h5>
          <ul>
            <li><a href="tel:+919444961815">+91 94449 61815</a></li>
            <li><a href="mailto:info@macrocoats.in">info@macrocoats.in</a></li>
            <li><span>Chennai, India</span></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div>© 2026 Macro Coats Pvt Ltd · All rights reserved</div>
        <div>Engineered chemistry · Since 1993</div>
      </div>
    </footer>
  );
}
