# Prompt: Select Images From Contact Sheet

Use `LUMINA_PHOTO_SELECTION`.

Goal: select this event into `final_40`, `web_20`, `homepage_8`, and `hero_5`.

Inputs:

- contact sheet screenshots are attached
- `inventory.csv` is attached
- source image folder is provided if needed

Rules:

1. Read `inventory.csv` before finalizing filenames.
2. Use `inventory.csv` as the source of truth for `image_id`, `filename`, and `path`.
3. Do not guess filenames from contact sheet numbers.
4. Do not redesign the website.
5. Treat the current website layout as a testing room only.
6. Select as a photographer/editor: story, emotion, timing, rhythm, and website role.
7. Output JSON and a short human-readable summary.
8. Include observed patterns for future LUMINA website decisions.
