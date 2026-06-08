const industries = [
  {
    num: '01',
    name: 'Automotive &\nAuto Ancillaries',
    img: 'https://www.chemours.com/en/-/media/images/corporate/vertrel/pd/clouseup-of-metal-gear-sitting-on-container-or-tub-1-4-1.jpg',
    alt: 'Automotive industry',
  },
  {
    num: '02',
    name: 'Manufacturing &\nFabrication',
    img: 'https://dam.oneadvanced.com/m/621c843315d5e49e/original/types-of-manufacturing-processes.jpg',
    alt: 'Manufacturing & fabrication',
  },
  {
    num: '03',
    name: 'Infrastructure &\nConstruction',
    img: 'https://t3.ftcdn.net/jpg/02/09/46/68/360_F_209466807_vIEKPahlcztZ2hAYVe3pUryp0lqdqoNc.jpg',
    alt: 'Infrastructure & construction',
  },
  {
    num: '04',
    name: 'Railways &\nHeavy Engineering',
    img: 'https://www.azocleantech.com/images/Article_Images/ImageForArticle_1590_16565750712931624.jpg',
    alt: 'Railways & heavy engineering',
  },
  {
    num: '05',
    name: 'Power &\nProcess Industries',
    img: 'http://powerline.net.in/wp-content/uploads/2025/06/62-678x381.jpg',
    alt: 'Power & process industries',
  },
  {
    num: '06',
    name: 'Agro, Livestock\n& Poultry',
    img: 'https://quench.culligan.com/wp-content/uploads/2022/11/What-Goes-Into-the-Conventional-Water-Treatment-Process.jpg',
    alt: 'Agro, livestock & poultry',
  },
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
                    <img src={ind.img} alt={ind.alt} loading="lazy" />
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
