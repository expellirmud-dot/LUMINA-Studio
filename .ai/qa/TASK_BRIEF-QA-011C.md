# TASK BRIEF — LUMINA-QA-011C

## Name
LUMINA-QA-011C

## Goal
Verify all portfolio images render correctly.

## Problem
Visual review suggests some cards appear empty or visually inconsistent.

## Allowed Files
- `src/config/images.ts`
- `.ai/qa/TASK_REPORT-QA-011C.md`

## Requirements
- Verify all four portfolio images load.
- Verify image paths.
- Verify crop settings.
- Verify no broken image references.
- Do not replace images unless broken.

## Validation
- `npm run lint`
- `npm run build`

## Success Criteria
All four portfolio cards display correctly on desktop and mobile.
