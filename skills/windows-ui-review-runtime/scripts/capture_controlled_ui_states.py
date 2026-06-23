import sys
import os
import time
import argparse
import tkinter as tk
import queue
from PIL import ImageGrab

# Add the project root to sys.path so we can import app modules
# Script location: .ai/skills/windows-ui-review-runtime/scripts/
project_root = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..', '..', '..'))
sys.path.insert(0, project_root)

from app.ui.tk_app import STTWindow

def capture_fullscreen(root, output_path):
    root.update()
    # give it a moment to render and display any Toplevel windows (dashboard, toolbar, help)
    time.sleep(0.5)
    root.update()

    # Capture the entire screen to capture all floating windows and layout context
    img = ImageGrab.grab(all_screens=True)
    img.save(output_path)
    print(f"Captured full screen: {output_path}")

def main():
    parser = argparse.ArgumentParser(description="Controlled UI state capture harness for STT.")
    parser.add_argument("--outdir", required=True, help="Directory to save evidence images")
    parser.add_argument("--open-notepad", action="store_true", help="Launch Notepad to serve as a clean full-screen background")
    parser.add_argument("--notepad-wait-seconds", type=float, default=1.0, help="Seconds to wait after launching Notepad")
    args = parser.parse_args()

    evidence_dir = os.path.abspath(args.outdir)
    os.makedirs(evidence_dir, exist_ok=True)

    if args.open_notepad:
        print("Launching Notepad as a clean background canvas...")
        import subprocess
        subprocess.Popen(["notepad.exe"])
        time.sleep(args.notepad_wait_seconds)

        try:
            import pygetwindow as gw
            notepad_windows = gw.getWindowsWithTitle("Notepad")
            if notepad_windows:
                # Maximize the most recent/first found Notepad window
                notepad_windows[0].maximize()
                print("Notepad maximized.")
            else:
                print("Warning: Notepad window not found by pygetwindow.")
        except ImportError:
            print("Warning: pygetwindow not installed. Cannot maximize Notepad automatically.")
        except Exception as e:
            print(f"Warning: Could not maximize Notepad: {e}")

        time.sleep(0.5)

    print("Initializing controlled UI harness for full-screen capture...")
    root = tk.Tk()
    # Dummy queue and callback
    q = queue.Queue()
    app_window = STTWindow(root, q, lambda: None)

    # State 1: HUD Main Idle
    capture_fullscreen(root, os.path.join(evidence_dir, 'evidence_1_hud.png'))

    # State 2: Settings Dashboard
    print("Triggering Settings Dashboard...")
    app_window.show_toolbar()
    app_window.show_dashboard(view='settings')
    capture_fullscreen(root, os.path.join(evidence_dir, 'evidence_2_settings.png'))

    # State 3: Commands Dashboard
    print("Triggering Commands Dashboard...")
    app_window.show_dashboard(view='commands')
    capture_fullscreen(root, os.path.join(evidence_dir, 'evidence_3_commands.png'))

    # State 4: Command Help Center
    print("Triggering Command Help Center...")
    app_window.show_command_help()
    capture_fullscreen(root, os.path.join(evidence_dir, 'evidence_4_help.png'))

    print("All states captured. Closing harness.")
    root.destroy()

if __name__ == "__main__":
    main()
