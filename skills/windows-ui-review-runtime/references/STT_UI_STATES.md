# STT UI States

## Purpose

This file tells agents/workers which STT desktop UI states should be captured before producing a UI/UX review.

The STT app is a Windows desktop app, not a browser page. Do not use browser-only tooling for this review.

## Known STT windows / panels

Known visible UI areas may include:

- `STT controls`
- `STT dashboard`
- `Command Help Center`
- `STT Typing Helper` floating panel
- Settings panel
- Commands panel
- Help Center panel
- Confirmation dialogs, if present

## Required review states

For a full UI review, do not rely on a single screenshot.

Collect screenshots for these states when possible:

1. Main controls / listening dashboard
2. Settings screen
3. Commands screen
4. Help Center / Command Help Center
5. Floating mini status panel
6. Listening state
7. Command mode state
8. Typing mode state
9. Confirmation dialogs, if visible
10. Error, empty, or disabled states, if visible

## Review rule

Do not assume the currently visible window is enough.

If the user asks for a full UI review and the worker cannot safely navigate between states, ask the user to open each state manually before capture.

## Safe workflow

Preferred workflow:

1. Ask the user which UI state to review, or use the full checklist above.
2. Ask the user to open the target STT state manually.
3. Run `list_windows.py`.
4. Run `capture_window.py --title "<window title keyword>"`.
5. Review the captured screenshot.
6. Repeat for each UI state.
7. Produce a structured UI review report.

## Controlled navigation

Do not click Settings, Commands, Help, Back, Close, Exit, or other UI controls automatically unless the task explicitly scopes controlled navigation.

Observation-only review is preferred.

## Review focus

For each screenshot, evaluate:

- Is the current mode/status clear?
- Are buttons and labels understandable?
- Are Thai and English labels consistent?
- Is spacing readable?
- Are controls grouped logically?
- Are dangerous controls visually separated?
- Are help/command instructions easy to find?
- Is the dashboard too crowded?
- Is the floating panel informative enough?
- Is the user likely to understand what to do next?

## Output expectation

A full review should identify which states were captured and which states were not captured.

If a state is missing, say so instead of guessing.