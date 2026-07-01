import { Link } from 'react-router-dom';

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

export default function JobCoaterCaseStudyArticle() {
  return (
    <>
      <header className="article-hero">
        <div className="article-hero-inner">
          <div className="article-meta">
            <span className="article-tag">Case Study</span>
            <span className="article-date">August 2026</span>
            <span className="article-read-time">7 min read</span>
          </div>
          <h1>How a Coimbatore Job Coater Cut Rejection Rates by 40% <em>Without Changing His Equipment</em></h1>
          <p className="article-deck">A note on this case study: the plant, numbers, and quotes below are an anonymised, illustrative composite drawn from a job-coating engagement of the kind MacroCoats runs regularly. Identifying details have been changed at the customer's request.</p>
          <div className="article-byline">
            <div className="byline-avatar">M</div>
            <div>
              <div className="byline-name">MacroCoats</div>
              <div className="byline-role">Technical & Regulatory Team · Customer Success Story</div>
            </div>
          </div>
        </div>
      </header>

      <div className="article-layout">
        <article className="article-body">
          <h2>The Problem: A Good Line With Inconsistent Results</h2>
          <p>The plant in this story is a mid-sized job-coating shop in the Coimbatore industrial belt — a familiar profile in Tamil Nadu's engineering ecosystem. Owner-operated, in business for over a decade, running a single conveyorised zinc phosphate line processing fabricated brackets, fasteners, and small assemblies for a mix of local automotive-ancillary and general engineering customers. The equipment was adequate: a properly sized dip-tank line, functioning heaters, a working rinse cascade. Nothing about the hardware was the bottleneck.</p>
          <p>The problem was rejection rate. Batches were coming back from customers at a rate hovering around 12% — sometimes for visible coating defects (patchiness, powdery build-up, uneven colour), sometimes for failed salt-spray retests after painting. The frustrating part, from the owner's perspective, was the inconsistency: two batches of visually identical parts, processed a day apart on the same line, would sometimes pass and sometimes fail. His instinct — a very common one in the job-coating segment — was that the equipment was undersized or ageing, and that the fix would require capital investment in a new line or an upgraded heating and filtration system.</p>

          <h2>What MacroCoats Found on the First Visit</h2>
          <p>A two-hour diagnostic visit told a different story. The bath chemistry itself, sampled and titrated on the spot, was within a workable range — not perfectly centred, but not the primary cause of a 12% rejection rate on its own. What stood out was the absence of a consistent process discipline around the bath:</p>
          <ul>
            <li><strong>Titration frequency was irregular.</strong> Free acid and total acid checks were done "when someone remembered," which in practice meant once every day and a half to two days rather than the twice-per-shift cadence the chemistry needed at that throughput.</li>
            <li><strong>Titration technique varied by operator.</strong> Three operators ran the line across shifts, and each had learned the titration procedure informally from the person before them — with small but compounding differences in endpoint judgement and sample handling.</li>
            <li><strong>There was no written log.</strong> Readings, when taken, were mentally tracked or scribbled on a loose sheet that rarely survived the week. There was no way to see a trend forming before it became a rejection.</li>
            <li><strong>Chemical additions were reactive, not corrective-and-verified.</strong> When a reading looked off, an operator would add chemical by feel and move on, without a follow-up check to confirm the bath had actually returned to range.</li>
          </ul>
          <p>In short: this was not an equipment problem or even primarily a formulation problem. It was a bath-management and process-discipline problem — the kind that is common, fixable without capital spend, and easy to miss if the diagnostic stops at "check the chemical."</p>

          <div className="callout">
            <div className="callout-label">Practical Note</div>
            <p>This pattern — adequate equipment, inconsistent results, operator-dependent titration — is one of the most common root causes we see in owner-operated job-coating shops. It is also one of the most gratifying to fix, because the corrective actions cost little to nothing in capital and the improvement shows up within weeks.</p>
          </div>

          <h2>What Changed: Three Interventions, No New Equipment</h2>
          <p>The corrective programme had three parts, implemented over the first two weeks and reinforced through the following six:</p>
          <p><strong>1. A simplified, standardised titration routine.</strong> Rather than retrain operators on the existing multi-step titration method (which was itself a source of the technique variance), we replaced it with a simplified single-indicator routine designed to be run consistently by any operator on shift, with a laminated step card at the bath station. The simplified method sacrifices a small amount of precision against a full analytical titration, but the gain in consistency across operators and shifts far outweighed that cost at this plant's throughput and tolerance requirements.</p>
          <p><strong>2. A daily parameter log at the bath station.</strong> A one-page log — date, shift, operator initials, free acid, total acid, temperature, one-line observation — was introduced and made a fixed part of the shift handover. This is a low-cost intervention, but its value compounds: after three weeks, the log itself started surfacing patterns (a consistent afternoon-shift drift, for instance) that no single reading would have revealed.</p>
          <p><strong>3. A half-day operator training session, repeated per shift.</strong> All three operators went through the same half-day session covering the simplified titration method, correct sample handling, the log procedure, and — critically — what to do when a reading falls outside range (a defined correction procedure with a follow-up check, replacing the previous "add chemical and move on" habit).</p>
          <p>No new tanks, heaters, pumps, or filtration equipment were purchased. The total cost of the intervention was the consulting time and the operator training hours — a fraction of what a new line or equipment upgrade would have cost.</p>

          <h2>The Result</h2>
          <p>Rejection rate was tracked weekly against the same customer-reported rejection criteria used before the intervention, over an eight-week period following implementation.</p>

          <table className="data-table">
            <thead>
              <tr>
                <th>Metric</th>
                <th>Before (Baseline)</th>
                <th>After (Week 8)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Overall rejection rate</strong></td>
                <td>~12%</td>
                <td>~7% (≈ 40% relative reduction)</td>
              </tr>
              <tr>
                <td><strong>Titration frequency</strong></td>
                <td>Every 1.5–2 days, informal</td>
                <td>Twice per shift, logged</td>
              </tr>
              <tr>
                <td><strong>Bath parameter variance (free acid, week-to-week)</strong></td>
                <td>High — no baseline to compare against</td>
                <td>Narrow band around target, visible on the log</td>
              </tr>
              <tr>
                <td><strong>Capital equipment investment required</strong></td>
                <td>None</td>
                <td>None</td>
              </tr>
              <tr>
                <td><strong>Salt-spray retest failures (post-paint)</strong></td>
                <td>Recurring, unpredictable</td>
                <td>Isolated, traceable to specific logged events</td>
              </tr>
            </tbody>
          </table>

          <p>Rejection rate did not fall to zero, and it should not be expected to — some rejection rate is inherent to any job-coating operation handling variable incoming part quality and diverse customer specifications. But cutting it nearly in half, with no capital spend, restored margin on every batch that would previously have been reworked or discounted, and — just as importantly — gave the owner a predictable process he could stand behind when a customer questioned a batch.</p>

          <blockquote>
            <p>"I was ready to take a loan for a new line. What we actually needed was a logbook and twenty minutes of training, twice, for three people. I wish I had called six months earlier." — plant owner, as relayed to our team following the engagement (paraphrased and anonymised)</p>
          </blockquote>

          <h2>Why This Pattern Is So Common</h2>
          <p>Owner-operated job-coating shops in India frequently under-invest in process discipline relative to equipment, for an understandable reason: equipment is a visible, one-time capital decision, while process discipline is an ongoing, unglamorous operational habit that nobody budgets for. When rejection rates rise, the instinctive diagnosis reaches for the visible variable — the tank, the heater, the chemical brand — rather than the invisible one: whether the bath is actually being measured and corrected consistently, shift after shift, by every operator, in the same way.</p>
          <p>The good news, as this case illustrates, is that process-discipline problems are usually the cheapest ones to fix — and the fix tends to be durable, because a logged, standardised routine is self-reinforcing in a way that an individual operator's memory is not.</p>

          <hr className="article-divider" />

          <h2>Is This Your Plant?</h2>
          <p>If your rejection rate is inconsistent despite equipment that seems adequate — batches passing and failing with no obvious pattern — the most likely explanation is not your tank or your chemical brand. It is worth a diagnostic visit before any capital decision is made.</p>

          <div className="callout">
            <div className="callout-label">Download</div>
            <p>Request our <strong>Bath Discipline Starter Kit</strong> — a simplified single-indicator titration step card, a one-page daily log template, and a correction-and-verify checklist, formatted for laminating at the bath station. Email <a href="mailto:info@macrocoats.in" style={{ color: 'var(--accent)' }}>info@macrocoats.in</a> with subject "Bath Discipline Kit" — we'll send it within 24 hours.</p>
          </div>

          <div className="article-cta">
            <div className="article-cta-inner">
              <h3>Get a <em>free process chemistry audit</em> for your line</h3>
              <p>If your rejection rate is inconsistent and you are not sure whether it is chemistry, equipment, or process discipline, our team will visit, review your bath and your process, and deliver a written root cause analysis — at no cost.</p>
              <div className="cta-buttons">
                <Link to="/#process-audit" className="cta-btn-white">
                  Request Free Audit <ArrowIcon />
                </Link>
                <a href="mailto:info@macrocoats.in?subject=Bath Discipline Kit" className="cta-btn-ghost">
                  Get the Starter Kit
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
              <a href="#" onClick={(e) => e.preventDefault()}>The Problem</a>
              <a href="#" onClick={(e) => e.preventDefault()}>What We Found</a>
              <a href="#" onClick={(e) => e.preventDefault()}>Three Interventions, No New Equipment</a>
              <a href="#" onClick={(e) => e.preventDefault()}>The Result</a>
              <a href="#" onClick={(e) => e.preventDefault()}>Why This Pattern Is So Common</a>
            </nav>
          </div>

          <div className="sidebar-card">
            <span className="sidebar-card-label">Free Offer</span>
            <h4>Get a Free Process Audit</h4>
            <p>2-hour plant visit. Bath and process discipline review. Written report. No obligation.</p>
            <Link to="/#process-audit" className="sidebar-btn">
              Request Audit <ArrowIcon />
            </Link>
            <a href="tel:9444961815" className="sidebar-btn secondary">+91 9444961815</a>
          </div>

          <div className="sidebar-card">
            <span className="sidebar-card-label">About the Author</span>
            <h4>MacroCoats Technical & Regulatory Team</h4>
            <p>MacroCoats has supported job-coating shops and OEM lines across Tamil Nadu since 1993, with a focus on process discipline as much as chemical formulation.</p>
          </div>

          <div className="sidebar-card">
            <span className="sidebar-card-label">Related Reading</span>
            <nav className="toc">
              <Link to="/blog/real-cost-phosphating-bath-failures">The Real Cost of Phosphating Bath Failures</Link>
              <Link to="/blog/reading-phosphating-sludge-bath-process-chemistry">Reading Your Phosphating Sludge</Link>
              <Link to="/blog/inconsistent-salt-spray-test-results-phosphating-bath">Why Your Salt-Spray Results Are Inconsistent</Link>
            </nav>
          </div>
        </aside>
      </div>
    </>
  );
}
