# LUMINA Skill Source Registry

Updated: 2026-10-08
Owner decision: consolidate all project-local skills into one physical directory.

## Canonical Skill Root

`D:\lumina-studio\.agents\skills\`

This directory is the **single physical source of truth** for LUMINA project skills.

Rules:
- Add, edit, review, and remove project skills only under `.agents/skills/`.
- Do not recreate duplicate physical skill trees under root `skills/`, `.agent/skills/`, `.gemini/skills/`, or `.opencode/skills/`.
- Tool-specific folders such as `.gemini/` and `.opencode/` may still contain configuration, but not duplicate project skill content.
- Every top-level skill directory should expose `SKILL.md` with exact casing.
- Same-name recursive nesting such as `skill-name/skill-name/` is invalid.
- Historical backups and task reports may contain old paths; they are evidence only and do not override this registry.

## Current Inventory

Total active skill directories: **49**

- `agent-browser`
- `agent-run-governance`
- `canvas-design`
- `certification-governance`
- `code-analysis-ocumentation-agent`
- `computer-use-runtime-bridge`
- `docx`
- `entra-agent-id`
- `entra-app-registration`
- `escalation-governance`
- `find-skills`
- `frontend-design`
- `frontend-react-governance`
- `frontend-visual-design`
- `governance-platform-domain`
- `gridgeist`
- `impeccable`
- `impeccable-project-workflow`
- `implementation-governance`
- `interaction-design`
- `LUMINA_ART_DIRECTION`
- `LUMINA_BOOTSTRAP`
- `LUMINA_CONFIG_CHANGE`
- `LUMINA_DEPLOYMENT`
- `LUMINA_Frontend-Visual-Design`
- `LUMINA_PHOTO_SELECTION`
- `LUMINA_REPORTING`
- `LUMINA_REVIEW_CHECKLIST`
- `LUMINA_STARTUP`
- `LUMINA_VISUAL_REVIEW`
- `mcp-connector-governance`
- `microsoft-foundry`
- `pdf`
- `pptx`
- `react-polling-review`
- `read-first-governance`
- `repo-cleanliness-governance`
- `responsive-design`
- `review-gate-governance`
- `runtime-console-domain`
- `serena-repo-intelligence`
- `skill-creator`
- `tailwind-design-system`
- `task-state-governance`
- `thai-language-and-ux-writing`
- `webapp-testing`
- `web-artifacts-builder`
- `windows-ui-review-runtime`
- `xlsx`

## Newly Added Skill

`thai-language-and-ux-writing`

Use when Thai materially affects:
- Owner intent interpretation
- Thai client communication
- Thai-facing UI/UX copy
- Thai documentation or operational wording
- Thai-English code-switching and noisy/STT-derived input

Its own `SKILL.md` remains authoritative for activation and wording rules.

## Migration Record

TASK-036 consolidated the previous skill locations into `.agents/skills/`.

Old physical roots removed:
- `skills/`
- `.agent/skills/`
- `.gemini/skills/`
- `.opencode/skills/`

An external pre-deletion backup was created under `D:\tools\lumina-skill-consolidation-backup-*`.

If a future tool requires a different discovery path, prefer configuring that tool to read `.agents/skills/`. Do not restore copy-based mirrors without a new explicit Owner decision.
