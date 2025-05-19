@echo off
code .
timeout /t 2 >nul
start "" "C:\Path\to\VSCode\Code.exe" --folder-uri file:///%cd% --command "workbench.action.terminal.runActiveFile"
