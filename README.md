# AI Academic Administration Copilot

An AI-powered workplace productivity platform tailored for the **Deputy Director: Student Systems, Records and Registration** at Nelson Mandela University. The Copilot consolidates the recurring administrative work of the portfolio — drafting executive correspondence, summarising committee minutes, planning registration cycles, scanning policy, and running structured prompt workflows — into a single, themed SaaS workspace.

The interface adopts the Nelson Mandela University visual identity: navy (`#0A2240`) primary surfaces with a gold (`#FFC72C`) accent, on a clean light background.

## Project overview

The Copilot is structured as a multi-page SaaS dashboard with a persistent navy sidebar, role-aware navigation, and a Responsible AI badge in the top bar. Every AI-generated artefact (email, summary, plan, briefing) is rendered in an editable output card with Copy, Regenerate, Edit, Export and Save actions, so the user can always intervene before sending or filing the output.

All AI responses are produced by deterministic, templated mock generators (`src/lib/mock-ai.ts`) so the demo runs entirely client-side with no external API dependencies.

## Features

- **Executive Dashboard** (`/`) — hero banner, KPI cards (hours saved, documents processed, registrations supported, policy items reviewed), operational alerts and quick-launch tiles.
- **Email Generator** (`/email`) — drafts formal correspondence to Senate, Faculty Officers, students and DHET stakeholders with selectable tone.
- **Meeting Intelligence** (`/meetings`) — converts raw minutes into decisions, action items (with owners), risks and next steps.
- **Registration Planner** (`/registration`) — produces a phased plan for an upcoming registration cycle, including owners and risk register.
- **Policy Research** (`/policy`) — generates executive briefings against DHET circulars and internal policy queries.
- **AI Chat** (`/chat`) — domain-tuned conversational assistant for ad-hoc questions.
- **Prompt Library** (`/prompts`) — six engineered prompts following a structured **Role · Context · Objective · Constraints · Output · Validation** schema, each copyable in full.
- **Workflow Automation** (`/workflow`) — animated pipeline visualising automated Senate-minutes processing.
- **Analytics, History, Settings** — supporting SaaS surfaces for usage telemetry, recent activity and preferences.
- **Responsible AI panel** — persistent compliance badge with expandable guidelines covering POPIA, bias, human-in-the-loop and audit expectations.

## Tools and tech used

- **Framework:** TanStack Start v1 (React 19, file-based routing, SSR-ready)
- **Build:** Vite 7 via `@lovable.dev/vite-tanstack-config`
- **Styling:** Tailwind CSS v4 with semantic design tokens (`src/styles.css`) themed to the Mandela palette
- **UI primitives:** shadcn/ui (Radix) — sidebar, cards, dialog, tabs, tooltip, sonner toasts, etc.
- **Icons:** lucide-react
- **State / data:** TanStack Query
- **Forms / validation:** react-hook-form + Zod
- **Charts:** Recharts
- **Typography:** Inter (loaded via `<link>` in `__root.tsx`)
- **Runtime:** Bun for local dev and dependency management; deployed on Cloudflare Workers via Nitro

## Setup instructions

Prerequisites: [Bun](https://bun.sh) (recommended) or Node.js 20+.

```bash
# 1. Install dependencies
bun install

# 2. Start the dev server (http://localhost:8080)
bun run dev

# 3. Production build
bun run build

# 4. Preview the production build
bun run preview

# Lint / format
bun run lint
bun run format
```

No environment variables or external services are required — the application ships with mock AI generators so it runs entirely offline.

### Project structure

```
src/
  routes/              # File-based routes (TanStack Start)
    __root.tsx         # App shell, head metadata, font links
    index.tsx          # Executive dashboard
    email.tsx, meetings.tsx, registration.tsx, policy.tsx
    chat.tsx, prompts.tsx, workflow.tsx
    analytics.tsx, history.tsx, settings.tsx
  components/
    app-shell.tsx          # Navy sidebar + top bar
    ai-output-card.tsx     # Editable AI output with actions
    responsible-ai-panel.tsx
    page-header.tsx
    ui/                    # shadcn primitives
  lib/
    mock-ai.ts             # Templated AI response generators
    prompt-library.ts      # Structured prompt definitions
  styles.css               # Tailwind v4 + Mandela design tokens
```
