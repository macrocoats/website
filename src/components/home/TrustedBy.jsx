const clients = [
  { src: '/images/logo-indian-railways.svg', alt: 'Indian Railways' },
  { src: '/images/logo-rane.jpg', alt: 'Rane Group' },
  { src: '/images/logo-chemplast.jpg', alt: 'Chemplast Sanmar' },
  { src: '/images/logo-lnt.svg', alt: 'L&T' },
  { src: '/images/logo-tvs.png', alt: 'TVS Motor' },
  { src: '/images/logo-tube-investments.png', alt: 'Tube Investments' },
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
            <img src={c.src} alt={c.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}
