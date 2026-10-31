import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { injectSpeedInsights } from '@vercel/speed-insights';

const root = document.getElementById('root');
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Inject Vercel Speed Insights
injectSpeedInsights();

// Blog pages are prerendered at build time (scripts/prerender-blog.js); hydrate
// that markup instead of replacing it so content shows before JS loads.
if (root.hasChildNodes()) ReactDOM.hydrateRoot(root, app);
else ReactDOM.createRoot(root).render(app);
