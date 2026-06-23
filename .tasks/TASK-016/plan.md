# TASK-016 Implementation Plan

## Objective
Import `computer-use-runtime-bridge` and `windows-ui-review-runtime` skills from `D:\stt_typing` into `D:\lumina-studio\skills\`, adapt/update metadata and registry files, perform a dry-run sync of mirrors, apply the sync, and validate the results.

## Steps
1. **Source Inspection (Part A)**:
   - Verify exists, subfiles, and whether STT-specific/generic.
   - Output to `.tasks/TASK-016/reports/source-inspection.md`.
2. **Importing Skills (Part B)**:
   - Copy folders to `D:\lumina-studio\skills`.
   - Output to `.tasks/TASK-016/reports/import-report.md`.
3. **Registering Skills (Part C)**:
   - Update `docs/SKILL_SOURCE_REGISTRY.md` and `docs/CONTEXT_INDEX.md`.
4. **Synchronizing Mirrors (Part D)**:
   - Run dry-run: `powershell -File scripts\sync-project-skills.ps1 -DryRun -ShowDiff`.
   - Output to `.tasks/TASK-016/reports/sync-dry-run-report.md`.
   - Run apply: `powershell -File scripts\sync-project-skills.ps1 -Apply -BackupBeforeApply`.
5. **Final Validation (Part E)**:
   - Verify `git status --short`.
   - Output to `.tasks/TASK-016/reports/final-report.md`.
