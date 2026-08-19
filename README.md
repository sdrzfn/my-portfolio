# Sadrakh Scrapbook Portfolio

A Next.js + React portfolio recreated from the provided Figma direction: notebook grid, torn paper, scrapbook accents, editorial columns, project carousel, timeline, journal and contact section.

## Stack

- Next.js
- React
- TypeScript
- CSS Modules / global CSS
- GSAP + ScrollTrigger
- Embla Carousel
- Local SVG/PNG-ready asset structure
- Vercel-friendly deployment

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm start
```

## Replace placeholders

The included SVG images are intentionally self-contained placeholders so the project works without external image dependencies.

Replace these files with your real assets:

- `public/images/profile-placeholder.svg`
- `public/images/project-*.svg`
- `public/images/journal-*.svg`

Scrapbook assets can live under:

- `public/scrapbook/`
- `public/textures/`

## Main content files

- `components/Hero.tsx`
- `components/WhatIDo.tsx`
- `components/FeaturedProjects.tsx`
- `components/Experience.tsx`
- `components/Journal.tsx`
- `components/Contact.tsx`
- `data/projects.ts`

## Deploy to Vercel

1. Push this project to GitHub.
2. Import the repository into Vercel.
3. Vercel detects Next.js automatically.
4. Use the default build settings.
5. Add a custom domain later if desired.

No `output: "export"` is configured, so the project remains a normal Next.js app and can grow into dynamic routes, project pages, CMS content or API functionality later.
