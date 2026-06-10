from pathlib import Path
from PIL import Image, ImageOps, ImageDraw, ImageFont
import csv
import shutil
import math

# =====================
# CONFIG
# =====================
ROOT_DIR = Path(r"D:\lumina-studio\public\images\portfolio") # TEST FOLDER
OUT_DIR = Path(r"D:\lumina-studio\public\images\portfolio\sheet")

THUMB_SIZE = 384
SHEET_COLS = 8
SHEET_ROWS = 5
IMAGES_PER_SHEET = SHEET_COLS * SHEET_ROWS

MIN_LONG_EDGE = 1200
MAX_SCAN = 1600# ทดสอบก่อน 1000 รูป ถ้าผ่านค่อยเพิ่มเป็น None

IMAGE_EXTS = {".jpg", ".jpeg", ".png", ".webp", ".tif", ".tiff"}
PRIORITY_NAMES = {"resize", "resized", "export", "exports", "select", "selected", "web", "portfolio"}

OUT_DIR.mkdir(parents=True, exist_ok=True)
(OUT_DIR / "contact_sheets").mkdir(exist_ok=True)

inventory_path = OUT_DIR / "inventory.csv"


def is_image(path: Path) -> bool:
    return path.suffix.lower() in IMAGE_EXTS


def load_image(path: Path):
    try:
        img = Image.open(path)
        img = ImageOps.exif_transpose(img)
        return img
    except Exception:
        return None


def make_thumbnail(img: Image.Image, size: int) -> Image.Image:
    thumb = img.copy()
    thumb.thumbnail((size, size))
    canvas = Image.new("RGB", (size, size), "white")
    x = (size - thumb.width) // 2
    y = (size - thumb.height) // 2
    canvas.paste(thumb.convert("RGB"), (x, y))
    return canvas


def draw_label(img: Image.Image, label: str) -> Image.Image:
    draw = ImageDraw.Draw(img)
    box_h = 34
    draw.rectangle((0, 0, img.width, box_h), fill="white")
    draw.text((8, 8), label, fill="black")
    return img


def save_contact_sheet(items, sheet_index: int):
    cell_w = THUMB_SIZE
    cell_h = THUMB_SIZE
    sheet_w = SHEET_COLS * cell_w
    sheet_h = SHEET_ROWS * cell_h

    sheet = Image.new("RGB", (sheet_w, sheet_h), "white")

    for i, item in enumerate(items):
        row = i // SHEET_COLS
        col = i % SHEET_COLS
        x = col * cell_w
        y = row * cell_h

        img = load_image(item["path"])
        if img is None:
            continue

        thumb = make_thumbnail(img, THUMB_SIZE)
        thumb = draw_label(thumb, item["image_id"])
        sheet.paste(thumb, (x, y))

    out_path = OUT_DIR / "contact_sheets" / f"sheet_{sheet_index:04d}.jpg"
    sheet.save(out_path, quality=90)
    print(f"saved: {out_path}")


def main():
    total_inspected = 0
    total_candidate = 0
    skipped_small = 0
    failed_reads = 0
    priority_folders_found = False
    
    seen_paths = set()
    all_files = []
    
    for path in ROOT_DIR.rglob("*"):
        if not path.is_file() or not is_image(path):
            continue
        
        abs_path = path.resolve()
        if abs_path in seen_paths:
            continue
        seen_paths.add(abs_path)
        
        all_files.append(path)
        if any(parent.name.lower() in PRIORITY_NAMES for parent in path.parents):
            priority_folders_found = True
            
    # Sort: priority first
    def sort_key(p):
        is_priority = any(parent.name.lower() in PRIORITY_NAMES for parent in p.parents)
        return (not is_priority, p.name) # Priority first (False < True)
    
    all_files.sort(key=sort_key)
    if MAX_SCAN is not None:
        all_files = all_files[:MAX_SCAN]
    
    sheet_items = []
    sheet_index = 1
    
    with inventory_path.open("w", newline="", encoding="utf-8-sig") as f:
        writer = csv.writer(f)
        writer.writerow([
            "image_id",
            "path",
            "width",
            "height",
            "long_edge",
            "sheet_id",
            "status"
        ])
        
        for path in all_files:
            total_inspected += 1
            
            img = load_image(path)
            if img is None:
                failed_reads += 1
                continue
            
            width, height = img.size
            long_edge = max(width, height)
            
            if long_edge < MIN_LONG_EDGE:
                status = "skip_small"
                skipped_small += 1
            else:
                status = "candidate"
                total_candidate += 1
                
            image_id = f"{total_inspected:06d}"
            sheet_id = f"sheet_{sheet_index:04d}" if status == "candidate" else ""
            
            writer.writerow([
                image_id,
                str(path),
                width,
                height,
                long_edge,
                sheet_id,
                status
            ])
            
            if status == "candidate":
                sheet_items.append({
                    "image_id": image_id,
                    "path": path
                })
                
                if len(sheet_items) == IMAGES_PER_SHEET:
                    save_contact_sheet(sheet_items, sheet_index)
                    sheet_items = []
                    sheet_index += 1
                    
        if sheet_items:
            save_contact_sheet(sheet_items, sheet_index)
            
    summary_path = OUT_DIR / "scan_summary.txt"
    with summary_path.open("w", encoding="utf-8") as f:
        f.write(f"ROOT_DIR: {ROOT_DIR}\n")
        f.write(f"total image files inspected: {total_inspected}\n")
        f.write(f"total candidate images: {total_candidate}\n")
        f.write(f"skipped small images: {skipped_small}\n")
        f.write(f"failed image reads: {failed_reads}\n")
        f.write(f"number of contact sheets generated: {sheet_index - 1 if not sheet_items else sheet_index}\n")
        f.write(f"priority folders found: {priority_folders_found}\n")
        f.write(f"source images modified: no\n")
        
    print("done")
    print(f"inventory: {inventory_path}")
    print(f"summary: {summary_path}")
    print(f"scanned: {total_inspected}")

if __name__ == "__main__":
    main()