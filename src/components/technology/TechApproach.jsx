export default function TechApproach() {
  return (
    <section className="tech-approach">
      <div className="container">
        <div className="tech-approach__inner">
          <div className="tech-approach__left">
            <div className="section-eyebrow tech-approach__eyebrow">THE MACROCOATS APPROACH</div>
            <h2 className="tech-approach__heading">
              Surface treatment is a system, <em>not a product.</em>
            </h2>
          </div>
          <div className="tech-approach__right">
            <p className="tech-approach__lead">
              Most chemical suppliers sell you a phosphating concentrate and leave. MacroCoats engineers the entire pre-treatment system — from the water in your first rinse tank to the passivation chemistry in your final stage.
            </p>
            <p className="tech-approach__body">
              Every formulation we specify is built around three variables unique to your plant: your incoming water chemistry, your base metal and soil type, and your downstream compliance requirements. The same zinc phosphating concentrate behaves differently at pH 3.1 versus pH 3.5, at 45°C versus 55°C, with hard water versus soft. We account for all of it.
            </p>
            <p className="tech-approach__body">
              The result is a system that holds specification across every shift, every operator, and every season — not a product that performs well on the trial run and drifts two weeks later.
            </p>
          </div>
        </div>

        <div className="tech-approach__pillars">
          {[
            { label: 'Formulation', desc: 'Chemistry designed around your water, your metal, and your line — not adapted from a generic concentrate.' },
            { label: 'Verification', desc: 'Every parameter monitored and titrated. Process health confirmed before each production run, not after a rejection.' },
            { label: 'Compliance', desc: 'REACH, RoHS, and OEM paint shop standards built into the specification from day one — not retrofitted under audit pressure.' },
          ].map((p) => (
            <div className="tech-approach__pillar" key={p.label}>
              <div className="tech-approach__pillar-label">{p.label}</div>
              <p className="tech-approach__pillar-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
