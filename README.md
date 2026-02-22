# Bison & Bird Starter

Production-ready full-stack starter template for Bison & Bird projects. Clone this repo to begin any new product.

## Stack

- **Frontend:** Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + Shadcn/UI (New York)
- **Backend:** Supabase (PostgreSQL, Auth, Storage, Realtime)
- **Payments:** Stripe (Checkout Sessions)
- **AI:** Anthropic API (Claude) — server-side only
- **Email:** Resend (transactional)
- **Deployment:** Vercel (auto-deploy from GitHub)
- **DNS:** Cloudflare

## Quick Start

```bash
# 1. Clone the starter
git clone https://github.com/Bison-Bird-Ryan/bison-bird-starter.git my-project
cd my-project

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Fill in your values (see .env.example for where to find each key)

# 4. Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the validation dashboard.

## Project Structure

```
src/
  app/                    # Next.js App Router pages and layouts
    (auth)/               # Auth pages (login, signup) + server actions
    api/                  # API routes (checkout, ai, send-email)
    checkout/             # Stripe checkout success/cancel pages
    dashboard/            # Protected dashboard page
    layout.tsx            # Root layout
    page.tsx              # Home / validation dashboard
    globals.css           # Tailwind + Shadcn CSS variables
  components/
    ui/                   # Shadcn/UI components (button, card, input, etc.)
  hooks/                  # Custom React hooks
  lib/                    # Shared utilities and service clients
    supabase/             # Supabase server + browser clients
    anthropic.ts          # Anthropic API client
    resend.ts             # Resend email client
    stripe.ts             # Stripe client
    utils.ts              # cn() utility for Tailwind class merging
  types/                  # Shared TypeScript type definitions
```

## What's Included

| Feature | Status | Details |
|---|---|---|
| Next.js + Vercel deploy | Ready | Auto-deploys from `main` branch |
| Supabase connection | Ready | Server + browser clients, env vars |
| Auth (email/password) | Ready | Signup, login, logout, middleware protection |
| Database CRUD | Ready | Notes table with RLS, server actions |
| Stripe checkout | Ready | Checkout Sessions, success/cancel pages |
| Anthropic API | Ready | Server-side Claude calls, auth-protected |
| Resend email | Ready | Transactional email, auth-protected |
| Shadcn/UI | Ready | Button, Card, Input, Form, Dialog, Table, Label, Textarea |

## Starting a New Product

1. Clone this repo with a new name
2. Create a new GitHub repo and push
3. Copy `SPEC.template.md` to `SPEC.md` and fill in product details
4. Copy `PROGRESS.template.md` to `PROGRESS.md`
5. Create cloud resources (Supabase project, Vercel project, Stripe products)
6. Set environment variables in Vercel
7. Connect Vercel to the new GitHub repo
8. Begin building

## Session Workflow

Every development session follows this pattern:

1. Open project in VS Code
2. Claude Code reads `SPEC.md` and `PROGRESS.md`
3. State the single task for this session
4. Claude Code executes the task
5. Confirm it works in production (not locally)
6. Claude Code updates `SPEC.md` and `PROGRESS.md`
7. Session ends

## Environment Variables

See [`.env.example`](.env.example) for all required variables with descriptions and links to where each key is found.

## License

Private — Bison & Bird internal use only.
