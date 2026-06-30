
# AI Academic Administration Copilot — Mandela University theme

Build the previously-scoped Copilot dashboard, but reskin with the Nelson Mandela University palette instead of a dark SaaS look.

## Palette (from mandela.ac.za)

- Primary navy `#0A2240` — sidebar, top nav, headings, primary buttons
- Accent yellow `#FFC72C` — CTAs, highlights, progress, badges, focus ring
- Background `#FFFFFF` and soft surface `#F5F6F8` — page + cards
- Foreground `#0A2240` on light surfaces; `#FFFFFF` on navy
- Muted text `#5B6473`, border `#E4E7EC`
- Status: success `#1F7A4D`, warning `#B45309`, danger `#B42318`

All values written as `oklch()` in `src/styles.css` under `:root` (light theme as default) and mapped through `@theme inline` to existing shadcn tokens (`--background`, `--foreground`, `--primary`, `--primary-foreground`, `--secondary`, `--accent`, `--muted`, `--border`, `--ring`, `--sidebar`, `--sidebar-foreground`, `--sidebar-primary`, etc.). The `.dark` block is kept but updated to a navy-tinted dark variant so theme toggling still works.

Sidebar specifically uses navy background with white text and yellow active indicator, mirroring the Mandela top-nav strip.

## Scope (unchanged from prior plan)

Same routes, modules, prompt library, workflow automation, analytics, responsible-AI panel, KPI cards, hero, executive dashboard, and mock AI as previously approved — only the visual theme changes:

- Light app surface (not dark)
- Navy sidebar + top bar with yellow accent
- Yellow primary CTAs ("Plan Registration Cycle", "Open AI Assistant") with navy text for contrast
- Hero banner uses navy background with a yellow geometric triangle motif (subtle SVG, nodding to Mandela's identity) — no logos copied
- Cards: white with subtle border, navy headings, yellow icon chips

## Typography

Use a clean sans similar to the Mandela site: Inter for body, Inter (heavier weight) for headings, loaded via `<link>` in `__root.tsx` head. No remote `@import` in `styles.css`.

## Files touched

- `src/styles.css` — replace token values
- `src/routes/__root.tsx` — font links, layout shell (SidebarProvider, top bar with Responsible AI badge)
- All new route + component files as specified in the previous plan

## Out of scope

No university logo or copyrighted imagery. Color/typography inspiration only.

Approve and I'll build it.
