#!/usr/bin/env python3
"""Validate a LUMINA inventory.csv file.

Required columns:
- image_id
- filename
- path

Recommended columns:
- width
- height
- category
"""

from __future__ import annotations

import argparse
import csv
import sys
from pathlib import Path

REQUIRED_COLUMNS = {"image_id", "filename", "path"}
RECOMMENDED_COLUMNS = {"width", "height", "category"}


def read_rows(csv_path: Path) -> tuple[list[dict[str, str]], list[str]]:
    if not csv_path.exists():
        raise FileNotFoundError(f"Inventory file not found: {csv_path}")

    with csv_path.open("r", encoding="utf-8-sig", newline="") as f:
        reader = csv.DictReader(f)
        fieldnames = reader.fieldnames or []
        rows = list(reader)
    return rows, fieldnames


def validate_inventory(csv_path: Path) -> int:
    rows, fieldnames = read_rows(csv_path)
    columns = set(fieldnames)

    print(f"inventory: {csv_path}")
    print(f"rows: {len(rows)}")
    print(f"columns: {', '.join(fieldnames)}")

    missing_required = sorted(REQUIRED_COLUMNS - columns)
    if missing_required:
        print(f"ERROR: missing required columns: {', '.join(missing_required)}")
        return 2

    missing_recommended = sorted(RECOMMENDED_COLUMNS - columns)
    if missing_recommended:
        print(f"WARNING: missing recommended columns: {', '.join(missing_recommended)}")

    image_ids: dict[str, int] = {}
    duplicate_ids: set[str] = set()
    blank_errors: list[str] = []

    for index, row in enumerate(rows, start=2):
        image_id = (row.get("image_id") or "").strip()
        filename = (row.get("filename") or "").strip()
        path = (row.get("path") or "").strip()

        if not image_id:
            blank_errors.append(f"line {index}: blank image_id")
        if not filename:
            blank_errors.append(f"line {index}: blank filename")
        if not path:
            blank_errors.append(f"line {index}: blank path")

        if image_id:
            if image_id in image_ids:
                duplicate_ids.add(image_id)
            image_ids[image_id] = index

    if duplicate_ids:
        print(f"ERROR: duplicate image_id values: {', '.join(sorted(duplicate_ids))}")

    if blank_errors:
        print("ERROR: blank required values:")
        for item in blank_errors[:50]:
            print(f"- {item}")
        if len(blank_errors) > 50:
            print(f"- ... {len(blank_errors) - 50} more")

    if duplicate_ids or blank_errors:
        return 3

    print("OK: inventory is valid for LUMINA_PHOTO_SELECTION")
    return 0


def main() -> int:
    parser = argparse.ArgumentParser(description="Validate LUMINA inventory.csv")
    parser.add_argument("inventory", type=Path, help="Path to inventory.csv")
    args = parser.parse_args()

    try:
        return validate_inventory(args.inventory)
    except Exception as exc:  # noqa: BLE001
        print(f"ERROR: {exc}")
        return 1


if __name__ == "__main__":
    sys.exit(main())
