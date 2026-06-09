const clients = [
  { src: '/images/logo-indian-railways.svg', alt: 'Indian Railways',   w: 120, h: 120 },
  { src: '/images/logo-rane.webp',           alt: 'Rane Group',        w: 500, h: 341 },
  { src: '/images/logo-chemplast.webp',      alt: 'Chemplast Sanmar',  w: 200, h: 200 },
  { src: '/images/logo-lnt.svg',             alt: 'L&T',               w: 120, h: 60  },
  { src: '/images/logo-tvs.webp',            alt: 'TVS Motor',         w: 1212, h: 342 },
  { src: '/images/logo-tube-investments.webp', alt: 'Tube Investments', w: 500, h: 607 },
];

export default function TrustedBy() {
  return (
    <section className="trusted">
      <div className="container">
        <div className="section-head">
          <div className="section-eyebrow" style={{ fontSize: '20px' }}>Trusted By</div>
        </div>
      </div>
      <div className="marquee">
        {[...clients, ...clients].map((c, i) => (
          <div className="client-logo" key={i}>
            <img src={c.src} alt={c.alt} width={c.w} height={c.h} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}
