# Transfer Art

<Video url="https://www.youtube.com/embed/M5gfNqKMQlk" />

Moving layers between Photoshop/Animate and After Effects is one of the core features of Timelord and makes export and import as seamless as possible.

## Layer export/import

<Screenshot 
    url="/timelord/toolbar-render.png" 
    alt="Render" 
    width="425px"
    center
 />

Instead of rendering everything visible in a timeline, Timelord will solo then export each selected layer or group as its own file to make compositing in Ae possible. 

### Auto Import

After layers finish exporting, After Effects will be instructed to batch import the layers and add them to the open Ae comp.

<Screenshot url="/timelord/export-flowchart.png" 
    alt="Export flowchart" 
    width="auto"
    zoom
    />

## File names
Rendered files will be named based on the layer or group name (Ps/An) or the comp name (Ae). On export, files will be overwritten so ***be sure your layers have unique names***. 

### Automatic layer renaming
To prevent layers from being overwritten in a single export, all layers in your Ps/An timeline will be given unique names. Multiple layers with the same name, they will have incrementing numbers added to their names.

```
- Snake
- Skull
- Snake
- Snake
```

Will become: 

```
- Snake 3
- Skull
- Snake 2
- Snake 
```

### Timestamps
Adobe apps do a lot behind the scenes to cache what you need, but sometimes they fail to update when you replace footage. If you find that your renders fail to update, enable timestamps for the exporting app in [settings](./settings). Exported files will have a timestamp added to the end so the importing app sees it as a fresh file. 

The timestamp is made up of 2 digits for the year, month, date, hour, minute, second. 

`2020, July 30, 3:37:30pm` becomes `LayerName_200730-153730.swf`

<Screenshot 
    url="/timelord/icon/render.svg" 
    alt="Render selected layers" 
    toolbar />

## Photoshop → Ae

Photoshop files may contain timeline or still layers. Timelord will first check which kind of file it is. If it has a timeline, it will export selected layer groups as PNG sequences. If the project is static, selected layers will be exported as PNGs with transparency. 

Once finished exporting, After Effects will batch import the layers and add them to the open Ae comp. If layers already exist in the project or comp, the footage will be reloaded. 

Blending modes will also be transferred with exported layers when adding layers to a comp. If a layer already exists in a comp, it will not be added again. 

::: tip Render range
The length of the png sequence is determined by the frame range of the Ps timeline. Because files are overwritten with each export, this also means it is possible to export only a range of frames and leave those outside the frame range unaffected.
:::

<Screenshot 
    url="/timelord/icon/render.svg" 
    alt="Render selected layers" 
    toolbar />

## Animate → Ae

Selected layers or groups will be exported as individual .swf files. 

After layers finish exporting, After Effects will batch import the layers and add them to the open Ae comp. If layers already exist in the project or comp, the footage will be reloaded. 

## After Effects → Ps/An

<Screenshot 
    url="/timelord/ae-compress.png" 
    alt="Export Ae comp reference" 
    width="220px"
    left />

Render the open Ae comp as a video for reference as you draw. From Ae, buttons are color-coded to which app it will be sent. The open Ae comp will be rendered, compressed as an h.264 and imported into Ps/An.

Ae rendering is done with a selected output module first,  then recompressed to h.264. Lossless is the default but may be reassigned from the dropdown. If you create a new output module and do not see it in the list, right-click the panel to reload and update the dropdown. 
<br />

### Error: macOS cannot verify the developer of "ffmpeg"
FFMPEG is used to compress the rendered MOV into an MP4 that Ps and An may playback, but due to increased security measures, Mac OS will ask for your approval before running it the first time.

Steps to [allow FFMPEG](allow-ffmpeg)

We are not installing or running anything harmful on your machine. Promise.


### Color shift
h.264 is a requirement for Animate and keeps temporary file sizes low for Photoshop. This is a lossy compression and there will be a color shift. Do not color pick this layer and expect accurate color representation.

::: warning Ps fails to update
If the imported video in Ps is unchanged upon re-rendering, restart Photoshop or enable [timestamps](settings.html#add-timestamp-to-render-filename) for renders from Ae. The way Ps stores video data in memory is related to the file name and it cannot always tell when you overwrite a video file. 
:::

## Manual export path

<Screenshot 
    url="/timelord/ae-manual.png" 
    alt="Manual export path" 
    width="220px"
    right />

If you prefer knowing exactly where things are saved each time or wish to use your own file management system simply uncheck **Render to project file path** in the Ae panel's **Options** (or right click > **Customize**). Each time you export with Timelord, it will ask where to save files. Exported files will still be auto-imported into Ae.

### Manual path fallback

If you don't have an Ae project saved or Ae is not open, Timelord will ask you where you want to save the files. This may be used to bypass the Ae auto-import if you are handing off layers to a compositor. 


## Relative path process

Timelord uses the open Ae project file as the anchor from where to export files. This is to support the idea of *project folder templates* –where all of your assets are stored in the same location each time. As long as you consistently use the same project folder structure you shouldn't need to change this. 

<Screenshot 
    url="/timelord/ae-relative.png" 
    alt="Relative export path" 
    width="220px"
    right />



### Setting the relative path

By default, this relative path is set to a **Timelord** folder in the same parent folder as your project file. With an Ae project saved and open, click the relative path selector to choose where Timelord should save files in relation to the Ae project file. 

A common location to store renders is one folder up from the Ae project and into an Assets folder:

`../Assets/Timelord`


### Sub-folders

Exported files are then grouped by type into sub-folders by their file type.

```
├── 📂 Timelord
│   ├── 📂 MOV
│   │   │   └── Ae comp name.mp4
│   ├── 📂 PNG
│   │   │   └── Ps layer name.mp4
│   ├── 📂 SWF
│   │   │   └── An layer name.mp4
│   ├── 📂 SEQ
│   │   ├── Ps Layer name
│   │   │   │   └── Ps Layer Name_0000.png
│   │   │   │   └── Ps Layer Name_0001.png
│   │   │   │   └── Ps Layer Name_0002.png
```

### What is this ./ stuff?

This might be completely new and that's ok. This is a short-hand for how computers view folders and their relation to one another. This is how Timelord knows how many folders to go up and over to save files.

```bash
/   = Root directory
.   = This location
..  = Up one directory
./  = Current directory
../ = Parent of current directory
../../ = Two directories up
```

<br />

<Screenshot 
    url="/timelord/ae-relative.png" 
    alt="Open render folder" 
    width="220px"
    right />

## I lost my files 😩

If you misplace where the relative path is located on your drive, **SHIFT** click the relative path picker to reveal this folder on disk.

<br />

<Screenshot 
    url="/timelord/icon/render-all.svg" 
    alt="Render timeline" 
    toolbar />

## Render full timeline (An only) 
Some workflows may prefer to export a SWF of your full timeline rather than individual layers. This button is [hidden by default](settings.html#customize-toolbar). Idea via [Johannes Fast](https://www.instagram.com/johanimation)


<Screenshot 
    url="/timelord/icon/send-proj.svg" 
    alt="Import PSD/FLA" 
    toolbar />

## Import full PSD/FLA files

This behavior goes against some of the proposed Timelord conventions but hey, it's your project. Work how you want. These buttons are [hidden by default](settings.html#customize-toolbar).

### PSD → Ae

When importing a PSD to Ae, you will be asked how to import:

- As a single layer of footage
- As a mullti-layer comp
    - Great for importing a prepped and final PSD. 
    - Note, this is a one way import and changes made to the PSD will not update.