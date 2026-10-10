---
name: lumina-bootstrap
description: Lightweight Phase 1 bootstrap for the LUMINA Studio Human Documentary photography landing page.
---

# LUMINA Bootstrap

Use for the LUMINA Studio Phase 1 single-page editorial photography experience. Production implementation is config-driven under `src/config/`; this skill is a workflow aid and cannot override project authority.

## Required Discipline

Before any work:
- Follow Project Continuity + Kernel HARD BOOTSTRAP and inspect actual branch, HEAD, dirty/untracked files and worktrees.
- Read `PROJECT_RULES.md`, `AGENTS.md`, `docs/CONTEXT_INDEX.md`, active `.tasks/<TASK-ID>/`, and `AI_HANDOFF.md`.
- Read the canonical brand owners: `docs/LUMINA_V2_CONSTITUTION.md`, `docs/LUMINA_VISUAL_LANGUAGE.md`, `docs/HOME_PAGE_BLUEPRINT.md`.
- `docs/BRAND.md` and `docs/DESIGN.md` exist for legacy/tool compatibility only, never as competing direction.
- Verify the Phase 1 scope and exact files/sections to change.

## Current Creative Direction

Human Documentary; warm off-white/linen, warm charcoal, muted earth accents; people, family, relationships, rituals and quiet moments. Respect editorial whitespace. Do not revive black/gold luxury, a generic portfolio wall, WebGL, spotlight effects or a hero carousel. Hero remains FROZEN and requires explicit Owner approval to revise.

## Allowed Phase 1 Scope

Frontend-only landing page, existing scroll storytelling, curated mini-gallery, services/experience, photographer/about, contact CTA, footer, responsive/SEO/performance, and minimal motion that supports photography.

## Outside Phase 1

No backend, database, authentication, CMS, booking system, admin dashboard, payments, client-gallery platform, new API routes or complex infrastructure.

## Engineering/Review Checklist

- Respect existing config owners and the locked Home section blueprint.
- Do not introduce future-phase architecture today.
- Check actual Git and canonical task packet, including Owner work/recovery protections.
- Define minimal changed files, validation and stop conditions before any mutation.
- For code changes run required lint/build and visual QA; for documentation-only changes inspect scoped diff and whitespace.
- Update existing `AI_HANDOFF.md` and `reports/implementation_report.md` after successful work; follow `LUMINA_REVIEW_CHECKLIST` before release.
