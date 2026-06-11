# Part: TASK-002-A - Dry-Run Sync Analysis & Plan

We analyzed the discrepancies between the authoritative `skills/` directory and the three environment mirrors (`.agent/`, `.opencode/`, and `.gemini/`).

## Summary of Discrepancies

### 1. File Casing Mismatch (Capitalization)
*   **Issue**: In `skills/`, the metadata files for LUMINA skills are named with uppercase extensions:
    *   `skills/LUMINA_ART_DIRECTION/SKILL.md`
    *   `skills/LUMINA_BOOTSTRAP/SKILL.md`
    *   `skills/LUMINA_CONFIG_CHANGE/SKILL.md`
    *   `skills/LUMINA_DEPLOYMENT/SKILL.md`
    *   `skills/LUMINA_Frontend-Visual-Design/SKILL.md`
    *   `skills/LUMINA_REPORTING/SKILL.md`
    *   `skills/LUMINA_REVIEW_CHECKLIST/SKILL.md`
    *   `skills/LUMINA_STARTUP/SKILL.md`
    *   `skills/LUMINA_VISUAL_REVIEW/SKILL.md`
*   **Mirror State**: In the mirrors, these files are named in lowercase: `skill.md`.
*   **Resolution Plan**: Standardize on `SKILL.md` (uppercase) during sync execution, renaming the lowercase mirror files.

### 2. Missing Skills in `.gemini`
*   **Issue**: The `.gemini/skills/` directory is missing 99 files, including three entire skill folders:
    *   `impeccable/`
    *   `impeccable-project-workflow/`
    *   `tailwind-design-system/`
*   **Resolution Plan**: Copy these missing skill directories from the project-root `skills/` folder to `.gemini/skills/` during sync.

### 3. Duplicated Subfolders in `.gemini`
*   **Issue**: There are nested duplicate subdirectories under `.gemini/skills/`:
    *   `read-first-governance/read-first-governance/...`
    *   `skills/...` (nested flat tree mirrors under `.gemini/skills/skills/`)
*   **Resolution Plan**: Mark these nested paths for safe cleanup. Deletion must NOT be performed in TASK-002, but mapped for future execution.

### 4. Content Differences
*   **Issue**: `read-first-governance/SKILL.md` differs in content between `skills/` and the `.opencode` and `.gemini` mirrors.
*   **Resolution Plan**: The sync script will overwrite mirror files with the source content of `skills/read-first-governance/SKILL.md` to resolve drift.
