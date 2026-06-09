const industries = [
  { num: '01', name: 'Automotive &\nAuto Ancillaries',   img: '/images/industry-automotive.webp',     alt: 'Automotive industry',            w: 830, h: 553 },
  { num: '02', name: 'Manufacturing &\nFabrication',     img: '/images/industry-manufacturing.webp',  alt: 'Manufacturing & fabrication',    w: 900, h: 506 },
  { num: '03', name: 'Infrastructure &\nConstruction',   img: '/images/industry-infrastructure.webp', alt: 'Infrastructure & construction',  w: 539, h: 360 },
  { num: '04', name: 'Railways &\nHeavy Engineering',    img: '/images/industry-railways.webp',       alt: 'Railways & heavy engineering',   w: 900, h: 599 },
  { num: '05', name: 'Power &\nProcess Industries',      img: '/images/industry-power.webp',          alt: 'Power & process industries',     w: 678, h: 381 },
  { num: '06', name: 'Agro, Livestock\n& Poultry',       img: '/images/industry-agro.webp',           alt: 'Agro, livestock & poultry',      w: 900, h: 517 },
];

export default function Industries() {
  return (
    <section className="industries" id="industries">
      <div className="container">
        <div className="ind-header">
          <div className="section-head">
            <div className="section-eyebrow">Industries Served</div>
            <h2 className="section-title">Specialty chemistry across <em>diverse industrial sectors.</em></h2>
          </div>
          <div className="ind-counter"><strong>06</strong>core industries</div>
        </div>

        <div className="ind-grid">
          {industries.map((ind) => (
            <div className="ind-tile" key={ind.num}>
              <div className="ind-image">
                <div className="ind-placeholder">
                  <div className="ind-placeholder-label">
                    <img src={ind.img} alt={ind.alt} width={ind.w} height={ind.h} loading="lazy" />
                  </div>
                </div>
              </div>
              <div className="ind-content">
                <div className="ind-top">
                  <span className="ind-num">/ {ind.num}</span>
                  <span className="ind-arrow">↗</span>
                </div>
                <div className="ind-name">
                  {ind.name.split('\n').map((line, i) => (
                    <span key={i}>{line}{i < ind.name.split('\n').length - 1 && <br />}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
