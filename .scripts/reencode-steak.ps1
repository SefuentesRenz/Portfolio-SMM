$ErrorActionPreference = 'Stop'

$ffbin = 'C:\Users\NEW PC\AppData\Local\Temp\ffmpeg\ffmpeg-9.0.1-essentials_build\bin'
$ffprobe = Join-Path $ffbin 'ffprobe.exe'
$ffmpeg = Join-Path $ffbin 'ffmpeg.exe'

$inputRel = 'public\assets\short-form-videos\Steak-Video-Edit.mp4'
$outRel = 'public\assets\short-form-videos\Steak-Video-Edit-h264.mp4'
$appFile = 'src\App.jsx'

Write-Output "Using ffmpeg: $ffmpeg"
Write-Output "Using ffprobe: $ffprobe"

if (-not (Test-Path $inputRel)) { Write-Error "Input file not found: $inputRel"; exit 1 }

# Probe codec using ffprobe if available, fallback to ffmpeg parsing
$codec = ''
if (Test-Path $ffprobe) {
    try {
        $codec = & $ffprobe -v error -select_streams v:0 -show_entries stream=codec_name -of default=noprint_wrappers=1:nokey=1 $inputRel 2>$null | Select-Object -First 1
    } catch { $codec = '' }
}

if (-not $codec) {
    $probeOut = & $ffmpeg -hide_banner -i $inputRel 2>&1
    if ($probeOut -match 'Video:\s*([^,\s]+)') { $codec = $matches[1] }
}

$codec = $codec.ToString().ToLower()
Write-Output "Detected video codec: '$codec'"

if ($codec -match 'h264|avc') {
    Write-Output "Video is already H.264. No re-encode required."
    $didEncode = $false
} else {
    Write-Output "Re-encoding to H.264 (this may take a moment)..."
    & $ffmpeg -y -i $inputRel -c:v libx264 -pix_fmt yuv420p -preset medium -crf 22 -c:a aac -b:a 192k "$outRel"
    if (-not (Test-Path $outRel)) { Write-Error "Re-encode failed; output not created."; exit 1 }
    Write-Output "Re-encode completed: $outRel"
    $didEncode = $true
}

if ($didEncode) {
    if (-not (Test-Path $appFile)) { Write-Warning "Could not find $appFile to update." }
    else {
        $txt = Get-Content $appFile -Raw
        $old = 'Steak-Video-Edit.mp4'
        $new = 'Steak-Video-Edit-h264.mp4'
        if ($txt -like "*${old}*") {
            $txt2 = $txt -replace [regex]::Escape($old), $new
            Set-Content -LiteralPath $appFile -Value $txt2 -Force
            Write-Output ("Updated {0}: replaced {1} -> {2}" -f $appFile, $old, $new)
        } else {
            Write-Output ("{0} did not contain {1}; no replacement made." -f $appFile, $old)
        }
    }
}

Write-Output "Done. Test the file in Chrome (hard-refresh the page / open Incognito):"
Write-Output "http://localhost:5173/assets/short-form-videos/Steak-Video-Edit-h264.mp4"
