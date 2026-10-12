# TASK-049 — Verified Local Experiment Closeout (2026-10-12)

- **Time window:** 12:26–13:16 ICT on 2026-10-12.
- **Status:** EXPERIMENT_VERIFIED_LOCAL / PENDING_OWNER_ART_DIRECTION / NOT_RELEASED.
- **Worktree:** `D:\lumina-studio_worktrees\TASK-049`, branch `feat/task049-story-presentation-spike`, baseline `38f4eac`.
- **Production and PR #22:** unchanged. Neither merged, pushed nor deployed during TASK-049.
- **Owner intent preserved:** exactly two additional photo-story sets, not a fifth generic Home card.

## Actual prototype
- Created a local-only, noindex comparison route `/story-spike` inside isolated TASK-049 worktree; there are two variants using the same two authentic project photo sets:
  - **A / Editorial Story Spread** — asymmetric editorial image layout; recommended.
  - **B / Quiet Scroll** — native scrolling with non-jacked sticky text on large viewports; experimental fallback.
- Collections: `wedding-ceremony-v1` (relationship) and `phra-louis-v1` (ordination/ritual). Verified source files exist and inspected their actual image dimensions. No new imagery synthesized.
- Exact canonical photo-story data owner: `src/config/portfolio.ts` (`storyPresentationSets`); discarded a temporary competing config before final build.
- Reuses `StoryImageFocus` for narrative dialogs (three frames per set); existing Home/selectedStoriesConfig and MiniAlbum unchanged.
- Minimal new files: `app/story-spike/page.tsx` and `app/story-spike/page.module.css`; code changes scoped to above and `src/config/portfolio.ts`.
- Local-only responsive scoped CSS corrects excessive landscape letterboxing for 3:2 frames without editing TASK-048's `StoryImageFocus.tsx`.
- No npm dependency added, no WebGL/Canvas, no parallax library, no Hero edit, no new Home section, no backend or CMS.

## Verification on exact reconciled candidate
- `npm ci --no-audit --no-fund` exit 0 (existing dependencies; upstream deprecation notices do not constitute a build failure).
- `npm run lint` **PASS**, exit 0.
- `npm run build` **PASS**, exit 0; Next.js 16.4.0, TypeScript and static route `/story-spike` compiled.
- Headless Chrome / Playwright against local Next production server (port 3419): **57/57 PASS**, 0 issues, covering 390×844, 768×1024 and 1440×900.
- Browser verified: HTTP 200, one H1, two design variants, exactly two stories in each, 0 horizontal overflow, all 4 cover image loads per viewport, no extra Hero, opened dialog and 3 narrative frames, first frame image decoded, Escape/focus restoration, reduced motion, no console/page errors.
- Visual inspected: mobile/desktop Editorial, tablet Editorial, desktop Quiet Scroll, both stories, mobile Drawer after image decode. All visible, photo-first, no evident crop blocker; non-proportional landscape frame corrected.
- Canonical ignored runtime evidence: `.runtime-captures/lumina/TASK-049/browser-candidate/validation.json` and screenshots named `mobile|tablet|desktop` plus `-intro|-editorial|-scroll|-drawer|-second-story`.
- `git diff --check` PASS before closeout documentation; final staged diff check required at commit.

## Worker reconciliation / source integrity
- Verified prior read-only CLI reviews: AGY `gemini-3.1-pro-low` (Art Direction) and AGY `gemini-3.8-flash-low` (QA). Both favor restrained Editorial over heavy parallax and protecting exactly three existing Home story cards.
- Engineering Free routes `opencode/mimo-v2.6-flash-free` and `opencode/nemotron-3.5-lightning-free` timed out; do not claim they reviewed code.
- A later AGY attempt to review exact new code returned partial output at timeout (no verdict); implementation QA is grounded in direct build/lint/browser/screenshot evidence, not a worker approval.
- Full original component code of `parallax-scroll-feature-section` and `animated-scroll` remained inaccessible; no source copied. 21st.dev references used only as visual inspiration.

## Remaining gates outside this experimental closeout
1. Owner Art Direction acceptance is **not** automatic or implied by browser QA. Use Concept A as the next candidate.
2. Existing locked Home Blueprint requires exactly 3 cards and a fixed section sequence. Do not integrate two new standalone stories into Home until layout ownership and art direction are resolved.
3. Preview image `sizes` in the reused StoryImageFocus is tuned for smaller existing story cards; review large-canvas image sharpness and image performance if promoting the experiment beyond local prototype.
4. TASK-048 / PR #22 remains DRAFT. The experiment depends on its unmerged source; preserve branch/rebase context.
5. No GitHub PR, public Preview, production deploy, or cleanup of this worktree was performed in this local experiment.

**Decision:** TECHNICAL QA PASS — internal prototype complete. Release integration remains HOLD pending Owner Art Direction/Blueprint decision.

---

# TASK-049 — Model Route Selection / Read-Only Worker Gate

- **Observed window:** 2026-10-12 ~12:26 to 12:53:48 Asia/Bangkok
- **Decision:** MODEL_SELECTION_VERIFIED_PARTIAL / IMPLEMENTATION_PENDING
- **Baseline:** 38f4eacedd6403834081fc18558762d7267ef77c
- **Experiment worktree:** D:\lumina-studio_worktrees\TASK-049, branch feat/task049-story-presentation-spike
- **Original PR #22:** not merged or deployed as part of this work; root worktree remains clean.

