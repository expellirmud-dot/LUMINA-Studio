# Source Skills Inspection Report (TASK-016)

## 1. Skill: `computer-use-runtime-bridge`

- **Folder Exists**: Yes (`D:\stt_typing\.ai\skills\computer-use-runtime-bridge`)
- **`SKILL.md` Exists**: Yes
- **Files/Subfolders Present**:
  - `INSTALL_NOTE.ps1`
  - `SKILL.md`
  - `references/`
    - `COMMANDS_WINDOWS.md`
    - `ERROR_DIAGNOSTICS.md`
    - `GIT_HYGIENE.md`
    - `INTEGRATION_PATTERNS.md`
    - `MODEL_MATRIX.md`
    - `RUNTIME_OVERVIEW.md`
    - `SAFETY_RULES.md`
  - `scripts/`
    - `smoke_test_computer_use.ps1`
  - `templates/`
    - `STATUS_REPORT.md`
    - `WORKER_HANDOFF.md`
- **Project-Generic or STT-Specific**: Mostly project-generic wrapper guide for `D:\ai-tools\computer-use-preview`, but contains some STT-specific context blocks.
- **References `D:\stt_typing`**: Yes, in `SKILL.md` (`Active project: D:\stt_typing`, etc.) and `INSTALL_NOTE.ps1`.
- **References STT-only Files**: No (it references `D:\ai-tools\computer-use-preview` which is external).
- **Safe to Import Unchanged**: Yes, but the active context block and instructions in `SKILL.md` point to `D:\stt_typing` and would be misleading if not adapted.
- **Wording to Adapt**:
  - Update `Active project` and `Active Serena CodeGraph` in `SKILL.md` to `D:\lumina-studio`.
  - Update paths in `INSTALL_NOTE.ps1` or other instructions referring to `D:\stt_typing\.ai\skills\` to `D:\lumina-studio\skills\`.

---

## 2. Skill: `windows-ui-review-runtime`

- **Folder Exists**: Yes (`D:\stt_typing\.ai\skills\windows-ui-review-runtime`)
- **`SKILL.md` Exists**: Yes
- **Files/Subfolders Present**:
  - `CHANGELOG.md`
  - `README.md`
  - `SKILL.md`
  - `prompts/`
    - `worker_prompt_ui_review.md`
  - `references/`
    - `SAFE_WORKFLOW_AND_BOUNDARIES.md`
    - `STT_UI_STATES.md`
  - `scripts/`
    - `capture_controlled_ui_states.py`
    - `capture_runtime_layout.py`
    - `capture_window.py`
    - `list_windows.py`
  - `templates/`
    - `runtime_layout_report.md`
    - `UI_REVIEW_REPORT.md`
- **Project-Generic or STT-Specific**: Highly STT-specific. The scripts, states checklist, and reports are designed for the STT desktop application (a Tkinter-based Windows desktop GUI). They import python modules (`from app.ui.tk_app import STTWindow`) from STT which do not exist in LUMINA.
- **References `D:\stt_typing`**: Yes, in `SKILL.md` and scripts/paths.
- **References STT-only Files**: Yes, it imports `app.ui.tk_app` and expects local STT files.
- **Safe to Import Unchanged**: It can be copied without breaking compilation (as skills are just documentation/script bundles), but the Python scripts will not run in LUMINA and the visual states checklist is completely irrelevant for a Next.js website.
- **Wording to Adapt**:
  - To be useful for LUMINA, it would need to be re-authored to focus on web browser UI review (Playwright/Puppeteer screenshots of Vercel/localhost) instead of Tkinter desktop app screenshots.
  - However, if the owner wants a direct import first as a reference/template, we can import it but we must note that scripts are non-functional in LUMINA.
