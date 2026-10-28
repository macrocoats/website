// Server entry used by scripts/prerender-blog.js to render blog, audit, product and technology routes to HTML.
import React from 'react';
import { prerenderToNodeStream } from 'react-dom/static';
import { StaticRouter } from 'react-router-dom';
import { AppRoutes } from './App.jsx';

export { ARTICLE_MAP } from './pages/BlogArticlePage.jsx';
export { PROCESS_AUDIT_TITLE } from './pages/ProcessAuditPage.jsx';
export { PRODUCTS } from './data/products.js';

export async function render(url) {
  const { prelude } = await prerenderToNodeStream(
    <React.StrictMode>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </React.StrictMode>
  );
  let html = '';
  for await (const chunk of prelude) html += chunk;
  return html;
}