## Boot and connections
- IE Coder Connect: FULL terminal operational; Continuity resume PASS (navigation-only), Kernel resume ESTABLISHED / GUARDED_INTERNAL_ONLY. Kernel attestation 2026-10-12 12:53 ICT PASS except currentness WARN (not configured).
- Remote Desktop Commander: Offline, not relied upon.
- 9Router loopback `/api/health`: `{"ok":true}`. This is gateway health, NOT live route availability or cost guarantee.
- Actual current AGY inventory: gemini-3.8-flash-(high|medium|low), gemini-3.7-flash, gemini-3.6-flash, gemini-3.1-pro-(high|low), claude-sonnet-4-6, claude-opus-4-6-thinking, gpt-oss-120b-medium.
- OpenCode current `opencode models opencode --pure` exposes Free candidates including opencode/mimo-v2.6-flash-free and opencode/nemotron-3.5-lightning-free. `opencode models kilocode --pure` returned provider not found (nonzero exit).

## Actual inference / reviewer outcomes
| Role | Route | Result | Evidence |
| --- | --- | --- | --- |
| Short inference smoke | AGY / gemini-3.8-flash-low | VERIFIED SUCCESS (READY), 30.36 sec | proc_38c9b73df5bcc16b1fbc3c795146a5f1075def83c15b0b6c25f8f286db5fd46e |
| Art direction review | AGY / gemini-3.1-pro-low, plan | VERIFIED SUCCESS, 75.09 sec | proc_486d265f878695d11d6a17d9d4258d507b1112bbf05e62385afd9e674a9f9e3f |
| Independent QA | AGY / gemini-3.8-flash-low, plan | VERIFIED SUCCESS, 49.18 sec | proc_e076ef27a7ac90e65d413f40c1999f1f17fe8facdbc323a127318c730618419a |
| Engineering | OpenCode / opencode/mimo-v2.6-flash-free, plan + pure | TIMEOUT, no result (145s budget) | proc_eae5e0762c070698cb2d7c50b073948aa0c3497d423bf6126ccec860bfe1d7a9 |
| Alternate free smoke | OpenCode / opencode/nemotron-3.5-lightning-free, plan + pure | TIMEOUT, no result (85s budget) | proc_20207a2eb4f43ab6de11c9d2fecad5a3439fff7338619632a098d5fa420bd455 |

- The two OpenCode timeouts do not establish that those models are globally unavailable. It establishes that this route did not produce a usable result within the bounded test. Stop probing rather than retrying blindly.
- Cost/usage caution: AGY reports large input+cache totals even for short scoped reviews (art input 47,100 + cache 191,012; QA input 45,698 + cache 167,862). Do not interpret as cost without provider billing data. Prefer narrow deltas and do not repeat full task prompt for trivial checks.
- Models listed by AGY are *available in inventory*, not proven free or validated for every intended role. Do not silently select paid fallbacks.

## Model recommendations for next work
- **Brand / subjective Art Direction:** AGY `gemini-3.1-pro-low`, *verified completed review*. Use only for bounded one-time significant direction gates.
- **Routine QA / bounded engineering read-only audit:** AGY `gemini-3.8-flash-low`, *verified completed QA review*. Engineering-specific capability requires its own validation before any mutation.
- **Implementation agent:** choose only after scope and explicit candidate acceptance, then verify selected AGY high/medium mode live. OpenCode free routes remain NON_READY for unattended execution based on timeouts.
- **Independent cost-sensitive reviewing:** defer OpenCode or 9Router until one approved candidate passes a short live smoke and route-specific privacy/cost are known. No contributor tier, API-key Codex substitute or paid fallback.

## Review result and reconciliation
- Worker's shared supported finding: the locked Home Blueprint prescribes exactly 3 Selected Stories cards and an 8-section sequence; Hero is FROZEN. An extra top-level section or +2 cards is outside current lock.
- The owner asked for **two additional image sets**: this is not equivalent to permission to replace existing cards; preserve the requirement and prototype placement before deciding.
- Safe candidate for trial: reuse existing `StoryImageFocus` / `NarrativeFrame[]` inside a scoped editorial story spread; test variant A editorial vs variant B scroll-driven as separate **non-production concept** only.
- 21st.dev Hero07 publicly reports `motion`, `react-wrap-balancer` dependencies; other linked scroll components' full source and exact implementation not yet verified. Claims about mandatory sticky/parallax technology remain **INFERRED**.
- Do not copy component code, install dependencies or modify locked Home until source audit and Art Direction choice.
- Worker-suggested image payload threshold is not a canonical LUMINA requirement.

## Source and validation boundaries
- Read: AGENTS.md, CONTEXT_INDEX.md, PROJECT_RULES.md, current task, brand locks and technical file references.
- Only generated new task packet/review files under `.tasks/TASK-049/` in isolated worktree; main project working tree stayed CLEAN.
- No user-facing preview, new images, lint/build result or browser QA for TASK-049 exists yet. Previously completed TASK-048 QA cannot attest an unbuilt TASK-049 candidate.

## Next bounded step
1. Reconcile exact 21st.dev source/dependency and two verified photo sets.
2. Prepare two read-only layout candidates without changing Home section sequence; retain Owner art direction gate.
3. Once design is accepted, use a verified implementation route in this isolated worktree, run lint/build and 390/768/1440 screenshots.
4. Never merge PR #22 or deploy from this task without specific release gate validation.
