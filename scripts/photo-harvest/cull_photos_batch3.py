import pandas as pd
import shutil
import os

# ล็อตที่ 3: รับพร, กรวดน้ำ, และถ่ายภาพครอบครัวปิดท้าย
categorized_ids = {
    "4_Ceremony_พิธีการ": [305, 315, 330, 342],
    "5_Portraits_ครอบครัว": [350, 365, 380, 395],
    "0_Highlights_รูปเด็ด": [330, 380] # ช็อตประทับใจ
}

excel_path = r'D:\lumina-photo-harvest\output\inventory.xlsx'
df = pd.read_excel(excel_path)
base_output_dir = r'D:\lumina-photo-harvest\output\shortlist_categorized'

copied_files = 0
for category, ids in categorized_ids.items():
    category_dir = os.path.join(base_output_dir, category)
    os.makedirs(category_dir, exist_ok=True)
    
    for img_id in ids:
        row = df[df['image_id'] == img_id]
        if not row.empty:
            src_path = row.iloc[0]['path']
            if os.path.exists(src_path):
                filename = os.path.basename(src_path)
                dest_path = os.path.join(category_dir, filename)
                shutil.copy2(src_path, dest_path)
                copied_files += 1

print(f"Successfully processed Batch 3: {copied_files} images")
