# Копіює фронт у клон і пушить (як раніше)
# Запуск: PowerShell -ExecutionPolicy Bypass -File push-to-vercel.ps1

$CLONE_PATH = "C:\Users\Мій ПК\OneDrive\Робочий стіл\gradient-frontend-push копія"
$SOURCE = $PSScriptRoot
$BRANCH = "trunk"

if (-not (Test-Path $CLONE_PATH)) {
    Write-Host "Помилка: клон не знайдено: $CLONE_PATH" -ForegroundColor Red
    exit 1
}

# Копіюємо все з фронта в клон, крім node_modules, build, .git
Write-Host "Копіюю файли з фронта в клон..." -ForegroundColor Cyan
robocopy $SOURCE $CLONE_PATH /E /XD node_modules build .git /NFL /NDL /NJH /NJS /NC /NS
if ($LASTEXITCODE -ge 8) {
    Write-Host "Помилка копіювання (код $LASTEXITCODE)." -ForegroundColor Red
    exit 1
}
Write-Host "Копіювання готове." -ForegroundColor Green

# Коміт і пуш у клоні
Push-Location $CLONE_PATH
git add .
git status
git commit -m "sync: frontend from local"
git push origin $BRANCH
Pop-Location

Write-Host "Готово. Деплой на Vercel піде автоматично." -ForegroundColor Green
