# TASK-045 Plan (2026-10-10 ICT)
Two independent, read-only CLI workers after canonical route inventory verification:
- W1: BRAND.md, DESIGN.md, constitution/visual lock, Thai skill, redundant skills, actual project references; report suggested smallest safe changes.
- W2: GitHub PRs, task folders 031-044, local/remote branches, squash equivalence, recovery/stash; identify actionable truly-unmerged work vs historical status and safe cleanup candidates.
Readers produce bounded audit files in .tasks/TASK-045/parts/; separate output file each, no source edits. Nexus integrates as single writer after verification.
Prefer edit existing canonical truth, not new registry. Candidate doc-only validation: refs/integrity, git diff --check, inspect full diff and verification on exact HEAD. If skill files removed, validate consumers and registry count; avoid removing tracked unique content without reversible evidence. PR #2 Ads is unrelated and remains held pending its own scope decision. No API secret handling. Production is not necessary for documentation-only cleanup, but Vercel automatic deploy status must be reconciled if merge triggers it.
