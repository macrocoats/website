import { Link } from 'react-router-dom';

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

export default function TechIoT() {
  return (
    <section className="tech-iot">
      <div className="container">
        <div className="tech-iot__inner">
          <div className="tech-iot__text">
            <div className="section-eyebrow tech-iot__eyebrow">IOT INTELLIGENCE</div>
            <h2 className="tech-iot__heading">
              Bath chemistry drifts. <em>Our system corrects it before you notice.</em>
            </h2>
            <p className="tech-iot__body">
              pH moves, concentration falls, temperature spikes. In a manually-monitored line, those drifts become defects before any operator notices. MacroCoats IoT edge controllers monitor pH, temperature, and TDS continuously — and trigger auto-dosing corrections the moment a parameter deviates from specification.
            </p>
            <p className="tech-iot__body">
              The result is bath chemistry that holds specification across every shift, every operator, and every season. Not because your operators are more attentive — because the system doesn't wait for them to act.
            </p>
            <Link
              to="/blog/iot-bath-monitoring-phosphating-lines"
              className="tech-iot__link"
            >
              Read the IoT monitoring deep-dive <ArrowIcon />
            </Link>
          </div>

          <div className="tech-iot__stats">
            {[
              { num: '< 30s', label: 'Alert to auto-dose correction' },
              { num: '24 / 7', label: 'Continuous monitoring — no shift gaps' },
              { num: '±0.1', label: 'pH accuracy across all monitored tanks' },
            ].map((s) => (
              <div className="tech-iot__stat" key={s.label}>
                <div className="tech-iot__stat-num">{s.num}</div>
                <div className="tech-iot__stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
