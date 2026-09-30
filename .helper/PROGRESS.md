# Aurion Landing (Next.js) — Progress

The new marketing site for Aurion, a healthcare-tech company building clinical intelligence infrastructure in Asia-Pacific. It replaces the one-page WordPress theme (`~/projects/Aurion/landing_page_wp`, live at aurion.health / aurion.technology) and grows into a multi-page site modelled on glean.com. Bilingual, Vietnamese by default.

**Stack**: Next.js 16 (App Router) · React 19 · TypeScript · plain CSS Modules · pnpm · Vercel
**Repo**: github.com/Real-Aurion/vercel-landing (private, default branch `vercel`) · **Version**: 0.1.2

## What's built

- `/` redirects to `/vi`. Every page is statically generated in both languages (34 routes)
- Floating dock nav carried over from WordPress: hides on scroll down, returns on scroll up, VN / UK flag switch. The Glean-style Product mega menu opens under it; the other menus use icon-grid panels. On mobile the dock grows into an accordion card
- "Platform overview" card in the menu is solid teal with the cropped Aurion mark (Lam rejected the gradient)
- Home page: hero (one-line title on desktop), partner logos, "What We Do" tabs, FAQ, contact CTA, footer
- 14 content pages behind the menu: platform, 3 products (Insights is "coming soon"), 3 solutions, customers + 2 case studies, about (with values), careers, security, blog ("coming soon")
- Font is Manrope (from aurion.technology). Buttons use a 10px radius

## Key decisions & gotchas

- **All page and menu copy is a draft** written from the WordPress copy and the Jira project names. It is waiting on Lam's answers in `MENU_QUESTIONS.md`
- Case studies say what we're building at Nhi Đồng 1 (knowledge assistant + CDR) and 115 (surgery schedule), with no metrics or quotes, until permission is confirmed
- The security page repeats the WordPress FAQ's HIPAA / BAA / encryption claims. These need verifying before launch
- Metrics (3×, 98%, 40%, 2×, 5×) come from WordPress. They also appear on the solutions and operations pages
- The contact CTA is a `mailto:`; there's no form backend yet. The contact email (`hello@aurion.health` or `@aurion.technology`) is unconfirmed: `src/lib/contact.ts`
- Vercel project not created yet (Lam is importing it from the dashboard, team `slawdawg`, Hobby plan)

## Next

- Lam answers the questions in `MENU_QUESTIONS.md`, then swap drafts for real copy
- Contact form (Phase 5 in `PLAN.md`)
