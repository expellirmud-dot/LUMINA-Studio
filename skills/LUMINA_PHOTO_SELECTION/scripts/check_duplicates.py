#!/usr/bin/env python3
"""Lightweight near-duplicate helper for LUMINA selections.

This script does not judge image quality. It only groups nearby numeric filenames or image_ids
so the editor can notice possible bursts / repeated moments.
"""

from __future__ import annotations

import argparse
import csv
import re
import sys
from pathlib import Path

NUM_RE = re.compile(r"(\d+)")


def extract_number(value: str) -> int | None:
    matches = NUM_RE.findall(value or "")
    if not matches:
        return None
    return int(matches[-1])


def load_numbers(inventory: Path) -> list[tuple[int, str, str]]:
    with inventory.open("r", encoding="utf-8-sig", newline="") as f:
        reader = csv.DictReader(f)
        rows = list(reader)

    result: list[tuple[int, str, str]] = []
    for row in rows:
        image_id = row.get("image_id", "")
        filename = row.get("filename", "")
        n = extract_number(filename) or extract_number(image_id)
        if n is not None:
            result.append((n, image_id, filename))
    return sorted(result)


def group_nearby(items: list[tuple[int, str, str]], gap: int) -> list[list[tuple[int, str, str]]]:
    groups: list[list[tuple[int, str, str]]] = []
    current: list[tuple[int, str, str]] = []
    last: int | None = None

    for item in items:
        n = item[0]
        if last is None or n - last <= gap:
            current.append(item)
        else:
            if len(current) > 1:
                groups.append(current)
            current = [item]
        last = n

    if len(current) > 1:
        groups.append(current)
    return groups


def main() -> int:
    parser = argparse.ArgumentParser(description="Group possible near-duplicate frames from inventory.csv")
    parser.add_argument("inventory", type=Path, help="Path to inventory.csv")
    parser.add_argument("--gap", type=int, default=2, help="Numeric gap treated as nearby; default 2")
    args = parser.parse_args()

    try:
        items = load_numbers(args.inventory)
        groups = group_nearby(items, args.gap)
    except Exception as exc:  # noqa: BLE001
        print(f"ERROR: {exc}")
        return 1

    if not groups:
        print("No nearby numeric groups found.")
        return 0

    print("Possible nearby / burst groups:")
    for i, group in enumerate(groups, start=1):
        names = ", ".join(f"{image_id}:{filename}" for _, image_id, filename in group)
        print(f"Group {i}: {names}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
