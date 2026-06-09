# React + Tailwind Portfolio (Social Media Manager) — Implementation Plan

## Information Gathered
- The workspace `c:/Portfolio-SMM` contained **no existing files**.
- No React/Tailwind scaffold exists yet; project must be created from scratch.

## Plan
1. Create a new React + Tailwind portfolio app structure (Vite-based).
2. Configure Tailwind theme with **white + red** palette and a clean typography scale.
3. Build the portfolio as a single-page layout with anchored sections:
   - Hero
   - About
   - Services
   - Selected Work / Case Studies
   - Process
   - Skills/Tools
   - Testimonials (optional placeholder)
   - Pricing (optional placeholder)
   - FAQ (optional placeholder)
   - Contact (form + social links)
4. Add reusable UI components (Section, Button, Card, Badge) to keep the design consistent.
5. Add navigation (sticky header) with smooth scrolling to sections.
6. Add responsive styling (mobile-first) and subtle creative touches (red gradients, hover states, minimal animations).
7. Provide placeholder content blocks the user can customize.

## Dependent Files to be edited/created
- `package.json`
- `index.html`
- `vite.config.*`
- `tailwind.config.*`
- `postcss.config.*`
- `src/main.jsx`
- `src/App.jsx`
- `src/index.css`
- `src/components/*`
- `src/sections/*`

## Followup steps
- Install dependencies: `npm install`
- Run dev server: `npm run dev`
- Build: `npm run build`

<ask_followup_question>
Confirm whether you want this portfolio as a single-page app (scrolling sections) or multi-page routes (e.g., /work, /contact). Default: single-page.
</ask_followup_question>

