# DEPLOYMENT

Recommended deployment options:

## Option A

Vercel

Best for:
- Next.js
- Simple GitHub deploy
- Preview deploy

## Option B

Cloudflare Pages

Best for:
- Static site
- Fast CDN
- Free deploy test

Current project has no database and no backend.

## Phase 1 release and rollback operating checklist (2026-10-12)

This extends the existing Vercel deployment guide; release authority and acceptance remain under `PROJECT_RULES.md`, `AGENTS.md`, `docs/ROADMAP.md` and the active task packet. It is an **unexecuted checklist**, not proof of a deployment or tested rollback.

1. Before release: confirm Owner Art Direction acceptance, actual rights to show curated photographs and testimonial, public contact account ownership/message receipt, and the final canonical domain. Confirm the three-card/section Home Blueprint or explicitly approve a scoped amendment.
2. Confirm the exact release branch/HEAD and clean Git status, PR checks/merge scope, immutable candidate lint/build and 390/768/1440 screenshot/browser QA. Never reuse test evidence from a different HEAD without reproducing it.
3. Use the verified Vercel Preview for the same candidate before Production. Record project, deployment ID, origin SHA, domain aliases, and prior READY Production deployment ID in the active task report.
4. Production: deploy only after release gates pass. Reconcile any ambiguous Vercel/GitHub effect before retrying. Verify the landed Git SHA, `READY` state, HTTPS/HTTP 200, SEO `robots.txt`/`sitemap.xml`, canonical/social cards, links, mobile navigation, drawer and inquiry UI. Do not send a real client message during smoke testing.
5. If release fails: stop new changes; inspect deployment and Git receipt. Restore the **recorded, verified previous Production deployment** using the platform's supported rollback flow (or revert the release commit via a separately reviewed PR if platform rollback cannot be verified). Do not assert rollback success until the alias points at the intended known-good deployment and public smoke passes.
6. Ongoing operations after launch: periodically check broken contact links, public image availability/rights, SEO metadata and Core Web Vitals, dependency advisories, and owner-visible incoming inquiry path. Store receipts in existing task reports; do not add a dashboard, database or competing maintenance registry.

Current deployment for comparison at this checkpoint (verified 2026-10-12): `main@172684a03edf0f91b1e90a67bbc39e1d7a8e083b`, Vercel deployment `dpl_HjGBCjoX6Efj5Mh2QxM7cLtu4zw6` READY at `https://lumina-studio-iota-ten.vercel.app/`. **Not** a guarantee of future rollback availability or authorization.
