import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Nav from '../components/layout/Nav.jsx';
import Footer from '../components/layout/Footer.jsx';
import CtaBand from '../components/home/CtaBand.jsx';
import { PRODUCTS } from '../data/products.js';

const FAMILY_IMAGES = {
  phosphating: '/images/products-phosphating-parts.webp',
  passivation: '/images/products-corrosion-protection.webp',
  'surface-prep': '/images/products-surface-prep.webp',
  auxiliary: '/images/products-phosphating-parts.webp',
};

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = PRODUCTS.find(p => p.slug === slug);

  useEffect(() => {
    if (product) document.title = `${product.name} — MacroCoats`;
    return () => {
      document.title = 'MacroCoats — Process-Engineered Chemical Solutions';
    };
  }, [product]);

  if (!product) {
    return (
      <>
        <Nav />
        <div className="pdp-404">
          <div className="pdp-404__eyebrow">404 — Not Found</div>
          <h2 className="pdp-404__heading">Product not found</h2>
          <p className="pdp-404__body">
            This product doesn't exist or the URL may have changed.
          </p>
          <Link to="/products" className="pdp-404__link">
            ← Back to Products
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  const related = PRODUCTS.filter(
    p => p.family === product.family && p.id !== product.id
  ).slice(0, 3);

  const heroImage =
    FAMILY_IMAGES[product.family] || FAMILY_IMAGES['auxiliary'];

  return (
    <>
      <Nav />

      {/* ── Hero ─────────────────────────────────────── */}
      <section className="pdp-hero">
        <div className="pdp-hero__inner">
          <nav className="pdp-breadcrumb" aria-label="Breadcrumb">
            <Link to="/products">Products</Link>
            <span aria-hidden="true">/</span>
            <span>{product.familyLabel}</span>
            <span aria-hidden="true">/</span>
            <span>{product.name}</span>
          </nav>

          <div className="pdp-hero__eyebrow">{product.code}</div>
          <h1 className="pdp-hero__h1">{product.name}</h1>

          <div className="pdp-hero__badges">
            <span className="spec-badge">{product.formula}</span>
            {product.specBadges.map(b => (
              <span className="spec-badge" key={b}>
                {b}
              </span>
            ))}
          </div>

          {product.valueProp && (
            <div className="pdp-hero__value-prop">
              {product.valueProp}
            </div>
          )}
        </div>
      </section>

      {/* ── Two-column body ───────────────────────────── */}
      <div className="pdp-layout">

          {/* ── Main column ─────────────────────────── */}
          <main className="pdp-main">

            {/* Overview */}
            <section className="pdp-overview">
              <div className="pdp-overview__grid">
                <div className="pdp-overview__image-wrap">
                  <img
                    src={heroImage}
                    alt={`${product.name} — industrial application`}
                    className="pdp-overview__image"
                    loading="lazy"
                    decoding="async"
                    width="800"
                    height="533"
                  />
                </div>
                <div className="pdp-overview__copy">
                  <p className="pdp-overview__description">{product.description}</p>
                  {product.specialty && (
                    <blockquote className="pdp-blockquote">
                      {product.specialty}
                    </blockquote>
                  )}
                </div>
              </div>
            </section>

            {/* Key Benefits */}
            {product.keyBenefits && product.keyBenefits.length > 0 && (
              <section className="pdp-benefits">
                <h2 className="pdp-section-title">Key Benefits</h2>
                <div className="pdp-benefits-grid">
                  {product.keyBenefits.map((benefit, i) => (
                    <div key={i} className="pdp-benefit-card">
                      <div className="pdp-benefit-label">{benefit.label}</div>
                      <div className="pdp-benefit-description">{benefit.description}</div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Suitable For */}
            {product.suitableFor && product.suitableFor.length > 0 && (
              <section className="pdp-suitable">
                <h2 className="pdp-section-title">Suitable For</h2>
                <div className="pdp-suitable-tags">
                  {product.suitableFor.map(tag => (
                    <span key={tag} className="pdp-suitable-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Technical Parameters */}
            {product.params && product.params.length > 0 && (
              <section className="pdp-params">
                <h2 className="pdp-section-title">Technical Parameters</h2>
                <table className="pdp-params-table">
                  <tbody>
                    {product.params.map(p => (
                      <tr key={p.label}>
                        <th scope="row">{p.label}</th>
                        <td>{p.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
            )}

            {/* Process Position */}
            {product.processPosition &&
              product.processPosition.stages &&
              product.processPosition.stages.length > 0 && (
              <section className="pdp-process">
                <h2 className="pdp-section-title">Where in the Process</h2>
                <div className="pdp-process-flow" role="list">
                  {product.processPosition.stages.map((stage, i) => (
                    <div
                      key={i}
                      className="pdp-process-step"
                      role="listitem"
                    >
                      <div
                        className={`pdp-stage${
                          product.processPosition.activeStages.includes(i)
                            ? ' pdp-stage--active'
                            : ''
                        }`}
                      >
                        {stage}
                      </div>
                      {i < product.processPosition.stages.length - 1 && (
                        <svg
                          className="pdp-stage-arrow"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <path
                            d="M5 12h14M13 5l7 7-7 7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </div>
                  ))}
                </div>
                {product.processPositionDescription && (
                  <p className="pdp-process-summary">
                    {product.processPositionDescription}
                  </p>
                )}
              </section>
            )}

            {/* Applications */}
            {product.usedIn && product.usedIn.length > 0 && (
              <section className="pdp-applications">
                <h2 className="pdp-section-title">Applications</h2>
                <div className="pdp-app-grid">
                  {product.usedIn.map(u => (
                    <div key={u} className="pdp-app-card">
                      {u}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Compliance — conditional */}
            {product.standards && product.standards.length > 0 && (
              <section className="pdp-compliance">
                <h2 className="pdp-section-title">Compliance & Standards</h2>
                <div className="pdp-standards">
                  {product.standards.map(s => (
                    <span key={s} className="spec-badge pdp-std-badge">
                      {s}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Related Products */}
            {related.length > 0 && (
              <section className="pdp-related">
                <h2 className="pdp-section-title">Related Products</h2>
                <div className="pdp-related-grid">
                  {related.map(p => (
                    <Link
                      to={`/products/${p.slug}`}
                      key={p.id}
                      className="pdp-related-card"
                    >
                      <div className="pdp-related-card__code">{p.code}</div>
                      <div className="pdp-related-card__name">{p.name}</div>
                      <div className="pdp-related-card__formula">
                        <span className="spec-badge">{p.formula}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </main>

          {/* ── Sidebar ──────────────────────────────── */}
          <aside className="pdp-sidebar">

            <div className="pdp-sidebar-block">
              <div className="pdp-sidebar-label">Request Datasheet</div>
              <p className="pdp-sidebar-hint">
                Full technical datasheet with SDS, formulation notes, and
                application guidelines.
              </p>
              <a
                href={`mailto:info@macrocoats.in?subject=Datasheet Request – ${product.code}`}
                className="pdp-sidebar-btn pdp-sidebar-btn--primary"
              >
                Email for Datasheet
              </a>
            </div>

            <div className="pdp-sidebar-block">
              <div className="pdp-sidebar-label">Get Expert Advice</div>
              <p className="pdp-sidebar-hint">
                Our process engineers review your line and recommend the right
                formulation.
              </p>
              <Link
                to="/#process-audit"
                className="pdp-sidebar-btn pdp-sidebar-btn--outline"
              >
                Request Process Audit
              </Link>
            </div>

            <div className="pdp-sidebar-block">
              <div className="pdp-sidebar-label">Speak with Sales</div>
              <p className="pdp-sidebar-hint">
                Mon – Sat, 9 am – 6 pm IST. Direct line to our Chennai office.
              </p>
              <a href="tel:+919884080377" className="pdp-sidebar-phone">
                +91 98840 80377
              </a>
            </div>

          </aside>
        </div>

      <CtaBand />
      <Footer />
    </>
  );
}
