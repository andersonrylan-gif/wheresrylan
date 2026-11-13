# wheresrylan.com

Rylan Anderson's personal site. Next.js (static), Tailwind, deployed on Vercel.

## Editing content
All words and links live in `content/`:
- `site.ts`: name, tagline, homepage intro, socials, navigation
- `projects.ts`: the projects list
- `professional.ts`, `about.ts`, `fun.ts`: copy for those pages

Run `grep -rn TODO content` to see what still needs real info.

## Docs
- `CLAUDE.md`: project map and conventions (start here)
- `docs/DESIGN.md`: the visual rules
- `docs/LOG.md`: what changed and why

## Develop
```sh
npm install
npm run dev      # http://localhost:3000
npm run lint && npm run build
```

Every push to `main` deploys to production on Vercel. Pull requests get preview URLs.
