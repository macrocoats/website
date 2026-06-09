import { lazy, Suspense, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
        <div style={{ padding: '120px 48px', textAlign: 'center' }}>
          <h2>Article not found</h2>
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
