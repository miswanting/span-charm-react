@echo off
cd /d %~dp0
cd ..
mklink /d span-charm-react\node_modules\span-charm ..\..\span-charm
pause