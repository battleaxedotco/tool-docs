---
title: Troubleshooting
---

# Trouble&shy;shooting

## Why isn't my license working?

If you purchased Timelord through gumroad.com, download the most recent version at [license.battleaxe.co](https://license.battleaxe.co/) with your license key.

From 2015 - 2023 we sold products through gumroad.com and utilized their license authentication system on most of our products. Because of changes to their licensing backend, an update is required for all products that use license keys.

## Transparency failing to export on static images

Does your file have an artboard? The Ps artboard has its own background setting for transparency and if it's set to white it will output a white background instead of transparent.

<Screenshot 
    url="/timelord/ArtboardTransparency-01.jpg" 
    alt="Artboard transparency" 
    width="396px" 
    />

<br />

<Screenshot 
    url="/timelord/ArtboardTransparency-02.jpg" 
    alt="Artboard transparency" 
    width="414px" 
    right
    />

#### Set artboard transparency

There doesn't seem to be a way to set this automatically, but it's pretty easy to fix.

1. Select the artboard
2. Open the properties panel (`Window > Properties`)
3. Set **Artboard background color** to `Transparent`

Exported images will now be exported on a transparent background.

    
<br />

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

#### Delete the prefs file
1. Go to Finder
2. Pull down the GO menu
3. Hold the ALT/Opt key and Library will appear
4. Click to open the `/Library/` folder
5. Navigate to `/Library/Application Support/BattleAxe/Timelord/config/`
6. Delete `prefs.json`

### Are you on Windows?
Try deleting the preference file:
`C:/Users/**username**/AppData/Roaming/BattleAxe/Timelord/`

### Still not working?
Try uninstalling then reinstalling Ai/Ae.
