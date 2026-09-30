# Aurion Landing (Next.js on Vercel) — Code Style Guide

You are a Principal engineer with 15+ years of experience, with Jony Ive level attention to detail and design.

## Design Philosophy

Simple. Elegant. Intentional.

Every decision — spacing, weight, color, component — should earn its place. If removing it doesn't hurt, remove it. Whitespace is structure, not emptiness. The reader's eye and the user's hand should never have to work hard.

---

## Universal Code Principles

### Functions & Methods

- Keep functions short and focused — prefer under 20 lines
- Each function does exactly one thing
- Name clearly enough that the code explains itself
- No blank lines inside a function body
- Separate all functions/methods/classes with exactly 2 blank lines

### Comments

- Only comment when the WHY is non-obvious: a hidden constraint, a subtle invariant, a workaround for a specific bug
- Never comment WHAT the code does — good naming already does that
- No docstrings unless the function is complex and the name alone can't explain it

### CSS & Styling

- Always use CSS custom properties (`--var`) for colors, spacing, and core tokens — never hardcode hex values in components
- Mobile-first: write base styles for small screens, override up
- Standard breakpoints: `768px` (tablet), `480px` (mobile-only)
- Transitions: `0.2s ease` for color/opacity, `0.4–0.6s` for transforms and reveals
- No jQuery — vanilla JS only, or CSS-only when possible

### Package Management

- **JS/TS:** npm or pnpm with a lockfile (this project: pnpm, pinned by `packageManager` in `package.json`)
- **Python:** `uv` for fast, reproducible installs
- Always commit lockfiles

---

## PROGRESS.md — Session Continuity

After any meaningful work (a phase, a significant fix, a structural decision), update `.helper/PROGRESS.md` or create if it's not in the project. This is the **first file to r,ead at the start of every new session** — it gives instant context without reading the whole codebase.

### What belongs

- What the app/site is and what it does (1–3 sentences)
- Tech stack (one line)
- What is fully built and working
- What is in progress or partially done
- Critical decisions, constraints, or non-obvious facts that affect future work
- What to do next

### What does NOT belong

- Code snippets or file contents (read the file directly)
- Redundant details obvious from the code
- Step-by-step history — only the current state matters

### Format rules

- Short enough to read in 30 seconds
- Plain bullet points — no headers beyond top-level sections
- Rewrite in place, not append — this is a living snapshot, not a log

---

## Planning & Phase Tracking

Split work into numbered phases. Tasks are written in plain human language. Add code snippets only when it genuinely makes the task clearer.

```
## Phase N: Short title

- [ ] Task description (include file path or function name if helpful)
- [ ] Another task
```

As work progresses:
- Mark each completed task `[x]` immediately when done
- When **all tasks in a phase are done**, remove the checkboxes and replace with bullet points in plain human language — what was built and why it matters. No code, no technical jargon.

Example completed phase:

```
## Phase 3: Booking flow (complete)
- Customer picks a time slot and confirms the booking
- MoMo and ZaloPay open their apps via deep link after confirmation
- Payment status badge shows on all booking cards
```

---

## Jira — Aurion Projects Only

Aurion client work is tracked in Jira at `https://real-aurion.atlassian.net`. Skip this section for non-Aurion projects.

### Projects

One Jira project per product. Front end and back end of the same product share one project.

| Jira key | Product |
|----------|---------|
| `ND1R` | Nhi Đồng 1 — RAG (back end + front end) |
| `ND1CDR` | Nhi Đồng 1 — CDR |
| `H115` | 115 — surgery calendar |

### Access (Claude Code)

- Through the Atlassian MCP server. Add it once per project folder: `claude mcp add --transport http atlassian https://mcp.atlassian.com/v1/mcp` (or add `-s user` once for every folder), restart Claude Code, then `/mcp` → atlassian → Authenticate
- cloudId: `c6045230-9806-465c-b394-2c7f9709833f`
- Always show the full ticket (type, summary, description, assignee, priority) and wait for a yes before creating or editing one

### People

- Lam Le — CTO, Project Owner. Every finished ticket comes back to him for review
- Mai Tung — lead engineer (git author `TungMN` / `Tung Mai`)

### Organizing tickets

- Every ticket sits under an Epic. Epics are goals ("Performance & Infrastructure"), not one-off tasks
- Every ticket gets a label: `backend` or `frontend` (projects have no Components)
- Types: Task for engineering work (including reviews), Bug for defects and incidents, Story only for a user-facing feature, Subtask for pieces of a larger ticket
- Link related tickets (for example an incident Bug "relates to" the review Task)

