---
name: LUMINA_PHOTO_SELECTION
description: Use this skill when selecting, sequencing, and organizing real photography sets for LUMINA Studio website, portfolio, homepage, hero sequence, web gallery, or final delivery. Focus on story, emotion, timing, rhythm, filename accuracy, and image roles. Do not redesign the website.
---

# LUMINA Photo Selection Skill

## Purpose

Use this skill to select real photography images for LUMINA Studio.

The goal is not to pick isolated beautiful images. The goal is to build a coherent story set from one real event using the judgment of a photographer, photo editor, and visual storyteller.

Current website layout is a testing room, not the final design. Do not redesign the website during photo selection.

## READ-FIRST

Before selecting images, read or inspect:

1. User's goal for this selection.
2. Contact sheet, screenshots, or image previews.
3. `inventory.csv`, if available.
4. Source image folder, if available.
5. Category names such as Preparation, Procession, Ceremony, Portraits, Monk, Family, Detail, Venue.
6. Requested output levels such as `final_40`, `web_20`, `homepage_8`, or `hero_5`.
7. Current website constraints.

## Filename Authority

`inventory.csv` is the source of truth for real filenames and paths.

Do not guess filenames from contact sheet numbers alone.

If contact sheet numbers and actual filenames do not match, trust `inventory.csv`.

If mapping is uncertain, mark the item as `needs_filename_verification`.

## Core Selection Rules

1. Select for story, emotion, timing, rhythm, and usefulness.
2. Prefer images that make viewers stop and feel something.
3. Include context, people, detail, movement, ritual, emotion, transition, and closing when available.
4. Avoid repeated frames unless each frame adds a different story value.
5. Do not select images that are technically clean but emotionally empty.
6. Do not mix unrelated events into one story set.
7. Let the image be the main subject. Do not cover weak selection with effects or layout changes.

## Output Levels

Use the output levels defined in `references/OUTPUT_LEVELS.md`:

- `final_40`: broad set for archive, delivery, backup, and experiments.
- `web_20`: concise story set for website gallery or portfolio.
- `homepage_8`: strongest set for homepage and featured sections.
- `hero_5`: tightest hero sequence candidates.

## Website Constraint

Do not redesign the website.

Do not decide permanent hero, layout, motion, or structure.

Do not solve layout problems during photo selection. If a layout issue appears, record it in `website_notes_only`.

Focus only on:

- image selection
- story sequence
- website role assignment
- filename accuracy
- visual rhythm
- observed patterns

## Required Output

For every selection, provide:

1. Event visual summary.
2. Selected filenames from `inventory.csv`.
3. Selection levels requested by the user.
4. Story order.
5. Website role for key images.
6. Reason for each key image.
7. Duplicate or rejected patterns.
8. Filename verification notes.
9. Observed patterns for future LUMINA decisions.

## Preferred JSON Shape

```json
{
  "project": "event-name",
  "selection_goal": "",
  "source": {
    "inventory_csv": "",
    "contact_sheet": "",
    "image_folder": ""
  },
  "event_visual_summary": "",
  "final_40": [],
  "web_20": [],
  "homepage_8": [],
  "hero_5": [],
  "hero_recommendation": {},
  "hero_sequence": [],
  "duplicate_or_rejected_patterns": [],
  "filename_verification_notes": [],
  "observed_patterns": [],
  "website_notes_only": []
}
```

## Useful Resources

Read these only when needed:

- `references/OUTPUT_LEVELS.md`
- `references/LUMINA_VISUAL_LANGUAGE.md`
- `references/SELECTION_PRINCIPLES.md`
- `references/REJECT_CRITERIA.md`
- `references/STORY_PATTERNS.md`
- `references/WEBSITE_ROLES.md`

Use scripts when filenames or copying must be deterministic:

- `scripts/validate_inventory.py`
- `scripts/build_selection_json.py`
- `scripts/copy_selected_files.py`
- `scripts/check_duplicates.py`
