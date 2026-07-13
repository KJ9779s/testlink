@echo off
for %%f in (*.mp3) do (
    ffmpeg -i "%%f" -c:a aac -b:a 128k -f hls -hls_time 10 -hls_playlist_type vod -hls_segment_filename "%%~nf_%%03d.ts" "%%~nf.m3u8"
)
pause