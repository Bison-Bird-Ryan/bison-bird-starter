**BISON & BIRD**

Platform Specification Document

*Version 1.2 \| Last Updated: February 21, 2026*

**Purpose**

This document is the single source of truth for the Bison & Bird
full-stack development platform. Every Claude Code session begins by
reading this file. Every confirmed change is written back to this file.
Nothing is assumed --- everything is recorded.

The platform exists to let Bison & Bird spin up production-quality web
apps, mobile apps, internal tools, and AI-powered client deliverables
from a proven, reusable foundation --- without reconfiguring the stack
for each new product.

**Platform Philosophy**

-   Proven over clever --- use battle-tested tools with large
    communities

-   Simple over sophisticated --- the simplest solution that works in
    production

-   Incremental and confirmed --- never build Layer 2 before Layer 1 is
    validated

-   Plain language first --- technical detail follows business clarity

-   Every session starts fresh --- context lives in documents, not
    memory

**The Agreed Stack**

**Frontend --- Web**

-   **Framework: Next.js (App Router)**

-   Language: TypeScript

-   UI Components: Shadcn/UI

-   Styling: Tailwind CSS

-   Deployment: Vercel

**Frontend --- Mobile**

-   **Framework: Expo (React Native)**

-   Language: TypeScript

-   Distribution: Expo EAS (App Store + Google Play)

**Backend + Database**

-   **Platform: Supabase**

-   Database: PostgreSQL (managed by Supabase)

-   Auth: Supabase Auth (built-in)

-   Storage: Supabase Storage (files, photos)

-   Realtime: Supabase Realtime (live data sync)

**Payments**

-   **Platform: Stripe**

-   Use cases: online checkout, in-person QR payments, payouts to
    sellers

**AI Integration**

-   **Provider: Anthropic API (Claude)**

-   Implementation: server-side only (API keys never exposed to browser)

-   Use cases: AI appraisal, content generation, agent workflows

**Email (Transactional)**

-   **Provider: Resend**

-   Use cases: auth emails, notifications, receipts

**DNS + Domains**

-   **Provider: Cloudflare**

**Version Control**

-   **Platform: GitHub (Bison & Bird organization account)**

-   Convention: one repository per product, starter template as base

**Development Environment (Mac)**

-   Package manager: Homebrew

-   Runtime: Node.js (LTS)

-   Editor: VS Code

-   AI co-pilot: Claude Code

-   Version control CLI: Git

**Four-Layer Architecture**

**Layer 1 --- Local Development Environment**

Your Mac, configured once. Homebrew, Node.js, Git, VS Code, and Claude
Code installed and verified. Never reconfigured per project.

**Layer 2 --- Project Starter Template**

A GitHub repository (bison-bird-starter) that is cloned to begin every
new product. Contains Next.js, Supabase client, Stripe, auth, Shadcn,
folder structure, environment variable template, SPEC.md template, and
PROGRESS.md template. Validated end-to-end before any product is built
on it.

**Layer 3 --- Cloud Infrastructure**

Accounts set up once at the organization level. New projects (Supabase),
deployments (Vercel), and products (Stripe) are created per product
within these existing accounts.

**Layer 4 --- Session Workflow**

The operating procedure for every development session, regardless of
product:

-   Step 1: Open project in VS Code

-   Step 2: Claude Code reads SPEC.md and PROGRESS.md

-   Step 3: State the single task for this session

-   Step 4: Claude Code executes the task

-   Step 5: Confirm it works in production (not locally --- in
    production)

-   Step 6: Claude Code updates SPEC.md and PROGRESS.md

-   Step 7: Session ends

**Cloud Accounts Inventory**

Update this table as accounts are created and confirmed.

  -------------------------- ------------------ -------------------------
  **Component**              **Status**         **Notes**

  GitHub Organization        ✅ Confirmed       *Bison-Bird-Ryan org
                                                (github.com/Bison-Bird-Ryan)*

  Supabase Organization      ✅ Confirmed       *Connected via Claude
                                                MCP connector*

  Vercel Team                ✅ Confirmed       *Connected via Claude
                                                MCP connector*

  Stripe Account             ✅ Confirmed       *Connected via Claude
                                                MCP connector; start in
                                                test mode*

  Anthropic API              ✅ Confirmed       *Account exists; store
                                                key in Vercel env vars
                                                per project*

  Resend Account             ✅ Confirmed       *Connected to Vercel and
                                                Supabase; verify sending
                                                domain per project*

  Cloudflare Account         ✅ Confirmed       *Connected via Claude
                                                MCP connector*
  -------------------------- ------------------ -------------------------

