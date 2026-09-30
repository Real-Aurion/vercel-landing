# Aurion Landing

Marketing site for Aurion (aurion.health). Next.js 16 on Vercel, bilingual Vietnamese/English.

## Run it

Requires Node 22+ (`.nvmrc`) and pnpm, via Corepack.

```bash
git clone https://github.com/Real-Aurion/vercel-landing.git
cd vercel-landing
corepack enable          # provides the pnpm version pinned in package.json
pnpm install
pnpm dev                 # http://localhost:3000 → redirects to /vi
```

Other commands: `pnpm build` (production build + type check), `pnpm start`, `pnpm lint`.

On a remote box (OpenClaw), expose the dev server with `pnpm dev --hostname 0.0.0.0 --port 3000`.

## Where things are

| Path | What |
|---|---|
| `src/app/[lang]/` | Routes. Every page lives under the locale segment |
| `src/proxy.ts` | Redirects locale-less URLs to `/vi` |
| `src/dictionaries/` | All copy, `vi.json` + `en.json` |
| `src/content/menu.ts` | Mega menu structure (links, icons, grouping) |
| `src/components/nav/` | Header, mega menu panels, mobile drawer, language switch |
| `src/components/sections/` | Home page sections |
| `.helper/` | Project notes for humans and AI agents. Start with `.helper/MEMORY.md` |

## Deploy

Import the repo in Vercel (framework preset: Next.js, no settings to change). Every push gets a preview URL; `main` deploys to production.
