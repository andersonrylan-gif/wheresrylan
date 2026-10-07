# whereasrylan.com

Rylan Anderson's personal site. Next.js (static), Tailwind, deployed on Vercel.

## Editing content
- `content/site.ts`: name, tagline, social links, homepage tiles
- `content/projects.ts`: the projects list
- `app/professional`, `app/about`, `app/fun`: page copy (search for `TODO`)

## Develop
```sh
npm install
npm run dev      # http://localhost:3000
npm run lint && npm run build
```

Every push to `main` deploys to production on Vercel. Pull requests get preview URLs.
