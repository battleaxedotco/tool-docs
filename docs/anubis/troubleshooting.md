---
title:  Troubleshooting
---

# Trouble&shy;shooting

## Error: macOS cannot verify the developer of "ffmpeg"
FFMPEG is used to compress the rendered MOV into an MP4, but due to increased security measures, macOS will ask for your approval before running it the first time.

Steps to [allow FFMPEG](allow-ffmpeg)

We are not installing or running anything harmful on your machine. Promise.

## Colors look wrong from Ae

Try using the **Uncompressed YUV** codec instead of **Animation**.

[Learn more](color-accuracy) about setting that up.


## FFmpeg missing on macOS

If you see `ffmpeg.exe` but not a `ffmpeg` OSX app, then it failed to install correctly.

<Screenshot 
    url="/anubis/Missing-ffmpeg.jpg" 
    alt="Missing FFmpeg" 
    width="707px" 
    />

Unfortunately the FFmpeg app sometimes get skipped when installing the extension. Try uninstalling in ZXP Installer and doing a [manual install](./#installation) by copying the whole extension folder.


## Extension missing in Photoshop
<Rosetta 
    name="Anubis" />