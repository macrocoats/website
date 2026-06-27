import { lazy, Suspense, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import BlogNav from '../components/blog/BlogNav.jsx';
import BlogFooter from '../components/blog/BlogFooter.jsx';

const ARTICLE_MAP = {
  'inconsistent-salt-spray-test-results-phosphating-bath': {
    component: lazy(() => import('../components/blog/articles/SaltSprayArticle.jsx')),
    title: 'Why Your Salt-Spray Test Results Are Inconsistent — MacroCoats',
  },
  'zinc-phosphate-vs-iron-phosphate-vs-manganese-phosphate': {
    component: lazy(() => import('../components/blog/articles/PhosphateSelectionArticle.jsx')),
    title: 'Zinc Phosphate vs Iron Phosphate vs Manganese Phosphate: The Selection Guide — MacroCoats',
  },
  'iot-bath-monitoring-phosphating-lines': {
    component: lazy(() => import('../components/blog/articles/IoTMonitoringArticle.jsx')),
    title: 'IoT Bath Monitoring for Phosphating Lines — MacroCoats',
  },
  'chromium-free-phosphating-india-tier1-automotive': {
    component: lazy(() => import('../components/blog/articles/ChromiumFreeArticle.jsx')),
    title: 'Chromium-Free Phosphating in India: Technical and Regulatory Guide — MacroCoats',
  },
  'pre-treatment-chemistry-phosphating-lines': {
    component: lazy(() => import('../components/blog/articles/PreTreatmentArticle.jsx')),
    title: 'Pre-Treatment Chemistry for Phosphating Lines — MacroCoats',
  },
  'reading-phosphating-sludge-bath-process-chemistry': {
    component: lazy(() => import('../components/blog/articles/PhosphatingSludgeArticle.jsx')),
    title: 'Reading Your Phosphating Sludge: What Your Bath Waste Tells You — MacroCoats',
  },
};

const ArticleFallback = () => (
  <div style={{ minHeight: '60vh', display: 'grid', placeItems: 'center', color: 'var(--slate)', fontFamily: 'var(--sans)', fontSize: '15px' }}>
    Loading article…
  </div>
);

export default function BlogArticlePage() {
  const { slug } = useParams();
  const article = ARTICLE_MAP[slug];

  useEffect(() => {
    if (article) document.title = article.title;
    return () => { document.title = 'MacroCoats — Process-Engineered Chemical Solutions'; };
  }, [article]);

  if (!article) {
    return (
      <>
        <BlogNav />
        <div style={{ padding: '120px 48px', textAlign: 'center', fontFamily: 'var(--sans)' }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--mist)', marginBottom: '20px' }}>404 — Not Found</div>
          <h2 style={{ fontFamily: 'var(--display)', fontSize: '32px', fontWeight: 500, color: 'var(--ink)', marginBottom: '16px' }}>Article not found</h2>
          <p style={{ color: 'var(--slate)', marginBottom: '32px' }}>This article doesn't exist or may have moved.</p>
          <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--accent)', fontWeight: 500, textDecoration: 'none', fontSize: '14px' }}>
            ← Back to all articles
          </Link>
        </div>
        <BlogFooter />
      </>
    );
  }

  const ArticleComponent = article.component;
  return (
    <>
      <BlogNav />
      <Suspense fallback={<ArticleFallback />}>
        <ArticleComponent />
      </Suspense>
      <BlogFooter />
    </>
  );
}
