# Design

The look: quiet and minimal, inspired by the feel of theminimalists.com (not a copy of it). Lots of white space, one narrow centered column, a classic serif for headings, small spaced-out uppercase labels, and no boxes. Rylan asked for this in Nov 2026 because the first version (thick black borders, giant tiles) felt boxy.

## Rules
1. **No boxes.** No borders around content, no cards, no filled buttons. Separate things with space first, a 1px `border-line` hairline second.
2. **One column.** Content sits in `max-w-2xl` (about 672px), centered. Headings and page intros are centered; long reading text is left aligned.
3. **Two typefaces only.**
   - Serif (`font-serif`, Palatino stack, no download): name, page titles, item titles.
   - Sans (`font-sans`, Lato 300/400/700): body text and labels.
4. **Labels** use the `eyebrow` utility: 12px, bold, uppercase, 0.14em letter spacing. Use it for nav, section names, years, and text links that act as buttons ("All projects").
5. **Links** use `link` (thin underline that darkens on hover) in text, or `link-plain` in nav. Arrows (→) are fine for "go somewhere".
6. **Monochrome.** No accent color.

## Tokens (`app/globals.css`)
| Token | Hex | Use |
|---|---|---|
| `ink` | #111111 | headings, body text |
| `muted` | #58595a | secondary text, nav, labels |
| `faint` | #9a9a9a | metadata (years, stacks), copyright |
| `line` | #e4e4e4 | hairline dividers |
| `paper` | #ffffff | background |

## Type scale
- Homepage greeting: `text-4xl` / `sm:text-6xl` serif
- Page title: `text-4xl` / `sm:text-5xl` serif
- Item title: `text-2xl`–`text-3xl` serif
- Body: `text-lg`, `leading-relaxed`
- Labels: `eyebrow`

## Building blocks
- `PageShell` (components/PageShell.tsx): centered title + intro + content column. Use for every inner page.
- `Section`: eyebrow label above content, hairline between sections.
- Header: name (serif) over a centered nav; the current page is darker.
- Footer: short hairline, social links, copyright.
