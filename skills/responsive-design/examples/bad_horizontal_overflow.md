# Bad Horizontal Overflow Layout

Avoid a layout that:

- keeps wide command blocks inside a flex row with no `min-width: 0`
- forces long paths and prompts to expand the page width
- creates nested scroll regions that fight each other
- hides primary actions below an oversized wide panel
- makes the page require side scrolling on desktop or mobile
