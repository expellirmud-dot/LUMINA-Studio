# TASK BRIEF — LUMINA-QA-011A

## Name
LUMINA-QA-011A

## Goal
Remove all development placeholder language from the hero section.

## Problem
Current hero contains:
- RESERVED FOCAL AREA
- NO THREE.JS OR WEBGL IMPLEMENTED

These reduce perceived quality and make the site feel unfinished.

## Allowed Files
- `app/page.tsx`
- `src/config/site.ts`
- `.ai/qa/TASK_REPORT-QA-011A.md`

## Requirements
- Remove all development-oriented copy.
- Do not change layout.
- Do not change spacing.
- Do not add new features.

## Validation
- `npm run lint`
- `npm run build`

## Success Criteria
No placeholder or technical implementation text remains visible in the hero.
