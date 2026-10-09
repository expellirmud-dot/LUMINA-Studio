# LUMINA_PHOTO_SELECTION Installation

Copy this folder to your LUMINA photo harvest workspace:

```powershell
D:\lumina-photo-harvest\LUMINA_PHOTO_SELECTION
```

Recommended install command after downloading the zip:

```powershell
New-Item -ItemType Directory -Force "D:\lumina-photo-harvest" | Out-Null
Expand-Archive -Path "$env:USERPROFILE\Downloads\LUMINA_PHOTO_SELECTION.zip" -DestinationPath "D:\lumina-photo-harvest" -Force
```

Verify the main skill file:

```powershell
Test-Path "D:\lumina-photo-harvest\LUMINA_PHOTO_SELECTION\SKILL.md"
```

Validate an inventory file:

```powershell
python "D:\lumina-photo-harvest\LUMINA_PHOTO_SELECTION\scripts\validate_inventory.py" "D:\path\to\inventory.csv"
```

Build a mapped selection JSON:

```powershell
python "D:\lumina-photo-harvest\LUMINA_PHOTO_SELECTION\scripts\build_selection_json.py" --inventory "D:\path\to\inventory.csv" --selection "D:\path\to\selection_ids.json" --out "D:\path\to\final_selection.json"
```

Copy selected files into output folders:

```powershell
python "D:\lumina-photo-harvest\LUMINA_PHOTO_SELECTION\scripts\copy_selected_files.py" --selection "D:\path\to\final_selection.json" --out-dir "D:\lumina-photo-harvest\output" --project "ordination-louis"
```
