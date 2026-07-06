# Batman Odulio — Portfolio

Premium interactive portfolio for Batman Odulio, Senior IT Product Manager at Procter & Gamble. All content is sourced from `Profile.pdf` (LinkedIn export) — the single source of truth lives in [`src/data/profile.ts`](src/data/profile.ts).

## Stack

- **React 19** + **TypeScript** (Vite)
- **Tailwind CSS v4**
- **Framer Motion** (page transitions, scroll reveals, 3D tilt cards)
- **React Router 7** (2 routes: Home, Portfolio — contact lives on Home)

## Features

- Light/dark mode toggle (persisted, no flash on load) — metallic dark violet / royal blue / orange accents
- Glassmorphism surfaces, animated ambient background (drifting gradient orbs + grid), cursor spotlight
- Large bat cursor that follows the pointer and reacts to interactive elements; bat flutter on page transitions (original SVG, no copyrighted artwork)
- Interactive tilt cards, magnetic buttons, expandable experience timeline, passion project spotlight (IceBrk)
- The resume PDF is intentionally **not** downloadable — it is kept out of `public/` and blocked by `server.fs.deny` in dev
- SEO: meta/OG tags, JSON-LD Person schema, robots.txt
- Mobile-friendly and respects `prefers-reduced-motion`

## Development

```bash
npm install
npm run dev       # dev server
npm run build     # typecheck + production build
npm run preview   # serve the production build
```

## Deploy on GitHub Pages

Deployment is automated via `.github/workflows/deploy.yml`:

1. Push the repo to GitHub (include `package-lock.json` — the workflow uses `npm ci`).
2. In the repo: **Settings → Pages → Source → GitHub Actions**.
3. Push to `main` (or run the workflow manually) — the site builds and deploys.

The build uses relative asset paths (`base: "./"`) and hash-based routing (`/#/portfolio`), so it works at any Pages URL — project site or user site — with no extra config.

### Vercel (alternative)

Importing into Vercel also works out of the box; `vercel.json` is kept for that case.

## Updating content

Edit `src/data/profile.ts` only — all pages read from it.
