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

## Exact-candidate release and rollback (Phase 1)

This checklist is a future procedure, not evidence that a release or rollback happened.

1. Reconcile the Owner-approved public domain, real photo/client permissions and the specific scope of the PR. Never merge mixed experimental branches into Production.
2. Capture exact Git HEAD and clean diff; run lint, build/TypeScript and mobile/tablet/desktop browser QA on the actual release candidate. Treat tests on a different HEAD as historical.
3. Check Vercel Preview with the same candidate: test HTTPS/Metadata, `robots.txt` disallow for Preview, and empty Preview sitemap. Record the deployment ID and commit SHA.
4. Before Production, record previous READY Vercel Production deployment ID, aliases and rollback options, then merge/deploy only if task-specific gates permit. Reconcile ambiguous effects before retrying.
5. Verify new Production alias points to the landed SHA: Home and relevant routes HTTP 200, images and links work, `robots.txt` and `sitemap.xml` serve intended values, and key screens pass smoke at 390/768/1440. Record effect as VERIFIED only after checking.
6. If verification fails, return to the recorded known-good deployment through the Vercel-supported rollback flow (or a separate reviewed revert PR) and verify alias, SHA and public smoke again. Do not force-delete worktrees or unique evidence before all landed checks pass.
