# TASK-041 Plan — Reference Preservation (2026-10-10 ICT)

## Source of truth
- Roadmap phases: `docs/ROADMAP.md` (do not create another roadmap)
- Current Phase 1 constraints: `PROJECT_RULES.md`, `AGENTS.md`, `docs/CONTEXT_INDEX.md`
- Brand locks: `docs/LUMINA_V2_CONSTITUTION.md`, `docs/LUMINA_VISUAL_LANGUAGE.md`, `docs/HOME_PAGE_BLUEPRINT.md`
- Implementation content: `src/config/content.ts`, `src/config/navigation.ts`
- Prior shipped UI: `src/components/MiniAlbum.tsx`, `StoryImageFocus.tsx`, TASK-038 / 039 final reports

## Decision and minimal changes
1. Append *deferred references* to the existing roadmap, using exact validated 21st.dev links and source-account bookmark index.
2. Keep Phase 1 ahead of future galleries: read-only Thai/English copy consistency review, story clarity and CTA/mobile integrity. Hero is FROZEN and needs explicit authorization to revise.
3. Existing MiniAlbum and StoryImageFocus must be reused/reviewed, not displaced by installing multiple third-party components.
4. Create no design prototype or new production UI as part of TASK-041.

## Preflight
- Git: main@d0e98e9, clean, one root worktree
- Kernel: ESTABLISHED / GUARDED_INTERNAL_ONLY, integrity CLEAN
- Continuity: NOT_CONFIGURED / NAVIGATION_ONLY (not trusted for current status)
- Serena / CodeGraph: not used as authoritative state for this documentation-only task; filesystem read and exact Git inspected
- Activated skills: LUMINA_STARTUP, thai-language-and-ux-writing; final check per LUMINA_REVIEW_CHECKLIST

## Verification / stop condition
- Roadmap retains Phase 1–5 without scope change.
- Verified URLs present once; not represented as selected production components.
- `git diff --check` and explicit changed-file review.
- Lint/build: not needed for docs-only planning; production remains unmodified. Do not imply code QA was rerun.
- Next bounded task is Phase 1 copy audit/proposal (especially non-Hero content) before component experiments.

## Rollback
Revert only TASK-041 scoped documentation lines after examining diff. Preserve any Owner work outside this scope.
