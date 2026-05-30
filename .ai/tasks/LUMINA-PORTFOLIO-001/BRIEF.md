# Task Brief: LUMINA-PORTFOLIO-001 - Approved Portfolio Update

## Status
- **Status:** Pending
- **Assigned to:** Gemini CLI
- **Date:** 2026-05-30

## Source
- `.ai/tasks/LUMINA-QA-015/PORTFOLIO_CURATION.md`

## Approved Portfolio Images
The following images have been approved for the portfolio section:
- `TK_2 (739).jpg`
- `MT (163).jpg`
- `PTO-246.jpg`
- `PTO-364.jpg`
- `PTO 210.jpg`
- `TK_2 (612).jpg`


## Goal
Replace current placeholder/temporary portfolio images with the approved portfolio images listed above.

## Constraints
### Do Not Modify
- Hero section
- Typography settings
- Overall Layout
- Contact section
- About section

### Allowed Actions
- Copy approved images to the public assets directory.
- Update `src/config/images.ts` to include the new image paths.
- Update portfolio image metadata (titles, descriptions) as needed.
- Adjust `objectPosition` for images only if required for better framing.
Definition of Done

- Portfolio displays exactly 6 approved images
- No Hero files changed
- No typography files changed
- No layout structure changed
- npm run lint PASS
- npm run build PASS

Portfolio Principle
Curated > Quantity
Do not add additional portfolio images without explicit approval.
