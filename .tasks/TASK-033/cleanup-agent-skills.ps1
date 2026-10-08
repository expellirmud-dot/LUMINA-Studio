$ErrorActionPreference='Stop'

$stamp = Get-Date -Format 'yyyyMMdd-HHmmss'
$backup = Join-Path 'backups' ("skill-agent-cleanup-" + $stamp)
New-Item -ItemType Directory -Force -Path $backup | Out-Null
Copy-Item '.agent\skills' (Join-Path $backup 'skills') -Recurse -Force

# Promote Gridgeist into primary source of truth if missing.
if (-not (Test-Path 'skills\gridgeist')) {
    Copy-Item '.agent\skills\gridgeist' 'skills\gridgeist' -Recurse -Force
}

# Update the primary computer-use bridge model name everywhere in that skill.
Get-ChildItem 'skills\computer-use-runtime-bridge' -Recurse -File | ForEach-Object {
    $path = $_.FullName
    try {
        $text = [System.IO.File]::ReadAllText($path)
    } catch {
        return
    }
    if ($text.Contains('gemini-3-flash-preview')) {
        $text = $text.Replace('gemini-3-flash-preview','gemini-3.5-flash-lite')
        [System.IO.File]::WriteAllText($path,$text,[System.Text.UTF8Encoding]::new($false))
    }
}

# Refresh only this mirror from the primary source.
Remove-Item '.agent\skills\computer-use-runtime-bridge' -Recurse -Force
Copy-Item 'skills\computer-use-runtime-bridge' '.agent\skills\computer-use-runtime-bridge' -Recurse -Force

function Get-Sha256([string]$Path) {
    $sha = [System.Security.Cryptography.SHA256]::Create()
    try {
        $stream = [System.IO.File]::OpenRead($Path)
        try {
            return ([System.BitConverter]::ToString($sha.ComputeHash($stream))).Replace('-','')
        } finally {
            $stream.Dispose()
        }
    } finally {
        $sha.Dispose()
    }
}

# Remove same-name nested copies only when every nested file is byte-identical
# to the corresponding top-level skill file.
$removedNested = @()
$skippedNested = @()
Get-ChildItem '.agent\skills' -Directory | ForEach-Object {
    $outer = $_.FullName
    $nested = Join-Path $outer $_.Name
    if (-not (Test-Path $nested)) { return }

    $safe = $true
    Get-ChildItem $nested -Recurse -File | ForEach-Object {
        if (-not $safe) { return }
        $rel = $_.FullName.Substring($nested.Length).TrimStart('\')
        $peer = Join-Path $outer $rel
        if (-not (Test-Path $peer)) {
            $safe = $false
            return
        }
        if ((Get-Sha256 $_.FullName) -ne (Get-Sha256 $peer)) {
            $safe = $false
        }
    }

    if ($safe) {
        Remove-Item $nested -Recurse -Force
        $removedNested += $_.Name
    } else {
        $skippedNested += $_.Name
    }
}

# Curate obviously irrelevant skills out of the .agent runtime mirror only.
$unused = @('docx','pdf','pptx','xlsx','entra-agent-id','entra-app-registration')
$removedUnused = @()
foreach ($name in $unused) {
    $p = Join-Path '.agent\skills' $name
    if (Test-Path $p) {
        Remove-Item $p -Recurse -Force
        $removedUnused += $name
    }
}

$result = [pscustomobject]@{
    Backup = (Resolve-Path $backup).Path
    RemovedNested = $removedNested
    SkippedNested = $skippedNested
    RemovedUnusedFromAgentOnly = $removedUnused
    AgentSkillCount = (Get-ChildItem '.agent\skills' -Directory | Measure-Object).Count
    RootHasGridgeist = (Test-Path 'skills\gridgeist\SKILL.md')
    AgentHasGridgeist = (Test-Path '.agent\skills\gridgeist\SKILL.md')
}
$result | ConvertTo-Json -Depth 4
