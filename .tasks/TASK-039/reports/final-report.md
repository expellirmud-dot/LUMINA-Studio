# TASK-039 — Mini Album Keyboard Accessibility

Date: 2026-10-09
Candidate: task/TASK-039-mini-album-keyboard-20261009
Base: origin/main@fc24fec41c28abc5c534dc5267942d5039cec009
Status: CURRENT_CANDIDATE_VALIDATED_PENDING_RELEASE

## Why the change is justified

Current source had a native disclosure button but no Escape key handler, and its horizontal 5-frame rail was not keyboard-focusable.
Bounded current HEAD baseline was reproduced by Puppeteer at 1440x900 and 390x844: Escape did not close the open album and the rail had tabIndex=-1 on both. JSON evidence: .runtime-captures/lumina/TASK-039/baseline.json.

## Implementation

- src/components/MiniAlbum.tsx: scoped keyboard Escape handler on toggle and focusable open rail; return focus to toggle; closed rail tabIndex=-1; aria-label for album photographs.
- app/globals.css: visible :focus-visible outline on the rail.
- .tasks/TASK-039/parts/album-keyboard-qa.cjs: deterministic baseline and candidate browser QA for keyboard, mobile, reduced motion and image focus presence.
- No new npm dependencies or UI animation; protected Hero/Fastwork unchanged.

## Current-candidate validation

- npm ci --no-audit --no-fund: PASS; Node/Next 16.4.0.
- npm run lint: PASS.
- npm run build, TypeScript and three static routes: PASS.
- npm audit --omit=dev: 0 vulnerabilities.
- git diff --check: PASS.
- Browser keyboard QA at desktop 1440x900 and mobile 390x844: PASS (Escape from toggle and rail, Tab to rail, ArrowRight scroll, focus restoration to toggle, rail removal from tab order on close).
- Album 5 image frames intact, reduced-motion transition duration 0s, Image Focus 3 triggers intact, no overflow, broken images, page/console/request errors.
- A first QA screenshot on mobile was captured during scroll and showed Selected Stories; settled-scroll rerun proved rail in viewport and showed it in final desktop/mobile screenshots. No app code change was required for this QA capture artifact.

## Remaining gates

- Existing TASK-035 full Home/Fastwork browser regression and TASK-038 photo focus regression must pass.
- Inspect staged diff, commit, push, GitHub check and PR merge with verified SHA.
- Verify Vercel production, preserve ignored runtime evidence in main project, reconcile canonical status/handoff and clean worktrees.

## Regression suite on current candidate

- Existing TASK-035 browser-smoke: PASS all four combinations (Home and /fastwork at desktop 1440x900 and mobile 390x844). MiniAlbum disclosure remains functional. No broken images, horizontal overflow, failed requests, console errors or page errors.
- TASK-038 Image Focus smoke: PASS desktop and mobile, all three photographs in native dialog, Escape and close button, focus returned, no errors.
- TASK-039 keyboard smoke v3: PASS desktop and mobile. Rail remains in viewport after smooth scroll settles; focus-visible border inspected from actual pixels on both form factors.
- First mobile focus screenshot was captured before smooth page scroll completed; explicit 1100ms settle and viewport-visibility assertion resolves QA timing. Website source did not require scrolling change.
- Production commit/PR/deployment fields pending receipt verification at time of this candidate report.

## Preserved QA evidence (verified)

- Local archive `D:\lumina-studio\.runtime-captures\lumina\TASK-039-release-20261009` — baseline/candidate JSON and visual focus proof, 6 files.
- Local archive `D:\lumina-studio\.runtime-captures\lumina\TASK-039-fullpage-regression-20261009` — full-page Home/Fastwork smoke evidence, 5 files.
- Local archive `D:\lumina-studio\.runtime-captures\lumina\TASK-039-imagefocus-regression-20261009` — Image Focus regression evidence, 3 files.
- SHA256 verified 14/14 copied files using Remote Desktop Commander after IE Coder temporarily rate-limited. No Source-of-Truth code or Owner file was overwritten.
