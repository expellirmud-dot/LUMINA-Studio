param(
    [string]$RuntimePath = "D:\ai-tools\computer-use-preview",
    [string]$Model = "gemini-3-flash-preview",
    [string]$Query = "Open example.com and tell me what heading is shown on the page"
)

$ErrorActionPreference = "Stop"

Write-Host "Computer Use Runtime Smoke Test"
Write-Host "RuntimePath: $RuntimePath"
Write-Host "Model: $Model"

if (-not (Test-Path $RuntimePath)) {
    Write-Error "Runtime path not found: $RuntimePath"
}

$PythonExe = Join-Path $RuntimePath ".venv\Scripts\python.exe"

if (-not (Test-Path $PythonExe)) {
    Write-Error "Venv Python not found: $PythonExe"
}

Set-Location $RuntimePath

Write-Host "Checking Python..."
& $PythonExe --version

Write-Host "Ensuring Playwright Chromium is installed..."
& $PythonExe -m playwright install chromium

Write-Host "Running smoke test..."
& $PythonExe main.py --query $Query --env playwright --model $Model

if ($LASTEXITCODE -ne 0) {
    Write-Error "Smoke test failed with exit code $LASTEXITCODE"
}

Write-Host "Smoke test command completed."