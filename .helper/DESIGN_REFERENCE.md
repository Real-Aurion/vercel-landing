# Design Reference — Glean

We are modelling the site's look and information architecture on **glean.com**. Glean's product is enterprise AI search plus assistants and agents. Aurion's is the clinical version: search and assistants over hospital knowledge, a clinical data repository, and workflow automation. So their menu structure fits us almost one-to-one.

Screenshot of their Product menu (captured 2026-09-30): [`references/glean-product-menu.jpg`](references/glean-product-menu.jpg)

## Why their Product dropdown works

It is the part of their site we like most. Keep these qualities when changing ours:

- **It explains the product before you click.** The panel is a map: the platform foundation on the left, the products built on top of it on the right, and what's coming at the bottom. Someone who hovers for three seconds understands what the company sells.
- **Two tones, two layers.** A warm off-white shell (`--bg-warm`) holds the platform. A white card with a hairline border, inset inside it, holds the products. The tonal difference alone separates "foundation" from "products", with no headings needed.
- **A featured card anchors the top-left.** "Platform overview" sits on soft gradient artwork: a big title and a one-line subtitle. It's the only image in the panel, so it's the obvious first click.
- **Tree lines for hierarchy.** Platform items use thin L-shaped connectors from a parent (icon + name) to its children (text only). It reads like a diagram rather than a list.
- **Product headers carry the weight.** Each product column opens with a solid dark rounded-square icon tile, a bold name, and a muted one-line tagline, followed by a divider. The features below are quiet: a small monochrome outline icon and a single line of text. There are no descriptions at feature level.
- **A "Coming soon" strip.** It is full width at the bottom of the product card, with a grey tag, a name and a tagline. It teases the roadmap without cluttering the columns.
- **Restraint.** One typeface, two weights, about three text sizes, no colour except the featured artwork. Generous padding. Nothing animates except the caret flip and a short fade.
- **Context stays visible.** The page behind dims and blurs, the nav bar stays crisp, and the trigger's caret flips up.

Other nav details worth copying later: a search field in the bar, "Sign in" as a text link, and a solid black pill "Get a demo" CTA. There's also a dismissible announcement bar above the nav (theirs promoted Glean:GO replays).

## How ours maps to it

`src/components/nav/ProductPanel.tsx` follows the same layout: overview card + platform tree (left), two product columns (right), and a coming-soon strip. Their black is swapped for Aurion teal. Every label in it is a **draft** (see `MENU_QUESTIONS.md`).

The other top-level items (Solutions, Customers, Resources, Company) use a simpler icon-tile grid (`SimplePanel.tsx`) until we know what goes in them. Glean's versions of those are also rich panels. Revisit them once the content is settled.

## Homepage section order on glean.com (for later)

Hero → integration logos → customer logos → headline metric → value props → security & certifications → platform stats → customer stories with metrics → exec testimonials → platform deep-dive → research/institute content → latest reports → demo CTA.
