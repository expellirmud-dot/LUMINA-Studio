$old=(Get-ChildItem 'skills\computer-use-runtime-bridge','.agent\skills\computer-use-runtime-bridge' -Recurse -File | Select-String -Pattern 'gemini-3-flash-preview').Count
$new=(Get-ChildItem 'skills\computer-use-runtime-bridge','.agent\skills\computer-use-runtime-bridge' -Recurse -File | Select-String -Pattern 'gemini-3\.5-flash-lite').Count
$nested=@(Get-ChildItem '.agent\skills' -Directory | ForEach-Object {$p=Join-Path $_.FullName $_.Name;if(Test-Path $p){$p}}).Count
$excluded=@('docx','pdf','pptx','xlsx','entra-agent-id','entra-app-registration') | Where-Object {Test-Path (Join-Path '.agent\skills' $_)}
[pscustomobject]@{RootSkillCount=(Get-ChildItem 'skills' -Directory|Measure-Object).Count;AgentSkillCount=(Get-ChildItem '.agent\skills' -Directory|Measure-Object).Count;OldModelRefs=$old;NewModelRefs=$new;NestedDuplicateCount=$nested;ExcludedStillPresent=($excluded -join ',');RootGridgeist=(Test-Path 'skills\gridgeist\SKILL.md');AgentGridgeist=(Test-Path '.agent\skills\gridgeist\SKILL.md');BackupExists=(Test-Path 'backups\skill-agent-cleanup-20261008-094858')} | ConvertTo-Json
git diff --check
git status --short