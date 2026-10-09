---
name: lumina-review-checklist
description: Final review and acceptance checklist for all LUMINA Studio tasks before approval, merge, or deployment.
profile: LUMINA_REVIEW_CHECKLIST
---

# LUMINA REVIEW CHECKLIST

## Purpose

Prevent:

- scope creep
- hidden architecture changes
- unintended file modifications
- visual regressions
- deployment mistakes
- incomplete task delivery

## Required Checks

### 1. Task Compliance

Verify:

- Task objective was completed.
- Requested scope was respected.
- No extra features were added.
- No unapproved redesign occurred.
- No speculative future architecture was introduced.

### 2. File Scope

Compare:

- .ai/TASK_BRIEF.md
- .ai/TASK_REPORT.md

Verify:

- Only approved files were modified.
- No unrelated files were touched.
- No silent refactors occurred.

### 3. Project Rules

Verify task does not introduce:

- Backend
- Database
- Authentication
- Booking
- CMS
- Dashboard
- Payments
- API routes
- Production Three.js
- Production WebGL

unless explicitly approved.

### 4. Validation

Required:

- npm run lint
- npm run build

Both must pass.

### 5. Visual Consistency

Review:

- Hero
- Portfolio
- Studio/Profile
- Contact
- Footer
- Mobile layout

Check:

- Brand consistency
- Typography consistency
- Spacing consistency
- Image crop consistency
- Luxury editorial feeling

### 6. Config Discipline

Verify:

- Config system was used when appropriate.
- No hardcoded values were added unnecessarily.
- Existing config architecture remains intact.

Check:

- src/config/visual.ts
- src/config/typography.ts (for typography tokens only)
- src/config/motion.ts
- src/config/content.ts
- src/config/portfolio.ts
- src/config/services.ts
- src/config/navigation.ts
- src/config/contact.ts

### 7. Documentation

Verify updates:

- AI_HANDOFF.md
- reports/implementation_report.md

If visual changes occurred:

- reports/visual_audit.md

### 8. Deployment Safety

Check:

- no secrets exposed
- no debug content visible
- no placeholder language remains
- no temporary assets accidentally committed

## Final Decision

Choose one:

- APPROVED
- APPROVED_WITH_NOTES
- CHANGES_REQUIRED
- REJECTED

## Required Final Review Report

Return:

- Project State
- Task
- Files Reviewed
- Validation Result
- Review Findings
- Risk Level
- Decision
- Recommended Next Task