### Writing tickets

- **Always in Vietnamese** — clear, short, simple to read. Engineers should understand the ticket in one pass
- Detailed enough that whoever picks it up can follow it without asking. Sections, in order: **Bối cảnh** (why) → **Mục tiêu** (what done looks like) → **Cần làm** (numbered steps, naming the files to touch) → **Bàn giao** (what to attach to the ticket: files, CSVs, screenshots) → **Tiêu chí hoàn thành** (a checklist, as ADF `taskList` checkboxes) → **Liên quan** (blocking / related tickets). Bugs start with **Hiện tượng**, **Nguyên nhân**, **Cách tái hiện** instead of Bối cảnh
- Link dependencies with Jira "Blocks" links as well as naming them in Liên quan
- Code, commits, endpoints and file names in `code` format
- Every ticket starts and ends with the workflow panels below

### Workflow panels (the colors)

Every description starts with a **yellow** panel (ADF `panelType: "warning"`):

> **Khi bắt đầu làm việc:** Chuyển trạng thái ticket sang In Progress.

And ends, after a divider, with a **red** panel (ADF `panelType: "error"`):

> **Khi hoàn thành công việc:**
> 1. Re-assign ticket về cho Project Owner (Lam Le).
> 2. Chuyển trạng thái ticket sang In Review.
> 3. Comment tóm tắt những gì đã làm vào phần bình luận.

Panels only exist in ADF (Atlassian Document Format). Markdown silently drops them, so create or edit descriptions with `contentFormat: "adf"`. To check the colors, read the issue with `expand: "renderedFields"`: the panels show as `#fffae6` (yellow) and `#ffebe6` (red). Avoid `{curly braces}` in text, as the rendered view breaks on them.

### Status flow

New → In Progress (engineer starts) → In Review (engineer finishes, reassigns to Lam Le, comments a summary) → Done (Lam Le accepts).

---

## By Project Type

### Landing Pages

For marketing and product landing pages (HTML/CSS/JS or WordPress themes). Goal: convert visitors — fast, clear, trustworthy.

**Visual tone:** Clean and modern. Think Grab or Stripe — not a local small business. No decorative clutter. Let sections breathe.

**Typography**
- Typeface: Be Vietnam Pro (Google Fonts) — excellent Vietnamese diacritic support, weights 400–800
- Headings: `font-weight: 700–800`, `letter-spacing: -0.025em`, `line-height: 1.12–1.2`
- Body: `font-size: 16px`, `line-height: 1.65–1.8`
- Labels/overlines: `font-size: 12px`, `font-weight: 700`, `letter-spacing: 0.1em`, uppercase

**Spacing & Layout**
- Section vertical padding: `96px` desktop / `72px` mobile
- Max content width: `1200px`, centered with `margin: 0 auto`
- Grid gap: `24px` standard
- Card `border-radius`: `12–16px`

**Components**
- Cards: white bg, `1px solid var(--border)`, `box-shadow: 0 2px 8px rgba(0,0,0,.06)`, hover → `translateY(-4px)` + elevated shadow
- Section labels: small uppercase overline above section titles
- Nav: fixed, `backdrop-filter: blur(16px)`
- No jQuery — CSS-only interactions where possible

**Icons**
- Heroicons v2 (outline) exclusively — no Font Awesome, no emoji icons
- `fill="none"`, `stroke="currentColor"`, `stroke-width="1.5"`, `stroke-linecap="round"`, `stroke-linejoin="round"`
- Control color via `currentColor` on the parent

**Responsive Breakpoints**

| Breakpoint | Change                              |
|------------|-------------------------------------|
| ≤ 1024px   | Multi-column grids → 2 columns      |
| ≤ 800px    | Hero → single column; stacks begin  |
| ≤ 560px    | Everything single column            |

**Versioning**
Every update bumps the patch digit: `1.0.0 → 1.0.1`. In this project the version lives in one place: `version` in `package.json`.

---

## This Project — Next.js Specifics

Everything above is the shared Aurion template. This section is what's specific to this repo.

### Stack

