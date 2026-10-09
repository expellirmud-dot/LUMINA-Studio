# TASK-036 — Consolidate Project Skills into .agents/skills

STATUS=COMPLETED_MERGED_2026-10-09
OWNER_AUTHORIZATION=APPROVED_IN_CHAT_2026-10-08
RISK_LEVEL=L2_REPOSITORY_MAINTENANCE
COMMIT_ALLOWED=OWNER_STANDING_DELEGATION
PUSH_ALLOWED=OWNER_STANDING_DELEGATION
DEPLOY_ALLOWED=OWNER_STANDING_DELEGATION
AUTHORITY_SOURCE=AGENTS.md#Owner Standing Delegation
OWNER_LATEST_INSTRUCTION=2026-10-09 proceed to verified completion

## Goal

Make `D:\lumina-studio\.agents\skills\` the single physical source of truth for all LUMINA project skills.

Owner also added:
- `thai-language-and-ux-writing`

## Migration rules

- Preserve the existing `.agents/skills` copy as preferred for skills already present there.
- Move/copy any root-only skill from `skills/` into `.agents/skills/`.
- Preserve `thai-language-and-ux-writing` exactly as provided unless a separate content-edit task is approved.
- Back up every existing skill root before deleting any old location.
- Remove obsolete physical skill copies from:
  - `skills/`
  - `.gemini/skills/`
  - `.opencode/skills/`
  - legacy `.agent/skills/` if it exists
- Do not create symlink/junction mirrors in this task. One physical location means one physical location.
- Update active governance/docs so all workers use `.agents/skills/`.
- Historical task reports may keep historical paths unless they act as current instructions.

## Protected unrelated working changes

Do not modify or stage:
- `.serena/project.yml`
- TASK-035 dependency/security files
- `app/fastwork/*`
- `src/config/fastwork.ts`

## Validation

- backup exists outside repo
- union of known skill names preserved
- `thai-language-and-ux-writing/SKILL.md` exists
- no same-name nested duplicate directories
- old physical skill roots removed
- active docs contain no instruction to use old skill roots
- git diff --check
- Serena health check (best effort)
- CodeGraph refresh
