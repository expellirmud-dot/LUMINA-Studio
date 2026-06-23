# Final Report (TASK-016)

## 1. Source Folders Inspected
- `D:\stt_typing\.ai\skills\computer-use-runtime-bridge`
- `D:\stt_typing\.ai\skills\windows-ui-review-runtime`

Both folders and their respective `SKILL.md` files were found to exist and contain standard skill layouts.

## 2. STT-Specific References Found
- **`computer-use-runtime-bridge`**:
  - Contained `Active project: D:\stt_typing`, `Active Serena CodeGraph: D:\stt_typing`, and skill paths referencing `.ai/skills/` instead of `skills/`.
  - Contained PowerShell commands running `Set-Location D:\stt_typing`.
- **`windows-ui-review-runtime`**:
  - Highly STT-specific; python scripts referenced importing `app.ui.tk_app` modules which are only present in STT (a Tkinter desktop app).
  - Prompts and check templates referenced `D:\stt_typing` and its Python virtual environment path.

## 3. Adaptation Strategy
Rather than importing unchanged (which would contain broken references and non-functional python calls), we adapted the skills:
- Updated all project paths from `D:\stt_typing` to `D:\lumina-studio`.
- Updated all skill folder paths from `.ai/skills` to `skills/`.
- Updated `windows-ui-review-runtime` description and readme files to explicitly document that python scripts are template references configured for the STT desktop application and will not run directly in LUMINA without modification.
- Ensured website codebase remains untouched.

## 4. Files Copied and Mirrored
A total of 56 files were copied from the source, placed under `skills/`, and successfully mirrored to `.gemini/skills/`, `.opencode/skills/`, and `.agent/skills/`.

## 5. Sync Command Run
- **Dry Run**:
  ```powershell
  powershell -File scripts\sync-project-skills.ps1 -DryRun -ShowDiff
  ```
- **Sync Apply**:
  ```powershell
  powershell -File scripts\sync-project-skills.ps1 -Apply -BackupBeforeApply
  ```

## 6. Git Status Output
```text
 M docs/CONTEXT_INDEX.md
 M docs/SKILL_SOURCE_REGISTRY.md
?? .tasks/TASK-016/
?? skills/computer-use-runtime-bridge/
?? skills/windows-ui-review-runtime/
```

## 7. Recommended Commit Command
```powershell
git add docs/CONTEXT_INDEX.md docs/SKILL_SOURCE_REGISTRY.md skills/computer-use-runtime-bridge/ skills/windows-ui-review-runtime/ .tasks/TASK-016/
git commit -m "TASK-016: Import and adapt STT web review runtime skills"
```
