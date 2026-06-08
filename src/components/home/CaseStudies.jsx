const cases = [
  {
    num: '01',
    industry: 'Automotive Tier-1',
    location: 'Tamil Nadu',
    title: 'Eliminating paint adhesion failures on a high-speed stamping line',
    challenge: 'A Tier-1 stamped metal parts supplier was failing OEM paint adhesion audits due to inconsistent zinc phosphate coating weights — traced to uncontrolled bath chemistry drift on their high-volume line.',
    solution: 'Reformulated the zinc phosphating chemistry to account for local hard water (high TDS), and deployed real-time IoT bath monitoring with auto-dosing to hold pH and accelerator concentration within ±0.1 of spec.',
    metric: '0',
    metricLabel: 'paint adhesion failures across 18 months post-installation',
  },
  {
    num: '02',
    industry: 'Two-Wheeler Components',
    location: 'Tamil Nadu',
    title: 'Improving salt-spray performance while cutting waste sludge by 60%',
    challenge: 'A Tier-2 chassis component supplier was recording a 30% reject rate on 96-hour salt-spray tests and facing growing environmental compliance pressure from their chrome-based passivation process.',
    solution: 'Transitioned from iron to zinc phosphating and replaced the chromium passivation step with a REACH-compliant chromium-free alternative — reducing sludge generation and extending coating protection.',
    metric: '5×',
    metricLabel: 'salt-spray life improvement (96h → 480h) with 60% less waste sludge',
  },
  {
    num: '03',
    industry: 'Heavy Engineering',
    location: 'Pan-India',
    title: 'Extending service life of railway wagon components in coastal environments',
    challenge: 'A railway component manufacturer was seeing accelerated corrosion failures in coastal depot environments, and their existing chrome-based process was flagged for non-compliance during a Railway Board inspection.',
    solution: 'Specified a manganese phosphate conversion coating paired with a long-film rust preventive, replacing the chrome process entirely with a REACH and RoHS-compliant system validated for coastal salt conditions.',
    metric: '3×',
    metricLabel: 'component service life extension with full Railway Board compliance clearance',
  },
];

export default function CaseStudies() {
  return (
    <section className="case-studies">
      <div className="container">
        <div className="section-head">
          <div className="section-eyebrow">Case Studies</div>
          <h2 className="section-title">Results delivered, <em>plant by plant.</em></h2>
        </div>

        <div className="case-grid">
          {cases.map((c) => (
            <div className="case-card" key={c.num}>
              <div className="case-header">
                <span className="case-num">{c.num}</span>
                <div className="case-tags">
                  <span className="spec-badge">{c.industry}</span>
                  <span className="spec-badge">{c.location}</span>
                </div>
              </div>
              <h4 className="case-title">{c.title}</h4>
              <div className="case-body">
                <div className="case-row">
                  <span className="case-label">Challenge</span>
                  <p>{c.challenge}</p>
                </div>
                <div className="case-row">
                  <span className="case-label">Solution</span>
                  <p>{c.solution}</p>
                </div>
              </div>
              <div className="case-result">
                <span className="case-metric">{c.metric}</span>
                <span className="case-metric-label">{c.metricLabel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
