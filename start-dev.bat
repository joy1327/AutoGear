@echo off
setlocal
echo ========================================================
echo Starting AutoGear React Development Server...
echo ========================================================
set "NODE_PATH=C:\Users\thakk\.gemini\antigravity\scratch\tools\node-v20.18.0-win-x64"
set "PATH=%NODE_PATH%;%PATH%"
cd /d "%~dp0"
node.exe .\node_modules\vite\bin\vite.js --host
pause
