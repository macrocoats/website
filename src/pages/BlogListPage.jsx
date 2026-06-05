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

          <Link to="/blog/inconsistent-salt-spray-test-results-phosphating-bath" className="article-card featured">
            <div className="article-card-body">
              <div className="featured-eyebrow">Latest Article</div>
              <div className="card-tags">
                <span className="card-tag" style={{ color: 'var(--accent-bright)', background: 'rgba(59,130,246,0.15)', borderColor: 'rgba(59,130,246,0.3)' }}>Surface Treatment</span>
                <span className="card-tag" style={{ color: 'var(--accent-bright)', background: 'rgba(59,130,246,0.15)', borderColor: 'rgba(59,130,246,0.3)' }}>Phosphating</span>
                <span className="card-tag" style={{ color: 'var(--accent-bright)', background: 'rgba(59,130,246,0.15)', borderColor: 'rgba(59,130,246,0.3)' }}>Quality</span>
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

          <div className="articles-section-label" style={{ marginTop: '48px' }}>Coming Soon</div>

          <div className="article-card coming-soon">
            <div className="article-card-body">
              <div className="card-tags">
                <span className="card-tag">Phosphating</span>
                <span className="card-tag">Selection Guide</span>
                <span className="coming-badge">Coming Soon</span>
              </div>
              <h2>Zinc Phosphate vs Iron Phosphate vs Manganese Phosphate: The Selection Guide for Indian Manufacturers</h2>
              <p>The one question every process engineer faces when specifying a new line or validating a product for a new OEM. A complete technical comparison with application-specific guidance.</p>
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
                <span className="card-tag">IoT</span>
                <span className="card-tag">Automation</span>
                <span className="coming-badge">Coming Soon</span>
              </div>
              <h2>IoT Bath Monitoring for Phosphating Lines: How Real-Time Data Eliminates the Quality Guesswork</h2>
              <p>What a phosphating line would tell you if it could talk. A practical guide to what continuous monitoring measures, how auto-dosing works, and what outcomes Indian plants are seeing.</p>
              <div className="card-meta">
                <div className="card-byline">
                  <div className="card-avatar">A</div>
                  <span className="card-author">Mr. Aswin Kumar</span>
                </div>
                <span className="card-date">July 2026</span>
              </div>
            </div>
          </div>

          <div className="article-card coming-soon">
            <div className="article-card-body">
              <div className="card-tags">
                <span className="card-tag eco">Compliance</span>
                <span className="card-tag eco">Cr-Free</span>
                <span className="coming-badge">Coming Soon</span>
              </div>
              <h2>Chromium-Free Phosphating in India: A Technical and Regulatory Guide for Tier-1 Automotive Suppliers</h2>
              <p>EU ELV enforcement timelines, India's supply chain exposure, and what Cr-free transition actually involves at the process level — beyond just swapping the chemical.</p>
              <div className="card-meta">
                <div className="card-byline">
                  <div className="card-avatar">M</div>
                  <span className="card-author">MacroCoats</span>
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
