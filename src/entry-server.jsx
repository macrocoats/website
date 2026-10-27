// Server entry used by scripts/prerender-blog.js to render blog routes to HTML.
import React from 'react';
import { prerenderToNodeStream } from 'react-dom/static';
import { StaticRouter } from 'react-router-dom';
import { AppRoutes } from './App.jsx';

export { ARTICLE_MAP } from './pages/BlogArticlePage.jsx';
export { PROCESS_AUDIT_TITLE } from './pages/ProcessAuditPage.jsx';

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
