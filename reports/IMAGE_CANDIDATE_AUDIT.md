# LUMINA Studio — Image Candidate Audit

*Audit date: 2026-08-06*
*Scope: Candidate image inventory + contact sheet generation for Primary Reviewer image selection.*
*Mode: READ-ONLY inventory + local evidence generation. No website/config/image changes.*

---

## 1. Executive Summary

Two objectives completed under Owner authority:

1. **Deleted all legacy visual evidence** under `reports/screenshots/` (55 tracked files: old QA screenshots, video captures, lens-sweep experiments, version A/B comparisons). The directory is now empty.
2. **Generated contact sheets + manifest** for all 233 tracked candidate images under `public/images/portfolio/`, stored in the ignored local evidence directory `.runtime-captures/lumina/IMAGE-CANDIDATE-AUDIT/`.

**VISUAL SELECTION BLOCKED.** The vision/analysis tool in this environment returned HTTP 404 on every image-analysis attempt (confirmed across two separate sessions). Per the audit gate, AI shortlist and Keep/Replace verdicts are **withheld**. This report delivers only contact sheets + manifest for the Primary Reviewer (Owner chat) to perform the actual image selection.

No `app/`, `src/`, config, package, or source image was modified. No website image was added, removed, or re-sequenced.

---

## 2. Deleted Screenshot Inventory

All files under `reports/screenshots/` were removed (tracked via `git rm`, plus empty subfolders removed). Count: **55 tracked files** across 8 subfolders.

| Group | Examples | Count |
|---|---|---|
| Video captures (lens-sweep / hero concepts) | `LUMINA Studio _ Premium Editorial Photography.mp4`, `reactive_light_frame.mp4` | 2 |
| Phase3-QA viewport shots | `Phase3-QA/desktop-1440-hero.png`, `mobile-390-full.png` (10 files) | 10 |
| QA-003-B shots | desktop/mobile/tablet | 3 |
| Lens-sweep evidence | `lens_sweep/` (7 files) | 7 |
| Video frame contact sheets | `lumina_video_frames/` (10 files) | 10 |
| Version A/B comparisons | `version_A/`, `version_B/` (6 files) | 6 |
| Misc section shots | `home.png`, `contact.png`, `story.png`, `studio.png`, `work.png`, `full_page_desktop.png`, `reactive_hover.png` | 8 |
| Slideshow remnants | `slide1-5_*.png` (7 files) | 7 |
| Wedding-party-trial captures | `wedding_party_trial/desktop_full.png`, `mobile_full.png` | 2 |

All deletions confirmed within `reports/screenshots/` only. No other `reports/` subdirectory touched.

---

## 3. Candidate Asset Inventory

**Total tracked images: 233** across **17 image folders** under `public/images/portfolio/`.

| Folder | Images | Live usage | Orientation mix (from manifest) |
|---|---|---|---|
| wedding-party-trial | 73 | Live (Hero seq, Stories, Moments) | mixed |
| 2569-03-09 | 32 | Live (Moments ×2) | mixed (incl. 6016×4016) |
| 2 | 37 | Candidate | mostly landscape |
| BU2018_1769697939720340 | 18 | Candidate | mixed |
| my | 12 | Candidate | mixed |
| lan | 9 | Candidate | mixed |
| sheet | 7 | Candidate | mixed |
| lumina-harvest-v1 | 5 | Live (Stories ×2) | landscape |
| phra-louis-v1 | 6 | Live (Hero, Moments ×1) | portrait/landscape |
| AomPud_2388340957856032 | 5 | Candidate | mixed |
| pt | 5 | Candidate | mixed |
| wedding-ceremony-v1 | 5 | Candidate | mixed |
| 1 | 6 | Candidate | mixed |
| 4 | 4 | Candidate | mixed |
| HMUBIN_2101926326497498 | 4 | Candidate | mixed |
| 3 | 3 | Candidate | mixed |
| ICE_2266066713416791 | 2 | Candidate | mixed |
| harvest_contact_sheets.py | 0 | n/a (script, not image) | — |

**Live vs Candidate classification:**
- **Live (currently rendered on homepage):** 10 images across `wedding-party-trial`, `lumina-harvest-v1`, `phra-louis-v1`, `2569-03-09` (exact paths in §5).
- **Candidate (tracked, not referenced by any config):** all other 223 images.

Full per-image data (dimensions, orientation, file size, usage, thumbnail position) is in `metadata/manifest.csv` (233 rows).

---

## 4. Contact Sheet Inventory

Root: `.runtime-captures/lumina/IMAGE-CANDIDATE-AUDIT/` (git-ignored — local evidence only).

| Path | Contents |
|---|---|
| `current-live/sheet.jpg` | 10 homepage images (labeled LIVE 01–10) |
| `candidates/<folder>/sheet.jpg` | 17 per-folder contact sheets (one per image folder) |
| `candidates/<folder>/*.jpg` | individual labeled thumbnails (360×270 + caption) |
| `metadata/manifest.csv` | 233-row index (index, path, filename, folder, dims, orientation, size, tracked, usage, sheet, page, pos) |
| `metadata/manifest.json` | same data as JSON |
| `metadata/build_thumbs.sh`, `build_manifest.sh` | generation helpers (local, not committed) |

**Total contact sheet pages: 18** (1 current-live + 17 candidate-folder sheets).
**Total thumbnails generated: 306** (incl. subfolder variants).
**Folders surveyed: 17.**

---

## 5. Current Live Image Map

