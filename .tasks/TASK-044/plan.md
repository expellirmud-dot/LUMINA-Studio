# TASK-044 Plan — Source-Led Cleanup (2026-10-10 ICT)

1. Read first canonical rules and task packet, inspect file contents and actual refs. Compare BRAND/DESIGN to Tier-1 brand locks. Note externally copied skills without assuming unused means safe to delete.
2. Cross-check live GitHub PR list (including open #2), branches with exact landed content, worktree inventory, active process/dirty/untracked ownership and .tasks status/report.
3. Classify each candidate: ACTIVE_CANONICAL | COMPATIBLE_HISTORICAL | UNUSED_BUT_PRESERVE | OBSOLETE_DUPLICATE_CANDIDATE | UNRESOLVED. No authority inference from age.
4. If safe: fix misleading current navigation/authority references via targeted patch in existing docs, avoid hard-deleting source or canonical task files. Do not create an extra index.
5. Validate focused diff, Git HEAD consistency, any independent review. For doc-only no JS build necessary unless site files change. Release through scoped PR only after complete evidence.
6. Close with exact decisions, remaining open PR/work items and next bounded task; preserve recovery branch/stash/backups unless individually authorized/verified.
