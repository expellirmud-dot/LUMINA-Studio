# ARCHITECTURE STATE

## Project

LUMINA Studio

## Current Phase

Phase 1 — Premium Photography Landing Page

## Art Direction Lock

Approved:
- Cinematic Sequence
- Reactive Light Frame
- Editorial Minimalism
- Photography-first Hero

Rejected by QA:
- Lens Light Sweep
- Heavy Optical Overlays
- Hero Focus Blur In
- Heavy Glassmorphism
- Large Cursor Spotlight
- WebGL / Three.js / Canvas

Core Principle:
Photography First.
Motion Supports Photography.
Motion Must Never Become The Subject.

## Hero Status

Status: FROZEN

Approved Hero Stack

* Cinematic Sequence
* Reactive Light Frame
* Editorial Breathing Frame Premium

Design Principle

Photography First.
Motion Supports Photography.
Motion Must Never Become The Subject.

Future Rule

Further Hero redesign requires explicit user approval.

Hero experimentation is closed.
Future visual exploration should focus on:

* Portfolio Experience
* About Storytelling
* Contact Experience

## Current Application Type

Single-page frontend landing page.

## Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Vercel deployment

## Frontend

Active.

Primary app files:

- app/page.tsx
- app/layout.tsx
- app/globals.css

Config-driven visual system:

- src/config/site.ts
- src/config/images.ts
- src/config/typography.ts
- src/config/visual.ts

## Backend

None.

## Database

None.

## Authentication

None.

## CMS

None.

## Booking System

None.

## Dashboard

None.

## API Routes

None.

## Payments

None.

## Production 3D / WebGL

None.

## Allowed Phase 1 Work

- Landing page refinement
- Visual QA
- Hero refinement
- Portfolio refinement
- Contact refinement
- Typography refinement
- Config-only changes
- Screenshot/visual review tooling
- Deployment verification

## Forbidden Phase 1 Work

- Backend
- Database
- Authentication
- Booking system
- CMS
- Dashboard
- Payments
- API routes
- Production Three.js
- Production WebGL
- Complex infrastructure

## Source of Truth

Filesystem is source of truth.

If CodeGraph or Serena disagree with the actual filesystem, report the mismatch and trust the filesystem.

## Current Workflow Layer

Operational:

- AGENTS.md
- GEMINI.md
- .ai/TASK_BRIEF.md
- .ai/TASK_REPORT.md
- .ai/MODEL_ROLES.md
- .ai/SKILL_PROFILES.md
- skills/*/skill.md
- .gemini/skills/*/SKILL.md

## Review Requirement

Before approving work:

- use skills/LUMINA_REVIEW_CHECKLIST/skill.md
- confirm lint/build pass
- confirm scope was respected
- confirm reports were updated
