import pandas as pd
import shutil
import os

# ล็อตที่ 4: เก็บตกช่วงกรวดน้ำ, ขบวนแห่นาคบนม้า, และภาพหมู่เพิ่มเติม
categorized_ids = {
    "3_Procession_แห่นาค": [412, 428, 435, 442, 450], # ขบวนแห่ม้าสวยๆ
    "4_Ceremony_พิธีการ": [405, 418, 425], # พิธีการ/กรวดน้ำ
    "5_Portraits_ครอบครัว": [465, 478, 485], # ภาพหมู่
    "0_Highlights_รูปเด็ด": [442, 478] # ช็อตเด็ดขบวนแห่กับภาพหมู่
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

print(f"Successfully processed Batch 4: {copied_files} images")
