$ErrorActionPreference='Stop'
Set-Location 'D:\lumina-studio'

# Normalize SKILL.md casing for portability.
$dirs=Get-ChildItem '.agents\skills' -Directory
foreach($d in $dirs){
  $f=Get-ChildItem $d.FullName -File | Where-Object {$_.Name -ieq 'SKILL.md'} | Select-Object -First 1
  if($f -and $f.Name -cne 'SKILL.md'){
    $tmp=Join-Path $d.FullName '__skill_case_tmp__.md'
    Move-Item $f.FullName $tmp -Force
    Move-Item $tmp (Join-Path $d.FullName 'SKILL.md') -Force
  }
}

$files=@(
  'AGENTS.md',
  'GEMINI.md',
  'docs\CONTEXT_INDEX.md',
  'docs\LUMINA_MODEL_AND_WORKER_POLICY.md',
  '.agents\skills\computer-use-runtime-bridge\SKILL.md',
  '.agents\skills\computer-use-runtime-bridge\references\RUNTIME_OVERVIEW.md',
  '.agents\skills\computer-use-runtime-bridge\references\GIT_HYGIENE.md',
  '.agents\skills\computer-use-runtime-bridge\INSTALL_NOTE.ps1',
  '.agents\skills\read-first-governance\SKILL.md',
  '.agents\skills\windows-ui-review-runtime\SKILL.md',
  '.agents\skills\windows-ui-review-runtime\README.md'
)

foreach($p in $files){
  if(-not(Test-Path $p)){continue}
  $full=(Resolve-Path $p).Path
  $s=[IO.File]::ReadAllText($full)
  $s=$s.Replace('D:\lumina-studio\skills\','D:\lumina-studio\.agents\skills\')
  $s=$s.Replace('D:\lumina-studio\skills','D:\lumina-studio\.agents\skills')
  $s=$s.Replace('skills/LUMINA_STARTUP/SKILL.md','.agents/skills/LUMINA_STARTUP/SKILL.md')
  $s=$s.Replace('skills/LUMINA_REVIEW_CHECKLIST/SKILL.md','.agents/skills/LUMINA_REVIEW_CHECKLIST/SKILL.md')
  $s=$s.Replace('skills\windows-ui-review-runtime','.agents\skills\windows-ui-review-runtime')
  $s=$s.Replace('.agent\skills\read-first-governance','.agents\skills\read-first-governance')
  [IO.File]::WriteAllText($full,$s,[Text.UTF8Encoding]::new($false))
}
Write-Host 'normalized SKILL.md casing and updated selected active paths'
