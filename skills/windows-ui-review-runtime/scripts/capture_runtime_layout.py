import argparse
import sys
import ctypes
import time
import os
import subprocess
from pathlib import Path

import pygetwindow as gw
from PIL import ImageGrab

def get_windows_ctypes(title_keyword: str):
    keyword = title_keyword.lower().strip()
    user32 = ctypes.windll.user32
    EnumWindows = user32.EnumWindows
    EnumWindowsProc = ctypes.WINFUNCTYPE(ctypes.c_bool, ctypes.POINTER(ctypes.c_int), ctypes.POINTER(ctypes.c_int))
    GetWindowText = user32.GetWindowTextW
    GetWindowTextLength = user32.GetWindowTextLengthW
    IsWindowVisible = user32.IsWindowVisible

    matches = []
    def foreach_window(hwnd, lParam):
        if IsWindowVisible(hwnd):
            length = GetWindowTextLength(hwnd)
            if length > 0:
                buff = ctypes.create_unicode_buffer(length + 1)
                GetWindowText(hwnd, buff, length + 1)
                title = buff.value
                if keyword in title.lower():
                    matches.append(title)
        return True

    EnumWindows(EnumWindowsProc(foreach_window), 0)
    return matches

def get_visible_windows(title_keyword: str):
    try:
        windows = gw.getAllWindows()
        matches = [w.title for w in windows if w.title and title_keyword.lower() in w.title.lower()]
        if matches:
            return matches
    except Exception:
        pass
    return get_windows_ctypes(title_keyword)


def check_capture_environment() -> bool:
    try:
        _probe = ImageGrab.grab(bbox=(0, 0, 2, 2))
        return True
    except Exception:
        return False


def main() -> int:
    parser = argparse.ArgumentParser(description="Capture STT runtime layout fullscreen.")
    parser.add_argument("--output", required=True, help="Path to output image")
    parser.add_argument("--open-notepad", action="store_true", help="Open Notepad as clean background")
    parser.add_argument("--launch-app-if-missing", action="store_true", help="Launch STT app if not visible")
    parser.add_argument("--title", required=True, help="Title keyword to match STT app")
    parser.add_argument("--open-stt-ui-all", action="store_true", help="Automate opening of all STT UI surfaces before capture")
    parser.add_argument("--dashboard-view", choices=["commands","settings"], default="commands", help="Dashboard view to open (commands or settings)")
    parser.add_argument("--ui-open-delay", type=float, default=0.5, help="Delay in seconds after each UI action")
    parser.add_argument("--click-safety-margin", type=int, default=8, help="Safety margin in pixels for mouse clicks inside window bounds")
    parser.add_argument("--manual-prepare-seconds", type=int, default=0, help="Seconds to wait for manual UI state preparation before capture (fallback if smoke prep is unavailable)")
    parser.add_argument("--prepare-ui-via-smoke", action="store_true", help="Prepare UI state using the project's smoke/dry-run command method")
    parser.add_argument("--smoke-script", default=".\\tools\\smoke_test_commands.py", help="Path to the smoke test script (default: .\\tools\\smoke_test_commands.py)")
    args = parser.parse_args()

    if not check_capture_environment():
        print("OWNER_INTERACTIVE_VALIDATION_REQUIRED: Full-screen ImageGrab is not available in this environment.", file=sys.stderr)
        print("OWNER_INTERACTIVE_VALIDATION_REQUIRED: Run this script from an interactive desktop PowerShell session.", file=sys.stderr)
        return 0

    out_path = Path(args.output).resolve()
    if out_path.is_dir():
        print(f"ERROR: Output path '{out_path}' is a directory.", file=sys.stderr)
        return 1

    try:
        out_path.parent.mkdir(parents=True, exist_ok=True)
    except Exception as e:
        print(f"ERROR: Could not create output directory '{out_path.parent}': {e}", file=sys.stderr)
        return 1

    if args.open_notepad:
        print("Opening Notepad as clean background...")
        subprocess.Popen(["notepad.exe"])
        time.sleep(1.0)
        try:
            for w in gw.getAllWindows():
                if "Notepad" in w.title:
                    if not w.isMaximized:
                        w.maximize()
                    break
        except Exception:
            pass

    visible = get_visible_windows(args.title)
    if not visible and args.launch_app_if_missing:
        print(f"App with title '{args.title}' not found. Launching STT...")
        app_script = Path(os.getcwd()) / "STT_auto_paste.py"
        if not app_script.exists():
            print(f"WARNING: Could not find {app_script} to launch.")
        else:
            subprocess.Popen([sys.executable, str(app_script)], cwd=os.getcwd())
            print("Waiting for STT app to start...")
            time.sleep(5.0)
            visible = get_visible_windows(args.title)

    print("Visible STT Windows:")
    if visible:
        for v in visible:
            print(f" - {v}")
    else:
        print(" - None")

    # Automated UI navigation if requested
    if args.open_stt_ui_all:
        print("OPEN_STT_UI_ALL")
        print("OPEN_STT_UI_ALL_FAILED")
        print("Reason: No safe live STT command/action bridge available from skill script.")

        if args.manual_prepare_seconds > 0:
            print(f"Falling back to manual preparation (--manual-prepare-seconds={args.manual_prepare_seconds}).")
        else:
            sys.exit(1)
    # If not requested, no automated UI actions are performed.

    if args.prepare_ui_via_smoke:
        smoke_path = Path(args.smoke_script)
        if not smoke_path.exists():
            print(f"WARNING: Smoke script not found at '{smoke_path}'.", file=sys.stderr)
        else:
            print("SMOKE_UI_PREP_NOT_AVAILABLE")
            print("The project's smoke test script (tools\\smoke_test_commands.py) creates its own isolated")
            print("AdjustableSTTApp instance and mocks all keyboard/window side effects.")
            print("It cannot prepare a running live STT app's UI because:")
            print("  - It has no IPC bridge to a running app instance.")
            print("  - It mocks clipboard, keyboard, and window manager calls.")
            print("  - It creates a separate tk.Tk() root that does not share ui_queue with a running app.")
            print()
            print("Falling back to manual preparation if --manual-prepare-seconds is also provided.")
            print("To prepare live STT UI in the future, the app would need an IPC mechanism")
            print("(e.g., a named pipe or socket listener) to accept external ui_action commands.")

    if args.manual_prepare_seconds > 0:
        print("MANUAL_UI_PREP_REQUIRED")
        print("Before capture, prepare the STT UI:")
        print()
        print("1. Open STT controls.")
        print("2. Open Settings or Voice Commands dashboard.")
        print("3. Open Command Help Center.")
        print("4. Arrange windows for audit/redesign evidence.")
        print()
        print(f"  Capture will continue after {args.manual_prepare_seconds} seconds.")
        for remaining in range(args.manual_prepare_seconds, 0, -1):
            print(f"  Continuing in {remaining}...")
            time.sleep(1)

    print(f"Capturing full screen to {out_path}...")
    try:
        screenshot = ImageGrab.grab(all_screens=True)
        screenshot.save(out_path)
    except Exception as e:
        print(f"ERROR: Failed to capture full screen: {e}", file=sys.stderr)
        return 1

    print("STT runtime layout capture complete.")
    return 0

if __name__ == "__main__":
    sys.exit(main())
