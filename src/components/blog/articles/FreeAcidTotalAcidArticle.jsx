import { Link } from 'react-router-dom';

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

export default function FreeAcidTotalAcidArticle() {
  return (
    <>
      <header className="article-hero">
        <div className="article-hero-inner">
          <div className="article-meta">
            <span className="article-tag">Phosphating</span>
            <span className="article-tag">Bath Management</span>
            <span className="article-date">May 2025</span>
            <span className="article-read-time">9 min read</span>
          </div>
          <h1>Free Acid vs Total Acid: The Two Numbers Every Phosphating Operator Must Understand</h1>
          <p className="article-deck">Ask most operators what free acid and total acid mean, and you'll get a titration procedure. Ask what the ratio between them means, and you'll usually get a shrug. That ratio is the single best predictor of coating quality on your shift.</p>
          <div className="article-byline">
            <div className="byline-avatar">S</div>
            <div>
              <div className="byline-name">Mr. Santhanam</div>
              <div className="byline-role">Technical Director · 40+ Years Process Chemistry</div>
            </div>
          </div>
        </div>
      </header>

      <div className="article-layout">
        <article className="article-body">
          <h2>Two Titrations, One Question Each</h2>
          <p>Every phosphating bath is checked, at minimum, with two titrations: free acid points and total acid points. Most operators can perform both correctly. Far fewer can explain what each one is actually measuring, and fewer still can explain why the relationship between the two — not either number by itself — is what actually predicts whether the coating coming off the line today will pass salt-spray or fail it.</p>
          <p>This matters because free acid and total acid can each independently sit "in range" on a titration sheet while the bath is quietly producing poor coating, if the ratio between them has drifted. Understanding the ratio, not just the individual numbers, is what separates a bath operator who is filling in a log from one who is actually controlling the process.</p>

          <h2>What Free Acid Actually Measures</h2>
          <p>Free acid points measure the concentration of uncombined phosphoric acid in the bath — the acid that is present in solution but not yet tied up as a metal phosphate salt. It is measured by titrating a fixed sample volume against a standard sodium hydroxide solution, using an indicator that changes colour at the pH point where free, uncombined acid has been neutralised (bromophenol blue is the traditional indicator; a pH meter endpoint at approximately pH 3.8–4.0 is common in more controlled labs). The result — millilitres of titrant used, often multiplied by a factor depending on titrant normality — is reported as "points."</p>
          <p>Free acid is the aggressive, reactive component of the bath. It is what attacks the base metal on contact, dissolving iron (or zinc, for galvanised substrates) into solution to drive the phosphating reaction forward. Too little free acid and the reaction stalls — dissolution is too slow to generate the metal ions needed to form a coating in the available dwell time. Too much free acid and the reaction runs away — excessive metal dissolution produces coarse, heavy, poorly adherent coating and elevated sludge.</p>

          <h2>What Total Acid Actually Measures</h2>
          <p>Total acid points measure everything — the free, uncombined phosphoric acid plus the acid that is chemically bound up as metal phosphate (the primary and secondary phosphate salts already dissolved in the working bath). It is titrated the same way as free acid but to a higher pH endpoint (typically around pH 8.2–8.4, using phenolphthalein or a pH meter), which is the point at which even the bound phosphate has been fully neutralised.</p>
          <p>Total acid is, in effect, a proxy for the overall phosphate concentration of the bath — how much "coating-forming material" is present and available, independent of how reactive it currently is. A bath can have adequate total acid (plenty of phosphate present) but inadequate free acid (not reactive enough to use it), or the reverse — and this is exactly the situation that a single-number check misses.</p>

          <div className="callout">
            <div className="callout-label">Practical Note</div>
            <p>Some operators confuse "more total acid is always better" with correct bath management. It is not — total acid without a healthy free acid to activate it just sits in solution. Total acid needs to be read in the context of the ratio, exactly like free acid does.</p>
          </div>

          <h2>Why the Ratio Is the Number That Actually Matters</h2>
          <p>The ratio of total acid to free acid (TA:FA) describes the balance between "reactive capacity" and "available material" in a way that neither number alone can. A bath can pass both individual titrations against their target ranges and still be producing poor coating if the ratio between them has drifted outside its healthy window — because the ratio is what determines the rate and completeness of the phosphating reaction on the part surface, not the absolute concentrations in isolation.</p>
          <p>A ratio that is too high (free acid too low relative to total acid) means the bath has plenty of phosphate present but is not reactive enough to convert it into coating efficiently — parts come out under-coated, patchy, or with visible bare spots in low-flow areas. A ratio that is too low (free acid too high relative to total acid) means the bath is over-reactive relative to its phosphate reserve — parts come out over-etched, with coarse crystal structure, excessive sludge generation, and frequently a grey, powdery coating that brushes off rather than a tight, adherent one.</p>

          <table className="data-table">
            <thead>
              <tr>
                <th>Phosphate Type</th>
                <th>Typical Free Acid Range</th>
                <th>Typical Total Acid Range</th>
                <th>Target TA:FA Ratio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Zinc phosphate (heavy, automotive)</strong></td>
                <td>4–8 points</td>
                <td>18–28 points</td>
                <td>4.5 : 1 to 6 : 1</td>
              </tr>
              <tr>
                <td><strong>Zinc phosphate (light, general engineering)</strong></td>
                <td>3–6 points</td>
                <td>14–22 points</td>
                <td>4 : 1 to 5.5 : 1</td>
              </tr>
              <tr>
                <td><strong>Iron phosphate</strong></td>
                <td>2–4 points</td>
                <td>6–12 points</td>
                <td>3 : 1 to 4 : 1</td>
              </tr>
              <tr>
                <td><strong>Manganese phosphate (heavy duty)</strong></td>
                <td>5–9 points</td>
                <td>28–42 points</td>
                <td>5.5 : 1 to 7 : 1</td>
              </tr>
              <tr>
                <td><strong>Zinc phosphate (galvanised substrate)</strong></td>
                <td>2–4 points</td>
                <td>10–16 points</td>
                <td>4 : 1 to 5 : 1</td>
              </tr>
            </tbody>
          </table>
          <p>These figures are typical starting reference ranges for well-formulated commercial systems — your supplier's specification sheet for the exact product in your bath should always be the controlling reference, since accelerator type, operating temperature, and specific formulation all shift the target ratio somewhat.</p>

          <h2>Reading Ratio Drift — High vs Low</h2>
          <p>A ratio drifting in either direction produces a different, largely predictable set of symptoms, and recognising the pattern lets you correct the actual cause rather than guessing.</p>
          <p><strong>Ratio drifting high (free acid too low relative to total acid)</strong> typically shows up as: extended dwell time needed to achieve full coverage, visible bare or thin patches especially in low-turbulence areas of complex parts, a coating that looks thin and iridescent rather than a uniform grey, and declining salt-spray performance even though total acid looks "fine" on the log sheet. The usual causes are insufficient acid replenishment relative to phosphate addition, a bath running cooler than specified (which suppresses the acid-driving reaction), or an accelerator that has depleted faster than the acid balance was corrected for.</p>
          <p><strong>Ratio drifting low (free acid too high relative to total acid)</strong> typically shows up as: coarse, gritty coating texture, elevated sludge generation, visible over-etching or a slightly frosted appearance on the metal, and coating that looks heavy but performs poorly in adhesion and salt-spray testing because the crystal structure is uncontrolled rather than fine and uniform. The usual causes are over-correction of free acid during a manual top-up, a bath running hotter than specified, or phosphate concentrate additions falling behind acid additions.</p>

          <blockquote>
            <p>"Free acid and total acid are not two separate checks that happen to be done together — they are one measurement of bath health, read in two parts. An operator who only watches one number is reading half a sentence and guessing at the rest."</p>
          </blockquote>

          <h2>Building the Ratio Into Your Daily Routine</h2>
          <p>Most bath log sheets have a column for free acid and a column for total acid. Very few have a column for the ratio, which means the calculation — and the judgement that goes with it — depends entirely on whether the person reading the sheet happens to do the division in their head. That is an easy gap to close.</p>
          <ul>
            <li>Add a calculated TA:FA column to your existing log sheet or spreadsheet — a single extra division, done automatically, removes the dependency on someone remembering to check it.</li>
            <li>Set an alert threshold on the ratio itself, not just on the individual free acid and total acid ranges, so a drifting ratio is flagged even while both individual numbers remain technically in range.</li>
            <li>Review ratio trend over a week, not just the day's snapshot. A ratio drifting steadily in one direction over several days is a more actionable signal than any single day's reading, and it gives you time to correct before the ratio actually leaves its target window.</li>
          </ul>

          <hr className="article-divider" />

          <h2>Where This Fits Into Broader Bath Control</h2>
          <p>Free acid and total acid, and the ratio between them, are the foundation of phosphating bath control — but they are typically checked only twice a shift under a manual titration routine, which means the ratio itself is only known twice a shift too. Continuous pH and conductivity monitoring, tied into an automated dosing system, extends exactly this same logic — free acid and total acid balance — into a continuously measured and continuously corrected parameter, rather than a twice-daily snapshot.</p>
          <p>Whether or not your line is ready for that step, the starting point is the same: understand what your two numbers are actually telling you together, not separately, and your coating consistency will improve before you change a single piece of equipment.</p>

          <div className="callout">
            <div className="callout-label">Download</div>
            <p>Request our <strong>Free Acid / Total Acid Ratio Reference Card</strong> — a laminated A5 card with target ratio ranges by phosphate type, a symptom-to-cause troubleshooting table, and a titration technique refresher. Email <a href="mailto:info@macrocoats.in" style={{ color: 'var(--accent)' }}>info@macrocoats.in</a> with subject "Ratio Reference Card" — we'll send it within 24 hours.</p>
          </div>

          <div className="article-cta">
            <div className="article-cta-inner">
              <h3>Get a <em>free process chemistry audit</em> for your line</h3>
              <p>If your coating quality is inconsistent despite titration results that look "in range," our team will visit, review your bath ratio history, and deliver a written root cause analysis — at no cost. Conducted by Mr. Santhanam or under his direct supervision.</p>
              <div className="cta-buttons">
                <Link to="/#process-audit" className="cta-btn-white">
                  Request Free Audit <ArrowIcon />
                </Link>
                <a href="mailto:info@macrocoats.in?subject=Ratio Reference Card" className="cta-btn-ghost">
                  Get the Reference Card
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
              <a href="#" onClick={(e) => e.preventDefault()}>Two Titrations, One Question Each</a>
              <a href="#" onClick={(e) => e.preventDefault()}>What Free Acid Measures</a>
              <a href="#" onClick={(e) => e.preventDefault()}>What Total Acid Measures</a>
              <a href="#" onClick={(e) => e.preventDefault()}>Why the Ratio Matters</a>
              <a href="#" onClick={(e) => e.preventDefault()}>Reading Ratio Drift</a>
              <a href="#" onClick={(e) => e.preventDefault()}>Building the Ratio Into Your Routine</a>
            </nav>
          </div>

          <div className="sidebar-card">
            <span className="sidebar-card-label">Free Offer</span>
            <h4>Get a Free Process Audit</h4>
            <p>2-hour plant visit. Bath log and ratio history review. Written report. No obligation. Led by Mr. Santhanam — 40+ years of process chemistry expertise.</p>
            <Link to="/#process-audit" className="sidebar-btn">
              Request Audit <ArrowIcon />
            </Link>
            <a href="tel:9444961815" className="sidebar-btn secondary">+91 9444961815</a>
          </div>

          <div className="sidebar-card">
            <span className="sidebar-card-label">About the Author</span>
            <h4>Mr. Santhanam</h4>
            <p>Technical Director at MacroCoats. 40+ years in chemical formulation and surface treatment. Has diagnosed bath chemistry issues across automotive, railways, and heavy engineering plants across India.</p>
          </div>

          <div className="sidebar-card">
            <span className="sidebar-card-label">Related Reading</span>
            <nav className="toc">
              <Link to="/blog/zinc-phosphate-vs-iron-phosphate-vs-manganese-phosphate">Zinc vs Iron vs Manganese Phosphate: Selection Guide</Link>
              <Link to="/blog/reading-phosphating-sludge-bath-process-chemistry">Reading Your Phosphating Sludge</Link>
              <Link to="/blog/auto-dosing-systems-closed-loop-chemical-baths">Auto-Dosing Systems for Chemical Baths</Link>
            </nav>
          </div>
        </aside>
      </div>
    </>
  );
}
