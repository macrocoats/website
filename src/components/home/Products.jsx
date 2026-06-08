const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

export default function Products() {
  return (
    <section className="products" id="products">
      <div className="container">
        <div className="section-head">
          <div className="section-eyebrow">Product Portfolio</div>
          <h2 className="section-title">Core chemical solutions, <em>engineered for scale.</em></h2>
        </div>

        <div className="product-row">
          <div className="product-visual">
            <img className="product-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Drehteile_vor_und_nach_dem_br%C3%BCnieren.jpg/1280px-Drehteile_vor_und_nach_dem_br%C3%BCnieren.jpg" alt="Metal parts before and after conversion coating treatment" />
            <div className="product-visual-inner">
              <div className="formula-display">[Zn₃(PO₄)₂ · 4H₂O]</div>
              <div className="formula-name">Conversion<br />Coatings</div>
              <div className="formula-spec">— Zinc · Iron · Manganese</div>
            </div>
          </div>
          <div className="product-info">
            <div className="product-num">/ FAMILY 01</div>
            <h3>Phosphating &amp; Conversion Coatings</h3>
            <p>Zinc, iron, and manganese phosphating systems that form protective conversion layers on metal surfaces — delivering superior corrosion resistance and paint adhesion across diverse base metals.</p>
            <div className="product-specs">
              <span className="spec-badge">pH 3.0–4.5</span>
              <span className="spec-badge">40–60°C</span>
              <span className="spec-badge">ISO 9001:2015</span>
              <span className="spec-badge">OEM Approved</span>
            </div>
            <ul className="product-list">
              <li>Zinc Phosphate Systems <span>Pre-paint</span></li>
              <li>Iron Phosphate Systems <span>Light-duty</span></li>
              <li>Manganese Phosphate <span>Wear surfaces</span></li>
              <li>Chromium-free Passivation <span>Eco-grade</span></li>
            </ul>
            <a href="#" className="product-link">Request technical datasheet <ArrowIcon /></a>
          </div>
        </div>

        <div className="product-row reverse">
          <div className="product-visual product-visual-2">
            <img className="product-img" src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Engineers_Clean_JWST_Secondary_Reflector_with_Carbon_Dioxide_Snow.jpg" alt="Surface preparation treatment" />
            <div className="product-visual-inner">
              <div className="formula-display">[ALKALINE · pH 12.4]</div>
              <div className="formula-name">Surface<br />Preparation</div>
              <div className="formula-spec">— Degrease · De-rust · Pickle</div>
            </div>
          </div>
          <div className="product-info">
            <div className="product-num">/ FAMILY 02</div>
            <h3>Surface Preparation Chemistry</h3>
            <p>Solvent-based, water-based, and alkaline degreasers paired with acid-based de-rusting and pickling systems — engineered to deliver clean, activated surfaces ready for downstream conversion or coating.</p>
            <div className="product-specs">
              <span className="spec-badge">pH 11.0–13.0</span>
              <span className="spec-badge">50–70°C</span>
              <span className="spec-badge">RoHS Compliant</span>
              <span className="spec-badge">Low-foam Grade</span>
            </div>
            <ul className="product-list">
              <li>Solvent-Based Degreasers <span>Heavy oils</span></li>
              <li>Water-Based Degreasers <span>Eco-grade</span></li>
              <li>Alkaline Degreasers <span>High pH</span></li>
              <li>Pickling Inhibitors <span>Acid control</span></li>
            </ul>
            <a href="#" className="product-link">Request technical datasheet <ArrowIcon /></a>
          </div>
        </div>

        <div className="product-row">
          <div className="product-visual product-visual-3">
            <img className="product-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Moderne_Br%C3%BCnieranlage.jpg/1280px-Moderne_Br%C3%BCnieranlage.jpg" alt="Industrial chemical blackening and corrosion protection system" />
            <div className="product-visual-inner">
              <div className="formula-display">[Cr-FREE · LOW-SLUDGE]</div>
              <div className="formula-name">Corrosion<br />Protection</div>
              <div className="formula-spec">— Long service life</div>
            </div>
          </div>
          <div className="product-info">
            <div className="product-num">/ FAMILY 03</div>
            <h3>Corrosion Protection &amp; Specialty</h3>
            <p>Rust preventives, sealants, and specialty industrial chemistry — including chemical blackening, paint removers, heat treatment salts, and metal working fluids for demanding industrial environments.</p>
            <div className="product-specs">
              <span className="spec-badge">Cr-Free</span>
              <span className="spec-badge">Low Sludge</span>
              <span className="spec-badge">REACH Compliant</span>
              <span className="spec-badge">Salt Spray 500h+</span>
            </div>
            <ul className="product-list">
              <li>Rust Preventives &amp; Converters <span>Storage</span></li>
              <li>Chemical Blackening <span>Black oxide</span></li>
              <li>Heat Treatment Salts <span>Thermal</span></li>
              <li>Metal Working Oils <span>Cutting · Drawing</span></li>
            </ul>
            <a href="#" className="product-link">Request technical datasheet <ArrowIcon /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
