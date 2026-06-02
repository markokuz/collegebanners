# Posterized

A playful, modern landing site for **Posterized**, curated poster prints and wall art. Built with Next.js and deployed on Vercel.

## Stack

- [Next.js](https://nextjs.org) (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploy on Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Framework preset: **Next.js** (auto-detected).
4. Deploy. No environment variables required for v1.

Add a custom domain in the Vercel project **Settings → Domains** when ready.

## Customize

| What | Where |
|------|--------|
| Contact email | `lib/posters.ts` → `CONTACT_EMAIL` |
| Accent color | `app/globals.css` → `--accent` |
| Poster images | Add files to `public/posters/` and list them in `lib/posters.ts` |
| Site URL (sitemap) | `app/sitemap.ts` |

## Project structure

```
app/           # layout, page, globals, SEO routes
components/    # UI sections (Hero, Gallery, etc.)
lib/           # poster list & constants
public/        # static assets
```
