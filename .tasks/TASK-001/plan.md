# Plan: TASK-001

## Proposed Changes
We will create documentation defining the priorities of project context files and a complete registry of local and app-specific skills, detailing duplications and future syncing strategies. No code or existing skills will be touched.

## Architecture Alignment
This task provides the metadata framework to prevent conflicting directives from legacy reports, duplicated skill directories, and legacy configurations. It enforces the "filesystem as source of truth" rule.

## Verification Method
*   Confirm only approved files are added or modified via `git status --short`.
*   Verify no Next.js code is changed.
