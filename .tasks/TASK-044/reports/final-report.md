# TASK-044 — Documentation, Skills and Unmerged Plans Audit
Date: 2026-10-10 ICT
Evidence: VERIFIED unless marked HISTORICAL/UNRESOLVED.
Baseline: main@e453eb3e8379ddfe8b361e55b985eeaec05ca635; root worktree clean before TASK-044; Kernel ESTABLISHED / GUARDED_INTERNAL_ONLY / CLEAN; Continuity NOT_CONFIGURED / NAVIGATION_ONLY.

## Findings
1. Canonical active governance is PROJECT_RULES.md, AGENTS.md, docs/CONTEXT_INDEX.md, and locked docs/LUMINA_V2_CONSTITUTION.md, docs/LUMINA_VISUAL_LANGUAGE.md, docs/HOME_PAGE_BLUEPRINT.md. These are expressly named by the live authority map; **PRESERVE**.
2. docs/BRAND.md and docs/DESIGN.md contain high-level generic legacy direction and are still referenced by LUMINA_BOOTSTRAP and impeccable skill assets/scripts. Their contents partly overlap Tier-1 locked brand docs and should not independently override them. **PRESERVE pending targeted reference/consumer migration**; removing now may break a skill read path. No new brand map was created.
3. .agents/skills/thai-language-and-ux-writing is explicitly activated by AGENTS.md, GEMINI.md, docs/CONTEXT_INDEX.md and docs/SKILL_SOURCE_REGISTRY.md. Current skill text internally calls itself an Online Job Factory skill, a stale provenance/cross-project wording concern. **PRESERVE**; later fix only misleading description after checking canonical provenance.
4. .agents/skills/code-analysis-ocumentation-agent: one SKILL.md, self and registry name references only. It defines a very restrictive stop/escalation format and could conflict with modern Nexus bounded-recovery behavior. **DEPRECATION CANDIDATE**; not proven required by LUMINA runtime. Do not hard-delete until exact ownership and downstream consumers are reconciled.
5. .agents/skills/mcp-connector-governance: one SKILL.md, self and registry refs only, with approval rules potentially more restrictive than current Owner standing delegation. **DEPRECATION / MERGE-TO-CANONICAL GOVERNANCE CANDIDATE**; do not silently replace project authority.
6. .agents/skills/microsoft-foundry: 135 files, self-contained subskills and some cross-links from entra-agent-id. Foundry deployment/agents are outside current Phase 1. **UNUSED-IN-CURRENT-PHASE / PRESERVE** until dependencies and other-project consumers can be safely rerouted. Never remove as one blind directory deletion.
7. docs/SKILL_SOURCE_REGISTRY.md is existing canonical inventory with 49 skill roots (as of Oct 8); any physical deletion requires updating this registry in same change to avoid stale facts.

## PR/branch/task reconciliation
- GitHub PR #1 and #3–14: MERGED; #2 feat/openai-ads-conversions: OPEN, touches README.md, app/layout.tsx, app/page.tsx, and new src/components/OpenAIAdsTracking.tsx. **NOT PART OF DOC CLEANUP. DO NOT MERGE** without ad/production policy decision.
- One registered root worktree; main clean at baseline. Local branches TASK-035..040 correspond to merged PRs but are not Git ancestors because they used squash merges; non-ancestry is NOT proof of unmerged content. Must compare trees/patches before deleting refs. Recovery branch TASK-040, stash and D:/project_backups/lumina-studio remain protected.
- TASK-031 (Fastwork), TASK-032 (MiniAlbum), TASK-033 (old skill cleanup), TASK-034 (release audit), TASK-035 (Next.js upgrade) carry historical READY/IN_PROGRESS text. Later work/pr evidence indicates many outcomes were superseded or merged; **do not rewrite their historical headers as present-state truth**. A current state reconciliation note belongs in current handoff/task report, with exact PR/commit mapping where verified.
- Task folders and backups are canonical/historical evidence, not disposable temporary plans. No known safe untracked obsolete folder found; TASK-044 itself is the only current untracked folder.

## Decision
No destructive skill/doc/task/worktree/branch deletion in this audit: a complete unused-and-unique-content proof is still missing. Authorization was given, but safe deletion preconditions are not satisfied for the identified candidates. No app code changes or deploy. Preserve open PR #2 for separate Owner-governed review.

## Next bounded cleanup
Audit consumers of BRAND.md/DESIGN.md, retire documented redundant use only after redirecting to locked Tier-1 docs; reconcile skill provenance and remaining unused skills; verify squash-equivalent branches before local branch cleanup. Update existing SKILL_SOURCE_REGISTRY.md and Context Index only when a specific physical change is justified.

## Validation
Git baseline and live PR list verified; paths and counts inspected with connected desktop. No runtime/build tests relevant to read-only audit. No external changes made.
