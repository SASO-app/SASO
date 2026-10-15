# Fasaderen AS – Website

A modern, sales-driven one-page website for Fasaderen AS (facade & roof cleaning, Bergen/Vestlandet).
Built with React + Vite + Tailwind CSS v4.

## Highlights

- One-page scroll layout: Hero, Services, Why Us, Process, Before/After gallery, Testimonials, final CTA, Footer
- "Click-to-reveal" quote form (Hormozi-style): instead of a long open form, every CTA button opens a short
  modal form, which converts better than a fully visible form
- Sticky mobile CTA bar
- Lead form wired up for **Netlify Forms** (no backend required)

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output is written to `dist/`.

## Deploying (recommended: Netlify)

1. Push this repo to GitHub (already done).
2. Go to [app.netlify.com](https://app.netlify.com) → "Add new site" → "Import an existing project".
3. Pick this repository, set:
   - Base directory: `website`
   - Build command: `npm run build`
   - Publish directory: `website/dist`
4. Deploy. Netlify will automatically detect the hidden `quote` form in `index.html` and start
   capturing submissions — view them under **Site → Forms** in the Netlify dashboard.
5. (Optional) Add email notifications: Site settings → Forms → Form notifications → "Email notification"
   to get an email every time someone submits the quote form.
6. Connect your custom domain (e.g. `fasaderen.no`) under Site settings → Domain management.

## Content to customize

- **Photos**: replace the placeholder "Før / Etter" blocks in `src/components/Gallery.jsx` with real
  before/after photos of completed jobs.
- **Testimonials**: update `src/components/Testimonials.jsx` with real customer reviews.
- **Contact info**: phone, email, address and hours are in `src/components/Footer.jsx` and `src/components/Navbar.jsx`.
- **Colors**: brand colors are defined in `src/index.css` under `@theme` (`--color-navy`, `--color-sky`, `--color-cta`).
