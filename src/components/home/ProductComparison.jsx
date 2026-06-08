const rows = [
  { prop: 'Coating Weight',        zinc: '4–15 g/m²',              iron: '0.3–1.0 g/m²',        manganese: '5–30 g/m²'              },
  { prop: 'Bath Temperature',      zinc: '40–60°C',                 iron: '45–65°C',              manganese: '80–98°C'                 },
  { prop: 'Bath pH',               zinc: '3.0–4.5',                 iron: '4.0–6.0',              manganese: '2.0–3.5'                 },
  { prop: 'Salt Spray Resistance', zinc: '240–500 hrs',             iron: '96–240 hrs',           manganese: '300–600 hrs'             },
  { prop: 'Paint Adhesion',        zinc: 'Excellent',               iron: 'Good',                 manganese: 'Moderate'                },
  { prop: 'Primary Use Case',      zinc: 'Pre-paint, automotive OEM',iron: 'Light-duty pre-paint', manganese: 'Wear resistance, gears'  },
  { prop: 'Typical Process Stages',zinc: '5–7 stage',               iron: '3–5 stage',            manganese: '3–5 stage'               },
  { prop: 'Eco / Compliance',      zinc: 'Cr-free available',       iron: 'Low sludge, eco-grade',manganese: 'Cr-free variants'        },
  { prop: 'Recommended Sector',    zinc: 'Tier-1 / Tier-2 automotive',iron: 'Appliances, light eng.',manganese: 'Heavy eng., railways' },
];

export default function ProductComparison() {
  return (
    <section className="comparison">
      <div className="container">
        <div className="section-head">
          <div className="section-eyebrow">Phosphating Guide</div>
          <h2 className="section-title">Zinc · Iron · Manganese: <em>choosing the right system.</em></h2>
        </div>
        <p className="comp-intro">
          Not all phosphating is equal. The three conversion coating systems differ significantly in
          coating weight, operating conditions, and downstream performance. Use this guide to identify
          the right system for your base metal, process line, and end-use requirements.
        </p>

        <div className="comp-table-wrap">
          <table className="comp-table">
            <thead>
              <tr>
                <th className="comp-prop-head"></th>
                <th className="comp-col-head zinc-head">
                  <span className="comp-badge">Most Specified</span>
                  <span className="comp-col-name">Zinc Phosphate</span>
                  <span className="comp-formula">Zn₃(PO₄)₂ · 4H₂O</span>
                </th>
                <th className="comp-col-head">
                  <span className="comp-col-name">Iron Phosphate</span>
                  <span className="comp-formula">FePO₄</span>
                </th>
                <th className="comp-col-head">
                  <span className="comp-col-name">Manganese Phosphate</span>
                  <span className="comp-formula">Mn₃(PO₄)₂</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'comp-row-alt' : ''}>
                  <td className="comp-prop">{row.prop}</td>
                  <td className="comp-val zinc-val">{row.zinc}</td>
                  <td className="comp-val">{row.iron}</td>
                  <td className="comp-val">{row.manganese}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="comp-note">
          All systems available in custom formulations matched to your water chemistry and operating
          conditions. <a href="/#process-audit">Request a technical consultation</a> to identify the optimal
          phosphating system for your line. Or <a href="/blog/zinc-phosphate-vs-iron-phosphate-vs-manganese-phosphate" style={{ color: 'var(--accent)', fontWeight: 500 }}>read the full phosphate selection guide →</a>
        </p>
      </div>
    </section>
  );
}
