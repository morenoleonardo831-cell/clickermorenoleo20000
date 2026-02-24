@echo off
setlocal
cd /d "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
  echo Node.js nao encontrado.
  echo Abrindo versao direta para teste...
  start "" "%~dp0index-github.html"
  pause
  exit /b 1
)

echo Iniciando servidor local do jogo...
echo.
powershell -NoProfile -Command "node \"%~dp0servidor-local-jogo.cjs\""
if errorlevel 1 (
  echo.
  echo Falha ao iniciar servidor local.
  echo Tentando abrir versao direta para teste...
  start "" "%~dp0index-github.html"
  echo.
  echo Se abrir com layout quebrado, me avise que ajusto.
  pause
)
