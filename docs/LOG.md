# Log

Newest first. One entry per piece of work: what changed, why, and anything left open.

## 2026-11-13 — Next.js security upgrade (branch `redesign/minimal`)
- Upgraded `next` and `eslint-config-next` from 16.4.0 to 16.4.6. 16.4.0 had critical advisories (remote code execution, denial of service) and its build refused to finish. `npm audit --omit=dev` now reports 0 vulnerabilities.
- Open: `npm audit` still lists 8 moderate/high issues in dev-only tooling (not shipped to the site).

## 2026-11-13 — Minimal redesign (branch `redesign/minimal`)
- Replaced the bold black-and-white tile design with a quiet, minimal one inspired by the feel of theminimalists.com. Rules are in `docs/DESIGN.md`.
- Homepage is now: greeting + short intro, an "Explore" list of the four sections, latest two projects, and a lighter "Lately on GitHub" block. Navigation moved into a centered header; socials moved to the footer.
- Moved all page copy into `content/` (new `professional.ts`, `about.ts`, `fun.ts`) so words can be edited without touching layout.
- Fonts: Archivo Black + Inter replaced by Lato + a Palatino serif. Open Graph image redrawn to match.
- Added `CLAUDE.md` and this `docs/` folder so future sessions can pick up quickly.
- Open: the homepage intro, roles, About and Fun copy are still placeholders (`grep -rn TODO content`). LinkedIn handle missing. The DirectMeds role in `content/professional.ts` needs Rylan's confirmation before it goes live.

## 2026-10-07 — First version
- Bold black-and-white site with four tiles (Professional, Projects, About, Fun), GitHub activity strip, Vercel deploy.
