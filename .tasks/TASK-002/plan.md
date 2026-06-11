# Plan: TASK-002 - Skill Sync Dry-Run, Backup and Diff Report

This task focuses on executing a dry-run sync assessment and formulating a backup script map. Under no circumstances will any folder be deleted, modified, or overwritten in this task.

## Proposed Steps

1.  **Dry-run sync analysis**: Compare files in `skills/` with their corresponding mirrors in `.agent/skills/`, `.opencode/skills/`, and `.gemini/skills/` to detect:
    *   Missing files in mirrors.
    *   Files in mirrors that differ from the source of truth.
    *   The exact structure of the recursively nested `.gemini/skills/skills/` directory.
2.  **Backup planning**: Detail the exact logic, paths, and commands that a future PowerShell backup script will use to save existing mirrors before any sync.
3.  **Diff reporting**: Compile the differences in a report under `.tasks/TASK-002/reports/diff-report.md`.

## Verification
*   Confirm git status is clean of any source code, visual asset, or skill folder modifications.
