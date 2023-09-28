---
title:  Troubleshooting
---

# Trouble&shy;shooting

## Why isn't my license working?

If you purchased Anubis through gumroad.com, download the most recent version at [license.battleaxe.co](https://license.battleaxe.co/) with your license key.

From 2015 - 2023 we sold products through gumroad.com and utilized their license authentication system on most of our products. Because of changes to their licensing backend, an update is required for all products that use license keys.

## Error: macOS cannot verify the developer of "ffmpeg"

::: warning Update to 1.1.10
Starting with v1.1.10, FFmpeg is now a signed binary and will no longer throw security error on MacOS. [Download the update](https://license.battleaxe.co/) with your license key.
:::

### (Deprecated workaround) 
FFMPEG is used to compress the rendered MOV into an MP4, but due to increased security measures, macOS will ask for your approval before running it the first time.

Steps to [allow FFMPEG](allow-ffmpeg)

We are not installing or running anything harmful on your machine. Promise.

## Colors look wrong from Ae

Try using the **ProRes** or **Uncompressed YUV** codec instead of **Animation**.

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

## Empty panel / no buttons

If the extension panel shows up blank there is a problem loading some of the code to display the UI.

<Screenshot 
    url="/overlord/Blank-panel.jpg" 
    alt="Blank panel" 
    width="480px" 
    />

### Are you on macOS?

#### Using dropbox?
Try turning off [Backup This Mac](https://aescripts.com/knowledgebase/index/view/faq/dropbox-macos-warning/)

#### Do you have an external GPU?

<Screenshot 
    url="/images/External-gpu.png" 
    alt="Blank panel" 
    width="200px" 
    left 
    />

1. Navigate to the Adobe application 
2. Right-click > **Get Info** or `CMD+I`
3. Disable **Prefer External GPU**
4. Restart the Adobe app

<br/>

#### Delete the prefs file
1. Go to Finder
2. Pull down the GO menu
3. Hold the ALT/Opt key and Library will appear
4. Click to open the `/Library/` folder
5. Navigate to `/Library/Application Support/BattleAxe/Anubis/config/`
6. Delete `prefs.json`

<br />

### Are you on Windows?
Try deleting the preference file:
`C:/Users/**username**/AppData/Roaming/BattleAxe/Anubis/config/prefs.json`

### Still not working?
Try uninstalling then reinstalling Ai/Ae.
