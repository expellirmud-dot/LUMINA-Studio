param(
    [switch]$Apply = $false,
    [switch]$DryRun = $true,
    [switch]$BackupBeforeApply = $false,
    [switch]$ShowDiff = $false,
    [switch]$ForceDeleteUnknown = $false
)

if ($Apply) {
    $DryRun = $false
}

$source = "skills"
$mirrors = @(".gemini\skills", ".opencode\skills", ".agent\skills")

if (-not (Test-Path $source)) {
    Write-Error "Source folder $source does not exist."
    exit 1
}

$sourceFiles = Get-ChildItem -Path $source -Recurse -File
$sourcePaths = @{}
foreach ($f in $sourceFiles) {
    $relPath = $f.FullName.Substring((Resolve-Path $source).Path.Length + 1)
    $sourcePaths[$relPath] = $f
}

Write-Output "Starting Skill Sync Script"
if ($DryRun) { Write-Output "[MODE: DRY-RUN]" } else { Write-Output "[MODE: APPLY]" }

foreach ($mirror in $mirrors) {
    Write-Output "
Processing mirror: $mirror"
    if (-not (Test-Path $mirror)) {
        if ($DryRun) {
            Write-Output "Would create mirror root: $mirror"
        } else {
            New-Item -ItemType Directory -Force -Path $mirror | Out-Null
        }
    }
    
    # 1. Check for files to copy/overwrite
    foreach ($relPath in $sourcePaths.Keys) {
        $sourceFile = $sourcePaths[$relPath]
        $destPath = Join-Path $mirror $relPath
        
        $shouldCopy = $false
        $reason = ""
        
        if (-not (Test-Path $destPath)) {
            $shouldCopy = $true
            $reason = "Missing"
        } else {
            $destFile = Get-Item $destPath
            # Casing check for SKILL.md
            if ($sourceFile.Name -cne $destFile.Name) {
                $shouldCopy = $true
                $reason = "Casing Mismatch ($($destFile.Name) vs $($sourceFile.Name))"
            } elseif ($sourceFile.Length -ne $destFile.Length -or $sourceFile.LastWriteTime -gt $destFile.LastWriteTime) {
                $shouldCopy = $true
                $reason = "Outdated/Modified"
            }
        }
        
        if ($shouldCopy) {
            if ($ShowDiff -and $DryRun) { Write-Output "  [SYNC REQUIRED] $destPath (Reason: $reason)" }
            if (-not $DryRun) {
                $destDir = Split-Path $destPath -Parent
                if (-not (Test-Path $destDir)) { New-Item -ItemType Directory -Force -Path $destDir | Out-Null }
                Copy-Item -Path $sourceFile.FullName -Destination $destPath -Force
                Write-Output "  [COPIED] $destPath"
            }
        }
    }
    
    # 2. Check for extra files in mirror
    if (Test-Path $mirror) {
        $destFiles = Get-ChildItem -Path $mirror -Recurse -File
        foreach ($d in $destFiles) {
            if ($d.FullName -match "\\skills\\skills\\") { continue }
            
            $relPath = $d.FullName.Substring((Resolve-Path $mirror).Path.Length + 1)
            if (-not $sourcePaths.ContainsKey($relPath)) {
                if ($ShowDiff -and $DryRun) { Write-Output "  [EXTRA FILE] $relPath" }
                if (-not $DryRun) {
                    if ($ForceDeleteUnknown) {
                        Remove-Item -Path $d.FullName -Force
                        Write-Output "  [DELETED] $d.FullName"
                    } else {
                        Write-Output "  [SKIP DELETE] $d.FullName (Requires -ForceDeleteUnknown)"
                    }
                }
            }
        }
    }
}
Write-Output "Done."
