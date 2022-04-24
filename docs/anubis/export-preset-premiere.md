---
title: Export presets
---

# Export presets (Premiere)

Before compressing, Anubis will export the highest quality possible. A Premiere timeline contains some hidden elements and additional options that may only be unlocked by selecting an Export Preset. 

Some common options that do not come with the default renderer:
- Burn Timecode
- Export a Sidecar SRT
- Use Previews

::: tip Download EPRs for these common options
- [Download ↓](/anubis/Anubis_EPRs.zip)
:::

## Adding an export preset to Anubis

<Screenshot 
    url="/anubis/LoadExportPreset.jpg" 
    alt="Anubis" 
    left
    outline round
    width="321px" />

To keep the interface clean there will be no Export preset selection until you add additional preset files.

Right click the Anubis panel in Premiere and select `Load Export Preset`. A Finder or File Explorer window will open to a system folder `../BattleAxe/Anubis/Premiere presets/`. Copy EPR files into this folder. 

Refresh Anubis and you will now see a dropdown for **Export preset**.

<br />

## Creating an export preset

### Import Standard preset (optional)

<Screenshot 
    url="/anubis/ImportPreset.jpg" 
    alt="Import preset" 
    right
    outline round
    width="462px" />

1. Download [Anubis-Standard.epr.zip](/anubis/Anubis-Standard.epr.zip)
2. Within Premiere, open the **Export Settings** panel (File > Export > Media) 
3. Click the `→📁` icon to import the newly downloaded **Anubis-Standard.epr** file
4. Or just start fresh by selecting **Prores 422 HQ** MOV with **Match Source** enabled for video.

### Customize the preset

<Screenshot 
    url="/anubis/CustomizePreset.jpg" 
    alt="Customize preset" 
    right
    outline round
    width="462px" />

Enable additional options and customize the display effects to make the video exports match your preferences. 

Anything from the **Effects**, **Video**, **Audio**, and quality options below are available to edit. 

<br />

### Save the preset

<Screenshot 
    url="/anubis/SavePreset.jpg" 
    alt="Save preset" 
    right
    outline round
    width="462px" />

1. Click the `⬇️` icon to Save Preset
2. Enter a name 
3. If you enabled effect overlays, be sure the ☑️ for **Save Effects Settings**
4. Locate the new EPR file in the **Adobe Media Encoder** presets folder
5. Copy the new file into the [Anubis presets folder](#adding-an-export-preset-to-anubis)
6. Right-click the Anubis panel to refresh and update the **Export preset** list

<br />

::: tip Adobe Media Encoder presets folder location
Mac: `/Users/**username**/Documents/Adobe/Adobe Media Encoder/22.0/Presets/Metadata/`

Windows: `C:/Users/**username**/Documents/Adobe/Adobe Media Encoder/22.0/Presets/Metadata/`
:::