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

          {/* Featured hero card — latest article */}
          <Link to="/blog/inconsistent-salt-spray-test-results-phosphating-bath" className="article-card featured">
            <div className="article-card-body">
              <div className="featured-eyebrow">Latest Article</div>
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
                <span className="card-date">June 2026</span>
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
                <span className="card-date">May 2026</span>
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
                <span className="card-date">April 2026</span>
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
                <span className="card-date">March 2026</span>
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
                <span className="card-date">February 2026</span>
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
                <span className="card-date">January 2026</span>
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
                <span className="card-tag">Corrosion Protection</span>
                <span className="card-tag">Surface Treatment</span>
                <span className="coming-badge">Coming Soon</span>
              </div>
              <h2>After the Phosphate Bath: Why the Sealer Stage Determines Your Salt-Spray Hours — Not the Coating Itself</h2>
              <p>Most plants invest heavily in phosphating chemistry and overlook the passivation step that follows. A technical guide to how post-treatment sealers work, which systems suit which applications, and the common mistakes that eliminate the protection the phosphate coating was designed to provide.</p>
              <div className="card-meta">
                <div className="card-byline">
                  <div className="card-avatar">S</div>
                  <span className="card-author">Mr. Santhanam</span>
                </div>
                <span className="card-date">July 2026</span>
              </div>
            </div>
          </div>

          <div className="article-card coming-soon">
            <div className="article-card-body">
              <div className="card-tags">
                <span className="card-tag">Bath Management</span>
                <span className="card-tag">Quality</span>
                <span className="coming-badge">Coming Soon</span>
              </div>
              <h2>The Water Quality Problem in Phosphating: How Hard Water, Dissolved Iron, and Chlorides Destroy Your Bath Chemistry</h2>
              <p>The water you fill your bath with is the most overlooked variable in phosphating chemistry. A practical guide to what your municipal or borewell water is contributing to your bath, how to measure it, and how to correct for it before it damages coating quality.</p>
              <div className="card-meta">
                <div className="card-byline">
                  <div className="card-avatar">A</div>
                  <span className="card-author">Mr. Aswin Kumar</span>
                </div>
                <span className="card-date">August 2026</span>
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
