import pandas as pd
import shutil
import os

# รายชื่อ ID รูปภาพที่ผ่านการคัดเลือก (AI Selected)
selected_ids = [
    7,   # รูปตัวอย่าง
    12, 18, 24, # ช่วงเตรียมตัว / ปลงผม
    35, 42, # ช่วงอาบน้ำนาค
    55, 68, 79, # ช่วงแห่นาค
    92, 105, 118, # ช่วงพิธีการ
    130, 142 # ภาพครอบครัว / Portrait
]

# อ่านไฟล์ Inventory
excel_path = r'D:\lumina-photo-harvest\output\inventory.xlsx'
df = pd.read_excel(excel_path)

# สร้างโฟลเดอร์ Shortlist
output_dir = r'D:\lumina-photo-harvest\output\shortlist'
os.makedirs(output_dir, exist_ok=True)

# เริ่มกระบวนการคัดลอกไฟล์
copied_files = []
missing_files = []

for img_id in selected_ids:
    row = df[df['image_id'] == img_id]
    if not row.empty:
        src_path = row.iloc[0]['path']
        if os.path.exists(src_path):
            filename = os.path.basename(src_path)
            dest_path = os.path.join(output_dir, filename)
            shutil.copy2(src_path, dest_path)
            copied_files.append(img_id)
        else:
            missing_files.append((img_id, "ไม่พบไฟล์ต้นฉบับในไดร์ฟ (เสียบฮาร์ดดิสก์หรือยัง?)"))
    else:
        missing_files.append((img_id, "ไม่พบ ID นี้ในไฟล์ Excel"))

print(f"Successfully copied: {len(copied_files)} images")
if missing_files:
    print("Encountered missing files:")
    for m in missing_files:
        print(f"   - ID {m[0]}: {m[1]}")
