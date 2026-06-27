import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS, FAMILIES } from '../../data/products.js';

function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ProductsCatalogue() {
  const [activeFamily, setActiveFamily] = useState('all');
  const [openId, setOpenId] = useState(null);

  const filtered =
    activeFamily === 'all' ? PRODUCTS : PRODUCTS.filter((p) => p.family === activeFamily);

  function handleFilter(key) {
    setActiveFamily(key);
    setOpenId(null);
  }

  function toggleCard(id) {
    setOpenId((prev) => (prev === id ? null : id));
  }

  return (
    <section className="pcat">
      <div className="pcat__inner">
        <div className="pcat-filter" role="group" aria-label="Filter by product family">
          {FAMILIES.map((f) => {
            const count =
              f.key === 'all'
                ? PRODUCTS.length
                : PRODUCTS.filter((p) => p.family === f.key).length;
            return (
              <button
                key={f.key}
                className={`pcat-filter-btn${activeFamily === f.key ? ' pcat-filter-btn--active' : ''}`}
                onClick={() => handleFilter(f.key)}
                aria-pressed={activeFamily === f.key}
              >
                {f.label}
                <span className="pcat-filter-count">{count}</span>
              </button>
            );
          })}
        </div>

        <div className="pcat-grid">
          {filtered.map((product) => {
            const isOpen = openId === product.id;
            return (
              <div key={product.id} className={`pcat-card${isOpen ? ' pcat-card--open' : ''}`}>
                <button
                  className="pcat-card-header"
                  onClick={() => toggleCard(product.id)}
                  aria-expanded={isOpen}
                >
                  <div className="pcat-card-header-left">
                    <div className="pcat-card-top">
                      <span className="pcat-code">{product.code}</span>
                      <span className="spec-badge">{product.familyLabel}</span>
                    </div>
                    <div className="pcat-name">{product.name}</div>
                    <div className="pcat-formula">{product.formula}</div>
                  </div>
                  <div className="pcat-toggle" aria-hidden="true">
                    <PlusIcon />
                  </div>
                </button>

                <div className={`pcat-detail${isOpen ? ' pcat-detail--open' : ''}`}>
                  <div className="pcat-detail-inner">
                    <p className="pcat-detail-desc">{product.description}</p>

                    <div className="pcat-badges">
                      {product.specBadges.map((b) => (
                        <span className="spec-badge" key={b}>
                          {b}
                        </span>
                      ))}
                    </div>

                    <div className="pcat-detail-section">
                      <span className="pcat-detail-label">Where It Is Used</span>
                      <ul className="pcat-use-list">
                        {product.usedIn.map((u) => (
                          <li key={u}>{u}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="pcat-detail-section">
                      <span className="pcat-detail-label">What Makes It Different</span>
                      <div className="pcat-specialty-box">{product.specialty}</div>
                    </div>

                    <a
                      href={`mailto:info@macrocoats.in?subject=Datasheet Request – ${product.code}`}
                      className="pcat-datasheet-link"
                    >
                      Request technical datasheet
                      <ArrowIcon />
                    </a>
                    <Link to={`/products/${product.slug}`} className="pcat-view-link">
                      View full product details →
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
