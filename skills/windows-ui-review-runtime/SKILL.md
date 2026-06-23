---
name: windows-ui-review-runtime
description: (Template imported from STT) Captures and reviews Windows desktop UI states for STT Typing Helper. Under D:\lumina-studio, this serves as a template/reference only.
---

# Windows UI Review Runtime

## Role
You are a UI/UX Auditor specializing in Windows desktop applications. Your goal is to capture multiple representative states of the STT application and produce a detailed review report focusing on visual hierarchy, Thai/English clarity, and operational safety.

## READ-FIRST
Before starting a UI review, always read:
- `references\STT_UI_STATES.md` (The definitive list of states to capture)
- `templates\UI_REVIEW_REPORT.md` (The required reporting format)
- `templates\runtime_layout_report.md` (For STT runtime layout capture)

## When to Use
Use this skill when:
- A new UI feature is added.
- Visual regressions are suspected.
- Accessibility or readability audits are requested.
- A full UI/UX "health check" is required for the STT desktop application.
- **STT runtime layout capture is needed:** When you need a full-screen desktop evidence image showing how STT Typing Helper appears during real use (e.g., alongside a clean Notepad background, evaluating window placement, HUD clarity, and settings board layout).

## STT Runtime Layout Capture
This workflow is used to gather app-specific audit evidence for STT UI review/redesign.

**Primary Safe Workflow (Controlled Capture Harness):**
- The primary method to review UI states is programmatic instantiation via the test-style harness.
- Owner runs `scripts\capture_controlled_ui_states.py` interactively from foreground PowerShell.
- The harness systematically renders and captures the exact states (Idle, Settings, Commands, Help) without any mouse clicking or live UI navigation.
- The preferred output path is `.runtime-captures\windows-ui-review\<TASK-ID>\`.
- PNG screenshots are runtime artifacts and must not be committed by default.

**Fallback/Context Setup Workflow (Manual Live Preparation):**
- If a task needs a live UI state not covered by the controlled harness, the owner may manually prepare that state.
- Worker must not click, navigate, or change UI state interactively unless explicitly permitted by a separate approved task.

**OpenCode Background Execution Status:**
- **OpenCode CLI Worker** works safely in the owner's foreground PowerShell.
- **Anti Gravity background invocation** of `opencode run` is **blocked and not reliable** in this environment due to missing TTY/stdin, causing silent hangs. Do not rely on Anti Gravity background tasks for OpenCode runs.
- **Gemini CLI** may be used as a background watcher/reviewer.

**Expected Output:**
- A full-screen screenshot (`.png`) saved to the specified output path.
- A completed `runtime_layout_report.md` artifact detailing visibility, placement, and contrast.

### Layout Capture Execution

**1. Controlled Harness Method (Primary)**
1. Run the reusable harness from a foreground interactive PowerShell terminal.
2. Provide `--outdir`; this argument is required.
3. Add `--open-notepad` when a clean white canvas improves contrast and layout analysis.
4. Add `--notepad-wait-seconds N` only when Notepad needs a longer startup delay.
5. Review the generated PNG files as runtime artifacts.

**2. Manual Live Preparation Method (Fallback/Context Only)**
Use manual preparation only when a task explicitly needs a live state not covered by the controlled harness. The owner prepares the UI state; the worker does not perform exploratory clicking.

**3. Command Trigger Method (`--open-stt-ui-all`)**
*Status: BLOCKED / FALLBACK ONLY*
Live IPC/UI-action bridge preparation remains unavailable and must not be treated as the primary workflow.

## Commands
- `python.exe skills\windows-ui-review-runtime\scripts\capture_controlled_ui_states.py --open-notepad --outdir ".runtime-captures\windows-ui-review\<TASK-ID>"`: Captures all core STT UI states sequentially via a programmatic harness (requires interactive foreground terminal).

**Notepad Canvas Feature:**
* Passing `--open-notepad` will launch Notepad to act as a clean, high-contrast white background before capturing STT UI states. This significantly improves visual clarity for dashboard analysis.
* It is a clean background only and is not part of STT's runtime behavior.
* **Important:** Do not place private text or secrets in Notepad before capturing, as the entire screen will be recorded.

- `scripts\list_windows.py`: Lists all open window titles to identify the target window.
- `scripts\capture_window.py --title "<keyword>"`: Captures a screenshot of the window matching the keyword.
- `scripts\capture_runtime_layout.py --output "<path>" --title "<keyword>" [--open-notepad] [--launch-app-if-missing] [--prepare-ui-via-smoke] [--manual-prepare-seconds N]`: Captures a full-screen desktop evidence image (legacy/manual preparation).

## Review Workflow
1. **State Planning:** Consult `references\STT_UI_STATES.md` to identify all required UI states.
2. **Navigation:**
   - Use the controlled harness for known states.
   - Ask the user to prepare a live state manually only when the task explicitly requires a state outside the harness.
3. **Capture:**
    - Run `python.exe skills\windows-ui-review-runtime\scripts\capture_controlled_ui_states.py --open-notepad --outdir ".runtime-captures\windows-ui-review\<TASK-ID>"` for primary controlled capture.
   - Run `scripts\capture_window.py --title "STT"` (or relevant keyword) for specific windows.
   - *For layout audits:* Prefer the controlled harness. Use `scripts\capture_runtime_layout.py` only as a legacy/manual fallback.
4. **Repetition:** Repeat steps 2-3 for every state in the checklist.
5. **Analysis:** Review the captured images against the criteria in `references\STT_UI_STATES.md`.
6. **Reporting:** Populate `templates\UI_REVIEW_REPORT.md` or `templates\runtime_layout_report.md` with observations and evidence.

## Safety & Constraints
- **Strictly Manual State:** No automatic clicking of Settings, Commands, Help, Back, Close, Exit, or app controls.
- **Launch Constraints:** No launching STT app automatically unless explicitly scoped.
- **Capture Constraints:** No screenshot capture unless the user/owner prepares the state or the task explicitly permits it.
- **Observation Only:** Do not automatically click buttons, change settings, or close the app unless explicitly instructed.
- **No Runtime Edits:** Do not edit runtime behavior files or app logic during a UI review.
- **No Browser Tools:** This is a native Windows app. Do not attempt to use browser-based DOM inspection.
- **Privacy:** Do not commit screenshots containing private user data or system secrets.
- **Artifact Policy:** Do not commit screenshot PNGs by default. Store runtime capture output under `.runtime-captures\windows-ui-review\<TASK-ID>\` and reference paths from task reports.
- **No Clamping:** Multi-monitor support is required; do not clamp coordinates to 0.

## References
- [UI State Checklist](references/STT_UI_STATES.md)
- [Review Report Template](templates/UI_REVIEW_REPORT.md)
- [Runtime Layout Report](templates/runtime_layout_report.md)
