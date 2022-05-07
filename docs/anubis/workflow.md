---
title: Workflow
---
# Workflow

<Video url="https://www.youtube.com/embed/LG5LXUXTNVQ" />

Click the puppy dog icon to export and compress to MP4. That's about it. 

## Options
    
Customize how files are exported and handled.

<Screenshot 
    url="/anubis/Anubis-panel.png" 
    alt="Anubis" 
    right
    width="230px" />
    
### File name

This field updates automatically to reflect the comp, timeline or sequence name. Overwrite the output file name by entering text. 

::: tip File name incrementing
To avoid overwriting files, each additional file exported with an existing file name will have an incrementing number appended to the end of the file. 
:::

### Export path
Click to set a folder path for Anubis to export to each time. 

With no folder selected, Anubis will ask where to save files on each export.

### Relative path from Ae project (After Effects only)
<Screenshot 
    url="/anubis/RelativeSwitch.gif" 
    alt="Relative render path" 
    right
    width="230px" />

Within After Effects, the **Export path** may be switched between rendering to a defined folder path, or relative to the current After Effects project file. This is a valuable workflow for projects that utilize a consistent folder structure. 

#### Relative to the project folder

- A relative path of `./` would export to `/ProjectFolder/Ae/` –the same location as the `CurrentProject.aep` file
- A relative path of `../Exports/From-Ae/` would export to `/ProjectFolder/Exports/From-Ae/`

Imagine you have a project folder that looks like this:

```
├── 📂 ProjectFolder
│   ├── 📂 Ae
│   │   └── CurrentProject.aep
│   ├── 📂 Assets
│   ├── 📂 Docs
│   ├── 📂 Exports
│   │   ├── From-Ae
│   │   │   └── CurrentProject.mp4
```



#### What is this `./` stuff?

This might be completely new and that's ok. This is a short-hand for how computers view folders and their relation to one another. This is how Anubis knows how many folders to go up and over to save files.

```bash
/   = System root directory
./  = Current (AEP project folder) directory 
../ = Parent of current (AEP project folder) directory
../../ = Two directories up
```

<br />

### Output module (After Effects only)
`Ps`/`An`/`Pr` will output an high quality MOV or AVI by default but `Ae` uses the render queue to define the file type exported. Select a high quality codec like **Lossless** or **ProRes**.

See [Color Accuracy](./color-accuracy) for more about output modules.

### Compress to MP4
Compression may be set to `Low`, `Med`, or `High`. These settings define the quality and file size. Select one or all of the settings to output multiple quality files.

Disabling this checkbox will export the larger sized video file without compressing an MP4.  

::: tip Custom quality settings (advanced)
We think the default values have been tuned pretty well, but it is possible to set custom values for each of the presets if you are cool with a little bit of nerd work.

See [Custom quality](./custom-quality) for the process.
:::

### Delete original render file
Enabling this checkbox will delete the larger sized video file after compressing the MP4.

Disable to keep both video files.

### Open render folder
Enabling this checkbox will open the output folder in **Finder** or **File Explorer** to make finding your file easier.



## Export range
The range of an exported video may be defined by setting the work area of timeline in After Effects, Photoshop and Premiere. 

### After Effects
<Screenshot 
    url="/anubis/ExportRange-Ae.jpg" 
    alt="ExportRange-Ae" />

### Photoshop
<Screenshot 
    url="/anubis/ExportRange-Ps.jpg" 
    alt="ExportRange-Ps" />


### Premiere
<Screenshot 
    url="/anubis/ExportRange-Pr.jpg" 
    alt="ExportRange-Pr" />


### Animate

While Animate has a loop range to set the  playback area, these points are not visible to 3rd party developers. To select a range smaller than the full Animate timeline, select frames directly and the first and last frames will set the start and end of the export. 

<Screenshot 
    url="/anubis/ExportRange-An.jpg" 
    alt="ExportRange-An" />


## Drag and drop

<Screenshot 
    url="/anubis/Anubis-DragDrop.gif" 
    alt="Drop files" 
    left
    width="350px" />

Drag and drop files into the Anubis panel to recompressing video files or gifs using the Anubis compressor. 

New files will be created at the origin file path. The enabled compression settings within the panel will be used but 

<br />
