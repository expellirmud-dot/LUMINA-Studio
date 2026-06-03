import pandas as pd
import shutil
import os

# แบ่งหมวดหมู่และระบุ ID ของภาพในหมวดหมู่นั้นๆ
categorized_ids = {
    "1_Preparation_ปลงผม": [12, 18, 24],
    "2_Bathing_อาบน้ำนาค": [35, 42],
    "3_Procession_แห่นาค": [55, 68, 79],
    "4_Ceremony_พิธีการ": [92, 105, 118],
    "5_Portraits_ครอบครัว": [130, 142],
    "0_Highlights_รูปเด็ด": [7]
}

# อ่านไฟล์ Inventory
excel_path = r'D:\lumina-photo-harvest\output\inventory.xlsx'
df = pd.read_excel(excel_path)

# สร้างโฟลเดอร์หลัก
base_output_dir = r'D:\lumina-photo-harvest\output\shortlist_categorized'

copied_files = 0
missing_files = []

# วนลูปตามหมวดหมู่
for category, ids in categorized_ids.items():
    category_dir = os.path.join(base_output_dir, category)
    os.makedirs(category_dir, exist_ok=True) # สร้างโฟลเดอร์ย่อยตามหมวดหมู่
    
    for img_id in ids:
        row = df[df['image_id'] == img_id]
        if not row.empty:
            src_path = row.iloc[0]['path']
            if os.path.exists(src_path):
                filename = os.path.basename(src_path)
                dest_path = os.path.join(category_dir, filename)
                shutil.copy2(src_path, dest_path)
                copied_files += 1
            else:
                missing_files.append((img_id, category, "Source file not found"))
        else:
            missing_files.append((img_id, category, "ID not in Excel"))

print(f"Successfully copied and categorized: {copied_files} images")
print(f"Destination: {base_output_dir}")

if missing_files:
    print("Encountered missing files:")
    for m in missing_files:
        print(f"   - [{m[1]}] ID {m[0]}: {m[2]}")
