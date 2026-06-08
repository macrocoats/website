const clients = [
  { src: 'https://upload.wikimedia.org/wikipedia/en/8/83/Indian_Railways.svg', alt: 'Indian Railways' },
  { src: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b8/Rane_Group_Logo.jpg/500px-Rane_Group_Logo.jpg', alt: 'Rane Group' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Chemplast_Sanmar.jpg', alt: 'Chemplast Sanmar' },
  { src: 'https://upload.wikimedia.org/wikipedia/en/a/a1/Larsen%26Toubro_logo.svg', alt: 'L&T' },
  { src: 'https://upload.wikimedia.org/wikipedia/ta/7/79/TVS_Motor_Company_Logo.png', alt: 'TVS Motor' },
  { src: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Tube_Investments_of_India_Limited.svg/500px-Tube_Investments_of_India_Limited.svg.png', alt: 'Tube Investments' },
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
