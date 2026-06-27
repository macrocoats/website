export default function ProductsHero() {
  return (
    <section className="prods-hero">
      <div className="prods-hero__inner">
        <div className="prods-hero__eyebrow">Product Catalogue · 21 Formulations</div>
        <h1 className="prods-hero__h1">
          Purpose-engineered chemistry,{' '}
          <em>product by product.</em>
        </h1>
        <p className="prods-hero__sub">
          Every formulation in the MacroCoats range is developed around a specific process
          requirement — not adapted from a generic concentrate. Select a product to see
          operating parameters, applications, and what sets each formulation apart.
        </p>

        <div className="prods-hero__stats">
          <div className="prods-hero__stat">
            <div className="prods-hero__stat-num">21</div>
            <div className="prods-hero__stat-label">Active formulations</div>
          </div>
          <div className="prods-hero__stat">
            <div className="prods-hero__stat-num">4</div>
            <div className="prods-hero__stat-label">Product families</div>
          </div>
          <div className="prods-hero__stat">
            <div className="prods-hero__stat-num">30+</div>
            <div className="prods-hero__stat-label">Years of R&amp;D</div>
          </div>
          <div className="prods-hero__stat">
            <div className="prods-hero__stat-num">OEM</div>
            <div className="prods-hero__stat-label">Validated supply chain</div>
          </div>
        </div>
      </div>
    </section>
  );
}
