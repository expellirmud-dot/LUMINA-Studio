# Skill Sync Plan Report: TASK-001-C

## Proposed Sync Architecture
1.  **Source**: `skills/`
2.  **Targets**: `.gemini/skills/`, `.opencode/skills/`, `.agent/skills/`
3.  **Mechanism**: Safe file copying.
4.  **Constraints**: Banning symbolic links on Windows due to default OS restrictions.
5.  **Script**: PowerShell-based automation (`scripts/sync-project-skills.ps1`) supporting dry-runs, backups, and diff previews.
6.  **Owner Safety Gate**: Never delete unrecognized files without approval.
