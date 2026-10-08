# AutoGear Dev Server Launcher
$nodePath = "C:\Users\thakk\.gemini\antigravity\scratch\tools\node-v20.18.0-win-x64"
$env:PATH = "$nodePath;$env:PATH"
Set-Location $PSScriptRoot

Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "   Starting AutoGear React Dev Server (Vite)            " -ForegroundColor Green
Write-Host "========================================================" -ForegroundColor Cyan

& "$nodePath\node.exe" .\node_modules\vite\bin\vite.js --host --port 3000
