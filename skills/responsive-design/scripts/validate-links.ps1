param(
  [switch]$Quiet
)

$ErrorActionPreference = 'Stop'

$skillRoot = Split-Path -Parent $PSScriptRoot
$skillFile = Join-Path $skillRoot 'SKILL.md'
if (-not (Test-Path $skillFile)) {
  throw "Could not find SKILL.md in $skillRoot"
}

$content = Get-Content -Raw -Path $skillFile
$matches = [regex]::Matches($content, '\[[^\]]+\]\(([^)]+)\)')
$issues = @()

foreach ($match in $matches) {
  $link = $match.Groups[1].Value
  if ($link -match '^(https?:|mailto:|#)') {
    continue
  }

  $pathOnly = $link.Split('#')[0].Split('?')[0]
  if ([string]::IsNullOrWhiteSpace($pathOnly)) {
    continue
  }

  $resolved = [System.IO.Path]::GetFullPath((Join-Path $skillRoot $pathOnly))
  if (-not (Test-Path $resolved)) {
    $issues += [pscustomobject]@{
      Link = $link
      Target = $resolved
    }
  }
}

if ($issues.Count -gt 0) {
  if (-not $Quiet) {
    Write-Host "Broken local links found in ${skillFile}:" -ForegroundColor Red
    $issues | Format-Table -AutoSize
  }
  exit 1
}

if (-not $Quiet) {
  Write-Host "OK - all local links resolved in $skillFile"
}
