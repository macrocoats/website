const painPoints = [
  'Poor surface preparation causing coating adhesion failures and field rework.',
  'Corrosion during storage, transit, and service life eroding margins.',
  'Inconsistent phosphating results across batches and plant locations.',
  'High chemical consumption and unplanned process downtime.',
  'Rising environmental compliance and chromium-free regulatory pressure.',
  'Lack of real-time visibility into bath chemistry and dosing precision.',
];

export default function Challenge() {
  return (
    <section className="challenge">
      <div className="container">
        <div className="section-head">
          <div className="section-eyebrow">The Challenge</div>
          <h2 className="section-title">Generic chemistry produces <em>inconsistent results.</em> Your process deserves better.</h2>
        </div>

        <div className="pain-grid">
          {painPoints.map((text, i) => (
            <div className="pain-item" key={i}>
              <div className="pain-num">{String(i + 1).padStart(2, '0')}</div>
              <div className="pain-text">{text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
