import { Link } from 'react-router-dom';

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

export default function ReachExportComplianceArticle() {
  return (
    <>
      <header className="article-hero">
        <div className="article-hero-inner">
          <div className="article-meta">
            <span className="article-tag">Compliance & Regulatory</span>
            <span className="article-date">April 2026</span>
            <span className="article-read-time">10 min read</span>
          </div>
          <h1>REACH and Export Compliance: What Indian Tier-1 Suppliers Need to Document for <em>EU Customers</em></h1>
          <p className="article-deck">EU OEMs and Tier-1s are asking Indian component suppliers for declarations most quality teams have never had to produce before. A directional guide to REACH, SVHC, and IMDS — and how process chemistry choices upstream make the paperwork downstream considerably simpler.</p>
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
          <h2>A Compliance Ask That's Reaching Further Down the Supply Chain</h2>
          <p>Five years ago, REACH declarations were largely a chemical manufacturer's problem — something raw material suppliers dealt with, not something a components plant in Chennai or Coimbatore needed to think about directly. That has changed. EU OEMs and their Tier-1 partners are now pushing substance-declaration requirements further down the supply chain, and Indian exporters supplying finished or semi-finished automotive and industrial components are increasingly asked to provide documentation they've never had to assemble before.</p>
          <p>This article is a directional orientation to what's actually being asked for, why phosphating and surface-treatment chemistry sits closer to this conversation than most plants realise, and how the choice of process chemistry — specifically, moving away from legacy chromium-containing systems — genuinely simplifies the declarations that follow. It is not a substitute for legal or regulatory advice. REACH obligations depend on your specific role in the supply chain, your specific customer's requirements, and the specific substances present in your process — and those should be confirmed with a REACH compliance specialist and against your customer's actual technical specification.</p>

          <h2>What REACH Actually Is, in Plain Terms</h2>
          <p>REACH (Registration, Evaluation, Authorisation and Restriction of Chemicals) is the EU's regulatory framework governing the manufacture, import, and use of chemical substances within the EU market. It applies directly to companies placing substances, mixtures, or articles on the EU market — which, in most cases, is not the Indian component manufacturer directly, but the EU importer or OEM who brings the finished part into the EU.</p>
          <p>That distinction matters, but it doesn't mean Indian suppliers are outside the conversation. EU OEMs carry the compliance obligation, and they satisfy it by requiring their non-EU suppliers to declare what substances are present in the parts and coatings they supply — particularly substances on the SVHC (Substances of Very High Concern) candidate list. If your part contains an SVHC substance above 0.1% weight by weight, your EU customer has a legal notification obligation, and they will ask you to confirm whether that threshold is met before they can accept the part.</p>

          <h2>The Three Things You're Actually Being Asked For</h2>
          <table className="data-table">
            <thead>
              <tr>
                <th>Compliance Requirement</th>
                <th>What It Covers</th>
                <th>How Process Chemistry Choice Affects It</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>SVHC declaration</strong></td>
                <td>Confirmation of whether any substance on the current SVHC candidate list (updated roughly every six months by ECHA) is present above 0.1% w/w in the delivered article, and where in the article</td>
                <td>Hexavalent chromium compounds (used in chromate conversion coatings and some passivation chemistries) are SVHC-listed. A Cr-free phosphating and passivation system removes this substance from the declaration entirely — no threshold calculation, no per-batch verification needed for that substance</td>
              </tr>
              <tr>
                <td><strong>IMDS material data entry</strong></td>
                <td>The International Material Data System entry that automotive OEMs require for every part — a full material and substance breakdown of the component, including surface treatments and coatings, submitted through the IMDS platform</td>
                <td>Each coating and chemical layer in your process (phosphate conversion coating, passivation seal, rust-preventive oil) needs its own material data sheet entry with CAS numbers and mass contribution. Suppliers using well-documented, single-source process chemistry can produce these entries directly from supplier data sheets rather than reverse-engineering bath composition</td>
              </tr>
              <tr>
                <td><strong>Restricted substance list (RSL) conformance</strong></td>
                <td>OEM-specific restricted substance lists (typically stricter or broader than the regulatory minimum) that suppliers must certify their parts and processes conform to, covering chemicals beyond the SVHC list</td>
                <td>Legacy chromate passivation, certain leaded brass fittings, and some older corrosion-inhibitor formulations commonly appear on OEM RSLs even where not yet regulatorily restricted. A modern Cr-free, low-heavy-metal process chemistry portfolio tends to clear RSL screening with fewer flagged items and less back-and-forth documentation</td>
              </tr>
            </tbody>
          </table>

          <div className="callout">
            <div className="callout-label">Practical Note</div>
            <p>SVHC is a moving target, not a fixed list — ECHA adds substances roughly twice a year. A declaration that was accurate last year may need re-verification. Ask your process chemistry supplier whether they proactively track SVHC updates against their formulations, or whether that tracking burden falls on you.</p>
          </div>

          <h2>Why Chromium-Free Chemistry Simplifies the Paperwork</h2>
          <p>Hexavalent chromium (Cr⁶⁺) compounds have been used for decades in chromate conversion coatings and passivation sealers because they produce excellent corrosion resistance with a simple, forgiving process. They are also SVHC-listed and subject to increasingly strict restriction under both REACH and the EU End-of-Life Vehicles (ELV) Directive, which specifically targets automotive components.</p>
          <p>For a plant still running chromate-based passivation, every part supplied to an EU-linked OEM requires an active SVHC threshold calculation — is the residual Cr⁶⁺ concentration above or below 0.1% w/w in that specific article — and that calculation typically needs periodic re-verification as coating weight or formulation changes. It also means an ongoing conversation with each customer about phase-out timelines, since most EU OEM RSLs are moving toward zero-tolerance for Cr⁶⁺ in new component approvals, not just a declared threshold.</p>
          <p>A Cr-free phosphating and passivation system removes that substance from the equation. There is no threshold calculation because the substance of concern is not present. The IMDS entry is simpler because the coating layer doesn't require the additional SVHC substance flag and supporting documentation. And critically, a Cr-free process is future-proofed against tightening restriction timelines — you are not maintaining a compliant-today system that requires a transition plan next year.</p>

          <blockquote>
            <p>"The plants that struggle most with EU compliance documentation are usually not the ones with the most complex chemistry — they're the ones whose chemistry supplier can't tell them exactly what's in the bath, in what concentration, with a CAS number attached. Documentation quality upstream is what makes the declaration downstream fast instead of painful."</p>
          </blockquote>

          <h2>What "Well-Documented Supply Chain" Actually Means in Practice</h2>
          <p>Beyond the chemistry itself, the speed and accuracy of your compliance declarations depends heavily on what your process chemistry supplier can hand you. In practice, this means:</p>
          <ul>
            <li><strong>Full formulation disclosure with CAS numbers</strong> for every product used in your surface treatment line — not just a safety data sheet, but a composition breakdown sufficient to populate an IMDS entry without guesswork.</li>
            <li><strong>Proactive SVHC monitoring</strong> — your supplier should tell you if an ECHA list update affects one of your existing products, rather than you discovering it during a customer audit.</li>
            <li><strong>Batch-level traceability</strong> — the ability to confirm which formulation lot was used on which production run, in case a customer requests retrospective verification.</li>
            <li><strong>A single point of technical contact</strong> who can answer a customer's specific compliance question directly, rather than routing it through multiple intermediaries and losing time against a submission deadline.</li>
          </ul>
          <p>None of this replaces your own regulatory function or legal counsel — but it determines whether producing a declaration takes an afternoon or three weeks of chasing data from multiple chemical suppliers.</p>

          <h2>A Reminder on Scope</h2>
          <p>This article is intentionally directional. REACH, SVHC, and IMDS obligations vary by your specific role in the supply chain (manufacturer, importer, downstream user), your customer's specific contractual requirements, the specific substances present in your specific process, and the current state of an SVHC list that changes over time. Nothing here should be treated as a final compliance determination for your plant. Before submitting a declaration to an EU customer, confirm your specific obligations with a REACH compliance specialist and against your customer's exact technical specification and RSL.</p>

          <hr className="article-divider" />

          <h2>Where MacroCoats Fits</h2>
          <p>We supply Cr-free phosphating, passivation, and corrosion protection chemistry with full formulation disclosure and CAS-level documentation to our clients — precisely because a growing share of them need to produce IMDS entries and SVHC declarations for EU-linked OEMs. We don't provide regulatory or legal advice, but we do provide the underlying process chemistry documentation your compliance team or consultant needs to build an accurate declaration quickly.</p>

          <div className="callout">
            <div className="callout-label">Download</div>
            <p>Request our <strong>Cr-Free Process Documentation Pack</strong> — full formulation CAS disclosure, SVHC-relevant substance confirmation, and IMDS-ready material data references for our phosphating and passivation product lines. Email <a href="mailto:info@macrocoats.in" style={{ color: 'var(--accent)' }}>info@macrocoats.in</a> with subject "Documentation Pack" — we'll send it within 24 hours.</p>
          </div>

          <div className="article-cta">
            <div className="article-cta-inner">
              <h3>Get a <em>free process chemistry audit</em> for your line</h3>
              <p>If you're preparing REACH, SVHC, or IMDS declarations for an EU customer and need clarity on your current chromium exposure or documentation gaps, our team will review your process chemistry and supplier documentation at no cost.</p>
              <div className="cta-buttons">
                <Link to="/#process-audit" className="cta-btn-white">
                  Request Free Audit <ArrowIcon />
                </Link>
                <a href="mailto:info@macrocoats.in?subject=Documentation Pack" className="cta-btn-ghost">
                  Get the Documentation Pack
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
              <a href="#" onClick={(e) => e.preventDefault()}>A Compliance Ask Reaching Further</a>
              <a href="#" onClick={(e) => e.preventDefault()}>What REACH Actually Is</a>
              <a href="#" onClick={(e) => e.preventDefault()}>The Three Things You're Asked For</a>
              <a href="#" onClick={(e) => e.preventDefault()}>Why Cr-Free Simplifies the Paperwork</a>
              <a href="#" onClick={(e) => e.preventDefault()}>Well-Documented Supply Chain</a>
              <a href="#" onClick={(e) => e.preventDefault()}>A Reminder on Scope</a>
            </nav>
          </div>

          <div className="sidebar-card">
            <span className="sidebar-card-label">Free Offer</span>
            <h4>Get a Free Process Audit</h4>
            <p>2-hour plant visit. Chemistry and documentation review against your customer's compliance requirements. Written report. No obligation.</p>
            <Link to="/#process-audit" className="sidebar-btn">
              Request Audit <ArrowIcon />
            </Link>
            <a href="tel:9444961815" className="sidebar-btn secondary">+91 9444961815</a>
          </div>

          <div className="sidebar-card">
            <span className="sidebar-card-label">About the Author</span>
            <h4>MacroCoats Technical & Regulatory Team</h4>
            <p>Our technical team works directly with Tier-1 suppliers navigating EU customer compliance requirements, translating process chemistry into the documentation their customers and consultants need.</p>
          </div>

          <div className="sidebar-card">
            <span className="sidebar-card-label">Related Reading</span>
            <nav className="toc">
              <Link to="/blog/chromium-free-phosphating-india-tier1-automotive">Chromium-Free Phosphating in India</Link>
              <Link to="/blog/astm-b117-salt-spray-testing-standard-explained">ASTM B117 Salt Spray Testing Explained</Link>
              <Link to="/blog/two-wheeler-manufacturing-surface-treatment-requirements">Two-Wheeler Manufacturing: Coating Requirements</Link>
            </nav>
          </div>
        </aside>
      </div>
    </>
  );
}