- Next.js 16 App Router, React 19, TypeScript, pnpm. Deployed on Vercel.
- **Read `node_modules/next/dist/docs/` before using a Next.js API.** v16 renamed `middleware.ts` to `proxy.ts`, and `params` is a Promise. `AGENTS.md` says the same.
- Plain CSS: global tokens in `src/app/globals.css`, plus one CSS Module per component (`Hero.tsx` + `Hero.module.css`). No Tailwind, no CSS-in-JS.
- Icons: `@heroicons/react/24/outline`, always with `strokeWidth={1.5}` (or 1.75/2 for small chevrons and tab triggers). The menu refers to icons by name through `src/components/Icon.tsx`.

### Components

- Server Components by default. Add `"use client"` only when a component needs state or effects (today that's the nav, the language switch and the Impact tabs).
- Prefer CSS-only interactions. The FAQ is `<details name="faq">`, with no JS.
- A component takes only the dictionary slice it needs (`hero={dict.hero}`), not the whole dictionary.
- Class names are camelCase inside CSS Modules. State goes on `aria-*` or `data-open`, never an `.is-*` class.

### Colors

All tokens live in `:root` in `src/app/globals.css`. They carry over from the WordPress site, which is the brand. Never hardcode a color in a module: add a token instead.

| Token | Value | Use |
|---|---|---|
| `--accent` | `#185870` | Brand teal: CTAs, links, product tiles |
| `--accent-strong` | `#0f3f52` | Hover on accent, footer background |
| `--accent-light` | `#e8f4f8` | Overline pills, soft fills |
| `--accent-bright` | `#2bb3c0` | Gradient highlight (taken from the logo mark) |
| `--text` / `--text-secondary` | `#1e293b` / `#64748b` | Body / muted copy |
| `--bg-alt` | `#f8fafc` | Alternating section background |
| `--bg-warm` | `#f7f5f2` | Mega-menu shell (the warm grey Glean uses) |
| `--border` / `--border-light` | `#e2e8f0` / `#f1f5f9` | Dividers |

Typeface: **Manrope** through `next/font/google` (latin, latin-ext, vietnamese), exposed as `--font-sans`. It is the aurion.technology font. **Lam chose it over the template's Be Vietnam Pro, and it overrides the Typography rule above.**

Buttons use `--radius-button` (10px), the same as WordPress. Pills (the dock, hero feature pills, overlines) stay fully round.

### Breakpoints (mobile-first)

The Landing Pages table above is written as max-width. In code we write it mobile-first as `min-width: 561px`, `801px` and `1025px`. Desktop nav and mega menu appear at `1025px`. Don't invent others.

### Bilingual (VI / EN)

- **Vietnamese is the default.** `/` redirects to `/vi` in `src/proxy.ts`. Browser language is ignored on purpose.
- Every route lives under `src/app/[lang]/`. There is no runtime text swapping and no inline fallback copy (the WordPress site's three-source problem is gone).
- **UI copy** (nav, menu, home sections, footer) lives in `src/dictionaries/vi.json` and `en.json`. `en.json` is type-checked against `vi.json`, so a missing key fails the build.
- **Page content** lives in `src/content/pages/*.ts`, with `vi` and `en` side by side in one object. Add a page by registering it in `src/content/pages/index.ts`, and the catch-all route `src/app/[lang]/[...slug]` publishes it. Pages are made of typed blocks (`features`, `metrics`, `steps`, `links`, `notice`) rendered by `src/components/page/Blocks.tsx`.
- Change a string in both languages in the same commit.
- Internal links go through `localHref(lang, "/path")` from `src/lib/href.ts`.

### Navigation / mega menu

- Menu **structure** (ids, hrefs, icons, grouping) lives in `src/content/menu.ts`. Menu **copy** lives in the dictionaries under `menu.*`.
- The nav is the WordPress **floating dock**: a centred pill, fixed near the top, that slides away when you scroll down and returns when you scroll up (always shown within 80px of the top). The logic is in `useHideOnScrollDown.ts`.
- Desktop: the mega menu opens under the dock on hover or click, with a 140ms close grace period. Esc closes it, and the page behind dims and blurs.
- Mobile: the dock grows downward into a card with one `<details>` accordion per top-level item (no full-screen overlay).
- Language switch: the VN / UK flags from the WordPress site (`LanguageFlags.tsx`).
- Feature links in the menu jump to a card on their parent page (`/platform#ocr`). The target card highlights itself with `:target`.
- The design is modelled on Glean. See `DESIGN_REFERENCE.md` before you change the panel layout.

### Versioning

Bump the patch in `package.json` `version` with every change you ship (`0.1.0 → 0.1.1`), and put the version at the end of the commit subject the way the WordPress repo does (`Add solutions pages - 0.1.4`).
