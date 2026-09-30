# Plan

## Phase 1: Kickstart (complete)
- New Next.js site with Vietnamese and English routes, Vietnamese by default
- Aurion brand colours, type and spacing carried over from WordPress into shared tokens
- Glean-style Product mega menu with draft content, plus a mobile menu
- Home page content moved over from WordPress

## Phase 2: Menu content
- [ ] Answer every question in `MENU_QUESTIONS.md` with Lam
- [ ] Update `src/content/menu.ts` and both dictionaries with the confirmed names, groups and links
- [ ] Decide whether Solutions and Customers get rich panels like Product

## Phase 3: Deploy
- [ ] Create the Vercel project from the GitHub repo (preview deploys on every push)
- [ ] Point a staging subdomain at it; keep aurion.health on WordPress until launch

## Phase 4: Pages behind the menu
- [ ] Platform overview page
- [ ] One page per product (Assistant, Operations, …)
- [ ] Solutions pages (hospitals, labs, research)
- [ ] Customer case studies (Nhi Đồng 1, 115)
- [ ] About, values, careers, security & compliance
- [ ] Shared page building blocks: page hero, feature grid, metric strip, logo row, quote

## Phase 5: Contact & content
- [ ] Contact form with a server action and an email provider (e.g. Resend), plus a bilingual confirmation email like WordPress sends
- [ ] Decide on a CMS for the blog and case studies (only if non-developers will edit them)
- [ ] SEO: per-page metadata, `hreflang` alternates, sitemap, Organization JSON-LD (the WordPress footer has one to port)

## Phase 6: Launch
- [ ] Scroll reveals and polish pass, Lighthouse ≥ 95
- [ ] Move aurion.health to Vercel, redirect the old WordPress URLs (`/team/` → `/vi/about#values`)
