import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';

const BlogListPage = lazy(() => import('./pages/BlogListPage.jsx'));
const BlogArticlePage = lazy(() => import('./pages/BlogArticlePage.jsx'));
const TechnologyPage = lazy(() => import('./pages/TechnologyPage.jsx'));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/blog/:slug" element={<BlogArticlePage />} />
          <Route path="/technology" element={<TechnologyPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
