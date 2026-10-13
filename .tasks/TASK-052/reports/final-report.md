# TASK-052 — Two Additional Standalone Stories, Local Verification

- Execution date: 2026-10-13 (ICT). Status: LOCAL_TECHNICAL_PASS / OWNER_ART_AND_PHOTO_PERMISSION_GATE / NOT_RELEASED.
- Worktree: D:\lumina-studio_worktrees\TASK-050, branch feat/task050-public-ready-audit (root feat/task048 and TASK049 preserved).
- Owner decision: 3 unchanged Selected Stories on Home, plus 2 INDEPENDENT extra stories. No ninth Home section and no frozen Hero modification.
- New routes: /stories, /stories/relationship, /stories/ritual; all generated as static HTML. Source: existing canonical src/config/portfolio.ts storyPresentationSets, using authentic existing project wedding-ceremony-v1 and phra-louis-v1 assets.
- Discoverability: one minimal link within existing Selected Stories section under three original cards, not an additional Homepage section.
- No new packages/dependencies/backend/gallery grid. Existing /story-spike protected in production.
- Accessibility: semantics (article, h1, figure, figcaption), link focus outlines, descriptive alt text, prefers-reduced-motion CSS. All experimental story routes explicitly noindex pending art and consent.
- CLI read-only design reviewer: AGY gemini-3.8-flash-low SUCCESS, receipt proc_5ead2383d7982907d61d3128a6847f51b45dfb69b5a1e56a11dfa70f27ccbc1c.
- Validation: npm run lint exit 0; npm run build exit 0, Next.js 16.4.0, TypeScript passed; /stories/relationship and /stories/ritual SSG.
- Playwright headless Chrome 390x844, 768x1024, 1440x900 against local port 3423: 72/72 PASS; includes HTTP 200, single h1, no horizontal overflow, no JS page errors, exactly 3 Home cards, 1 Home discovery link, 2 extra story entries, 4 figures per detail route, noindex on new routes. Test receipt and screenshots only in ignored .runtime-captures/lumina/TASK-050/task052/.
- Screenshots inspected at mobile/desktop for story index and desktop detail; composition editorial, no obvious initial viewport cropping concern. Not full accessibility audit or real CWV.
- Release still blocked pending permission to publish client photos, final Art Direction review, corroborated Kind Words/testimonial and actual contact path; PR #22 still DRAFT. Do not push/merge/deploy until prior gates resolved and exact release-head validation reproduced.
- No owner files/worktrees deleted; no external effects. Scope stop after local commit.

## 2026-10-13 photo-source review — evidence-backed improvement
- Inspected six original project JPEGs directly: wedding-ceremony-v1/PTO-556.jpg, PTO-3488.jpg, PTO-692.jpg; phra-louis-v1/PTO-296.jpg, PTO-13.jpg, PTO-318.jpg. This validates visual content and existing assets only, NOT publication consent or relation of pictured people.
- Found wedding story cover PTO-556 also used as an existing Home Selected Story cover. Changed standalone relationship cover to PTO-692 (adult woman in wedding dress embracing an older man), making its editorial lead distinct while retaining 3 existing Home cards.
- Narrowed vague ALT descriptions for PTO-692, PTO-296 and PTO-318 to observable people/actions. No photo asset bytes changed and no identities/roles guessed beyond scene context.
- AGY independent photo reviewer was attempted with gemini-3.8-flash-low but yielded empty response after 100s print timeout. No reviewer PASS claimed.
- Post-change npm run lint PASS (exit 0) and npm run build PASS (exit 0), Next.js 16.4.0 and TypeScript; two story pages SSG.
- Post-change headless Chrome QA 72/72 PASS (390/768/1440) on same local build; receipts and screenshots under ignored .runtime-captures/lumina/TASK-050/task052/. Owner subjective visual/permission gates remain HOLD. No push/merge/deploy.

## Release scope reconciliation (2026-10-13 10:15 ICT)

- **Verified candidate:** local branch `feat/task050-public-ready-audit@9a32b46` CLEAN at review start, composed of pending TASK-048, TASK-049, TASK-050 and TASK-052 changes; comparison vs `main` showed **35 changed files**. This is a mixed experimental branch, not a bounded releasable PR.
- **Keep for future release review:** `app/stories/page.tsx`, `app/stories/[id]/page.tsx`, `app/stories/stories.module.css`, the in-section discovery link in `app/page.tsx`, associated `app/globals.css` rules, and photo-story data in canonical `src/config/portfolio.ts`. Existing three Home story cards must remain intact.
- **Keep isolated / do not ship:** `app/story-spike/page.tsx` and `app/story-spike/page.module.css` are comparison-only experiment. Current guard returns 404 on production; a final release should preferably omit both from the selected patch entirely, not rely on noindex alone.
- **Independent review required:** TASK-048 narrative Drawer and Inquiry UX, plus TASK-050 SEO headers/site URL/robots/sitemap should be cherry-picked or integrated only after their own scope gates, not implicitly accepted through the 35-file diff.
- **Photo weight spot check (source files, not transferred WebP size):** Wedding source PTO-692 0.33 MB, PTO-3488 0.40 MB, PTO-556 0.43 MB; ordination PTO-296 0.57 MB, PTO-13 0.66 MB, PTO-318 0.49 MB. Do not confuse source JPEG disk size with Next.js-optimized transfer size or user-observed LCP.
- **Content verification:** the selected sources visually match human documentary scope; updated alt text describes visible gestures and subjects; no portrait permission/client testimonial/contact receipt was established by the image files or this audit. Their public exposure remains on hold.
- **Next release preparation:** create a fresh release-candidate branch from exact current `origin/main`, with independently approved narrow scopes. Verify Homepage remains eight sections and three Selected Stories cards, story pages noindex or later Owner-approved indexing, remove experimental route, run lint/build/browser QA, then obtain art/photo rights signoff. Push/Merge/Deploy only when all gates are satisfied.
- **Current decision:** RELEASE PREPARATION REVIEW COMPLETE / PRODUCTION HOLD, not a claim of Owner subjective Art Direction acceptance.
