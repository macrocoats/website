const nodes = [
  { cx: 80,  cy: 80,  gold: true  },
  { cx: 200, cy: 60,  blue: true  },
  { cx: 320, cy: 90,  gold: false },
  { cx: 60,  cy: 200, gold: false },
  { cx: 200, cy: 200, gold: true  },
  { cx: 340, cy: 210, blue: true  },
  { cx: 90,  cy: 320, gold: true  },
  { cx: 210, cy: 340, gold: false },
  { cx: 330, cy: 330, gold: false },
];

const edges = [
  [0, 1], [1, 2], [0, 3], [1, 4], [2, 5],
  [3, 4], [4, 5], [3, 6], [4, 7], [5, 8],
  [6, 7], [7, 8],
];

const labels = [
  { x: 95,  y: 68,  text: 'Zn²⁺' },
  { x: 215, y: 48,  text: 'PO₄³⁻' },
  { x: 335, y: 78,  text: 'Fe²⁺' },
  { x: 205, y: 188, text: 'Mn²⁺' },
];

export default function TechHero() {
  return (
    <section className="tech-hero">
      <div className="tech-hero__inner container">
        {/* Left column */}
        <div className="tech-hero__content">
          <div className="tech-hero__eyebrow">TECHNOLOGY / PROCESS CHEMISTRY</div>
          <h1 className="tech-hero__h1">
            Where industrial chemistry meets{' '}
            <em>precision engineering.</em>
          </h1>
          <p className="tech-hero__sub">
            Every phosphating bath MacroCoats engineers is built on 30 years of industrial process data, validated chemistry, and real plant experience — formulated for your water, your line, and your compliance requirements.
          </p>
          <a href="#treatment-process" className="btn-primary btn-primary--gold tech-hero__cta">
            See Our Technology Stack
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
          <div className="tech-hero__credit">Established 1993 · Chennai, India</div>
        </div>

        {/* Right column — SVG molecule + floating cards */}
        <div className="tech-hero__visual">
          <svg
            className="tech-hero__molecule"
            viewBox="0 0 400 400"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* Edges */}
            {edges.map(([a, b], i) => (
              <line
                key={i}
                x1={nodes[a].cx} y1={nodes[a].cy}
                x2={nodes[b].cx} y2={nodes[b].cy}
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1"
                className="tech-hero__molecule-edge"
                style={{ animationDelay: `${i * 80}ms` }}
              />
            ))}
            {/* Nodes */}
            {nodes.map((n, i) => (
              <circle
                key={i}
                cx={n.cx}
                cy={n.cy}
                r={16}
                fill={n.gold ? 'rgba(201,168,76,0.25)' : n.blue ? 'rgba(59,130,246,0.25)' : 'rgba(255,255,255,0.03)'}
                stroke={n.gold ? 'rgba(201,168,76,0.5)' : n.blue ? 'rgba(59,130,246,0.4)' : 'rgba(255,255,255,0.15)'}
                strokeWidth="1"
                className="tech-hero__molecule-node"
                style={{ animationDelay: `${400 + i * 60}ms` }}
              />
            ))}
            {/* Chemical labels */}
            {labels.map((l) => (
              <text
                key={l.text}
                x={l.x}
                y={l.y}
                fill="rgba(255,255,255,0.35)"
                fontSize="10"
                fontFamily="var(--mono)"
                letterSpacing="0.05em"
              >
                {l.text}
              </text>
            ))}
          </svg>

          {/* Floating data cards */}
          <div className="tech-hero__data-card tech-hero__data-card--top">
            <div className="tech-hero__dc-label">BATH ACCURACY</div>
            <div className="tech-hero__dc-num">99.2%</div>
            <div className="tech-hero__dc-sub">Across monitored installations</div>
            <div className="tech-hero__dc-bar">
              <div className="tech-hero__dc-bar-fill" style={{ width: '99.2%' }}></div>
            </div>
          </div>
          <div className="tech-hero__data-card tech-hero__data-card--bottom">
            <div className="tech-hero__dc-label">PROCESS STAGES</div>
            <div className="tech-hero__dc-num">07</div>
            <div className="tech-hero__dc-sub">Pre-treatment to final coat</div>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="container">
        <div className="tech-hero__stats">
          {[
            { num: '30+', label: 'Years of Process R&D' },
            { num: '500+', label: 'Industrial Clients' },
            { num: '3', label: 'Product Families' },
            { num: '99.2%', label: 'Bath Accuracy' },
          ].map((s) => (
            <div className="tech-hero__stat" key={s.label}>
              <div className="tech-hero__stat-num">{s.num}</div>
              <div className="tech-hero__stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
