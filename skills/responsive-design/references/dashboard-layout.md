# Dashboard Layout and Overflow Rules

Use these topics when building a dense control dashboard.

## 1. Mobile-First Shell

- Start with a single-column layout.
- Expand to multiple columns only when the content still reads cleanly.
- Keep the main task area visible without horizontal scrolling.

## 2. Panel Stacking

- Stack related panels before trying complex side-by-side layouts.
- Let the command panel and evidence panel collapse naturally on smaller screens.
- Preserve reading order when columns collapse.

## 3. Overflow Containment

- Give long paths, prompts, and command previews a safe wrapping strategy.
- Use `min-width: 0` on flex and grid children that contain long content.
- Contain horizontal overflow at the content boundary, not the page root.

## 4. Command Text Wrapping

- Prefer pre-wrap for generated commands and logs.
- Avoid forced nowrap unless the command must remain copyable on one line.
- Keep long inline code from pushing panels wider than the viewport.

## 5. Sticky and Scroll Regions

- Keep primary navigation and task summary visible when useful.
- Make only the content region scroll when possible.
- Avoid nested scroll regions unless they solve a real density problem.

## 6. Data-to-Card Fallbacks

- Convert wide tables into card stacks on narrow screens.
- Keep labels and values aligned in small layouts.
- Preserve the most important fields first.

## 7. Touch and Interaction

- Keep controls large enough for pointer and touch use.
- Avoid tightly packed actions that are hard to tap.
- Keep focus order consistent with visual order.
