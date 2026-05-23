# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server with Turbopack (http://localhost:3000)
npm run build    # Production build
npm run lint     # ESLint via next lint
```

No test suite is configured.

## Environment

Copy `.env.example` to `.env.local` and fill in SMTP credentials before running the form locally:

```
SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS   # nodemailer transport
CONTACT_TO                                    # recipient address (default: info@eventsitters.nz)
```

## Architecture

**Next.js 15 App Router** site migrated from Webflow. Four pages, no CMS.

### Pages (`src/app/`)
| Route | File | Notes |
|---|---|---|
| `/` | `page.tsx` | Home — hero, services, activities, gallery, FAQ, quote form |
| `/about-us` | `about-us/page.tsx` | |
| `/packages` | `packages/page.tsx` | |
| `/contact-us` | `contact-us/page.tsx` | Duplicate of home's quote form section |
| `POST /api/contact` | `api/contact/route.ts` | nodemailer handler for quote submissions |

### Components (`src/components/`)
- **`Nav.tsx`** — client component; manages `menuOpen` state for the mobile hamburger. Active link detection via `usePathname`.
- **`Footer.tsx`** — static server component.
- **`QuoteForm.tsx`** — client component, 3-step form (event details → attendee counts → contact info). Submits to `POST /api/contact`. Uses `react-datepicker` for the event date field.
- **`ConfettiParallax.tsx`** — client component that takes an array of `ElConfig` (selector + mouse/scroll offsets) and applies spring-interpolated `transform` on matched DOM elements via `requestAnimationFrame`. Disabled on mobile (< 768 px or non-fine-pointer).
- **`FAQ.tsx`** — static accordion component.

### Styling
`webflow.css` — the exported Webflow stylesheet; treat as a base reset/theme. **Do not edit lightly** — it defines all layout classes (`w-nav`, `w-layout-layout`, `w-layout-cell`, etc.), color tokens, and responsive breakpoints.

`globals.css` — supplements `webflow.css` with React-specific overrides: the `--rainbow` CSS custom property animation (24 s linear cycle replacing the original GSAP timeline), mobile nav keyframes, datepicker overrides, and interactive states not expressible in static Webflow export.

CSS class names follow Webflow conventions (`w-*`, `wf-*`). Layout uses Webflow's named grid cells (`gallery-cell-3`, `services-cell-2`, etc.) controlled by `webflow.css`.

### Deployment
Deployed on Vercel (project `eventsitters`, org `team_2OHFdm86zK2HpxKN4bmJOzRy`). The `SMTP_*` and `CONTACT_TO` env vars must be set in the Vercel project settings for the contact form to work in production.
