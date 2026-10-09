import sys
import ctypes
import pygetwindow as gw

def get_windows_ctypes():
    user32 = ctypes.windll.user32
    EnumWindows = user32.EnumWindows
    EnumWindowsProc = ctypes.WINFUNCTYPE(ctypes.c_bool, ctypes.POINTER(ctypes.c_int), ctypes.POINTER(ctypes.c_int))
    GetWindowText = user32.GetWindowTextW
    GetWindowTextLength = user32.GetWindowTextLengthW
    IsWindowVisible = user32.IsWindowVisible

    titles = []
    def foreach_window(hwnd, lParam):
        if IsWindowVisible(hwnd):
            length = GetWindowTextLength(hwnd)
            if length > 0:
                buff = ctypes.create_unicode_buffer(length + 1)
                GetWindowText(hwnd, buff, length + 1)
                titles.append(buff.value)
        return True

    EnumWindows(EnumWindowsProc(foreach_window), 0)
    return titles

def main() -> int:
    try:
        windows = gw.getAllWindows()
        titles = [w.title for w in windows if w.title and w.title.strip()]
    except Exception:
        titles = []

    if not titles:
        # Fallback
        titles = get_windows_ctypes()

    titles = [t for t in titles if t.strip()]

    if not titles:
        print("DIAGNOSTIC: No visible windows with titles could be found using pygetwindow or ctypes.")
        return 1

    print(f"{'Index':<6} | {'Title'}")
    print("-" * 50)
    for i, title in enumerate(titles):
        print(f"{i:<6} | {title}")

    return 0

if __name__ == "__main__":
    sys.exit(main())
