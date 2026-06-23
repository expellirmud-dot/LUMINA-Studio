# TASK-017: Clarify Runtime Review Skill Roles

## Objective
- Mark `computer-use-runtime-bridge` as primary LUMINA runtime review bridge
- Mark `windows-ui-review-runtime` as STT-derived reference/template only
- Confirm no `.pyc` / `__pycache__` / runtime screenshots are tracked by git
- Do not modify website code
- Do not run browser automation

## Execution Details
- Modified `skills/computer-use-runtime-bridge/SKILL.md` to clarify its role.
- Modified `skills/windows-ui-review-runtime/SKILL.md` to indicate it is an STT-derived reference/template.
- Appended `__pycache__/`, `*.pyc`, and `.runtime-captures/` to `.gitignore`.
- Updated project reporting documentation.

## Status
Completed. No website code was modified, and no automation was triggered.
