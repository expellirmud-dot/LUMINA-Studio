---
name: read-first-governance
description: Mandatory READ-FIRST workflow for repository-aware implementation. Use before editing repo files, activating Serena, checking task scope, git status, validation plan, and no-code-edited reporting.
---

# Read First Governance

Mandatory READ-FIRST workflow for repository-aware implementation.

## Automated Check

Run the following command before starting any task to verify all required files exist:

```powershell
& "D:\lumina-studio\.agent\skills\read-first-governance\scripts\check_read_first.ps1"
```

See [references/read-first.md](./references/read-first.md) for full details.
