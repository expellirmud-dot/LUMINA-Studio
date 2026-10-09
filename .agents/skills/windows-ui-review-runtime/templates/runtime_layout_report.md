# STT Runtime Layout Report

## Overview
**Capture Date:** {{DATE}}
**Context:** STT UI review / audit
**STT Windows Found:** {{WINDOW_COUNT}}
- HUD: {{HUD_VISIBLE}}
- Toolbar: {{TOOLBAR_VISIBLE}}
- Dashboard: {{DASHBOARD_VISIBLE}} view={{DASHBOARD_VIEW}}
- Command Help Center: {{HELP_CENTER_VISIBLE}}

## Evidence
- **Screenshot:** `{{SCREENSHOT_PATH}}`

## Visible STT Windows
{{VISIBLE_WINDOWS_LIST}}

## UI State Preparation
- **UI prep method:** STT_COMMAND_TRIGGER / MANUAL / FAILED
- **triggers sent:**
- **external app commands used:** no
- **smoke script used:** no
- **mouse coordinate clicking used:** no
- **STT controls visible:** PASS / FAIL
- **Settings or Voice Commands board visible:** PASS / FAIL
- **Command Help Center visible:** PASS / FAIL
- **Fullscreen capture saved:** PASS / FAIL

## Desktop Context
- **Notepad background:** {{NOTEPAD_VISIBLE}}
- **Monitor count:** {{MONITOR_COUNT}}
- **Capture method:** full-screen ImageGrab

## STT UI Components (from tk_app.py)

| Component | Size | Default Position | Description |
|---|---|---|---|
| HUD | 390x158 | bottom-right, 18px from right, 66px from bottom | Main listening dashboard |
| Toolbar | 720x122 | top-center, y=24 | STT controls: Settings / Commands / Help Center buttons |
| Dashboard | 540x430 | left of HUD | Shared window for Voice Commands or Settings view |
| Command Help Center | 860x680 | centered | Uses Tkinter Canvas + Scrollbar for scrollable content |

## STT Window Opening Commands
- **HUD:** Root window (always present when app runs)
- **Toolbar:** `show_toolbar()` โ€” opens STT controls panel
- **Dashboard (Commands):** `show_dashboard('commands')` โ€” opens Voice Commands board
- **Dashboard (Settings):** `show_dashboard('settings')` โ€” opens Settings board
- **Dashboard (Exit):** `show_dashboard('exit')` โ€” opens exit confirmation
- **Note:** Voice Commands and Settings are the same dashboard window with different rendered views
- **Command Help Center:** `show_command_help()` โ€” opens scrollable help reference

## Audit Notes

### Visibility
- **HUD placement and overlap with other windows:**
- **Toolbar position relative to HUD:**
- **Dashboard alignment and screen fitting:**

### Placement
- **HUD bottom-right offset:**
- **Toolbar centered at top:**
- **Dashboard left of HUD (540x430):**
- **Command Help Center centered (860x680):**

### Contrast / Clarity
- **Dark theme (BG #15191d) vs Notepad white background:**
- **Thai text rendering in HUD labels:**
- **Command Help Center text readability (wraplength=580):**

### Observations
- **Command Help Center uses Tkinter Canvas + Scrollbar** โ€” coordinate-based scroll capture is not the primary workflow for this window. The scrollbar works via yview, not pixel-based scrolling.
- **Dashboard uses the same window object** for commands, settings, and exit views via `_render_dashboard(view)` โ€” only one dashboard view can be visible at a time.
- **Multi-monitor behavior:** windows may span or appear on secondary monitors.
