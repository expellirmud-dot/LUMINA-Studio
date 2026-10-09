# LUMINA Studio Gemini Context

You are working inside LUMINA Studio.

Always start with:

1. Read docs/CONTEXT_INDEX.md early.
2. Read .tasks/<TASK-ID>/task.md when a task packet exists.
3. Read AI_HANDOFF.md
4. Read LUMINA_CONFIG_SYSTEM.md
5. Read reports/implementation_report.md
6. Read reports/visual_audit.md
7. Read .agents/skills/LUMINA_STARTUP/SKILL.md
8. Check git status --short

**Critical Skill Rules:**
- Treat `.agents/skills/` as the absolute and only project-local skill source of truth.
- Do not recreate `.gemini/skills/`, `.opencode/skills/`, `.agent/skills/`, or root `skills/` mirrors.
- Add or update project skills only under `.agents/skills/`.
- For Thai-facing communication or UX writing, load `.agents/skills/thai-language-and-ux-writing/SKILL.md`.

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
