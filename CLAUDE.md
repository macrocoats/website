# MacroCoats Website — CLAUDE.md

## Project Overview

Static marketing website for **MacroCoats Pvt Ltd** (formerly Technical Electroless Chemical Co. Pvt. Ltd), a specialty industrial chemistry company based in Chennai, India. The company specialises in process-engineered chemical solutions — phosphating, surface treatment, and corrosion protection — for industrial clients across India. Est. 1993.

- **Company tagline**: Process-Engineered Chemistry
- **Phone**: +91 98840 80377
- **Email**: info@macrocoats.in
- **Git remote**: github.com:Macro-Coats/website, branch `main`

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 |
| Styling | CSS3 (embedded in `<style>`) |
| JavaScript | None |
| Fonts | Google Fonts — Fraunces, Geist, Geist Mono |
| Icons | Inline SVG |
| Build tool | None — edit HTML directly |
| Deployment | Static hosting (push to GitHub) |

There is no build step, no bundler, no framework. Editing `index.html` is the entire workflow.

---

## File Structure

```
website/
├── index.html          # Entire website (2,071 lines)
└── .gitignore
```

All HTML, CSS, and content live in `index.html`. The `<style>` block spans lines **1–1,362**; the `<body>` starts at line **1,364**.

---

## Section Map (line numbers in `index.html`)

| Section | Lines | HTML comment / id |
|---------|-------|-------------------|
| CSS styles | 1–1,362 | `<style>` block |
| Navigation | 1,366–1,388 | `<!-- NAVIGATION -->` |
| Hero | 1,390–1,458 | `<!-- HERO -->` |
| Trusted By (marquee) | 1,460–1,480 | `<!-- TRUSTED BY -->` |
| The Challenge | 1,482–1,517 | `<!-- THE CHALLENGE -->` |
| Solutions | 1,519–1,585 | `<!-- SOLUTIONS -->` `id="about"` |
| Industries | 1,587–1,710 | `<!-- INDUSTRIES -->` `id="industries"` |
| Products Showcase | 1,712–1,792 | `<!-- PRODUCTS SHOWCASE -->` `id="products"` |
| Process / Services | 1,794–1,882 | `<!-- PROCESS / SERVICES -->` `id="services"` |
| Core Belief | 1,884–1,892 | `<!-- CORE BELIEF -->` |
| Client Value | 1,894–1,940 | `<!-- CLIENT VALUE -->` |
| Leadership | 1,942–1,978 | `<!-- LEADERSHIP -->` |
| CTA Band | 1,980–2,018 | `<!-- CTA BAND -->` `id="contact"` |
| Footer | 2,020–2,069 | `<!-- FOOTER -->` |

---

## CSS Architecture

### Custom Properties (CSS Variables)

Defined at the top of the `<style>` block on `:root`:

```css
/* Brand colors */
--primary:       #1E3A8A   /* navy */
--primary-deep:  #0F1F3D   /* deep navy */
--accent:        #2563EB   /* blue */
--accent-bright: #3B82F6   /* bright blue */
--purple:        #5B2A86

/* Neutrals */
--ink:       #0F1F3D
--charcoal:  #1F2937
--slate:     #64748B
--mist:      #94A3B8
--surface:   #F8FAFC
--paper:     #FFFFFF
--line:      #E2E8F0

/* Accent */
--eco:       #059669   /* green / success */
--warning:   #DC2626   /* red / alert */

/* Typography */
--display: 'Fraunces', serif      /* headings */
--sans:    'Geist', sans-serif    /* body */
--mono:    'Geist Mono', monospace /* eyebrows / labels */
```

### Layout Patterns

- **Container**: `.container` with `max-width: 1440px`, horizontal padding
- **2-column hero**: CSS Grid `1fr 1fr`
- **3-column cards**: `repeat(3, 1fr)` grid (products, value, services)
- **4-column stats**: `repeat(4, 1fr)` in hero stats
- **Marquee**: infinite CSS `marquee` keyframe animation for client logos

### Responsive Breakpoint

Single breakpoint at `@media (max-width: 1024px)`:
- Nav links hidden; single-column layout; hero visual removed; padding reduced

### Key Animations

| Name | Effect | Used on |
|------|--------|---------|
| `fadeUp` | opacity + translateY | Hero headline, CTAs |
| `fadeIn` | opacity only | Hero sub-text |
| `barGrow` | scaleX progress bar | Live monitoring card |
| `marquee` | infinite horizontal scroll | Client logo strip |

---

## Content Architecture (buyer's journey order)

1. **Hero** — value proposition + process visualization cards + stats
2. **Trusted By** — client logo marquee (Indian Railways, L&T, TVS, Rane, etc.)
3. **Challenge** — 6 pain points the company addresses
4. **Solutions** — 4 solution cards (formulation, phosphating, corrosion, IoT)
5. **Industries** — 6 sectors served with image tiles
6. **Products** — 3 product families with chemical formulas
7. **Process/Services** — 4-step flow diagram + 3 service cards
8. **Core Belief** — brand quote block
9. **Client Value** — 3 outcome cards (operational, financial, safety)
10. **Leadership** — 2 bios (Mr. Santhanam, Mr. Aswin Kumar)
11. **CTA Band** — phone, email, consultation button
12. **Footer** — links, copyright

---

## Component Patterns

### Section header
```html
<div class="section-head">
  <div class="section-eyebrow">Label Text</div>
  <h2 class="section-title">Main heading with <em>italic emphasis.</em></h2>
</div>
```

### Button styles
- `.btn-primary` — solid navy, white text, arrow icon
- `.btn-secondary` — transparent, bordered

### Card types
- `.sol-card` — solutions (icon + h3 + tags)
- `.product-row` — product family (visual block + info list); add `.reverse` for alternate layout
- `.ind-tile` — industry (image + number + name)
- `.value-card` — outcomes; modifiers `.purple`, `.eco`
- `.svc-card` — services; `.featured` for dark highlighted card

---

## Product Families

| Family | Class modifier | Tagline |
|--------|---------------|---------|
| 01 — Phosphating & Conversion Coatings | `.product-visual` (default) | `[Zn₃(PO₄)₂ · 4H₂O]` |
| 02 — Surface Preparation Chemistry | `.product-visual-2` | `[ALKALINE · pH 12.4]` |
| 03 — Corrosion Protection & Specialty | `.product-visual-3` | `[Cr-FREE · LOW-SLUDGE]` |

---

## Common Editing Tasks

### Update contact details
- Phone: lines 1,992 and 2,058 (`href="tel:..."` and display text)
- Email: lines 2,002 and 2,059

### Add a new industry tile
Copy any `.ind-tile` block within the `.ind-grid` (lines 1,598–1,709) and update the image, number, and name. Update the counter at line 1,595.

### Change a color globally
Update the CSS custom property in `:root` near line 1. All uses of `var(--property-name)` update automatically.

### Add a new section
Insert a new `<section>` between existing sections in the body, following the section head pattern above. Add a corresponding nav anchor if needed.

### Swap an industry image
Find the `<img src="...">` inside the target `.ind-tile` and replace the `src`. Placeholder comments above each image read `<!-- Replace with: <img src="path/to/..."> -->`.

---

## Deployment

No build step. Workflow:
1. Edit `index.html`
2. `git add index.html && git commit -m "..."` 
3. `git push origin main`

If hosted on GitHub Pages, changes go live on push.
