#!/usr/bin/env python3
"""Copy selected LUMINA files into output folders.

Reads a mapped `final_selection.json` produced by `build_selection_json.py`.

Creates folders such as:

output/final_40_project-name
output/web_20_project-name
output/homepage_8_project-name
output/hero_5_project-name
"""

from __future__ import annotations

import argparse
import json
import shutil
import sys
from pathlib import Path
from typing import Any

LEVELS = ["final_40", "web_20", "homepage_8", "hero_5"]


def safe_name(value: str) -> str:
    cleaned = "".join(ch if ch.isalnum() or ch in "-_" else "-" for ch in value.strip())
    while "--" in cleaned:
        cleaned = cleaned.replace("--", "-")
    return cleaned.strip("-") or "lumina-event"


def iter_items(data: dict[str, Any], level: str) -> list[dict[str, Any]]:
    items = data.get(level, []) or []
    result: list[dict[str, Any]] = []
    for item in items:
        if isinstance(item, dict):
            result.append(item)
    return result


def copy_level(items: list[dict[str, Any]], dest_dir: Path, dry_run: bool = False) -> tuple[int, list[str]]:
    dest_dir.mkdir(parents=True, exist_ok=True)
    copied = 0
    problems: list[str] = []

    for index, item in enumerate(items, start=1):
        src_text = str(item.get("path") or "").strip()
        filename = str(item.get("filename") or "").strip()
        image_id = str(item.get("image_id") or "").strip()

        if not src_text:
            problems.append(f"{image_id or filename or index}: missing path")
            continue

        src = Path(src_text)
        if not src.exists():
            problems.append(f"{image_id or filename or index}: source not found: {src}")
            continue

        suffix_name = filename or src.name
        dest_name = f"{index:03d}_{image_id}_{suffix_name}" if image_id else f"{index:03d}_{suffix_name}"
        dest = dest_dir / dest_name

        if dry_run:
            print(f"DRY RUN: {src} -> {dest}")
        else:
            shutil.copy2(src, dest)
            print(f"COPIED: {src} -> {dest}")
        copied += 1

    return copied, problems


def run(selection_path: Path, out_dir: Path, project: str | None, dry_run: bool = False) -> int:
    with selection_path.open("r", encoding="utf-8") as f:
        data = json.load(f)

    project_name = safe_name(project or data.get("project") or "lumina-event")
    all_problems: list[str] = []
    total_copied = 0

    for level in LEVELS:
        items = iter_items(data, level)
        if not items:
            continue
        dest = out_dir / f"{level}_{project_name}"
        copied, problems = copy_level(items, dest, dry_run=dry_run)
        total_copied += copied
        all_problems.extend([f"{level}: {p}" for p in problems])

    print(f"Total copied: {total_copied}")
    if all_problems:
        print("Problems:")
        for problem in all_problems:
            print(f"- {problem}")
        return 2

    return 0


def main() -> int:
    parser = argparse.ArgumentParser(description="Copy selected files from final_selection.json")
    parser.add_argument("--selection", type=Path, required=True, help="Path to final_selection.json")
    parser.add_argument("--out-dir", type=Path, required=True, help="Output base directory")
    parser.add_argument("--project", type=str, default=None, help="Project/event slug for folder names")
    parser.add_argument("--dry-run", action="store_true", help="Preview copy operations without copying")
    args = parser.parse_args()

    try:
        return run(args.selection, args.out_dir, args.project, dry_run=args.dry_run)
    except Exception as exc:  # noqa: BLE001
        print(f"ERROR: {exc}")
        return 1


if __name__ == "__main__":
    sys.exit(main())
