# MacroCoats Website — CLAUDE.md

## Project Overview

Marketing website for **MacroCoats Pvt Ltd** (formerly Technical Electroless Chemical Co. Pvt. Ltd), a specialty industrial chemistry company based in Chennai, India. The company specialises in process-engineered chemical solutions — phosphating, surface treatment, and corrosion protection — for industrial clients across India. Est. 1993.

- **Company tagline**: Process-Engineered Chemistry
- **Phone**: +91 98840 80377
- **Email**: info@macrocoats.in
- **Git remote**: github.com:Macro-Coats/website, branch `main`

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 |
| Routing | React Router DOM 7 |
| Build | Vite 6 |
| CSS | `src/index.css` (3,119 lines, separate file) |
| Email | EmailJS Browser 4.4.1 (`@emailjs/browser`) |
| Fonts | Google Fonts — Fraunces, Geist, Geist Mono |
| Icons | Inline SVG |
| Deployment | Vercel (auto-deploy on `git push origin main`) |

---

## File Structure

```
website/
├── index.html              # Vite entry point (SEO meta + GA4 tag)
├── vite.config.js          # Vite config (manual chunks: react, react-router)
├── package.json            # Dependencies + scripts (dev / build / preview / og)
├── .env                    # EmailJS keys (gitignored)
├── .env.example            # EmailJS variable names — template for .env setup
├── .gitignore
├── scripts/
│   └── generate-og-image.js  # Generates public/og-image.png (run: npm run og)
├── public/
│   ├── og-image.png        # Social share image
│   ├── sitemap.xml         # SEO sitemap
│   └── robots.txt
├── content/
│   └── linkedin-posts-ready-to-publish.md
├── blog/                   # Pre-rendered blog pages (generated)
├── dist/                   # Production build output (gitignored)
└── src/
    ├── index.css           # 3,119-line design system (all styles live here)
    ├── main.jsx            # React entry point — mounts <App />
    ├── App.jsx             # React Router setup (routes below)
    ├── hooks/              # Custom React hooks for IoT animations
    │   ├── useDosingFlash.js
    │   ├── useEventLog.js
    │   ├── useIoTAnimations.js
    │   ├── useMetricOscillator.js
    │   └── useRingGauge.js
    ├── pages/
    │   ├── HomePage.jsx
    │   ├── BlogListPage.jsx
    │   └── BlogArticlePage.jsx
    └── components/
        ├── layout/
        │   ├── Nav.jsx
        │   └── Footer.jsx
        ├── home/           # 16 homepage section components (render order below)
        │   ├── Hero.jsx
        │   ├── TrustedBy.jsx
        │   ├── Challenge.jsx
        │   ├── Solutions.jsx
        │   ├── Industries.jsx
        │   ├── Products.jsx
        │   ├── ProductComparison.jsx
        │   ├── IoTCommandCenter.jsx
        │   ├── IoTHowItWorks.jsx
        │   ├── ProcessServices.jsx
        │   ├── CoreBelief.jsx
        │   ├── ClientValue.jsx
        │   ├── CaseStudies.jsx
        │   ├── Leadership.jsx
        │   ├── ProcessAudit.jsx
        │   └── CtaBand.jsx
        └── blog/
            ├── BlogNav.jsx
            ├── BlogFooter.jsx
            ├── BlogSidebar.jsx
            └── articles/
                ├── SaltSprayArticle.jsx
                ├── PhosphateSelectionArticle.jsx
                ├── IoTMonitoringArticle.jsx
                └── ChromiumFreeArticle.jsx
```

---

## Routing

Defined in `src/App.jsx`:

| Route | Component |
|-------|-----------|
| `/` | `pages/HomePage.jsx` |
| `/blog` | `pages/BlogListPage.jsx` |
| `/blog/:slug` | `pages/BlogArticlePage.jsx` |

---

## Homepage Section Order

Render order from `src/pages/HomePage.jsx`:

| Order | Component | Notes |
|-------|-----------|-------|
| 1 | `Nav` | Fixed navigation |
| 2 | `Hero` | Value prop + animated process cards + stats |
| 3 | `TrustedBy` | Client logo marquee (Indian Railways, L&T, TVS, Rane…) |
| 4 | `Challenge` | 6 pain points the company addresses |
| 5 | `Solutions` | 4 solution cards (formulation, phosphating, corrosion, IoT) |
| 6 | `Industries` | 6 sector image tiles |
| 7 | `Products` | 3 product families with chemical formulas |
| 8 | `ProductComparison` | Zinc / Iron / Manganese phosphating comparison table |
| 9 | `IoTCommandCenter` | Interactive real-time bath monitoring dashboard |
| 10 | `IoTHowItWorks` | IoT process flow visualization |
| 11 | `ProcessServices` | 4-step flow diagram + 3 service cards |
| 12 | `CoreBelief` | Brand quote block |
| 13 | `ClientValue` | 3 outcome cards (operational, financial, safety) |
| 14 | `CaseStudies` | 3 industry case studies (automotive Tier-1, two-wheeler, heavy eng.) |
| 15 | `Leadership` | 2 bios (Mr. Santhanam, Mr. Aswin Kumar) |
| 16 | `ProcessAudit` | Lead-capture form — submits via EmailJS |
| 17 | `CtaBand` | Phone, email, consultation button |
| 18 | `Footer` | Links + copyright |

---

## CSS Architecture

**File:** `src/index.css` (3,119 lines)

### Custom Properties (`:root` block, lines 1–57)

