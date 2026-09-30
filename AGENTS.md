<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Aurion Landing

Before doing anything, read `.helper/MEMORY.md` and the files it lists. Start with `PROGRESS.md`, then `CODE_STYLE.md`.

- Everything in the navigation menu is a draft. Before building or renaming menu pages, go through `.helper/MENU_QUESTIONS.md` with Lam. Don't guess product names.
- After meaningful work, rewrite `.helper/PROGRESS.md` in place, tick tasks in `.helper/PLAN.md`, and bump the patch `version` in `package.json`.
- Copy lives only in `src/dictionaries/vi.json` + `en.json`. Change both together. Vietnamese is the default.
