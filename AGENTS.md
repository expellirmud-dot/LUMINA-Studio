# LUMINA Studio Agent Instructions

Before any work, read:

- PROJECT_RULES.md
- LUMINA_CONFIG_SYSTEM.md
- AI_HANDOFF.md
- reports/implementation_report.md
- reports/visual_audit.md
- .agents/skills/LUMINA_STARTUP/SKILL.md
- .mcp/serena.md
- .mcp/codegraph.md

Rules & Governance Architecture:

- `docs/CONTEXT_INDEX.md` is the context map.
- `docs/CLI_WORKER_ROUTING_REFERENCE.md` preserves the Owner-approved local Hermes/OpenCode CLI routing reference and cross-project STT source pointers; live project policy and live provider inventory still take precedence.
- `.tasks/` is the task packet/report/checkpoint system.
- `.agents/skills/` is the single project skill source of truth.
- Do not recreate project-local skill mirrors under `.agent/skills/`, `.gemini/skills/`, `.opencode/skills/`, or root `skills/`.
- STT correction belongs to `D:\stt_typing`, not LUMINA.
- Dashboard is not core workflow.
- Any destructive action must have explicit owner approval and a task report.
- Filesystem is source of truth.
- Verify Serena context before implementation.
- Verify CodeGraph is not stale before trusting it.
- Do not edit files outside the task brief.
- If build or lint fails, stop and report unless explicitly allowed to fix.
- Update AI_HANDOFF.md and reports/implementation_report.md after successful work.

## Owner Standing Delegation

Owner standing authorization (2026-10-09, OWNER_REPORTED):
- Nexus may review, approve, and merge LUMINA pull requests; create scoped commits; push verified changes; and deploy LUMINA without requesting per-action approval. Hosting-platform permissions, project review checks, current-candidate validation, and release safety rules still apply. A failed or blocked review/merge must not be represented as successful.
- Nexus may clean up disposable **local LUMINA plan/worktree folders** after the associated PR is VERIFIED merged into its intended target. Verify the exact local path, PR merge status, landed changes (including squash/rebase cases), uncommitted and untracked contents, ownership, active worktrees/processes, and whether unique evidence or Owner data remains.
- Delete only an individually verified, no-longer-needed worktree or temporary plan directory; prefer `git worktree remove` for worktrees. Never force-delete dirty worktrees, ambiguous/unknown folders, canonical `.tasks/` task records, `docs/`, `reports/`, or unrelated project/Owner files. Record cleanup evidence and path in the relevant existing task report. On uncertainty, preserve and report.
- No per-action Owner approval is required for the actions explicitly delegated above once their preconditions are met. An explicit task-specific prohibition unrelated to approval, Kernel recovery restriction, failed validation, or unresolved external effect still stops execution.
- Reconcile uncertain external effects before any retry. Spending, domain/DNS changes, production account/permission changes, sensitive-data transfer, and unrelated destructive actions remain outside this delegation unless separately authorized.

## Goal Execution Contract

Owner → ChatGPT Web → Codex/AntiGravity Controller → CLI Workers

**Controller paths:**
- Primary Controller: Codex GPT-5.4
- Fallback Controller when Codex quota is exhausted: AntiGravity / AGY Gemini 3.1 Pro Low/High
- GPT-5.5 remains architecture / art direction / dashboard UI / high-risk decision / final gate

**Controller responsibilities:**
- create task packets
- define scope
- define allowed/forbidden files
- select workers
- review CLI evidence
- review diff
- verify validation
- commit only after validation and review
- stop for owner/GPT-5.5 when subjective, risky, or blocked

## Controller-specific CLI Routing

**When Codex is Controller:**
- may call OpenCode CLI
- may call AGY CLI
- may call Gemini CLI
- must still scope tasks before delegation
- CLI workers must not self-scope or self-commit

**When AntiGravity is Controller:**
- use Gemini CLI only as CLI worker path
- do not call OpenCode CLI
- if OpenCode is needed, stop and hand command back to Owner or Codex
- AntiGravity inherits Controller responsibilities from Codex GPT-5.4


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

For Thai intent, Thai-facing UI copy, Thai client/owner communication, or Thai UX writing, activate:

- .agents/skills/thai-language-and-ux-writing/SKILL.md

Before approving any completed task, execute:

- .agents/skills/LUMINA_REVIEW_CHECKLIST/SKILL.md
