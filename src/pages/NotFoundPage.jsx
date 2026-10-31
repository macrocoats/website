import { Link } from 'react-router-dom';
import BlogNav from '../components/blog/BlogNav.jsx';
import BlogFooter from '../components/blog/BlogFooter.jsx';
import Seo from '../components/Seo.jsx';

export default function NotFoundPage() {
  return (
    <>
      <Seo
        title="Page Not Found | MacroCoats"
        description="The requested MacroCoats page could not be found."
        path="/404"
        robots="noindex, follow"
      />
      <BlogNav />
      <main className="not-found" id="main-content">
        <div className="not-found__grid" aria-hidden="true" />
        <div className="not-found__content">
          <p className="not-found__code">HTTP 404 · ROUTE OUT OF SPEC</p>
          <h1>The page is outside the process window.</h1>
          <p>The address may have changed, or the link may be incomplete. Return to the catalogue or continue to our technical resources.</p>
          <div className="not-found__actions">
            <Link className="v3-button v3-button--light" to="/">Return home <span aria-hidden="true">→</span></Link>
            <Link className="v3-button v3-button--outline" to="/products">View products</Link>
          </div>
        </div>
        <div className="not-found__readout" aria-hidden="true">
          <span>REQUEST</span><strong>NOT FOUND</strong><span>STATUS</span><strong>404</strong>
        </div>
      </main>
      <BlogFooter />
    </>
  );
}
