# Dev Desk Portfolio

A paper-themed developer portfolio built with Next.js 16 (App Router), React 19 and Tailwind CSS v4.
Every page is a different paper object on the same desk.

| Route              | Metaphor                                                     |
| ------------------ | ------------------------------------------------------------ |
| `/`                | Hero, featured work, stack, process (sticky notes), terminal |
| `/projects`        | Filing cabinet — manila folder tabs filter the archive       |
| `/projects/[slug]` | Case file — polaroid, typed sheets, thermal-receipt specs    |
| `/about`           | Field notebook — lined pages, ticket-stub timeline, stamps   |
| `/journal`         | The Dev Desk Gazette — newspaper front page & clippings      |
| `/journal/[slug]`  | Typewritten article with taped code printouts                |
| `/contact`         | Fill-in-the-blanks letter with wax seal & postmark           |
| `/resume`          | Printable typed CV (`Print / Save PDF`)                      |
| 404                | A page torn out of the notebook                              |

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # all routes are statically prerendered
npm run lint
```

## Project structure

```
app/                 routes (pages, not-found, sitemap)
  styles/paper.css   paper surfaces & objects (surface-*, stamp, receipt, tape…)
components/
  ui/                reusable paper primitives (PushPin, Tape, Stamp, StickyNote, Polaroid…)
  layout/            navbar, footer, grain overlay
  home/ projects/ about/ journal/ contact/ resume/   feature components
data/                ALL content lives here (dummy for now)
lib/                 helpers (cx, tilt, formatDate) and contact-form logic
```

## Editing content

All copy is dummy data in `data/`:

- `site.ts` — name, email, location, nav links, socials
- `projects.ts` — projects / case studies
- `journal.ts` — journal posts (structured blocks: `p`, `h2`, `quote`, `list`, `code`)
- `profile.ts` — bio, experience, principles, skills, process steps

Placeholder photos come from `picsum.photos`. Swap them for real images in `/public`
and remove the picsum entries from `next.config.ts`.

## Contact form

The form is simulated. `lib/contact.ts` holds validation and a dummy `sendLetter()`.
Replace that function with a real transport (Route Handler, Server Action, Resend, Formspree…)
— the UI doesn't need to change.

## Design tokens

Theme tokens are defined in `app/globals.css` (`@theme inline`) and exposed as Tailwind utilities:
`text-ink`, `text-ink-muted`, `text-accent`, `bg-paper`, `bg-manila`, `bg-note-yellow`, `text-stamp`,
and the fonts `font-display`, `font-mono`, `font-serif`, `font-hand`.
