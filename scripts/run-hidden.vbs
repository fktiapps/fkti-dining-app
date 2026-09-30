' Run a PowerShell script with no visible window (for the DCD scheduled tasks).
' Usage: wscript.exe //nologo //b run-hidden.vbs "C:\path\to\script.ps1"
Set sh = CreateObject("WScript.Shell")
sh.Run "powershell.exe -NoProfile -ExecutionPolicy Bypass -File """ & WScript.Arguments(0) & """", 0, True