Proven from `app/page.tsx` + `src/config/images.ts` + rendered HTML (Full Audit, 2026-08-06):

| Role | File | Dimensions | Orientation |
|---|---|---|---|
| Hero (single) | `public/images/portfolio/phra-louis-v1/PTO-296.jpg` | 1367×2048 | portrait |
| Selected Stories 1 | `public/images/portfolio/wedding-party-trial/final_40/PTO_3403.jpg` | 2048×1367 | landscape |
| Selected Stories 2 | `public/images/portfolio/lumina-harvest-v1/000013_ceremony_IMG_1676.webp` | 2048×1365 | landscape |
| Selected Stories 3 | `public/images/portfolio/lumina-harvest-v1/000035_family_emotion_PTO_9008.webp` | 2048×1367 | landscape |
| Moments 1 | `public/images/portfolio/wedding-party-trial/final_40/PTO_3246.jpg` | 2048×1367 | landscape |
| Moments 2 | `public/images/portfolio/wedding-party-trial/final_40/PTO_3397.jpg` | 2048×1367 | landscape |
| Moments 3 | `public/images/portfolio/phra-louis-v1/PTO-318.jpg` | 1367×2048 | portrait |
| Moments 4 | `public/images/portfolio/2569-03-09/A M/PTO_5711.jpg` | 6016×4016 | landscape |
| Moments 5 | `public/images/portfolio/2569-03-09/A M/PTO_5723.jpg` | 6016×4016 | landscape |
| Behind The Lens | `docs/Profile Pic.jpg` | 1365×2048 | portrait |

**Note:** Hero is confirmed a single static image (slideshow canceled per Owner). `HeroSlideshow.tsx`, `portfolioConfig`, `slideshowConfig`, `heroSequence` are dead code/unused (see Full Audit §3).

---

## 6. Visual Inspection Evidence

**VISUAL SELECTION BLOCKED.**

- Tool used to attempt inspection: `vision_analyze` (image analysis endpoint).
- Result: **HTTP 404** on every attempt, including the freshly generated `current-live/sheet.jpg`.
- Same failure observed in the prior Full Audit session (2026-08-06) — persistent environment limitation, not a transient error.
- Browser screenshot capture also failed in the prior session (Chrome silent exit), so no rendered viewport evidence is available either.

Per the audit gate, when the environment cannot visually inspect images:
- No AI image recommendation is made.
- No Keep/Replace verdict is issued.
- Dimensions/orientation are **not** used as a proxy for image quality or aesthetic fit.
- Only contact sheets + manifest are delivered.

**Images visually inspected by AI: 0.**

---

## 7. Candidate Shortlist

**WITHHELD — VISUAL SELECTION BLOCKED.**

No Hero / Selected Stories / Moments / Behind The Lens shortlist is provided. The Primary Reviewer must perform selection using the contact sheets in `.runtime-captures/lumina/IMAGE-CANDIDATE-AUDIT/`.

---

## 8. Proposed Homepage Image Sequence

**WITHHELD — VISUAL SELECTION BLOCKED.**

No sequence proposal is made. Refer to §5 (current live map) as the baseline the Primary Reviewer will revise.

---

## 9. Risks and Uncertainties

1. **Vision tool unavailable (404)** — blocks AI image selection entirely. Primary Reviewer must do visual selection manually.
2. **Hero portrait crop** — `PTO-296.jpg` is portrait (1367×2048) rendered into a full-viewport landscape hero via `object-fit: cover`. This is a known layout risk carried from the Full Audit; not resolved here (no website change permitted).
3. **Large candidate dimensions** — `2569-03-09` images are 6016×4016; suitable for display but heavier than needed. Not down-sampled (no source change permitted).
4. **Manifest thumb-page/pos** — pagination counter is approximate (resets per folder); use `index` + `filename` + `folder` columns for exact lookup.
5. **Serena unavailable** — `pydantic_core` import error; used Git + CodeGraph + file tracing instead (CodeGraph synced fresh, 2026-08-06).

---

## 10. Primary Reviewer Decision Points

Owner chat (Primary Reviewer) to decide using the contact sheets:

- **Hero recommendation** — keep `PTO-296.jpg` (portrait, may crop awkwardly) or pick a landscape candidate with clear people/relationship subject from `wedding-party-trial`, `2569-03-09`, or `wedding-ceremony-v1`.
- **Selected Stories (3 images)** — Ritual / Relationship / In-between roles. Current: ceremony + blessing + family emotion. Review candidates in `lumina-harvest-v1`, `wedding-ceremony-v1`, `BU2018_*`, `2569-03-09`.
- **Moments Between (5 images)** — current mix is ceremony/monks/family. Candidates in `2`, `my`, `lan`, `sheet`, `AomPud_*` offer gesture/detail variety.
- **Behind The Lens** — keep `Profile Pic.jpg` or pick a more approachable portrait candidate.
- **Images to avoid** — do not let one event (e.g. ordination-only or wedding-only) dominate the whole page; avoid staged/group shots that read as template.
- **Owner-only items** — final art-direction lock, copy language system, font pairing (out of scope for this audit).

---

## 11. One Smallest Next Implementation Task

**Task:** Once the Primary Reviewer selects the final image set from the contact sheets, update `src/config/images.ts` and `src/config/portfolio.ts` with the chosen paths (config-only change, no component rewrite).

Prerequisite: Vision tool restored OR Owner performs manual selection from `.runtime-captures/lumina/IMAGE-CANDIDATE-AUDIT/`.

---

*End of report. No website, config, or source image was modified in producing this audit.*
