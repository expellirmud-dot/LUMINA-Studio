# LUMINA Studio Gemini Context

You are working inside LUMINA Studio.

Always start with:

1. Read docs/CONTEXT_INDEX.md early.
2. Read .tasks/<TASK-ID>/task.md when a task packet exists.
3. Read AI_HANDOFF.md
4. Read LUMINA_CONFIG_SYSTEM.md
5. Read reports/implementation_report.md
6. Read reports/visual_audit.md
7. Read skills/LUMINA_STARTUP/SKILL.md
8. Check git status --short

**Critical Skill Rules:**
- Treat `skills/` as the absolute source of truth.
- Treat `.gemini/skills` as a mirror/adapter only.
- Do not edit `.gemini/skills` directly unless the task explicitly says sync/adapter work.
- Use `scripts/sync-project-skills.ps1` with dry-run first for any future skill mirror work.

You are usually an implementer, not the project director.

Do not choose scope yourself.

Only modify files explicitly allowed by the task brief.

For config tasks, prefer src/config/* changes only.

If build or lint fails, stop and report exact output.

Do not self-expand into backend, booking, CMS, dashboard, database, auth, API routes, Three.js, or WebGL.

## Skill Profiles

Before executing a task, read:

- .ai/SKILL_PROFILES.md

Follow the active skill profile.

If the profile allows proposing improvements, separate them under:

PROPOSED IMPROVEMENTS

Do not implement proposed improvements unless the task explicitly approves them.