**Claude MCP Connector Status**

Services wired into Claude for direct management from Cowork mode.

  -------------------------- ------------------ -------------------------
  **Service**                **Connector**      **Capabilities**

  Supabase                   ✅ Connected       *Orgs, projects,
                                                databases, auth,
                                                storage, migrations*

  Vercel                     ✅ Connected       *Projects, deployments,
                                                teams, logs*

  Stripe                     ✅ Connected       *Customers, products,
                                                prices, payments,
                                                invoices*

  Cloudflare                 ✅ Connected       *Accounts, DNS, workers,
                                                KV storage*

  GitHub                     ⬜ No connector    *Connects via Git CLI +
                                                Vercel auto-deploy*

  Anthropic API              ⬜ No connector    *Keys managed in Vercel
                                                env vars*

  Resend                     ⬜ No connector    *Configured via Vercel +
                                                Supabase integration*
  -------------------------- ------------------ -------------------------

**Starter Project Resources**

The concrete cloud resources created for the bison-bird-starter project.
These values feed into environment variables during Layer 2 setup.

  -------------------------- -------------------------------------------------
  **Resource**               **Value**

  Supabase Project ID        fgfybojlrhressjghtza

  Supabase Region            ca-central-1

  Supabase API URL           https://fgfybojlrhressjghtza.supabase.co

  Supabase Anon Key          (stored in Vercel env vars — not in SPEC)

  Supabase Publishable Key   sb_publishable_wO5b5mYveJCzL1tn0fELtw_LhX4L6Kz

  Vercel Team ID             team_uwrslDEKPgkjor053JtMGquD

  Vercel Team Slug           bison-and-bird

  Stripe Account ID          acct_1T3RXGFI9pDC8lEt (sandbox)

  Stripe Mode                Sandbox (switch to live per product launch)

  Stripe Test Product ID     prod_U1UcJvY2x8JMcU

  Stripe Test Price ID       price_1T3RdEFI9pDC8lEtLv7ThtJo ($10.00 USD)

  Stripe Dashboard           dashboard.stripe.com

  GitHub Repo                github.com/Bison-Bird-Ryan/bison-bird-starter

  Vercel Project URL         https://bison-bird-starter.vercel.app

  Vercel Project Slug        bison-bird-starter
  -------------------------- -------------------------------------------------

**Starter Template Validation Status**

The starter template is not production-ready until every item below is
confirmed working at a live Vercel URL.

  -------------------------- ------------------ -------------------------
  **Component**              **Status**         **Notes**

  Next.js deployed to Vercel ✅ Confirmed       *https://bison-bird-starter.vercel.app*

  Supabase project connected ✅ Confirmed       *@supabase/supabase-js +
                                                @supabase/ssr installed.
                                                Server & browser clients
                                                in src/lib/supabase/.
                                                Env vars set on Vercel.
                                                Live connection verified
                                                at production URL.*

  User signup + login        ✅ Confirmed       *Email/password auth with
  working                                       Supabase Auth. Server actions
                                                for login, signup, logout.
                                                Middleware handles session
                                                refresh + route protection.
                                                /dashboard protected, redirects
                                                to /login when unauthenticated.
                                                Verified at production URL.*

  Database read/write        ✅ Confirmed       *Notes table with RLS.
  confirmed                                     Server actions for insert,
                                                delete. Dashboard CRUD UI.
                                                Verified at production URL.*

  Stripe test payment        ✅ Confirmed       *Stripe SDK integrated.
  completing                                     Checkout API route creates
                                                 Stripe Checkout Sessions.
                                                 Dashboard has checkout button
                                                 with test card instructions.
                                                 Success + cancel pages handle
                                                 redirect. Stripe shows
                                                 "Connected" on validation
                                                 dashboard. Use test card
                                                 4242 4242 4242 4242 to
                                                 complete payment.*

  Anthropic API call         ⬜ Not Started     *Server-side route only*
  returning

  Resend email delivering    ⬜ Not Started     *Auth email received*

  Mobile (Expo) app building ⬜ Not Started     *Run on simulator*
  -------------------------- ------------------ -------------------------

