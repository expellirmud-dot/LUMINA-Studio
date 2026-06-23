import argparse
import sys
import ctypes
from pathlib import Path

import pygetwindow as gw
from PIL import ImageGrab


def get_window_rect_ctypes(title_keyword: str):
    keyword = title_keyword.lower().strip()
    user32 = ctypes.windll.user32
    EnumWindows = user32.EnumWindows
    EnumWindowsProc = ctypes.WINFUNCTYPE(ctypes.c_bool, ctypes.POINTER(ctypes.c_int), ctypes.POINTER(ctypes.c_int))
    GetWindowText = user32.GetWindowTextW
    GetWindowTextLength = user32.GetWindowTextLengthW
    IsWindowVisible = user32.IsWindowVisible
    GetWindowRect = user32.GetWindowRect

    class RECT(ctypes.Structure):
        _fields_ = [("left", ctypes.c_long), ("top", ctypes.c_long), ("right", ctypes.c_long), ("bottom", ctypes.c_long)]

    matches = []
    def foreach_window(hwnd, lParam):
        if IsWindowVisible(hwnd):
            length = GetWindowTextLength(hwnd)
            if length > 0:
                buff = ctypes.create_unicode_buffer(length + 1)
                GetWindowText(hwnd, buff, length + 1)
                title = buff.value
                if keyword in title.lower():
                    rect = RECT()
                    if GetWindowRect(hwnd, ctypes.byref(rect)):
                        # heuristic: avoid tiny invisible windows
                        if rect.right > rect.left and rect.bottom > rect.top:
                            matches.append((title, rect.left, rect.top, rect.right, rect.bottom))
        return True

    EnumWindows(EnumWindowsProc(foreach_window), 0)

    if not matches:
        return None

    # Return the first match (or biggest)
    matches.sort(key=lambda x: -((x[3] - x[1]) * (x[4] - x[2])))
    return matches[0]


def find_window(title_keyword: str):
    keyword = title_keyword.lower().strip()
    matches = []

    try:
        for window in gw.getAllWindows():
            title = (window.title or "").strip()
            if not title:
                continue

            if keyword in title.lower():
                matches.append(window)
    except Exception:
        pass

    if matches:
        matches.sort(key=lambda w: (w.isMinimized, -(w.width * w.height)))
        w = matches[0]
        # We need left, top, right, bottom
        left = int(w.left)
        top = int(w.top)
        right = int(w.left + w.width)
        bottom = int(w.top + w.height)

        # Restore if minimized
        if w.isMinimized:
            w.restore()
        try:
            w.activate()
        except Exception:
            pass

        return (w.title, left, top, right, bottom)

    # Fallback
    return get_window_rect_ctypes(title_keyword)


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Capture a screenshot of a Windows desktop application window."
    )
    parser.add_argument(
        "--title",
        required=True,
        help="Part of the target window title, for example STT.",
    )
    parser.add_argument(
        "--output",
        required=True,
        help="Path to the output image file (.png).",
    )
    args = parser.parse_args()

    out_path = Path(args.output).resolve()

    # Validation: output path must not be a directory
    if out_path.is_dir():
        print(f"ERROR: Output path '{out_path}' is an existing directory. Please provide a file path.", file=sys.stderr)
        return 1

    window_info = find_window(args.title)
    if window_info is None:
        print(f"ERROR: No window found containing title: {args.title}", file=sys.stderr)
        return 1

    title, left, top, right, bottom = window_info

    if right <= left or bottom <= top:
        print("ERROR: Invalid window bounds calculated.", file=sys.stderr)
        return 1

    # Ensure parent directory exists
    try:
        out_path.parent.mkdir(parents=True, exist_ok=True)
    except Exception as e:
        print(f"ERROR: Could not create output directory '{out_path.parent}': {e}", file=sys.stderr)
        return 1

    try:
        screenshot = ImageGrab.grab(bbox=(left, top, right, bottom), all_screens=True)
        screenshot.save(out_path)
    except Exception as e:
        print(f"ERROR: Failed to save screenshot: {e}", file=sys.stderr)
        return 1

    print("Window capture complete.")
    print(f"Title: {title}")
    print(f"Screenshot: {out_path}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
