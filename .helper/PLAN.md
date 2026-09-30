# Plan

## Phase 1b: Look & feel from the old site (complete)
- Floating dock nav that hides on scroll down and returns on scroll up
- Manrope font, 10px button corners, and the VN / UK flag language switch from WordPress
- Hero title on one line on desktop; solid teal overview card in the menu

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

## Phase 4: Pages behind the menu (drafts complete)
- Every menu link now leads to a real page, in Vietnamese and English
- Pages are assembled from shared blocks (feature cards, metrics, steps, link cards, notices), so new pages need only content
- Menu feature links jump to, and highlight, the matching card on their product page
- [ ] Replace draft copy with Lam's answers (`MENU_QUESTIONS.md`)
- [ ] Add a quote block and a logo-row block once case studies have real content

## Phase 5: Contact & content
- [ ] Contact form with a server action and an email provider (e.g. Resend), plus a bilingual confirmation email like WordPress sends
- [ ] Decide on a CMS for the blog and case studies (only if non-developers will edit them)
- [ ] SEO: per-page metadata, `hreflang` alternates, sitemap, Organization JSON-LD (the WordPress footer has one to port)

## Phase 6: Launch
- [ ] Scroll reveals and polish pass, Lighthouse ≥ 95
- [ ] Move aurion.health to Vercel, redirect the old WordPress URLs (`/team/` → `/vi/about#values`)
