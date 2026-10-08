# LUMINA Studio — Full Audit 2026-10-08

## Executive Summary

**Overall: APPROVED_WITH_NOTES for source commit/push; NOT security-clean for a new production release.**

The active site is small, mostly static, and structurally understandable. The homepage is server-rendered with one bounded client MiniAlbum. Build, TypeScript, diff check, and the corrected product lint gate pass. The largest risk is dependency security: Next.js 16.2.6 is affected by critical/high advisories and npm reports 16.4.0 as a non-major fix path.

This audit covered repository/config inspection, source search, Serena, CodeGraph, npm audit/outdated, GitHub repository/CI inspection, production response headers, build/lint validation, secret-pattern scanning, and existing runtime visual evidence. It is not a penetration test.

## Priority Findings

| Priority | Finding | Action |
|---|---|---|
| P0 | next@16.2.6 has critical/high advisories | Upgrade Next + eslint-config-next to 16.4.0, audit/build/browser-regression before deployment |
| P1 | No CI workflow or general automated test suite | Add minimal install → lint → build → browser smoke CI |
| P1 | Dead frontend systems/config remain | Remove only after confirming no planned reuse |
| P1 | public assets ~294.14 MB; repo ~352,647 KB | Curate deploy assets; archive raw/non-production photos outside public |
| P1 | No explicit CSP/security-header policy | Add conservative headers and validate images/fonts/contact links |
| P2 | README/handoff/history drift | Keep task packets authoritative and refresh rolling docs |
| P2 | lang/navigation governance drift | Lock Thai/bilingual strategy and align config/docs |
| P2 | .gitignore/history/tool trees are noisy | Separate repo-hygiene cleanup |

## 1. Code Quality & Standards

Strengths: strict TypeScript; normal React/Next naming; config split under src/config; current homepage keeps client JS small; no TODO/FIXME/HACK in app/src/scripts; git diff --check passes.

Dead/redundant code confirmed by repository search: src/components/HeroSlideshow.tsx, PortfolioEditorial.tsx, RotatingMicrocopy.tsx are not imported by current app code. Related stale config includes portfolioConfig, heroSequence, contactVariants/activeContactVariant, slideshowConfig, and hero interaction flags tied only to the dead slideshow.

Maintainability: app/page.tsx contains the full page composition and app/globals.css contains global + section-specific behavior. Acceptable now, but new story/interaction work should move into semantic components rather than keep growing both files.

Lint defect found: the old npm lint command scanned the entire repository and failed on ignored runtime-capture evidence. Actual app/src/scripts lint is clean. package.json was boundedly corrected to lint only app src scripts; npm run lint now passes.

## 2. Security & Vulnerability Audit

Fresh npm audit: full tree 25 vulnerabilities (1 critical, 23 high, 1 moderate). Production-only audit: 6 (1 critical, 4 high, 1 moderate). The direct production blocker is Next.js 16.2.6. npm reports Next 16.4.0 as a non-major fix path. Transitive production findings include postcss, sharp, nanoid, source-map-js, and baseline-browser-mapping.

Tracked secret-pattern scan found no credential-shaped Google/OpenAI/GitHub/Slack token and no private-key header. Documentation contains placeholders/redacted examples only. This means no secret was detected in the current scanned tracked snapshot; it is not a guarantee about all Git history.

Current main app has no auth, authorization, API routes, forms, session/cookie handling, database, or user-input submission surface. Therefore auth/authz/input validation are not applicable to this static brochure surface. No current source match was found for dangerouslySetInnerHTML, eval, new Function, document.write, or direct innerHTML assignment.

Production headers: HTTPS/HSTS present. No explicit CSP, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, or frame-control header was observed. Access-Control-Allow-Origin: * is present on the public static homepage.

## 3. Architecture & Design Patterns

Current architecture is appropriately simple: App Router, mostly static/server rendering, config modules, and local client state only. A DI container or global state library would be unnecessary.

Main debt is config drift: historical toggles remain after their UI paths stopped being active. No meaningful production error-swallow pattern was identified. A custom error boundary is absent but low priority until routes/data loading expand.

Important source drift remains outside this commit: local untracked /fastwork differs materially from production /fastwork. It is intentionally excluded until canonical source is reconciled.

## 4. Performance & Efficiency

Strengths: static prerendering, Vercel cache, Next Image with sizes, hero priority, no DB/API loops, no polling, no external animation dependency in MiniAlbum.

Primary issue: public/ is ~294.14 MB; many raw JPGs are 3.3–5.93 MB. Next image optimization helps transfer size but does not remove repository/build/deploy storage and image-processing cost.

MiniAlbum currently keeps all five frames in DOM while collapsed. Fine for one five-frame album; measure/lazy-render if the pattern is repeated many times.

Historical HeroSlideshow contains interval/listener/RAF logic but cleans each up correctly; no active memory leak was found in the current homepage.

## 5. Testing & CI/CD

No conventional unit/integration tests were detected; package.json has no test script. TASK-032 has a bounded Puppeteer keyboard test as task evidence, not a general suite.

No .github/workflows directory exists locally or on GitHub main, and the latest queried commit has no workflow runs. Build packaging itself works: npm run build and TypeScript pass.

Recommended minimum CI: npm ci → npm run lint → npm run build → headless smoke test for homepage render, broken images, overflow, and MiniAlbum keyboard behavior.

## 6. Documentation & Environment

Governance/task documentation is extensive, but README is obsolete: it still describes a deploy-test/general creative studio rather than the locked Human Documentary photography direction. The rolling AI handoff also lagged behind TASK-031–034 before this audit.

No .env.example exists. This is not currently a website blocker because the app has no app secret/env requirement. No Dockerfile exists; that is not a defect for the current Vercel/Next deployment model.

## Validation Evidence

- Serena: project activation, TypeScript LSP, symbol overview/lookup succeeded.
- CodeGraph: refreshed against current source.
- npm run lint: PASS after bounded scope correction.
- npm run build: PASS; TypeScript PASS.
- git diff --check: PASS.
- TASK-032 desktop/mobile runtime, broken-image, overflow, keyboard, reduced-motion checks: PASS.
- Secret-pattern scan: no credential-shaped tracked secret detected.
- Production homepage: HTTP 200, HSTS, Vercel cache HIT.

## Final Review Decision

**APPROVED_WITH_NOTES for commit + push.** The code being committed is lint/build clean and scoped. The critical dependency finding already exists in the baseline and is documented as the immediate next security task. This audit does not authorize or perform production deployment.

## Recommended Next Task

**TASK-035 — Next.js Security Upgrade Gate**: upgrade next + eslint-config-next 16.2.6 → 16.4.0; rerun production npm audit, lint/build, and desktop/mobile browser smoke before deployment.