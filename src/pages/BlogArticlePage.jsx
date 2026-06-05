import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BlogNav from '../components/blog/BlogNav.jsx';
import BlogFooter from '../components/blog/BlogFooter.jsx';
import SaltSprayArticle from '../components/blog/articles/SaltSprayArticle.jsx';

const ARTICLE_MAP = {
  'inconsistent-salt-spray-test-results-phosphating-bath': {
    component: SaltSprayArticle,
    title: 'Why Your Salt-Spray Test Results Are Inconsistent — MacroCoats',
  },
};

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
      <ArticleComponent />
      <BlogFooter />
    </>
  );
}
