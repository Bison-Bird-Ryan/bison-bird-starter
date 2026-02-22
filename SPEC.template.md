# [PROJECT NAME]

**Platform Specification Document**

*Version 1.0 | Last Updated: [DATE]*

## Purpose

This document is the single source of truth for [PROJECT NAME]. Every Claude Code session begins by reading this file. Every confirmed change is written back to this file. Nothing is assumed — everything is recorded.

## Product Overview

[Describe what this product does, who it's for, and why it exists. 2–3 sentences.]

## The Stack

Built on the **Bison & Bird Starter Template**:

- **Frontend:** Next.js (App Router) + TypeScript + Tailwind CSS + Shadcn/UI
- **Backend:** Supabase (PostgreSQL, Auth, Storage, Realtime)
- **Payments:** Stripe
- **AI:** Anthropic API (Claude) — server-side only
- **Email:** Resend (transactional)
- **Deployment:** Vercel
- **DNS:** Cloudflare

## Cloud Resources

| Resource | Value |
|---|---|
| Supabase Project ID | |
| Supabase API URL | |
| Vercel Project URL | |
| Stripe Account Mode | Sandbox |
| GitHub Repo | |

## Database Schema

[Document tables, columns, and RLS policies as they are created.]

## API Routes

| Route | Method | Auth Required | Description |
|---|---|---|---|
| | | | |

## Key Features

| Feature | Status | Notes |
|---|---|---|
| | ⬜ Not Started | |

## Environment Variables

See `.env.example` for the full list. All secrets are stored in Vercel environment variables — never committed to the repository.

## Change Log

| Date | Change | Notes |
|---|---|---|
| | Project created | Cloned from bison-bird-starter |
