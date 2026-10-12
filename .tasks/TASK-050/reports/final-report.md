# TASK-050 — Phase 1 Roadmap Execution / Verified Local Gap-Close Report

- **Work window:** 2026-10-12 16:19–16:36+ Asia/Bangkok.
- **Final decision:** INTERNAL_IMPLEMENTATION_PASS / RELEASE_HELD_OWNER_GATES / PHASE2-5_CONDITIONAL.
- **Scope owner:** `docs/ROADMAP.md` (checkpoint table); this report owns task-local evidence, not a competing roadmap.
- **Worktree:** `D:\lumina-studio_worktrees\TASK-050` / `feat/task050-public-ready-audit`; base `feat/task049-story-presentation-spike@406d8fb`.
- **Original repo:** `D:\lumina-studio` at `feat/task048-narrative-enhancements@38f4eac`, clean on entry; PR #22 intentionally untouched.

## Bootstrap and orchestration
- Continuity resume PASS/navigation-only, Kernel resume `ESTABLISHED / GUARDED_INTERNAL_ONLY`, root and TASK049 exact HEAD and clean status verified.
- IE Coder Connect full terminal available; Remote Desktop Commander Online but IE faster primary.
- Dispatched **read-only** independent AGY reviews, plan mode, models fetched live:
  - Trust/contact: `gemini-3.1-pro-low` exited SUCCESS receipt `proc_94a032fa1b4b756c0cc0bae5d5aff9ac77f1a79e7ab16d4ec21a54dec562bd86`.
  - SEO/accessibility: `gemini-3.8-flash-low` exited SUCCESS receipt `proc_102d1a30693302d33af140370a0d92114c79aeb22dff9fcba6a4ac49161f0a49`.
- Reconciled worker conclusions against source and current Vercel; SEO reviewer quoted outdated production commits; **actual production is `main@172684a`**, verified directly, not its stale guess. Neither worker edited files.

## Production — verified observations (before remediation)
- Vercel project `lumina-studio`, deployment `dpl_HjGBCjoX6Efj5Mh2QxM7cLtu4zw6` READY/target Production, Git SHA `172684a03edf0f91b1e90a67bbc39e1d7a8e083b`.
- Public hostname `https://lumina-studio-iota-ten.vercel.app` HTTP 200 and HTTPS/HSTS present; owner-approved final custom domain UNKNOWN (Vercel domain listing shows only project Vercel domains).
- Production `/robots.txt` HTTP 404, `/sitemap.xml` HTTP 404, `/story-spike` HTTP 404; document lacks canonical and OG image/twitter card. Live response lacked `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`; HSTS was present.
- Headless Chrome on actual Production with 390/768/1440: **27/27 smoke PASS** covering HTTP, one H1, locked 8-section order, no document overflow, link syntax, image decode, no console error. Exact ignored receipts `.runtime-captures/lumina/TASK-050/production-validation.json` and `prod-390.png`, `prod-768.png`, `prod-1440.png`; screenshots visually inspected (photography-first).
- Not proven: real inbound LINE/telephone/Facebook message reception; client quote/photo permission; real mobile field CWV; full WCAG conformance; full editorial acceptance.

## Implementation — scoped reversible fixes on TASK-050 branch only
1. `src/config/site.ts`: canonical owner for publicSiteUrl and OG image path; present Vercel origin as fallback, `NEXT_PUBLIC_SITE_URL` override for final Owner-confirmed domain.
2. `app/layout.tsx`: `metadataBase`, canonical homepage, OG image and Twitter summary_large_image using canonical config; preserve text/copy/Hero and language annotations.
3. `app/robots.ts`: crawl Home; disallow internal `/story-spike` and `/fastwork`; disallow all in Vercel Preview.
4. `app/sitemap.ts`: homepage only in Production/default; empty in Vercel Preview.
5. `next.config.ts`: tested `nosniff`, `strict-origin-when-cross-origin` and `SAMEORIGIN` headers; no restrictive CSP speculation.
6. `app/story-spike/page.tsx`: `notFound()` in production builds. This closes a real public-route exposure risk if someone later merges TASK-049 whole; local experiment source remains available for development review.
7. Extended canonical `docs/DEPLOYMENT.md` with release, rollback and routine checks; updated `docs/ROADMAP.md` in place, without new runbook.

## Candidate verification
- `npm ci --no-audit --no-fund` exit 0; upstream deprecated Puppeteer warnings noted, not misclassified as failure.
- **Final `npm run lint` PASS** (exit 0).
- **Final `npm run build` PASS**, Next.js 16.4.0, TypeScript PASS, static routes `/robots.txt`, `/sitemap.xml` generated.
- HTTP against locally running exact final Production build at `127.0.0.1:3421`: Home HTTP 200; `robots.txt` HTTP 200; `sitemap.xml` HTTP 200; `story-spike` HTTP 404.
- Final built Home contains canonical, OG image, Twitter card metadata. HTTP headers exactly `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `X-Frame-Options: SAMEORIGIN`.
- **Final local browser 27/27 PASS** at 390/768/1440: `.runtime-captures/lumina/TASK-050/candidate-validation.json` and `candidate-390.png`, `candidate-768.png`, `candidate-1440.png`. Candidate includes unmerged TASK-048/049; this validates this exact local candidate only.
- Production unchanged; local improvement `/robots.txt` and `/sitemap.xml` is **not deployed**.

## Release blockers and factual unknowns
- **AD-01:** Owner has not accepted subjective Art Direction for TASK-048 and selected presentation of 2 added photo sets. Blueprint strictly locks three Home cards; no silent replacement/fifth card.
- **ST-01:** Existing two real photo-set prototypes do not establish rights/consent, final copy or placement.
- **CT-01:** Kind Words testimonial appears as an anonymous attributed quote with no verified consent/source; LINE/Facebook/phone ownership and real end-to-end message receipt remain unknown. Do not send real inquiries or invent attribution.
- **PF-01:** final canonical domain not formally chosen. Current configured Vercel alias is a **provisional verified production hostname**, not Owner acceptance of a public brand domain. Real LCP/CLS/INP and Lighthouse not yet measured; no invented PASS.
- **QA-01:** Full integrated PR/release-head QA, explicit Owner visual acceptance and authenticated destination checks still needed.
- **RL-01:** GitHub PR #22 `open=true, draft=true, merged=false, head=38f4eac`. TASK050 branch includes TASK049 experiments; must not merge wholesale. Review/cherry-pick approved fixes onto correct future release branch after owner gates; verify actual Git candidate and Production SHA.
- **OP-01:** release checklist written but not executed/operationally certified; requires actual release and assigned ongoing owner.
- **Phases 2–5:** privacy, costs, booking/client gallery scope and actual demand not established; intentionally not built under Phase 1 rules.

## Stop, effect and next action
- External effects: NONE. No push, GitHub comment, PR merge, domain/DNS, external contact, purchase, or Vercel deploy in TASK-050.
- Local experiment reversible; no dependency or new brand section, Hero unchanged. Preserve all worktrees until merged/reconciled.
- **Next unblock:** Owner Art Direction decision **and** three-card placement choice, permissioned imagery/testimonial, public LINE/contact proof and final domain decision. Once supplied, create release-specific bounded candidate from the correct Git base, reproduce QA and follow canonical deploy checklist.
- Scope closeout is **technical execution pass**; website-wide roadmap is not claimed complete while blockers remain.
