# windows-ui-review-runtime

Safe UI capture and review skill template, imported from the STT project.

## Install location

Project source of truth:

```text
D:\lumina-studio\skills\windows-ui-review-runtime\
```

Copy this folder there. Do not copy `.pyc`, `__pycache__`, generated screenshots, or runtime capture artifacts.

## Contents

```text
windows-ui-review-runtime\
├─ SKILL.md
├─ README.md
├─ CHANGELOG.md
├─ references\
│  ├─ SAFE_WORKFLOW_AND_BOUNDARIES.md
│  └─ STT_UI_STATES.md
├─ templates\
│  ├─ UI_REVIEW_REPORT.md
│  └─ runtime_layout_report.md
├─ scripts\
│  ├─ capture_controlled_ui_states.py
│  ├─ capture_runtime_layout.py
│  ├─ capture_window.py
│  └─ list_windows.py
└─ prompts\
   └─ worker_prompt_ui_review.md
```

## Primary command (Note: scripts are configured for STT desktop application and will not run in LUMINA without modification)

```powershell
Set-Location D:\lumina-studio
# Python runner requires Python 3.12+ and STT dependencies
# Python.exe skills\windows-ui-review-runtime\scripts\capture_controlled_ui_states.py --open-notepad --outdir ".runtime-captures\windows-ui-review\<TASK-ID>"
```

## Notes

- The controlled harness is the primary workflow for known UI states.
- Manual live preparation is fallback only.
- Screenshots are runtime artifacts and should not be committed by default.
- This skill must not override project governance documents.
