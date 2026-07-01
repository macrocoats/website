import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BlogNav from '../components/blog/BlogNav.jsx';
import BlogFooter from '../components/blog/BlogFooter.jsx';
import BlogSidebar from '../components/blog/BlogSidebar.jsx';

export default function BlogListPage() {
  useEffect(() => {
    document.title = 'Technical Blog — MacroCoats';
    return () => { document.title = 'MacroCoats — Process-Engineered Chemical Solutions'; };
  }, []);

  return (
    <>
      <BlogNav />
      <header className="blog-hero">
        <div className="blog-hero-inner">
          <div className="blog-eyebrow">Technical Resources</div>
          <h1>Process Chemistry <em>Intelligence</em></h1>
          <p>Technical articles on phosphating, surface preparation, corrosion protection, and IoT bath monitoring — written by engineers, for engineers. No marketing fluff.</p>
        </div>
      </header>

      <div className="blog-layout">
        <main>
          <div className="articles-section-label">Published Articles</div>


          <Link to="/blog/heavy-engineering-corrosion-protection-large-components" className="article-card featured">
            <div className="article-card-body">
              <div className="featured-eyebrow">Latest Article</div>
              <div className="card-tags">
                <span className="card-tag">Industry</span>
                <span className="card-tag">Corrosion Protection</span>
              </div>
              <h2>Heavy Engineering Corrosion Protection: Coating Strategies for <em>Large, Slow-Cycle</em> Components</h2>
              <p>A machine base weighing 4 tonnes does not fit in a dip tank, cannot be processed in 90 seconds, and is expected to survive two decades outdoors. Automotive-line chemistry logic does not transfer.</p>
              <div className="card-meta">
                <div className="card-byline">
                  <div className="card-avatar">S</div>
                  <span className="card-author">Mr. Santhanam</span>
                </div>
                <span className="card-read">10 min read</span>
                <span className="card-date">July 2026</span>
                <div className="card-arrow">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/blog/two-wheeler-manufacturing-surface-treatment-requirements" className="article-card">
            <div className="article-card-body">
              <div className="card-tags">
                <span className="card-tag">Industry</span>
                <span className="card-tag">Phosphating</span>
              </div>
              <h2>Two-Wheeler Manufacturing and Surface Treatment: Coating Requirements for <em>High-Volume, High-Speed Lines</em></h2>
              <p>India's two-wheeler lines run at a pace and mixed-substrate complexity most phosphating chemistry was never designed for — and the parts sit outdoors in monsoon conditions every day of their service life.</p>
              <div className="card-meta">
                <div className="card-byline">
                  <div className="card-avatar">S</div>
                  <span className="card-author">Mr. Santhanam</span>
                </div>
                <span className="card-read">10 min read</span>
                <span className="card-date">June 2026</span>
                <div className="card-arrow">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/blog/vci-rust-preventive-oils-transit-storage-protection" className="article-card">
            <div className="article-card-body">
              <div className="card-tags">
                <span className="card-tag">Corrosion Protection</span>
              </div>
              <h2>VCI and Rust Preventive Oils: Choosing the Right Transit and Storage Protection for <em>Indian Climate Conditions</em></h2>
              <p>A part that leaves the phosphating line perfectly coated can still arrive at the customer rusted. Monsoon humidity and coastal shipping demand different protection strategies — and the two options are not interchangeable.</p>
              <div className="card-meta">
                <div className="card-byline">
                  <div className="card-avatar">S</div>
                  <span className="card-author">Mr. Santhanam</span>
                </div>
                <span className="card-read">9 min read</span>
                <span className="card-date">May 2026</span>
                <div className="card-arrow">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/blog/astm-b117-salt-spray-testing-standard-explained" className="article-card">
            <div className="article-card-body">
              <div className="card-tags">
                <span className="card-tag">Quality &amp; Testing</span>
              </div>
              <h2>ASTM B117 Salt Spray Testing: What the Standard Actually Requires and <em>Where Plants Get It Wrong</em></h2>
              <p>Every quality report cites hours-to-red-rust like it's a single, comparable number. It isn't. A practical walkthrough of what the standard actually controls, and the panel-prep mistakes that quietly invalidate results.</p>
              <div className="card-meta">
                <div className="card-byline">
                  <div className="card-avatar">S</div>
                  <span className="card-author">Mr. Santhanam</span>
                </div>
                <span className="card-read">9 min read</span>
                <span className="card-date">March 2026</span>
                <div className="card-arrow">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/blog/reach-export-compliance-tier1-eu-customers" className="article-card">
            <div className="article-card-body">
              <div className="card-tags">
                <span className="card-tag eco">Compliance</span>
              </div>
              <h2>REACH and Export Compliance: What Indian Tier-1 Suppliers Need to Document for <em>EU Customers</em></h2>
              <p>EU OEMs are pushing substance-declaration requirements further down the supply chain. What SVHC, IMDS, and RSL actually require — and how Cr-free process chemistry simplifies the paperwork.</p>
              <div className="card-meta">
                <div className="card-byline">
                  <div className="card-avatar">M</div>
                  <span className="card-author">MacroCoats</span>
                </div>
                <span className="card-read">10 min read</span>
                <span className="card-date">April 2026</span>
                <div className="card-arrow">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/blog/cpcb-effluent-norms-surface-treatment-etp" className="article-card">
            <div className="article-card-body">
              <div className="card-tags">
                <span className="card-tag eco">Compliance &amp; Regulatory</span>
              </div>
              <h2>CPCB Effluent Norms for Surface Treatment Plants: What Changed and What It Means for <em>Your ETP</em></h2>
              <p>Enforcement of effluent discharge norms for surface treatment operations has been tightening steadily across Indian states. A plain-language guide to where your ETP is exposed, and how process chemistry choices reduce the burden.</p>
              <div className="card-meta">
                <div className="card-byline">
                  <div className="card-avatar">M</div>
                  <span className="card-author">MacroCoats</span>
                </div>
                <span className="card-read">10 min read</span>
                <span className="card-date">February 2026</span>
                <div className="card-arrow">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/blog/coating-weight-measurement-strip-weigh-xrf-gravimetric" className="article-card">
            <div className="article-card-body">
              <div className="card-tags">
                <span className="card-tag">Quality &amp; Testing</span>
              </div>
              <h2>Coating Weight Measurement Methods: Strip-and-Weigh vs XRF vs Gravimetric — <em>What Should You Trust?</em></h2>
              <p>Three methods, three different numbers, and a customer audit that expects them all to agree. A practical guide to what each coating weight method actually measures and when each one is right.</p>
              <div className="card-meta">
                <div className="card-byline">
                  <div className="card-avatar">S</div>
                  <span className="card-author">Mr. Santhanam</span>
                </div>
                <span className="card-read">9 min read</span>
                <span className="card-date">January 2026</span>
                <div className="card-arrow">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/blog/multi-plant-chemical-standardization-india" className="article-card">
            <div className="article-card-body">
              <div className="card-tags">
                <span className="card-tag">IoT &amp; Automation</span>
                <span className="card-tag">Operations</span>
              </div>
              <h2>Multi-Plant Chemical Standardization: Why Indian Manufacturers Are Moving to <em>Single-Supplier Process Chemistry</em></h2>
              <p>Same product code, same specification sheet — and still, Plant A passes salt-spray at 95% and Plant B struggles at 82%. Why supplier fragmentation causes drift, and what centralized IoT bath monitoring does about it.</p>
              <div className="card-meta">
                <div className="card-byline">
                  <div className="card-avatar">A</div>
                  <span className="card-author">Mr. Aswin Kumar</span>
                </div>
                <span className="card-read">10 min read</span>
                <span className="card-date">December 2025</span>
                <div className="card-arrow">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/blog/degreasing-chemistry-alkaline-cleaners-oil-carryover" className="article-card">
            <div className="article-card-body">
              <div className="card-tags">
                <span className="card-tag">Surface Preparation</span>
              </div>
              <h2>Degreasing Chemistry Explained: Alkaline Cleaners, Temperature, and the <em>Oil Carry-Over Problem</em></h2>
              <p>Degreasing is the stage every process engineer takes for granted — until the phosphating bath starts sludging and nobody can explain why. The answer is usually sitting one stage upstream.</p>
              <div className="card-meta">
                <div className="card-byline">
                  <div className="card-avatar">S</div>
                  <span className="card-author">Mr. Santhanam</span>
                </div>
                <span className="card-read">9 min read</span>
                <span className="card-date">November 2025</span>
                <div className="card-arrow">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/blog/digital-twin-phosphating-lines-partial-automation" className="article-card">
            <div className="article-card-body">
              <div className="card-tags">
                <span className="card-tag">IoT & Automation</span>
              </div>
              <h2>Digital Twin for Phosphating Lines: What It Means for a Plant That <em>Isn't Fully Automated Yet</em></h2>
              <p>"Digital twin" sounds like a term reserved for fully robotic lines with seven-figure budgets. In practice, for a phosphating bath, it starts with a sensor, a dashboard, and a spreadsheet — and grows from there.</p>
              <div className="card-meta">
                <div className="card-byline">
                  <div className="card-avatar">A</div>
                  <span className="card-author">Mr. Aswin Kumar</span>
                </div>
                <span className="card-read">9 min read</span>
                <span className="card-date">October 2025</span>
                <div className="card-arrow">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/blog/water-break-test-phosphating-surface-preparation" className="article-card">
            <div className="article-card-body">
              <div className="card-tags">
                <span className="card-tag">Surface Preparation</span>
                <span className="card-tag">Quality & Testing</span>
              </div>
              <h2>The Water-Break Test: The <em>10-Second Check</em> That Predicts Your Phosphating Coating Quality</h2>
              <p>No titration kit, no instrument, no cost. The water-break test tells you — before a single part enters the phosphating bath — whether your degreasing stage has actually done its job.</p>
              <div className="card-meta">
                <div className="card-byline">
                  <div className="card-avatar">S</div>
                  <span className="card-author">Mr. Santhanam</span>
                </div>
                <span className="card-read">8 min read</span>
                <span className="card-date">September 2025</span>
                <div className="card-arrow">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/blog/iatf-16949-surface-treatment-audit-checklist" className="article-card">
            <div className="article-card-body">
              <div className="card-tags">
                <span className="card-tag">Compliance & Regulatory</span>
              </div>
              <h2>The IATF 16949 Surface Treatment Audit: What Your <em>Phosphating Line</em> Needs to Pass</h2>
              <p>Surface treatment is a special process under IATF 16949 — meaning its output can't be fully verified by inspecting the finished part. A practical guide to what auditors ask for and how to be ready.</p>
              <div className="card-meta">
                <div className="card-byline">
                  <div className="card-avatar">M</div>
                  <span className="card-author">MacroCoats</span>
                </div>
                <span className="card-read">10 min read</span>
                <span className="card-date">August 2025</span>
                <div className="card-arrow">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/blog/accelerator-chemistry-nitrite-nitrate-sludge" className="article-card">
            <div className="article-card-body">
              <div className="card-tags">
                <span className="card-tag">Phosphating</span>
              </div>
              <h2>Accelerator Chemistry in Phosphating Baths: Nitrite, Nitrate, and Why <em>the Wrong Choice</em> Costs You Sludge</h2>
              <p>Accelerators are the smallest-dosed component in a phosphating bath and the one most likely to be mismanaged. The wrong accelerator — or the right one dosed wrong — shows up first as sludge.</p>
              <div className="card-meta">
                <div className="card-byline">
                  <div className="card-avatar">S</div>
                  <span className="card-author">Mr. Santhanam</span>
                </div>
                <span className="card-read">9 min read</span>
                <span className="card-date">July 2025</span>
                <div className="card-arrow">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/blog/oee-chemistry-bath-downtime-plant-efficiency" className="article-card">
            <div className="article-card-body">
              <div className="card-tags">
                <span className="card-tag">IoT</span>
                <span className="card-tag">Automation</span>
              </div>
              <h2>OEE and Chemistry: Why Bath Downtime Is an <em>Invisible Line Item</em> on Your Plant's Efficiency Report</h2>
              <p>Plants track mechanical downtime religiously. Almost none track the hours lost to an emergency bath dump or a quality hold pending titration — even though it's often the larger number.</p>
              <div className="card-meta">
                <div className="card-byline">
                  <div className="card-avatar">A</div>
                  <span className="card-author">Mr. Aswin Kumar</span>
                </div>
                <span className="card-read">10 min read</span>
                <span className="card-date">June 2025</span>
                <div className="card-arrow">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/blog/free-acid-vs-total-acid-phosphating" className="article-card">
            <div className="article-card-body">
              <div className="card-tags">
                <span className="card-tag">Phosphating</span>
                <span className="card-tag">Bath Management</span>
              </div>
              <h2>Free Acid vs Total Acid: The <em>Two Numbers</em> Every Phosphating Operator Must Understand</h2>
              <p>Ask most operators what free acid and total acid mean, and you'll get a titration procedure. Ask what the ratio between them means, and you'll usually get a shrug — yet the ratio is what actually predicts coating quality.</p>
              <div className="card-meta">
                <div className="card-byline">
                  <div className="card-avatar">S</div>
                  <span className="card-author">Mr. Santhanam</span>
                </div>
                <span className="card-read">9 min read</span>
                <span className="card-date">May 2025</span>
                <div className="card-arrow">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/blog/auto-dosing-systems-closed-loop-chemical-baths" className="article-card">
            <div className="article-card-body">
              <div className="card-tags">
                <span className="card-tag">IoT</span>
                <span className="card-tag">Automation</span>
              </div>
              <h2>Auto-Dosing Systems for Chemical Baths: How <em>Closed-Loop Control</em> Eliminates Human Error</h2>
              <p>Twice-a-day titration and manual top-up has run phosphating baths for decades — with a structural blind spot built in. Here's how closed-loop auto-dosing removes it entirely.</p>
              <div className="card-meta">
                <div className="card-byline">
                  <div className="card-avatar">A</div>
                  <span className="card-author">Mr. Aswin Kumar</span>
                </div>
                <span className="card-read">9 min read</span>
                <span className="card-date">April 2025</span>
                <div className="card-arrow">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/blog/surface-treatment-indian-railways-corrosion" className="article-card">
            <div className="article-card-body">
              <div className="card-tags">
                <span className="card-tag">Corrosion Protection</span>
                <span className="card-tag">Industry</span>
              </div>
              <h2>Surface Treatment for Indian Railways: Materials, Standards, and <em>Corrosion Protection</em> Requirements</h2>
              <p>Coaches and wagons serve 25–30 years across monsoon coastlines, desert heat, and industrial belts. What the underframe, bogie, and fittings actually demand from your phosphating line.</p>
              <div className="card-meta">
                <div className="card-byline">
                  <div className="card-avatar">S</div>
                  <span className="card-author">Mr. Santhanam</span>
                </div>
                <span className="card-read">10 min read</span>
                <span className="card-date">March 2025</span>
                <div className="card-arrow">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/blog/coating-adhesion-failure-root-cause-analysis" className="article-card">
            <div className="article-card-body">
              <div className="card-tags">
                <span className="card-tag">Quality &amp; Testing</span>
                <span className="card-tag">Phosphating</span>
              </div>
              <h2>Coating Adhesion Failures: A <em>Root Cause Analysis Framework</em> for Surface Treatment Engineers</h2>
              <p>An adhesion failure can originate in five different places along the line — and diagnosing it backwards from the paint booth wastes weeks. A systematic root cause framework for surface treatment engineers.</p>
              <div className="card-meta">
                <div className="card-byline">
                  <div className="card-avatar">S</div>
                  <span className="card-author">Mr. Santhanam</span>
                </div>
                <span className="card-read">10 min read</span>
                <span className="card-date">February 2025</span>
                <div className="card-arrow">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/blog/real-cost-phosphating-bath-failures" className="article-card">
            <div className="article-card-body">
              <div className="card-tags">
                <span className="card-tag">Cost/ROI</span>
                <span className="card-tag">Bath Management</span>
              </div>
              <h2>The Real Cost of Phosphating Bath Failures: A Plant Manager's <em>Calculation Guide</em></h2>
              <p>A single batch rejection costs far more than the scrap on the pallet. A plant manager's guide to calculating the true cost of a phosphating failure — rework, downtime, escalation, and audit cost — against the cost of prevention.</p>
              <div className="card-meta">
                <div className="card-byline">
                  <div className="card-avatar">A</div>
                  <span className="card-author">Mr. Aswin Kumar</span>
                </div>
                <span className="card-read">10 min read</span>
                <span className="card-date">January 2025</span>
                <div className="card-arrow">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/blog/water-quality-hard-water-phosphating-bath" className="article-card">
            <div className="article-card-body">
              <div className="card-tags">
                <span className="card-tag">Bath Management</span>
                <span className="card-tag">Quality</span>
              </div>
              <h2>The Water Quality Problem in Phosphating: How Hard Water, Dissolved Iron, and Chlorides <em>Destroy Your Bath Chemistry</em></h2>
              <p>The water you fill your bath with is the most overlooked variable in phosphating chemistry. A practical guide to what your municipal or borewell water is contributing to your bath, how to measure it, and how to correct for it before it damages coating quality.</p>
              <div className="card-meta">
                <div className="card-byline">
                  <div className="card-avatar">A</div>
                  <span className="card-author">Mr. Aswin Kumar</span>
                </div>
                <span className="card-read">9 min read</span>
                <span className="card-date">December 2024</span>
                <div className="card-arrow">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/blog/post-treatment-sealer-passivation-salt-spray" className="article-card">
            <div className="article-card-body">
              <div className="card-tags">
                <span className="card-tag">Corrosion Protection</span>
                <span className="card-tag">Surface Treatment</span>
              </div>
              <h2>After the Phosphate Bath: Why the Sealer Stage Determines Your Salt-Spray Hours — <em>Not the Coating Itself</em></h2>
              <p>Most plants invest heavily in phosphating chemistry and overlook the passivation step that follows. A technical guide to how post-treatment sealers work, which systems suit which applications, and the common mistakes that eliminate the protection the phosphate coating was designed to provide.</p>
              <div className="card-meta">
                <div className="card-byline">
                  <div className="card-avatar">S</div>
                  <span className="card-author">Mr. Santhanam</span>
                </div>
                <span className="card-read">9 min read</span>
                <span className="card-date">November 2024</span>
                <div className="card-arrow">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/blog/inconsistent-salt-spray-test-results-phosphating-bath" className="article-card">
            <div className="article-card-body">
              <div className="card-tags">
                <span className="card-tag">Surface Treatment</span>
                <span className="card-tag">Phosphating</span>
                <span className="card-tag">Quality</span>
              </div>
              <h2>Why Your Salt-Spray Test Results Are <em>Inconsistent:</em> The Bath Chemistry Explanation</h2>
              <p>Monday's batch passes 240 hours. Tuesday's fails at 120. Same line, same chemical, same paint. The root cause is bath parameter drift between titration checks — and it's happening on your line right now.</p>
              <div className="card-meta">
                <div className="card-byline">
                  <div className="card-avatar">S</div>
                  <span className="card-author">Mr. Santhanam</span>
                </div>
                <span className="card-read">8 min read</span>
                <span className="card-date">October 2024</span>
                <div className="card-arrow">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/blog/zinc-phosphate-vs-iron-phosphate-vs-manganese-phosphate" className="article-card">
            <div className="article-card-body">
              <div className="card-tags">
                <span className="card-tag">Phosphating</span>
                <span className="card-tag">Selection Guide</span>
              </div>
              <h2>Zinc Phosphate vs Iron Phosphate vs Manganese Phosphate: The <em>Selection Guide</em> for Indian Manufacturers</h2>
              <p>The one question every process engineer faces when specifying a new line or validating a product for a new OEM. A complete technical comparison with application-specific guidance.</p>
              <div className="card-meta">
                <div className="card-byline">
                  <div className="card-avatar">S</div>
                  <span className="card-author">Mr. Santhanam</span>
                </div>
                <span className="card-read">10 min read</span>
                <span className="card-date">September 2024</span>
                <div className="card-arrow">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/blog/iot-bath-monitoring-phosphating-lines" className="article-card">
            <div className="article-card-body">
              <div className="card-tags">
                <span className="card-tag">IoT</span>
                <span className="card-tag">Automation</span>
              </div>
              <h2>IoT Bath Monitoring for Phosphating Lines: How <em>Real-Time Data</em> Eliminates the Quality Guesswork</h2>
              <p>What a phosphating line would tell you if it could talk. A practical guide to what continuous monitoring measures, how auto-dosing works, and what outcomes Indian plants are seeing.</p>
              <div className="card-meta">
                <div className="card-byline">
                  <div className="card-avatar">A</div>
                  <span className="card-author">Mr. Aswin Kumar</span>
                </div>
                <span className="card-read">9 min read</span>
                <span className="card-date">August 2024</span>
                <div className="card-arrow">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/blog/chromium-free-phosphating-india-tier1-automotive" className="article-card">
            <div className="article-card-body">
              <div className="card-tags">
                <span className="card-tag eco">Compliance</span>
                <span className="card-tag eco">Cr-Free</span>
              </div>
              <h2>Chromium-Free Phosphating in India: A Technical and Regulatory Guide for <em>Tier-1 Automotive Suppliers</em></h2>
              <p>EU ELV enforcement timelines, India's supply chain exposure, and what Cr-free transition actually involves at the process level — beyond just swapping the chemical.</p>
              <div className="card-meta">
                <div className="card-byline">
                  <div className="card-avatar">M</div>
                  <span className="card-author">MacroCoats</span>
                </div>
                <span className="card-read">11 min read</span>
                <span className="card-date">July 2024</span>
                <div className="card-arrow">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/blog/pre-treatment-chemistry-phosphating-lines" className="article-card">
            <div className="article-card-body">
              <div className="card-tags">
                <span className="card-tag">Surface Preparation</span>
                <span className="card-tag">Pre-Treatment</span>
              </div>
              <h2>Pre-Treatment Chemistry for Phosphating Lines: Why the Stages <em>Before</em> the Bath Determine the Results After</h2>
              <p>Degreasing, rinsing, and surface activation account for 60% of phosphating failures — yet most troubleshooting starts at the phosphating bath. A complete guide to diagnosing and fixing pre-treatment problems first.</p>
              <div className="card-meta">
                <div className="card-byline">
                  <div className="card-avatar">S</div>
                  <span className="card-author">Mr. Santhanam</span>
                </div>
                <span className="card-read">9 min read</span>
                <span className="card-date">June 2024</span>
                <div className="card-arrow">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/blog/reading-phosphating-sludge-bath-process-chemistry" className="article-card">
            <div className="article-card-body">
              <div className="card-tags">
                <span className="card-tag">Process Diagnostics</span>
                <span className="card-tag">Bath Management</span>
              </div>
              <h2>Reading Your Phosphating Sludge: What Your Bath Waste <em>Tells You</em> About Your Process Chemistry</h2>
              <p>Sludge volume, colour, and texture are direct indicators of bath health — and most plants are not reading them. A practical guide to what your waste chemistry is telling you, and how to act on it.</p>
              <div className="card-meta">
                <div className="card-byline">
                  <div className="card-avatar">S</div>
                  <span className="card-author">Mr. Santhanam</span>
                </div>
                <span className="card-read">8 min read</span>
                <span className="card-date">May 2024</span>
                <div className="card-arrow">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

        

          <div className="articles-section-label" style={{ marginTop: '48px' }}>Coming Soon</div>

          <div className="article-card coming-soon">
            <div className="article-card-body">
              <div className="card-tags">
              <span className="card-tag">Case Study</span>
                <span className="coming-badge">Coming Soon</span>
              </div>
              <h2>How a Coimbatore Job Coater Cut Rejection Rates by 40% <em>Without Changing His Equipment</em></h2>
              <p>An anonymised case study: a job-coating shop with adequate equipment and inconsistent rejection rates — diagnosed as a bath-management problem, fixed without a single capital purchase.</p>
              <div className="card-meta">
                <div className="card-byline">
                  <div className="card-avatar">M</div>
                  <span className="card-author">MacroCoats</span>
                </div>
                <span className="card-date">August 2026</span>
              </div>
            </div>
          </div>

          <div className="article-card coming-soon">
            <div className="article-card-body">
              <div className="card-tags">
              <span className="card-tag">Corrosion Protection</span>
                <span className="coming-badge">Coming Soon</span>
              </div>
              <h2>Organic vs Inorganic Post-Treatment Passivation: Choosing Between <em>Silane, Zirconium,</em> and Chrome-Free Sealers</h2>
              <p>Chrome-free doesn't mean one chemistry. Silane and zirconium-based passivation systems bond differently, protect differently, and suit different substrates and topcoats.</p>
              <div className="card-meta">
                <div className="card-byline">
                  <div className="card-avatar">S</div>
                  <span className="card-author">Mr. Santhanam</span>
                </div>
                <span className="card-date">September 2026</span>
              </div>
            </div>
          </div>

          <div className="article-card coming-soon">
            <div className="article-card-body">
              <div className="card-tags">
              <span className="card-tag">Compliance &amp; Regulatory</span>
              <span className="card-tag">Quality</span>
                <span className="coming-badge">Coming Soon</span>
              </div>
              <h2>Vendor Qualification for OEM Approval: What Documentation Your Chemistry Supplier <em>Should Already Have Ready</em></h2>
              <p>A practical checklist for procurement and quality teams evaluating a phosphating or surface-treatment chemistry supplier — including us.</p>
              <div className="card-meta">
                <div className="card-byline">
                  <div className="card-avatar">M</div>
                  <span className="card-author">MacroCoats</span>
                </div>
                <span className="card-date">October 2026</span>
              </div>
            </div>
          </div>

        </main>

        <BlogSidebar />
      </div>

      <BlogFooter />
    </>
  );
}
