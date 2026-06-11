# Part: TASK-002-B - Backup Script Mapping

To guarantee zero data loss, a backup procedure must run before any file copy or deletion. This document designs the PowerShell script backup logic.

## Backup Design Specifications

### 1. Target Directories to Backup
The script will back up the following directories:
*   `D:\lumina-studio\.agent\skills`
*   `D:\lumina-studio\.opencode\skills`
*   `D:\lumina-studio\.gemini\skills`

### 2. Destination Path
All backups will be saved under the task's checkpoints directory or a system backup folder:
*   `D:\lumina-studio\.tasks\TASK-002\checkpoints\backup_<timestamp>\`

### 3. Backup Procedure in PowerShell (Draft)
```powershell
$timestamp = Get-Date -Format "yyyyMMdd_HHmmss"
$backupRoot = "D:\lumina-studio\.tasks\TASK-002\checkpoints\backup_$timestamp"

# Create backup folders
New-Item -ItemType Directory -Force -Path "$backupRoot\.agent"
New-Item -ItemType Directory -Force -Path "$backupRoot\.opencode"
New-Item -ItemType Directory -Force -Path "$backupRoot\.gemini"

# Perform copies of current mirror states
Copy-Item -Path "D:\lumina-studio\.agent\skills" -Destination "$backupRoot\.agent\" -Recurse -Force
Copy-Item -Path "D:\lumina-studio\.opencode\skills" -Destination "$backupRoot\.opencode\" -Recurse -Force
Copy-Item -Path "D:\lumina-studio\.gemini\skills" -Destination "$backupRoot\.gemini\" -Recurse -Force

Write-Host "Backup completed successfully at $backupRoot"
```

## Safety Constraints
*   **Dry-run Validation**: The backup script must confirm the presence of source files in `skills/` before backup, to ensure we are not backing up a broken workspace if the source directory is somehow corrupted.
*   **Verification**: The script should count the files in both the mirror and the backed-up directories to ensure a 100% byte-perfect transfer.
