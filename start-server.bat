@echo off
echo ========================================
echo    Iniciando Servidor GOV.BR
echo ========================================
echo.

REM Verifica se Python está instalado
python --version >nul 2>&1
if errorlevel 1 (
    echo [ERRO] Python nao encontrado!
    echo.
    echo Por favor, instale o Python em: https://www.python.org/downloads/
    echo.
    pause
    exit /b 1
)

REM Inicia o servidor
echo Iniciando servidor...
echo Acesse: http://localhost:8000
echo.
python server.py

pause
