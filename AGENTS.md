# LUMINA Studio Agent Instructions

Before any work, read:

- PROJECT_RULES.md
- LUMINA_CONFIG_SYSTEM.md
- AI_HANDOFF.md
- reports/implementation_report.md
- reports/visual_audit.md
- skills/LUMINA_STARTUP/SKILL.md
- .mcp/serena.md
- .mcp/codegraph.md

Rules & Governance Architecture:

- `docs/CONTEXT_INDEX.md` is the context map.
- `.tasks/` is the task packet/report/checkpoint system.
- `skills/` is project skill source of truth.
- App-specific skill folders are mirrors/adapters.
- STT correction belongs to `D:\stt_typing`, not LUMINA.
- Dashboard is not core workflow.
- Any destructive action must have explicit owner approval and a task report.
- Filesystem is source of truth.
- Verify Serena context before implementation.
- Verify CodeGraph is not stale before trusting it.
- Do not edit files outside the task brief.
- If build or lint fails, stop and report unless explicitly allowed to fix.
- Update AI_HANDOFF.md and reports/implementation_report.md after successful work.

Current phase:

Phase 1 — Premium Photography Landing Page

Forbidden:

- Backend
- Database
- Authentication
- Booking
- CMS
- Dashboard
- API routes
- Payments
- Production Three.js
- Production WebGL

## Skill Execution Profiles

Before executing a skill, check:

- .ai/SKILL_PROFILES.md

If a skill defines a profile, follow that profile for:

- temperature guidance
- top_p guidance
- proposal rights
- strictness
- whether implementation is allowed

Important:

Agents may propose improvements only when the active profile allows it.
Agents must not implement unapproved proposals unless explicitly instructed.

Before approving any completed task, execute:

- skills/LUMINA_REVIEW_CHECKLIST/SKILL.md
