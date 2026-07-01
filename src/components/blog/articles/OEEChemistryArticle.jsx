import { Link } from 'react-router-dom';

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

export default function OEEChemistryArticle() {
  return (
    <>
      <header className="article-hero">
        <div className="article-hero-inner">
          <div className="article-meta">
            <span className="article-tag">IoT &amp; Automation</span>
            <span className="article-date">June 2025</span>
            <span className="article-read-time">10 min read</span>
          </div>
          <h1>OEE and Chemistry: Why Bath Downtime Is an Invisible Line Item on Your Plant's Efficiency Report</h1>
          <p className="article-deck">Plants track machine breakdowns, changeover time, and reject rates religiously as OEE losses. Almost none of them track the hours lost to an emergency bath dump, a quality hold pending titration, or a batch rerun after a coating failure — even though, on a phosphating line, that number is often larger than the mechanical downtime it sits next to.</p>
          <div className="article-byline">
            <div className="byline-avatar">A</div>
            <div>
              <div className="byline-name">Mr. Aswin Kumar</div>
              <div className="byline-role">Automation &amp; Business Operations · 15+ years in IoT &amp; industrial control</div>
            </div>
          </div>
        </div>
      </header>

      <div className="article-layout">
        <article className="article-body">
          <h2>OEE Was Built for Mechanical Losses — Chemistry Doesn't Fit the Template</h2>
          <p>Overall Equipment Effectiveness — the product of Availability, Performance, and Quality — is the standard framework most Indian manufacturing plants use to measure how effectively a line converts planned production time into good parts. It was developed for, and is still overwhelmingly applied to, mechanical and electrical equipment: motor failures, tooling changeovers, conveyor jams, sensor faults. Every plant with a functioning maintenance and quality system can tell you, to the hour, how much downtime a gearbox failure cost last quarter.</p>
          <p>Ask the same plant how much downtime the phosphating bath cost last quarter — not the pump or the heater, but the chemistry itself — and the answer is usually a shrug, or a number that only captures the days the line was physically stopped for a full bath dump and refill. The hours lost to a quality hold while an operator re-titrates a suspect bath, the rework cycles for a batch that failed inspection and had to be reprocessed, the reduced line speed run deliberately during a period of known bath instability — none of this typically has a bucket in the plant's OEE reporting. It happens, it costs real time and real money, and it is functionally invisible in the reports that are supposed to capture exactly this kind of loss.</p>

          <h2>Mapping Chemistry Losses Onto the Three OEE Factors</h2>
          <p>The reason chemistry-driven downtime goes untracked is not that it doesn't fit the OEE framework — it fits cleanly into all three factors. It is simply never coded that way, because most OEE data collection systems are built around machine-state sensors (running/stopped/idle) rather than process-chemistry state, and nobody has gone back to retrofit the categories.</p>
          <ul>
            <li><strong>Availability losses</strong> — the line is stopped, not because a machine failed, but because the bath has to be dumped and refilled outside its planned change-out schedule (contamination, an addition error, a supplier lot problem), or because production is paused pending a manual titration result before parts can be released to continue.</li>
            <li><strong>Performance losses</strong> — the line runs, but at reduced speed or with extended dwell times, because a known bath instability requires slower processing to maintain acceptable coating quality — a very common, almost never separately logged, "soft" performance loss.</li>
            <li><strong>Quality losses</strong> — parts are rejected or held for rework because of coating weight variation, patchy coverage, or failed salt-spray/adhesion testing traceable to bath parameter drift, rather than to a mechanical or handling defect.</li>
          </ul>
          <p>Every one of these events already exists in most plants' informal knowledge — the shift supervisor remembers the day the bath had to be dumped early, the quality team remembers the batch that got reworked — but because there is no chemistry-specific loss category on the standard OEE tracking sheet, these events get logged (if at all) under a generic "other" bucket, or not logged as downtime at all because the line was technically "running," just running badly.</p>

          <div className="callout">
            <div className="callout-label">Practical Note</div>
            <p>A useful diagnostic: pull your OEE loss Pareto for the last quarter and look for an "other" or "miscellaneous" category above 8–10% of total losses. On plants with phosphating or other wet-chemistry process steps, a significant share of that bucket is very often chemistry-driven downtime that has never been broken out and named.</p>
          </div>

          <h2>Why This Category Gets Missed — And Why It's Often Larger Than It Looks</h2>
          <p>Chemistry-driven downtime is easy to miss for a structural reason: it rarely presents as a single dramatic event the way a motor burnout does. It accumulates in smaller increments spread across many shifts — twenty minutes here for an unscheduled titration recheck, two hours there for a batch rerun, half a shift's reduced line speed while an unstable bath is nursed through to the next scheduled dump. None of these individually looks significant enough to formally log as a loss event, and none of them individually is. Summed over a quarter, on a line running a phosphating or surface-treatment step, they routinely add up to a meaningful share of total unplanned downtime — the kind of number that, once actually measured, changes how a plant prioritises its improvement spending.</p>
          <p>The other reason it gets missed is organisational: bath chemistry is typically owned by the quality or process engineering function, while OEE reporting is typically owned by production and maintenance. The two data sets rarely get merged, so a titration-driven quality hold shows up (if anywhere) in a quality department log that never makes it into the plant's OEE dashboard.</p>

          <table className="data-table">
            <thead>
              <tr>
                <th>OEE Loss Category</th>
                <th>Typical Chemistry-Driven Cause</th>
                <th>Monitoring Intervention</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Availability — unplanned stop</strong></td>
                <td>Emergency bath dump due to contamination or parameter excursion discovered late</td>
                <td>Continuous parameter trending flags drift hours before it becomes dump-worthy, converting an emergency stop into a scheduled correction</td>
              </tr>
              <tr>
                <td><strong>Availability — quality hold</strong></td>
                <td>Production paused pending manual titration result before parts can be released</td>
                <td>Real-time dashboard gives an always-current reading; release decisions no longer wait on a manual test cycle</td>
              </tr>
              <tr>
                <td><strong>Performance — reduced speed</strong></td>
                <td>Line deliberately slowed to compensate for a known unstable bath</td>
                <td>Closed-loop dosing keeps the bath inside its control band, removing the instability that made slower running necessary</td>
              </tr>
              <tr>
                <td><strong>Performance — micro-stops</strong></td>
                <td>Frequent short stops for manual spot-checks during a suspected drift period</td>
                <td>Continuous logging removes the need for ad hoc spot-checks; alerts fire only on genuine excursions</td>
              </tr>
              <tr>
                <td><strong>Quality — rework/reject</strong></td>
                <td>Batch fails coating weight or salt-spray check, traced back to an undetected bath excursion</td>
                <td>Historical parameter log lets quality teams correlate failures to exact bath conditions and catch the pattern before the next batch runs</td>
              </tr>
            </tbody>
          </table>

          <blockquote>
            <p>"A plant that tracks every minute of mechanical downtime and none of its chemistry downtime is not measuring OEE — it is measuring half of OEE, and reporting it as the whole number."</p>
          </blockquote>

          <h2>From Unplanned Chemistry Downtime to Planned Maintenance Windows</h2>
          <p>The practical value of real-time bath monitoring, viewed through an OEE lens, is not simply "better chemistry" — it is the conversion of unplanned downtime into planned downtime, which is one of the most reliable levers in any OEE improvement programme. An emergency bath dump triggered by a parameter excursion that nobody saw coming is unplanned downtime in the worst sense: unscheduled, disruptive to the production plan, and often discovered only after parts have already been affected. The same bath dump, triggered instead by a trend that has been visible on a dashboard for two shifts and scheduled into a planned maintenance window, is a completely different event from an OEE standpoint — same chemistry, same eventual bath change-out, but one is a loss event and the other is a planned activity that barely registers.</p>
          <p>This is the same logic that mechanical maintenance teams already apply through predictive and condition-based maintenance — vibration monitoring on a bearing to catch a failure before it becomes an unplanned stop. Real-time bath monitoring is the direct chemistry equivalent: continuous parameter trending that turns "the bath failed and we didn't see it coming" into "the bath is trending toward a change-out and we've scheduled it for Sunday's planned maintenance window."</p>

          <h2>Getting Chemistry Onto Your OEE Report</h2>
          <p>Adding chemistry as a first-class OEE loss category does not require a new software platform on its own — it requires three changes most plants can make with what they already have:</p>
          <ol>
            <li><strong>Create explicit loss codes for chemistry-driven events</strong> — "bath dump — unplanned," "quality hold — titration pending," "reduced speed — bath instability" — distinct from generic "process" or "other" codes, so the Pareto analysis actually surfaces them.</li>
            <li><strong>Route bath parameter data into the same reporting cycle as production and quality data.</strong> If chemistry data lives only in a separate quality department log, it will never reach the OEE dashboard that production management actually reviews.</li>
            <li><strong>Baseline the current, mostly invisible number before investing in monitoring equipment.</strong> A quarter of properly coded chemistry-loss data, even collected manually, tells you whether this is a five-hour-a-quarter problem or a fifty-hour-a-quarter problem — and that number is what justifies (or doesn't) the investment in continuous monitoring.</li>
          </ol>

          <hr className="article-divider" />

          <h2>Where This Leads</h2>
          <p>Most plants that go through this exercise are surprised by the size of the number once it's actually coded and totalled — chemistry-driven downtime that had been quietly absorbed into "the way the line runs" turns out to be one of the larger addressable loss categories on the sheet, and unlike a machine retrofit, correcting it is often a matter of instrumentation and process discipline rather than capital equipment replacement.</p>

          <div className="callout">
            <div className="callout-label">Download</div>
            <p>Request our <strong>OEE Chemistry Loss Tracker</strong> — a simple spreadsheet template with pre-built loss codes for bath-driven downtime, designed to plug into your existing OEE reporting cycle. Email <a href="mailto:info@macrocoats.in" style={{ color: 'var(--accent)' }}>info@macrocoats.in</a> with subject "OEE Chemistry Tracker" — we'll send it within 24 hours.</p>
          </div>

          <div className="article-cta">
            <div className="article-cta-inner">
              <h3>Get a <em>free process chemistry audit</em> for your line</h3>
              <p>If you suspect chemistry-driven downtime is a hidden line item on your OEE report, our team will visit, review your bath history against your production data, and deliver a written estimate of the addressable loss — at no cost. Conducted by Mr. Aswin Kumar or under his direct supervision.</p>
              <div className="cta-buttons">
                <Link to="/#process-audit" className="cta-btn-white">
                  Request Free Audit <ArrowIcon />
                </Link>
                <a href="mailto:info@macrocoats.in?subject=OEE Chemistry Tracker" className="cta-btn-ghost">
                  Get the Tracker
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </article>

        <aside className="article-sidebar">
          <div className="sidebar-card">
            <span className="sidebar-card-label">In This Article</span>
            <nav className="toc">
              <a href="#" onClick={(e) => e.preventDefault()}>OEE Wasn't Built for Chemistry</a>
              <a href="#" onClick={(e) => e.preventDefault()}>Mapping Losses Onto the Three Factors</a>
              <a href="#" onClick={(e) => e.preventDefault()}>Why This Category Gets Missed</a>
              <a href="#" onClick={(e) => e.preventDefault()}>Unplanned to Planned Downtime</a>
              <a href="#" onClick={(e) => e.preventDefault()}>Getting Chemistry Onto Your Report</a>
            </nav>
          </div>

          <div className="sidebar-card">
            <span className="sidebar-card-label">Free Offer</span>
            <h4>Get a Free Process Audit</h4>
            <p>2-hour plant visit. Bath history and OEE loss review. Written report. No obligation. Led by Mr. Aswin Kumar — 15+ years in industrial automation and control.</p>
            <Link to="/#process-audit" className="sidebar-btn">
              Request Audit <ArrowIcon />
            </Link>
            <a href="tel:9444961815" className="sidebar-btn secondary">+91 9444961815</a>
          </div>

          <div className="sidebar-card">
            <span className="sidebar-card-label">About the Author</span>
            <h4>Mr. Aswin Kumar</h4>
            <p>Automation &amp; Business Operations at MacroCoats. 15+ years in IoT and industrial control systems. Leads MacroCoats' real-time bath monitoring and auto-dosing programme across client plants in India.</p>
          </div>

          <div className="sidebar-card">
            <span className="sidebar-card-label">Related Reading</span>
            <nav className="toc">
              <Link to="/blog/auto-dosing-systems-closed-loop-chemical-baths">Auto-Dosing Systems for Chemical Baths</Link>
              <Link to="/blog/iot-bath-monitoring-phosphating-lines">IoT Bath Monitoring for Phosphating Lines</Link>
              <Link to="/blog/free-acid-vs-total-acid-phosphating">Free Acid vs Total Acid: The Two Numbers That Matter</Link>
            </nav>
          </div>
        </aside>
      </div>
    </>
  );
}
