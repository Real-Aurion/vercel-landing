# Aurion Landing (Next.js) — Progress

The new marketing site for Aurion, a healthcare-tech company (founded 2025, Ho Chi Minh City) building clinical intelligence infrastructure. It replaces the WordPress theme (`~/projects/Aurion/landing_page_wp`) with a multi-page site modelled on glean.com. Bilingual, Vietnamese by default.

**Stack**: Next.js 16 (App Router) · React 19 · TypeScript · plain CSS Modules · pnpm · Vercel
**Repo**: github.com/Real-Aurion/vercel-landing (private, default branch `vercel`) · **Live preview**: vercel-landing-gold.vercel.app · **Version**: 0.1.4

## What's built

- Floating dock nav (hides on scroll down), a Glean-style Product mega menu, VN / UK flags, and Manrope + JetBrains Mono (for labels)
- Glean-style page system: split hero with a product mockup, hairline rails at the container edges, mono overlines, a sticky heading beside a joined card grid, alternating split sections on dotted teal stages, numbered steps and link cards. The dark stats band was removed at Lam's request; numbers appear only in the home "What We Do" tabs
- **Coded product mockups** (`src/components/visuals/`): Assistant chat with citations, discharge-summary draft, OCR, the 115 surgery calendar with role tabs and a surgery being moved, patient-flow board, QR check-in phone, CDR data-flow pipeline, connectors orbit, on-prem boundary, research dataset, and the Insights dashboard. They stand in for real screenshots
- Home: hero plus a showcase (surgery calendar with the Assistant chat floating over it), partners, three product splits, the "What We Do" tabs, FAQ, CTA
- 13 content pages: platform, assistant, operations, insights (coming soon), 3 solutions, customers + 2 case studies, about, careers, security. The blog was removed from the menu and site

## Confirmed facts (from Lam, 2026-09-30)

- **Live today**: knowledge search, clinical documentation, surgery scheduling, patient flow, CDR, HIS connector. Everything else is badged "Sẵn sàng triển khai / Available", meaning Aurion can build it on request
- Assistant cites its sources. The only integration is HIS (for the CDR project)
- **Nhi Đồng 1**: hospital AI context, chatbot, CDR (close to going live). **115**: end-to-end surgery calendar (QR scan, calendar, role views, moving surgeries, assigning doctors and nurses, and many more features). Logos are OK to show
- Selling points: digitising Vietnamese healthcare in line with government mandates, saving time, automation, everything in one place
- Data is stored in Vietnam, **on-premise at the hospital**. The HIPAA / SOC 2 / BAA claims were removed from the FAQ and security page (unconfirmed)
- Founded 2025. **No founder names, no team section**
- Contact and careers email: `shanlin@aurion.technology`. Careers mail uses the fixed subject `[Aurion Careers] CV`, so Lam can auto-forward it to HR
- Metrics (3×, 98%, 40%, 2×, 5×) are confirmed real. No blog for now

## Gotchas

- Mockups are code, not images. To use a real screenshot, swap the component in `src/components/visuals/Visual.tsx` for an `<Image>`
- Mockup copy lives inside each visual component (`vi` and `en` side by side), not in the dictionaries
- The contact CTA is a `mailto:`; there's no form backend yet
- `ScrollReset.tsx` does the scrolling on page changes (to the top, or to the `#hash` target). Next's built-in scroll didn't fire under the fixed dock, so the logo landed mid-page. Keep it when touching navigation
- The FAQ no longer quotes an implementation timeline (Lam: too early to say)

## Next

- Real product screenshots or photos from Lam (see `MENU_QUESTIONS.md` → Assets)
- Contact form (Phase 5 in `PLAN.md`)
