---
version: alpha
colors:
  primary: "#10243A"
  navy: "#10243A"
  navy-deep: "#07172A"
  signal-red: "#C62828"
  signal-red-bright: "#ED1C24"
  steel: "#657584"
  body-text: "#3E4C59"
  divider: "#D3D9DF"
  cloud: "#F3F5F6"
  white: "#FFFFFF"
typography:
  heading:
    fontFamily: "Archivo Narrow, Archivo, sans-serif"
  body:
    fontFamily: "Archivo, -apple-system, sans-serif"
  utility:
    fontFamily: "Archivo Narrow, Arial Narrow, sans-serif"
rounded:
  small: "0px"
  medium: "0px"
  large: "0px"
  pill: "0px"
spacing:
  compact: "8px"
  control: "16px"
  section-mobile: "20px"
  section-desktop: "48px"
components:
  primary-action:
    backgroundColor: "#C62828"
    textColor: "#FFFFFF"
    rounded: "0px"
  focus-ring:
    backgroundColor: "#C62828"
    size: "2px"
---

## Overview

The MacroCoats product portfolio is the canonical visual reference for the website. The system is modernist industrial: strong ruled structures, square geometry, compressed uppercase headings, high-information layouts, and a disciplined navy-red-steel palette. It should feel like a precise technical catalogue built for plant, quality, procurement, and engineering teams—not a luxury brand, generic SaaS product, or decorative editorial site.

Runtime CSS variables in `src/index.css` are canonical. This file mirrors their durable values and usage.

## Colors

Navy (`#10243A`) owns structure, major headings, and dark technical sections. Signal red (`#C62828`) marks primary actions, active information, section indices, and short emphasis rules. Bright red is reserved for high-contrast hero accents. Steel and body-text greys carry secondary information; cloud and white are the only principal light surfaces. Do not reintroduce gold, purple, or generic interface blue.

## Typography

Archivo is the body and control face. Archivo Narrow is the heading, label, measurement, and utility face. Headings are bold, compressed, often uppercase, and use tight but readable spacing. Avoid serif and italic display treatments; emphasis comes from weight, scale, rules, and red accents.

## Layout

Layouts use explicit grids, thin divisions, and aligned technical metadata. Content lives inside 48px desktop gutters and 20px phone gutters. Hero imagery can run edge-to-edge, while text and controls follow the grid. Mobile layouts must work at 320px without horizontal scrolling; hero actions stack below 600px and remain at least 44px high.

## Elevation & Depth

The system is flat by default. Use borders and tonal contrast before shadows. Shadows are limited to floating navigation, overlays, and genuinely raised interactive states.

## Shapes

Controls, cards, tags, images, and panels use square corners. Circular geometry is reserved for inherently circular gauges, status lights, and icons—not general containers or buttons.

## Components

Primary actions are red with white text and square edges. Secondary actions are transparent with a visible rule. Section titles use bold Archivo Narrow uppercase; eyebrows use red and wide tracking. Dark sections use navy rather than near-black. All interactive elements require visible hover and keyboard focus states.

Scrollbar colors inherit globally from the root. Motion stops under `prefers-reduced-motion`; hero video falls back to its poster. Images reserve dimensions to prevent layout shifts.

## Do's and Don'ts

- Do use red as a precise signal rather than a decorative wash.
- Do use ruled grids, section indices, specifications, and technical photography.
- Do keep long technical copy readable with clear alignment and hierarchy.
- Don't use gold, purple, serif headings, glass effects, or pill-shaped controls.
- Don't introduce a new accent color for each content category.
- Don't allow desktop compositions or long labels to create horizontal scrolling on phones.
