@AGENTS.md

# wheresrylan.com — guide for AI sessions

Rylan Anderson's personal site. Read this first, then `docs/DESIGN.md` before any visual change, and add a line to `docs/LOG.md` when you finish a piece of work.

## Stack
- Next.js 16 (App Router, `cacheComponents` on), React 19, Tailwind 4, TypeScript.
- Deployed on Vercel from GitHub `andersonrylan-gif/wheresrylan`. Every push to `main` goes to production; other branches get preview URLs. Never push to `main` without Rylan's OK.
- This Next version differs from training data: check `node_modules/next/dist/docs/` before using an unfamiliar API (see AGENTS.md).

## Where things live
```
content/        ALL editable copy and links. Change words here, not in pages.
  site.ts         name, tagline, email, socials, nav, homepage intro
  projects.ts     projects list (newest first)
  professional.ts roles for /professional
  about.ts        sections for /about
  fun.ts          lists for /fun
app/            routes. Pages are layout only and read from content/.
  page.tsx        homepage: intro, Explore list, latest projects, GitHub block
  <route>/page.tsx  professional, projects, about, fun
  layout.tsx      fonts, metadata, header + footer
  globals.css     design tokens and the eyebrow / link utilities
  opengraph-image.tsx, sitemap.ts, robots.ts, not-found.tsx
components/     Header, Footer, PageShell + Section, GitHubStrip
lib/github.ts   reads the public GitHub contribution graph (cached hourly)
docs/           DESIGN.md (visual rules), LOG.md (what changed and why)
```

## Adding things
- New page: add `app/<slug>/page.tsx` using `PageShell` + `Section`, put its copy in `content/<slug>.ts`, add it to `nav` in `content/site.ts` (that also updates the homepage and sitemap).
- New project: copy an entry at the top of `content/projects.ts`.
- Placeholders are marked `TODO`. `grep -rn TODO content` lists what still needs Rylan's real info.

## Check before finishing
```sh
npm run lint && npm run build
npm run dev   # look at it on desktop and a phone-width window
```
