import pandas as pd
import shutil
import os

# ล็อตที่ 2: เพิ่มหมวดหมู่ย่อย และคัดรูปเพิ่มเติมจาก Contact Sheet ชุดใหม่
categorized_ids = {
    "2_Bathing_อาบน้ำนาค": [152, 168, 175],
    "4_Ceremony_พิธีการ": [190, 210, 225, 240],
    "6_Monk_ห่มผ้ากาสาวพัสตร์": [255, 268, 280, 295], # เพิ่มหมวดตอนห่มจีวร
    "0_Highlights_รูปเด็ด": [255, 260] # ดึงช็อตสำคัญมาไว้โฟลเดอร์นี้ด้วย
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

print(f"Successfully processed Batch 2: {copied_files} images")
