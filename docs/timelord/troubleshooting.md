---
title: Troubleshooting
---

# Trouble&shy;shooting

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


<br />

### Are you on Windows?
Try deleting the preference file:
`C:/Users/**username**/AppData/Roaming/BattleAxe/Overlord/`

### Still not working?
Try uninstalling then reinstalling Ai/Ae.
