import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import BlogListPage from './pages/BlogListPage.jsx';
import BlogArticlePage from './pages/BlogArticlePage.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogListPage />} />
        <Route path="/blog/:slug" element={<BlogArticlePage />} />
      </Routes>
    </BrowserRouter>
  );
}
