# Batman Odulio — Portfolio

Premium interactive portfolio for Batman Odulio, Senior IT Product Manager at Procter & Gamble. All content is sourced from `Profile.pdf` (LinkedIn export) — the single source of truth lives in [`src/data/profile.ts`](src/data/profile.ts).

## Stack

- **React 19** + **TypeScript** (Vite)
- **Tailwind CSS v4**
- **Framer Motion** (page transitions, scroll reveals, 3D tilt cards)
- **React Router 7** — flat navigation: Home, Experience, Projects, Research, Skills, Credentials (contact lives on Home)

## Features

- Styled per `portfolio branding guide.html` (IceBrk identity): IceBrk Blue / Energy Orange / Sky Blue / Vitality Green + Sunshine Yellow & Playful Purple accents, Baloo 2 + Poppins, rounded corners, chunky solid shadows, full-opacity confetti blobs/dots/triangles
- **Non-scrolling, app-like layout** — both pages fit the viewport; Portfolio content is organized into sub-tabs (long panels scroll internally, the page never does)
- Light/dark mode toggle (persisted, no flash on load); dark mode is a Charcoal Ink variant of the same palette
- Large bat cursor that follows the pointer and reacts to interactive elements; confetti-colored bat flutter on page transitions (original SVG, no copyrighted artwork)
- Interactive tilt cards, magnetic buttons, expandable experience accordions, passion project spotlight (IceBrk)
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
