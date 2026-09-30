# Menu — Open Questions for Lam

**Status: waiting on answers. Ask Lam these before building any page behind the menu.**

Every label, grouping and link in the nav today is a **draft** I (Claude) wrote from what we know: the WordPress copy, the Jira projects (ND1 RAG, ND1 CDR, 115 surgery calendar) and Glean's structure. Nothing here is confirmed. Work through it with Lam one menu at a time, then update `src/content/menu.ts` and both dictionaries, and tick the item here.

Where the drafts live: structure in `src/content/menu.ts`, copy in `src/dictionaries/{vi,en}.json` under `menu.*`.

## General

- [ ] What are the official product names? Is "Aurion Assistant / Operations / Intelligence / Protect / Insights" the right pattern, or do products carry their own names?
- [ ] Should the names be translated in Vietnamese, or stay in English on both sides (the way Glean keeps "Glean Assistant")?
- [ ] Which top-level items do we want? Draft: Sản phẩm / Giải pháp / Đối tác / Tài nguyên / Công ty. Glean has Product / Customers / Solutions / Resources / Company.
- [ ] Nav CTA: keep "Liên hệ", or switch to "Đặt lịch demo" / "Get a demo" like Glean? Do we need "Sign in" (is there a customer portal)?
- [ ] Do we want a search box in the nav, and an announcement bar above it (events, launches)?
- [ ] Should each menu item get its own page, or should some point at sections of one long page?

## Product (mega menu)

### Featured card — "Platform overview / Tổng quan nền tảng"
- [ ] Is there a platform overview page to link to? What's its one-line pitch?
- [ ] Artwork: we're using a CSS teal gradient for now. Do we have a brand illustration or photo?

### Left side — platform foundation ("Built for clinical AI.")
- [ ] **Aurion Clinical Context** → HIS · LIS · PACS · EHR connectors. Is "context layer" how we describe it? Which systems do we actually connect to today (which HIS vendors in Vietnam)?
- [ ] **Clinical data repository (CDR)** → de-identification. This is ND1CDR. Is it a product we sell, or internal infrastructure?
- [ ] **Aurion Protect**: security and compliance. Which claims can we make publicly (HIPAA, SOC 2 Type II, Vietnam Decree 13/2023 on personal data)? The WordPress FAQ claims HIPAA and SOC 2. Are those actually true?
- [ ] **Aurion Intelligence** → model hub, medical OCR, usage controls. Which models do we use or host? Is OCR its own product (the hero says "Research: OCR & Machine Learning")?
- [ ] Anything missing (APIs, on-prem deployment, audit logs)?

### Right side — product columns
- [ ] **Aurion Assistant: "Your clinical AI coworker"** (the ND1 RAG project). Features drafted: medical knowledge search, guideline Q&A, clinical documentation, lab result extraction. Which are real today, which are roadmap, and what's missing?
- [ ] **Aurion Operations: "Automate hospital workflows"**. Features drafted: surgery scheduling (the 115 project), patient flow, lab automation, research data pipelines. Same questions.
- [ ] Two columns or three? Glean has two (Assistant, Agents). Is there an Aurion "Agents" equivalent?

### Bottom strip — "Coming soon"
- [ ] Draft: **Aurion Insights**, "See where AI can make the biggest impact". What's actually next on the roadmap, and are we comfortable teasing it publicly?

## Solutions
- [ ] Draft: Hospitals / clinics, Pathology / testing labs, Research institutes (from the WordPress "What We Do" tabs). Keep these three? Split by role instead (doctors, nurses, lab techs, IT, hospital leadership), or by department?
- [ ] Should Solutions get the rich two-column layout, like Glean's?

## Customers / Partners
- [ ] Draft: Nhi Đồng 1, Nhân dân 115, All customers. Can we publish a case study page for each (what we built, metrics, a quote)? Do we have written permission to use their names and logos?
- [ ] Any other partners or pilots we can name?

## Resources
- [ ] Draft: Blog, FAQ, Security & compliance. Will we really publish a blog? Who writes it, and how often (this decides whether we need a CMS)?
- [ ] Other resources: whitepapers, research publications, webinars, docs, changelog?

## Company
- [ ] Draft: About, Values, Careers, Contact. Are we hiring (is a Careers page worth having)? Do we show the team page again? It's hidden on the WordPress site.
- [ ] Press / news, and the legal pages (privacy, terms)?

## Page content (drafts now live on the site)
- [ ] **Customers:** what exactly did we build at Nhi Đồng 1 and 115? Any results we can publish, and a quote from someone at the hospital? Written permission to name them and show their logos?
- [ ] **Security:** are HIPAA, BAA and SOC 2 Type II true today? Where is data stored (in Vietnam, on-prem at the hospital, or in the cloud)? Do we comply with Decree 13/2023?
- [ ] **About:** the founding story, founding year, founders? Should the team grid come back (it's hidden on WordPress)?
- [ ] **Careers:** any open roles? Is the CV email the same as the contact email?
- [ ] **Blog:** will posts arrive soon, or should we hide Blog from the menu until they do?
- [ ] **Assistant:** does it really answer "with sources" (citations)? Which languages does it support?
- [ ] **Operations:** is surgery scheduling a product, or only the 115 project? Are patient flow and lab automation live anywhere?

## Numbers used on the homepage
- [ ] The impact metrics (3×, 98%, 40%, 2×, 5×) come from the WordPress site. Are they measured results we can stand behind?
