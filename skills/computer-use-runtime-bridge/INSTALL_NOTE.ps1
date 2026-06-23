# Install Computer Use Runtime Bridge skill files
# Run from any PowerShell location.

$SkillRoot = "D:\lumina-studio\skills\computer-use-runtime-bridge"

New-Item -ItemType Directory -Force $SkillRoot | Out-Null
New-Item -ItemType Directory -Force "$SkillRoot\references" | Out-Null
New-Item -ItemType Directory -Force "$SkillRoot\templates" | Out-Null
New-Item -ItemType Directory -Force "$SkillRoot\scripts" | Out-Null

Write-Host "Created skill folders at $SkillRoot"
Write-Host "Copy the generated files into this folder, preserving references/templates/scripts."
Write-Host "Then run:"
Write-Host "  Get-ChildItem -Recurse $SkillRoot"