```css
/* Brand */
--primary: #1E3A8A;         /* navy */
--primary-deep: #0F1F3D;    /* deep navy */
--accent: #2563EB;          /* blue */
--accent-bright: #3B82F6;   /* bright blue */
--purple: #5B2A86;

/* Neutrals */
--ink: #0A0F1E;
--charcoal: #1F2937;
--slate: #64748B;
--mist: #94A3B8;
--surface: #F8FAFC;
--paper: #FFFFFF;
--line: #E2E8F0;
--line-soft: #F1F5F9;

/* Semantic / status */
--eco: #059669;             /* green / success */
--warning: #DC2626;         /* red / alert */
--status-warn: #F59E0B;
--status-error: #EF4444;
--accent-violet: #8B5CF6;

/* Typography stacks */
--display: 'Fraunces', Georgia, serif;   /* headings */
--sans: 'Geist', -apple-system, sans-serif; /* body */
--mono: 'Geist Mono', monospace;         /* eyebrows / labels */

/* Type scale */
--text-xs: 11px;   --text-sm: 13px;   --text-base: 15px;
--text-md: 17px;   --text-lg: 20px;   --text-xl: 24px;
--text-2xl: 32px;  --text-3xl: 42px;

/* Radius */
--radius-sm: 8px;  --radius-md: 14px;
--radius-lg: 20px; --radius-pill: 999px;

/* Elevation */
--shadow-sm: 0 4px 12px rgba(15,31,61,0.06);
--shadow-md: 0 12px 30px rgba(15,31,61,0.10);
--shadow-lg: 0 24px 60px rgba(15,31,61,0.14);

/* Motion */
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
--dur-fast: 200ms;  --dur-base: 300ms;  --dur-slow: 600ms;
```

### Layout Patterns
- **Container**: `.container` with `max-width: 1440px`, horizontal padding
- **2-column hero**: CSS Grid `1fr 1fr`
- **3-column cards**: `repeat(3, 1fr)` grid (products, value, services)
- **Marquee**: infinite CSS `marquee` keyframe animation for client logos

### Responsive Breakpoint
Single breakpoint at `@media (max-width: 1024px)` — single-column layout, nav links hidden, padding reduced.

---

## Blog System

**Published articles (4):**
- "Why Your Salt-Spray Test Results Are Inconsistent: The Bath Chemistry Explanation" — Mr. Santhanam, June 2026 (8 min read)
  - Slug: `inconsistent-salt-spray-test-results-phosphating-bath`
  - Component: `src/components/blog/articles/SaltSprayArticle.jsx`
- "Zinc Phosphate vs Iron Phosphate vs Manganese Phosphate" — July 2026
  - Slug: `zinc-phosphate-vs-iron-phosphate-vs-manganese-phosphate`
  - Component: `src/components/blog/articles/PhosphateSelectionArticle.jsx`
- "IoT Bath Monitoring for Phosphating Lines" — July 2026
  - Slug: `iot-bath-monitoring-phosphating-lines`
  - Component: `src/components/blog/articles/IoTMonitoringArticle.jsx`
- "Chromium-Free Phosphating in India" — August 2026
  - Slug: `chromium-free-phosphating-india-tier1-automotive`
  - Component: `src/components/blog/articles/ChromiumFreeArticle.jsx`

To add a new article: create a component in `src/components/blog/articles/`, register the slug in `BlogArticlePage.jsx`.

---

## EmailJS Integration

The `ProcessAudit` component submits form data via EmailJS.

- Keys are stored in `.env` (gitignored) — see `.env.example` for required variable names
- Do not commit `.env` to the repository

---

## Product Families

| Family | Chemical tag |
|--------|-------------|
| 01 — Phosphating & Conversion Coatings | `[Zn₃(PO₄)₂ · 4H₂O]` |
| 02 — Surface Preparation Chemistry | `[ALKALINE · pH 12.4]` |
| 03 — Corrosion Protection & Specialty | `[Cr-FREE · LOW-SLUDGE]` |

---

## Common Editing Tasks

| Task | Where to edit |
|------|---------------|
| Edit a homepage section | `src/components/home/<ComponentName>.jsx` |
| Change a color globally | `src/index.css` `:root` block (line 1) — `var(--property-name)` updates everywhere |
| Update contact details (phone/email) | `src/components/home/CtaBand.jsx` and `src/components/layout/Footer.jsx` |
| Update nav links | `src/components/layout/Nav.jsx` |
| Add a blog article | New file in `src/components/blog/articles/`, register in `BlogArticlePage.jsx` |
| Add a new homepage section | Create component in `src/components/home/`, import and add to `src/pages/HomePage.jsx` |
| Add an industry tile | Edit `Industries.jsx` — copy an existing tile, update image + number + name |
| Modify IoT dashboard | `IoTCommandCenter.jsx` + hooks in `src/hooks/` |
| Edit product comparison table | `src/components/home/ProductComparison.jsx` — update `rows` array |
| Edit case studies | `src/components/home/CaseStudies.jsx` — update `cases` array |
| Regenerate OG social image | `npm run og` (re-run after changing title or branding) |

---

## Deployment

```bash
npm run dev                              # Local dev server (hot reload)
npm run build                            # Vite build → dist/
npm run og                               # Regenerate public/og-image.png (run after branding changes)
git add src/ && git commit -m "..."
git push origin main                     # Vercel auto-deploys on push
```

Build output goes to `dist/`. Vercel handles CI/CD — no manual deploy step needed. Vercel natively handles SPA routing, so no redirect config is required.

`index.html` includes Google Analytics 4 (GA4, tracking ID `G-4L2PBC9WHB`) and full SEO meta tags. Do not remove the GA4 script block.
