import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="logo">
            <div className="logo-mark"></div>
            <div>
              <div className="logo-text">MacroCoats Pvt Ltd</div>
              <div className="logo-subtext">Process-Engineered Chemistry</div>
            </div>
          </div>
          <p>Specialty chemical formulations engineered for consistency, scale, and control. Formerly Technical Electroless Chemical Co. Pvt. Ltd.</p>
        </div>

        <div className="footer-col">
          <h5>Products</h5>
          <ul>
            <li><a href="#">Phosphating</a></li>
            <li><a href="#">Surface Prep</a></li>
            <li><a href="#">Corrosion Protection</a></li>
            <li><a href="#">Specialty Chemicals</a></li>
            <li><a href="#">Hygiene &amp; Water</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>Services</h5>
          <ul>
            <li><a href="#">Turnkey Treatment</a></li>
            <li><a href="#">IoT Monitoring</a></li>
            <li><a href="#">Process Consulting</a></li>
            <li><a href="#">Sustainability</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>Resources</h5>
          <ul>
            <li><a href="#process-audit">Free Process Audit</a></li>
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
            <li><a href="tel:9444961815">+91 9444961815</a></li>
            <li><a href="mailto:info@macrocoats.in">info@macrocoats.in</a></li>
            <li><a href="#">Chennai, India</a></li>
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
