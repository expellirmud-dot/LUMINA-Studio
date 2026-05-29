# LUMINA QA FINAL PIPELINE

## LUMINA-QA-006

Mobile Polish Pass

Objective:
Apply and validate mobile-specific refinements.

Allowed Files:

* app/globals.css
* src/config/typography.ts
* src/config/visual.ts
* reports/visual_audit.md
* .ai/qa/TASK_REPORT-QA-006.md

Checks:

* Hero mobile typography
* Contact wrapping
* Portfolio crop on mobile
* Footer spacing

Success:
Desktop unchanged.
Mobile improved.

Commit:
qa-006 mobile polish pass

---

## LUMINA-QA-007

Brand Consistency Review

Objective:
Review all visible branding.

Allowed Files:

* reports/visual_audit.md
* .ai/qa/TASK_REPORT-QA-007.md

Checks:

* LUMINA Studio lockup
* Gold accent usage
* Tone of voice
* Photographer identity
* Footer consistency

Success:
Brand feels consistent across entire page.

Commit:
qa-007 brand consistency review

---

## LUMINA-QA-008

Performance Review

Objective:
Review frontend performance risks.

Allowed Files:

* reports/implementation_report.md
* .ai/qa/TASK_REPORT-QA-008.md

Checks:

* Image sizes
* Hero image weight
* Next/Image usage
* Build output
* CLS risk
* Mobile loading

Success:
No critical performance issues.

Commit:
qa-008 performance review

---

## LUMINA-QA-009

Deployment Review

Objective:
Review deployment readiness.

Allowed Files:

* reports/implementation_report.md
* .ai/qa/TASK_REPORT-QA-009.md

Checks:

* Production URL
* Metadata
* Open Graph
* Favicon
* Broken links
* Mobile navigation

Success:
Ready for public deployment.

Commit:
qa-009 deployment review

---

## LUMINA-QA-010

Final Acceptance

Objective:
Final approval gate.

Required:

* Execute LUMINA_REVIEW_CHECKLIST
* Review all QA reports

Decision:

* APPROVED
* APPROVED_WITH_NOTES
* CHANGES_REQUIRED
* REJECTED

Success:
Phase 1 can be closed.

Commit:
qa-010 final acceptance
