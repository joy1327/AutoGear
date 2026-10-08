@echo off
setlocal
echo ========================================================
echo Pushing AutoGear project to GitHub...
echo Repository: https://github.com/joy1327/AutoGear.git
echo ========================================================
cd /d "%~dp0"
git remote set-url origin https://github.com/joy1327/AutoGear.git
git branch -M main
git push -u origin main
echo.
echo If GitHub asked for authentication, sign in with your browser or Personal Access Token.
echo ========================================================
pause
