# LUMINA Capture Workflow

Use these scripts for new homepage capture work. Root-level historical capture scripts remain available only for old evidence references and are deprecated for new work.

## Screenshot review

```bash
npm run capture:review
npm run capture:hero
npm run capture:sections
node scripts/capture_review.js --target local --type full --viewport all
node scripts/capture_review.js --url http://localhost:3000 --type hero --viewport mobile --headed
```

`capture_review.js` uses Puppeteer. It supports `--target local|production`, `--type hero|full|sections`, `--viewport desktop|tablet|mobile|all`, `--url`, `--output`, and `--headed`.

| Viewport | Size |
| --- | --- |
| desktop | 1440 × 900 |
| tablet | 768 × 1024 |
| mobile | 390 × 844 |

Modes: `hero` captures the top viewport, `full` captures the full page, and `sections` captures `#hero`, `#selected-stories`, `#moments-between`, `#behind-the-lens`, `#experience`, `#final-cta`, and `#contact-details` individually.

Default screenshot output: `.runtime-captures/lumina/screenshots/<timestamp>/`.

## Video

```bash
npm run capture:video:desktop
npm run capture:video:mobile
node scripts/capture_video.js --target local --viewport desktop
```

`capture_video.js` uses Playwright Chromium at 1440 × 900 or 390 × 844. It prepares fonts and lazy images, returns to the exact top, holds the Hero, scrolls steadily with pauses at the current narrative sections, holds the footer, and closes the browser context to finalize the WebM.

Default video output: `.runtime-captures/lumina/videos/<timestamp>/`.

## Manifest and exit codes

Each timestamped run writes `manifest.json` with the tool, timestamp, target, URL, viewport, capture paths, image count, broken images, missing internal anchors, horizontal overflow, H1 count, console errors, page errors, failed requests, page height, and video size/resolution when applicable. Expected third-party analytics noise is classified separately and is non-blocking.

- `0`: capture and QA passed
- `1`: script or browser execution failure
- `2`: capture completed with blocking QA findings

Generated PNG, WebM, manifests, traces, and browser caches are runtime evidence. Do not commit them.
