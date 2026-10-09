#!/usr/bin/env python3
"""Map AI-selected image IDs back to real filenames and paths.

Input selection JSON may be either:

{
  "project": "event-name",
  "final_40": ["000318", "000319"],
  "web_20": ["000318"],
  "homepage_8": ["000319"],
  "hero_5": ["000318"]
}

or arrays of objects containing image_id:

{
  "final_40": [{"image_id": "000318", "role": ["Hero"], "reason": "..."}]
}
"""

from __future__ import annotations

import argparse
import csv
import json
import sys
from pathlib import Path
from typing import Any

LEVELS = ["final_40", "web_20", "homepage_8", "hero_5"]


def load_inventory(path: Path) -> dict[str, dict[str, str]]:
    with path.open("r", encoding="utf-8-sig", newline="") as f:
        reader = csv.DictReader(f)
        rows = list(reader)
    result: dict[str, dict[str, str]] = {}
    for row in rows:
        image_id = (row.get("image_id") or "").strip()
        if image_id:
            result[image_id] = {k: (v or "") for k, v in row.items()}
    return result


def normalize_item(item: Any) -> dict[str, Any]:
    if isinstance(item, str):
        return {"image_id": item}
    if isinstance(item, dict):
        return dict(item)
    raise TypeError(f"Unsupported selection item: {item!r}")


def enrich_item(item: Any, inventory: dict[str, dict[str, str]]) -> dict[str, Any]:
    obj = normalize_item(item)
    image_id = str(obj.get("image_id", "")).strip()
    if not image_id:
        obj["needs_filename_verification"] = True
        obj["verification_note"] = "Missing image_id."
        return obj

    inv = inventory.get(image_id)
    if not inv:
        obj["needs_filename_verification"] = True
        obj["verification_note"] = f"image_id not found in inventory.csv: {image_id}"
        return obj

    merged = dict(obj)
    for key in ["filename", "path", "width", "height", "category"]:
        if key in inv and not merged.get(key):
            merged[key] = inv[key]
    merged["needs_filename_verification"] = False
    return merged


def build(inventory_path: Path, selection_path: Path, out_path: Path) -> int:
    inventory = load_inventory(inventory_path)
    with selection_path.open("r", encoding="utf-8") as f:
        selection = json.load(f)

    output = dict(selection)
    verification_notes: list[str] = list(output.get("filename_verification_notes") or [])

    for level in LEVELS:
        items = output.get(level, []) or []
        enriched = [enrich_item(item, inventory) for item in items]
        output[level] = enriched
        for item in enriched:
            if item.get("needs_filename_verification"):
                verification_notes.append(item.get("verification_note", "unknown filename verification issue"))

    output["filename_verification_notes"] = verification_notes

    out_path.parent.mkdir(parents=True, exist_ok=True)
    with out_path.open("w", encoding="utf-8") as f:
        json.dump(output, f, ensure_ascii=False, indent=2)

    print(f"Wrote: {out_path}")
    return 0


def main() -> int:
    parser = argparse.ArgumentParser(description="Build final_selection.json from selected IDs and inventory.csv")
    parser.add_argument("--inventory", type=Path, required=True, help="Path to inventory.csv")
    parser.add_argument("--selection", type=Path, required=True, help="Path to selection_ids.json")
    parser.add_argument("--out", type=Path, required=True, help="Output JSON path")
    args = parser.parse_args()

    try:
        return build(args.inventory, args.selection, args.out)
    except Exception as exc:  # noqa: BLE001
        print(f"ERROR: {exc}")
        return 1


if __name__ == "__main__":
    sys.exit(main())
