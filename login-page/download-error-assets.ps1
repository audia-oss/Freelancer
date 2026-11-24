$dir = "C:\Users\setia\.antigravity-ide\login-page\assets\error"
if (!(Test-Path $dir)) {
    New-Item -ItemType Directory -Path $dir -Force | Out-Null
}

$assets = @{
    "help-1.svg" = "https://www.figma.com/api/mcp/asset/45655e11-1915-4dd0-9451-946638347e9c.svg"
    "help-2.svg" = "https://www.figma.com/api/mcp/asset/6340ce4a-0adb-4c8c-8c1c-28b9af2d5eb9.svg"
    "help-3.svg" = "https://www.figma.com/api/mcp/asset/bcf07df8-3c63-42ca-b27f-50deba865780.svg"
}

foreach ($item in $assets.GetEnumerator()) {
    $target = Join-Path $dir $item.Key
    Invoke-WebRequest -Uri $item.Value -OutFile $target
    $len = (Get-Item $target).Length
    Write-Host "Downloaded $($item.Key) : $len bytes"
}
