# One-shot unattended resume after the weekly Claude quota resets (task "DCD resume", 2026-10-01 09:00).
$repo = 'C:\PF\fkti-dining'
$dir  = Join-Path $env:LOCALAPPDATA 'dcd-tick'; New-Item -ItemType Directory -Force $dir | Out-Null
$log  = Join-Path $dir ("resume-" + (Get-Date -Format 'yyyyMMdd-HHmmss') + '.log')
function Log($m) { "$(Get-Date -Format s) $m" | Tee-Object -FilePath $log -Append }
Set-Location $repo
if (Test-Path 'data\.rebuild.lock') { Log 'ABORT: rebuild lock held'; exit 1 }
if ((git status --porcelain -- data index.html sw.js) -ne $null) { Log 'ABORT: uncommitted data changes (a session may be active)'; exit 1 }
git pull -q 2>&1 | Out-Null
$claude = Join-Path $env:USERPROFILE '.local\bin\claude.exe'; if (-not (Test-Path $claude)) { $claude = 'claude' }
$prompt = Get-Content (Join-Path $repo 'docs\RESUME-PROMPT.md') -Raw
& $claude -p $prompt --allowedTools 'Bash' 'Read' 'Write' 'Edit' 'Glob' 'Grep' 'WebFetch' 'WebSearch' 2>&1 | ForEach-Object { Log $_ }
Log "exit $LASTEXITCODE"
