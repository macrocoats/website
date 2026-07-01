import { Link } from 'react-router-dom';

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

export default function VendorQualificationArticle() {
  return (
    <>
      <header className="article-hero">
        <div className="article-hero-inner">
          <div className="article-meta">
            <span className="article-tag">Compliance & Regulatory</span>
            <span className="article-tag">Quality</span>
            <span className="article-date">October 2026</span>
            <span className="article-read-time">10 min read</span>
          </div>
          <h1>Vendor Qualification for OEM Approval: What Documentation Your Chemistry Supplier <em>Should Already Have Ready</em></h1>
          <p className="article-deck">A practical checklist for procurement and quality teams evaluating a phosphating or surface-treatment chemistry supplier — including us. If a supplier can't produce this documentation on request, that itself is the finding.</p>
          <div className="article-byline">
            <div className="byline-avatar">M</div>
            <div>
              <div className="byline-name">MacroCoats</div>
              <div className="byline-role">Technical & Regulatory Team</div>
            </div>
          </div>
        </div>
      </header>

      <div className="article-layout">
        <article className="article-body">
          <h2>Vendor Qualification Is a Documentation Exercise Before It Is a Chemistry Exercise</h2>
          <p>When a quality or procurement team qualifies a new chemistry supplier for OEM approval — whether for a Tier-1 automotive programme, a railways vendor list, or an internal approved-supplier register — the technical performance of the chemistry is only half the evaluation. The other half, often under-weighted, is whether the supplier can produce, on request and without a scramble, the documentation that demonstrates the chemistry is consistently manufactured, properly characterised, and backed by a quality system capable of catching problems before they reach your plant.</p>
          <p>This article is deliberately framed as a general evaluation checklist, not a sales pitch — use it against any supplier you are evaluating, including MacroCoats. A supplier that hesitates, stalls, or produces documentation that looks freshly assembled for the occasion is telling you something important about how they operate day to day.</p>

          <h2>The Documentation That Should Already Exist</h2>
          <p><strong>Formulation consistency and batch certificates.</strong> Every batch of phosphating concentrate, additive, or specialty chemical should have a corresponding certificate of analysis (CoA) recording the batch number, manufacture date, and measured values for the formulation's critical parameters (specific gravity, active content, pH, key ion concentrations as applicable). A supplier with real batch-to-batch process control can produce a run of CoAs for recent batches on request, showing tight, consistent values — not just a single template CoA reused indefinitely.</p>
          <p><strong>Material Safety Data Sheets (MSDS/SDS).</strong> Current, GHS-compliant safety data sheets for every product supplied, updated to reflect the actual formulation currently shipped — not a legacy version with an outdated hazard classification or an ingredient that was reformulated two years ago. This is baseline regulatory hygiene, but it is surprising how often it lapses at smaller suppliers.</p>
          <p><strong>Quality system alignment (IATF 16949 or equivalent).</strong> For any supplier feeding into an automotive supply chain, IATF 16949 alignment — whether through direct certification or a documented quality management system built to equivalent standards — indicates the presence of the change-control, corrective-action, and traceability disciplines that OEM audits will expect to trace back through the supply chain. If the chemistry supplier itself is not IATF-certified (common for specialty chemical suppliers who are not certified but supply into certified customers), they should still be able to demonstrate batch traceability and a documented corrective action process when something goes wrong.</p>
          <p><strong>Process capability data.</strong> Beyond a single batch certificate, a serious supplier should be able to show process capability trends — Cpk-style data or an equivalent control-chart history — for the parameters that matter most to your process (typically free acid, total acid, and active content for phosphating concentrates). This is the difference between "here is one good batch" and "here is evidence that batches are consistently good."</p>
          <p><strong>Sample test reports validated against your process, not just theirs.</strong> A generic technical data sheet showing typical performance under the supplier's own test conditions is a starting point, not qualification evidence. Ask for — or generate jointly with the supplier — test reports run under conditions matching your actual line parameters (your substrate, your throughput, your temperature range), including salt-spray and coating-weight results specific to your application.</p>
          <p><strong>Technical support SLA.</strong> A written commitment on response time for technical queries and on-site support, particularly for line troubleshooting during ramp-up or after a process deviation. Verbal assurances ("we'll always be there for you") are not a substitute for a documented SLA that your quality team can cite during an internal audit.</p>
          <p><strong>Environmental and effluent compliance posture.</strong> Documentation showing the supplier's own manufacturing site complies with applicable pollution control board consents, and — separately — technical guidance on the effluent characteristics and treatment requirements of the chemistry they are supplying to you. OEM audits increasingly extend scrutiny to Tier-2 chemical suppliers' environmental compliance as part of overall supply chain risk assessment.</p>

          <table className="data-table">
            <thead>
              <tr>
                <th>Documentation Item</th>
                <th>Why It Matters</th>
                <th>Red Flag If Missing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Batch CoAs (recent, multiple)</strong></td>
                <td>Demonstrates actual batch-to-batch consistency, not just a formulation spec on paper</td>
                <td>Only one template CoA offered, or CoAs show implausibly identical values across batches</td>
              </tr>
              <tr>
                <td><strong>Current MSDS/SDS per product</strong></td>
                <td>Regulatory baseline; confirms formulation hasn't silently drifted from what's documented</td>
                <td>SDS is more than 2–3 years old, or doesn't match the product currently being shipped</td>
              </tr>
              <tr>
                <td><strong>IATF 16949 alignment or equivalent QMS evidence</strong></td>
                <td>Indicates change-control, traceability, and corrective-action discipline your OEM audit will look for</td>
                <td>No certification and no documented equivalent process when asked directly</td>
              </tr>
              <tr>
                <td><strong>Process capability / Cpk trend data</strong></td>
                <td>Shows consistency over time, not a single good sample</td>
                <td>Supplier can only provide a "typical values" data sheet, no actual production data</td>
              </tr>
              <tr>
                <td><strong>Sample test reports matched to your process</strong></td>
                <td>Confirms performance under your real operating conditions, not generic lab conditions</td>
                <td>Supplier resists running or co-running tests under your specific parameters</td>
              </tr>
              <tr>
                <td><strong>Technical support SLA</strong></td>
                <td>Sets an auditable expectation for response time during a line issue</td>
                <td>Only verbal assurances, nothing in writing, no named technical contact</td>
              </tr>
              <tr>
                <td><strong>Environmental/effluent compliance documentation</strong></td>
                <td>Increasingly part of OEM supply-chain risk audits, including at chemical Tier-2/3 level</td>
                <td>No consent-to-operate documentation, or vague answers about effluent characteristics of their own chemistry</td>
              </tr>
            </tbody>
          </table>

          <div className="callout">
            <div className="callout-label">Practical Note</div>
            <p>Ask for this documentation before the first commercial order, not during the OEM audit. A supplier who needs weeks to assemble records that should already exist as a matter of routine operation is showing you, in real time, how their quality system actually functions under pressure.</p>
          </div>

          <h2>What Good Documentation Practice Actually Looks Like</h2>
          <p>The difference between a supplier who has genuine documentation discipline and one who assembles paperwork reactively is usually visible within the first few questions. A supplier with real discipline can typically produce a batch CoA within the same conversation, has an SDS library organised and current across their full product range, and can speak specifically to process capability trends for the exact parameters your process cares about — because they track those parameters as part of their own internal quality process, independent of whether a customer has asked.</p>
          <p>A supplier without that discipline will typically produce something eventually, but the documentation will show signs of having been generated for the occasion: dates that align suspiciously closely with your request, CoAs that report only the specification limits rather than actual measured values, or an SDS clearly adapted from a generic industry template rather than reflecting their specific formulation.</p>

          <blockquote>
            <p>"The best diagnostic question in vendor qualification isn't 'do you have this documentation' — it's 'how quickly can you get it to me, and does what arrives look like it was already sitting in a folder, or does it look like it was written last night.'"</p>
          </blockquote>

          <h2>Applying This to Your Own Approved Vendor List</h2>
          <p>For procurement and quality teams building or refreshing an approved supplier list, a practical approach is to formalise this checklist as a standard qualification questionnaire, sent to every candidate chemistry supplier before commercial engagement, with a defined response window (2–3 weeks is reasonable for a supplier with genuine documentation discipline). Score responses not just on whether documents are provided, but on their specificity, recency, and whether the data reflects your actual process conditions rather than generic supplier claims.</p>
          <p>This same checklist is worth revisiting periodically for existing approved suppliers, not just new ones — documentation discipline can erode over time, particularly at smaller suppliers experiencing growth, staff turnover in their quality function, or cost pressure that leads to under-investment in quality system maintenance.</p>

          <hr className="article-divider" />

          <h2>Where MacroCoats Stands on This Checklist</h2>
          <p>We built this checklist from the audits we have been through ourselves, supplying into Tier-1 automotive and railways vendor programmes over more than three decades. We maintain current batch CoAs, an up-to-date SDS library, documented process capability data for our core phosphating and passivation product lines, and a written technical support commitment for qualified customers. We are glad to walk any procurement or quality team through our documentation directly, alongside a process audit of your own line.</p>

          <div className="callout">
            <div className="callout-label">Download</div>
            <p>Request our <strong>Vendor Qualification Checklist</strong> — a formatted, ready-to-use questionnaire covering every item above, designed to send directly to any chemistry supplier you are evaluating. Email <a href="mailto:info@macrocoats.in" style={{ color: 'var(--accent)' }}>info@macrocoats.in</a> with subject "Vendor Qualification Checklist" — we'll send it within 24 hours.</p>
          </div>

          <div className="article-cta">
            <div className="article-cta-inner">
              <h3>Get a <em>free process chemistry audit</em> for your line</h3>
              <p>If you are qualifying a new chemistry supplier or reviewing your approved vendor list, our team will walk you through our own documentation and, separately, review your current line's process chemistry — at no cost.</p>
              <div className="cta-buttons">
                <Link to="/#process-audit" className="cta-btn-white">
                  Request Free Audit <ArrowIcon />
                </Link>
                <a href="mailto:info@macrocoats.in?subject=Vendor Qualification Checklist" className="cta-btn-ghost">
                  Get the Checklist
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
              <a href="#" onClick={(e) => e.preventDefault()}>A Documentation Exercise First</a>
              <a href="#" onClick={(e) => e.preventDefault()}>The Documentation That Should Already Exist</a>
              <a href="#" onClick={(e) => e.preventDefault()}>What Good Practice Looks Like</a>
              <a href="#" onClick={(e) => e.preventDefault()}>Applying This to Your Vendor List</a>
              <a href="#" onClick={(e) => e.preventDefault()}>Where MacroCoats Stands</a>
            </nav>
          </div>

          <div className="sidebar-card">
            <span className="sidebar-card-label">Free Offer</span>
            <h4>Get a Free Process Audit</h4>
            <p>2-hour plant visit. Process chemistry review, plus our own vendor documentation on request. Written report. No obligation.</p>
            <Link to="/#process-audit" className="sidebar-btn">
              Request Audit <ArrowIcon />
            </Link>
            <a href="tel:9444961815" className="sidebar-btn secondary">+91 9444961815</a>
          </div>

          <div className="sidebar-card">
            <span className="sidebar-card-label">About the Author</span>
            <h4>MacroCoats Technical & Regulatory Team</h4>
            <p>MacroCoats has supplied process chemistry into Tier-1 automotive and railways vendor programmes since 1993, and maintains documentation practices built directly from OEM audit experience.</p>
          </div>

          <div className="sidebar-card">
            <span className="sidebar-card-label">Related Reading</span>
            <nav className="toc">
              <Link to="/blog/iatf-16949-surface-treatment-audit-checklist">IATF 16949 Audit Checklist for Surface Treatment</Link>
              <Link to="/blog/chromium-free-phosphating-india-tier1-automotive">Chromium-Free Phosphating in India</Link>
              <Link to="/blog/zinc-phosphate-vs-iron-phosphate-vs-manganese-phosphate">Zinc vs Iron vs Manganese Phosphate: Selection Guide</Link>
            </nav>
          </div>
        </aside>
      </div>
    </>
  );
}
