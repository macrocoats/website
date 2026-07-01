const stages = [
  {
    num: '01',
    name: 'Surface Preparation',
    descriptor: 'The Foundation',
    body: 'No conversion coating chemistry — however precisely formulated — will bond to a contaminated surface. Stage one removes oil, mill scale, and metallic oxides through a sequenced alkaline degrease, acid pickle, and activation step. Each chemistry in this sequence is engineered for the specific soil type and base metal on your line.',
    gradient: 'linear-gradient(135deg, rgba(26,39,68,0.92) 0%, rgba(13,27,42,0.88) 100%)',
    spec: 'pH 12.4 · 65°C',
    formula: 'ALKALINE DEGREASE → ACID PICKLE → ACTIVATE',
    photo: '/brochure/stage-01-surface-prep.jpg',
    reverse: false,
  },
  {
    num: '02',
    name: 'Conversion Coating',
    descriptor: 'The Transformation',
    body: 'The phosphating reaction converts the bare metal surface into an insoluble crystalline layer bonded directly to the substrate. Crystal composition — zinc, iron, or manganese — is chosen for the downstream requirement: zinc for paint adhesion, manganese for wear surfaces, iron for light-duty pre-paint. Bath chemistry is held within tight limits throughout the production shift.',
    gradient: 'linear-gradient(135deg, rgba(15,33,86,0.92) 0%, rgba(30,58,138,0.88) 100%)',
    spec: 'Zn₃(PO₄)₂ · 4H₂O',
    formula: 'TOTAL ACID · FREE ACID · TEMP · ACCELERATOR',
    photo: '/brochure/stage-02-barrel-plating.jpg',
    reverse: true,
  },
  {
    num: '03',
    name: 'In-Process Verification',
    descriptor: 'The Proof',
    body: 'Coating weight, crystal morphology, and bath parameters are verified against specification at defined intervals — not inspected after parts have failed salt-spray. Point weight titration and pH measurement confirm bath health before each production run. IoT sensors extend this verification continuously, triggering auto-dose corrections before the bath drifts out of range.',
    gradient: 'linear-gradient(135deg, rgba(26,11,48,0.92) 0%, rgba(91,42,134,0.80) 50%, rgba(30,58,138,0.88) 100%)',
    spec: 'ASTM B117 · IS 6005',
    formula: '1.5 – 4.5 g/m² · CRYSTAL CHECK · pH TITRATION',
    photo: '/brochure/stage-03-ph-meter.jpg',
    reverse: false,
  },
  {
    num: '04',
    name: 'Corrosion Protection',
    descriptor: 'The Shield',
    body: 'A chromium-free passivation seal closes the phosphate crystal structure immediately after conversion coating, preventing white rust during inter-operation storage and maximising paint adhesion. The sealant chemistry is specified to the downstream paint system and OEM requirement — not selected from a standard catalogue. Salt spray endurance exceeds 1000 hours on qualified systems.',
    gradient: 'linear-gradient(135deg, rgba(5,26,16,0.92) 0%, rgba(5,150,105,0.75) 50%, rgba(6,95,70,0.88) 100%)',
    spec: 'Cr-FREE · LOW-SLUDGE',
    formula: 'PASSIVATION → RUST PREVENTIVE → FINAL COAT',
    photo: '/brochure/stage-04-powder-coating.jpg',
    reverse: true,
  },
];

export default function TechProcess() {
  return (
    <section className="tech-process" id="treatment-process">
      <div className="container">
        <div className="section-head">
          <div className="section-eyebrow tech-process__eyebrow">PROCESS METHODOLOGY</div>
          <h2 className="section-title tech-process__title">
            Four stages. One continuous <em>system.</em>
          </h2>
        </div>

        {stages.map((s) => (
          <div className={`tech-process__row${s.reverse ? ' tech-process__row--reverse' : ''}`} key={s.num}>
            <div className="tech-process__visual" style={{ background: s.gradient }}>
              {s.photo && (
                <img
                  src={s.photo}
                  alt={s.name}
                  className="tech-process__visual-photo"
                  loading="lazy"
                />
              )}
              <div className="tech-process__visual-overlay">
                <div className="tech-process__stage-num">STAGE {s.num}</div>
                <div className="tech-process__stage-label">{s.name}</div>
                <div className="tech-process__formula">{s.spec}</div>
                <div className="tech-process__formula-sub">{s.formula}</div>
              </div>
            </div>
            <div className="tech-process__content">
              <div className="tech-process__step-num">/ {s.num}</div>
              <div className="tech-process__descriptor">{s.descriptor}</div>
              <h3 className="tech-process__content-title">{s.name}</h3>
              <p className="tech-process__body">{s.body}</p>
            </div>
          </div>
        ))}

        <p className="section-footnote">
          MacroCoats engineers chemistry for every stage of this sequence — not just the phosphating tank.
        </p>
      </div>
    </section>
  );
}
