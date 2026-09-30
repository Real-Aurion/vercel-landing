# Aurion Landing (Next.js) — Progress

The new marketing site for Aurion, a healthcare-tech company building clinical intelligence infrastructure in Asia-Pacific. It replaces the one-page WordPress theme (`~/projects/Aurion/landing_page_wp`, live at aurion.health) and grows into a multi-page site modelled on glean.com. Bilingual, Vietnamese by default.

**Stack**: Next.js 16 (App Router) · React 19 · TypeScript · plain CSS Modules · pnpm · Vercel
**Repo**: github.com/Real-Aurion/vercel-landing (private) · **Version**: 0.1.0

## What's built

- `/` redirects to `/vi`. `/vi` and `/en` are statically generated
- Glean-style mega menu under "Product": platform tree, two product columns, coming-soon strip. Simpler icon-grid panels for Solutions, Customers, Resources and Company. Full-screen accordion drawer on mobile
- Home page ported from WordPress: hero, partner logos (Nhi Đồng 1, 115), "What We Do" tabs with metrics, FAQ, contact CTA, footer
- Design tokens, typography and component rules in `CODE_STYLE.md`. Glean design notes in `DESIGN_REFERENCE.md`

## Key decisions & gotchas

- **All menu content is a draft.** Menu links point at pages that don't exist yet, so they 404 until built. Answers needed first: `MENU_QUESTIONS.md`
- Copy has one source: `src/dictionaries/{vi,en}.json`. `en` is type-checked against `vi`, so a missing key fails the build
- Font changed from Manrope (WordPress) to Be Vietnam Pro, per the shared template
- The contact CTA is a `mailto:` for now; there is no form backend yet. The WordPress site shows `hello@aurion.health` but sends mail from `@aurion.technology`. Confirm which is canonical (`src/lib/contact.ts`)
- The WordPress FAQ claims HIPAA and SOC 2 Type II. Those claims were copied over unchanged; verify them before launch
- Not yet connected to a Vercel project, and no domain

## Next

- Go through `MENU_QUESTIONS.md` with Lam
- Phase plan: `PLAN.md`
