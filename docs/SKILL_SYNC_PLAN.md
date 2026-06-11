# LUMINA Skill Synchronization Plan

This document maps out the strategy for maintaining consistency across primary project skills and their environment mirrors in `D:\lumina-studio` without manual duplications.

---

## 1. Directory Roles

To prevent context drift, directories are segmented into source, mirrors, and adapters:

*   **Source of Truth Directory**:
    *   `D:\lumina-studio\skills\`
    *   *Role*: Every modification to skill files must occur here first.
*   **Mirror Directories**:
    *   `D:\lumina-studio\.agent\skills\`
    *   `D:\lumina-studio\.opencode\skills\`
    *   `D:\lumina-studio\.gemini\skills\`
    *   *Role*: These are read-only targets populated automatically by the sync script.
*   **App Adapters**:
    *   *Role*: Specific settings (like `.gemini/settings.json` or `.opencode/package.json`) that govern environment setups remain local and are never overwritten by the sync script.

---

## 2. Sync Execution Rules

*   **Do Not Edit Mirrors Directly**: Modifying a file inside `.gemini/skills/` or `.agent/skills/` directly is strictly forbidden. It will be overwritten during the next sync.
*   **Symlinks Rule (Windows)**:
    *   > [!WARNING]
    *   > Symbolic links (`symlink`) must be avoided on Windows systems. Windows filesystem permission layers (requiring Administrator rights for symlinks by default) make them fragile for developers. A script-based copy sync is much safer and more reliable.

---

## 3. Recommended Sync Script: `scripts/sync-project-skills.ps1`

A PowerShell script `scripts/sync-project-skills.ps1` will be created in a future task to automate folder mirroring.

### Script Specifications & Safety Checks

The sync script must implement the following safety mechanisms:

1.  **Backup Layer**:
    *   Before rewriting any mirror folder, the script must create a compressed backup or temporary copy of the target mirror (e.g. `.gemini/skills_backup_timestamp/`) to prevent accidental data loss.
2.  **Dry-Run Mode (`-DryRun`)**:
    *   Allows the developer/agent to preview exactly what folders will be created, copied, or deleted without executing the changes.
3.  **Diff Mode (`-ShowDiff`)**:
    *   Outputs a line-by-line file diff for modified skills before mirroring.
4.  **Preservation Rule**:
    *   The script must **never** delete unknown or app-specific files/folders under the target mirrors without explicit owner approval.
5.  **Corrupted Nested Folder Removal**:
    *   Upon execution, the script should specifically locate and purge the corrupted recursively nested `.gemini/skills/skills/` folders.