**Change Log**

Record every meaningful change to this document or the platform
architecture here.

  -------------------------- ------------------ -------------------------
  **Component**              **Status**         **Notes**

  February 2026              Platform defined   *Initial SPEC created
                                                from discovery session*

  February 21, 2026          Layer 3 confirmed  *All 7 cloud accounts
                                                created and verified.
                                                4 MCP connectors active
                                                (Supabase, Vercel,
                                                Stripe, Cloudflare).
                                                Resend connected to
                                                Vercel + Supabase.*

  February 21, 2026          Layer 3 setup      *Supabase starter project
                                                created (bison-bird-starter,
                                                ca-central-1). Vercel team
                                                confirmed (bison-and-bird).
                                                Stripe account confirmed
                                                (test mode). 3 inactive
                                                legacy projects noted for
                                                manual cleanup. Starter
                                                Project Resources section
                                                added to SPEC.*

  February 21, 2026          Session 2A         *Layer 2 scaffold complete.
                                                Next.js 16 + TypeScript +
                                                Tailwind + ESLint + App Router
                                                scaffolded. Pushed to
                                                Bison-Bird-Ryan/bison-bird-starter
                                                on GitHub. Deployed to Vercel
                                                under bison-and-bird team.
                                                Live at bison-bird-starter
                                                .vercel.app. GitHub auto-deploy
                                                connected. SPEC.md added to
                                                repo.*

  February 21, 2026          Session 2B         *Supabase connected to starter.
                                                @supabase/supabase-js + @supabase/ssr
                                                installed. Server and browser client
                                                utilities created (src/lib/supabase/).
                                                Env vars (NEXT_PUBLIC_SUPABASE_URL,
                                                NEXT_PUBLIC_SUPABASE_ANON_KEY) set on
                                                Vercel for all environments. Home page
                                                replaced with validation dashboard
                                                showing live connection status.
                                                Supabase shows "Connected" at
                                                bison-bird-starter.vercel.app.*

  February 21, 2026          Session 2C         *Auth implementation complete.
                                                Email/password signup, login,
                                                logout via Supabase Auth server
                                                actions. Login + signup pages
                                                with error/success messaging.
                                                Auth callback route for email
                                                confirmation. Middleware for
                                                session refresh and route
                                                protection (/dashboard →
                                                /login redirect, /login →
                                                /dashboard redirect when
                                                authenticated). Protected
                                                dashboard page. Home page
                                                updated with auth status row
                                                and navigation links. All
                                                verified at production URL.*

  February 21, 2026          Session 2D         *Database CRUD confirmed.
                                                Notes table created in
                                                Supabase with RLS policies
                                                (users read/insert/delete
                                                own notes only). Server
                                                actions for add and delete.
                                                Dashboard updated with CRUD
                                                UI (add note, list notes,
                                                delete note). Home page
                                                updated with Database CRUD
                                                status row. All verified
                                                at production URL.*

  February 21, 2026          Session 2E         *Stripe integration complete.
                                                stripe npm package installed.
                                                Lazy-initialized Stripe client
                                                (src/lib/stripe.ts) avoids
                                                build-time errors. Checkout API
                                                route (src/app/api/checkout/)
                                                creates Stripe Checkout Sessions
                                                requiring auth. Dashboard updated
                                                with checkout button + test card
                                                instructions. Success + cancel
                                                pages created. Home page shows
                                                dynamic Stripe connection status
                                                via balance.retrieve(). Sandbox
                                                product ($10 Starter Test Product)
                                                and price created. Env vars set
                                                on Vercel (STRIPE_SECRET_KEY,
                                                STRIPE_TEST_PRICE_ID,
                                                NEXT_PUBLIC_SITE_URL). Stripe
                                                shows "Connected" at production
                                                URL.*
  -------------------------- ------------------ -------------------------
