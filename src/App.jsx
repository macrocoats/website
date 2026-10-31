import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import HomePage from './pages/HomePage.jsx';

const BlogListPage = lazy(() => import('./pages/BlogListPage.jsx'));
const BlogArticlePage = lazy(() => import('./pages/BlogArticlePage.jsx'));
const ProcessAuditPage = lazy(() => import('./pages/ProcessAuditPage.jsx'));
const TechnologyPage = lazy(() => import('./pages/TechnologyPage.jsx'));
const ProductsPage = lazy(() => import('./pages/ProductsPage.jsx'));
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage.jsx'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.jsx'));

// Start each in-app page change at the top (hash links still jump to their anchor).
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export function AppRoutes() {
  return (
    <Suspense fallback={null}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogListPage />} />
        <Route path="/blog/:slug" element={<BlogArticlePage />} />
        <Route path="/process-audit" element={<ProcessAuditPage />} />
        <Route path="/technology" element={<TechnologyPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:slug" element={<ProductDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
