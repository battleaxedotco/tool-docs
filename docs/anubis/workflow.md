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
In After Effects, the **Export path** doubles as a switch for an additional option to export to a folder relative to the .aep.

### Output module (After Effects only)
`Ps`/`An`/`Pr` will output an high quality MOV or AVI by default but `Ae` uses the render queue to define the file type exported. Select a high quality codec like **Lossless** or **ProRes**.

See [Color Accuracy](./color-accuracy) for more about output modules.

### Compress to MP4
Compression may be set to `Low`, `Med`, or `High`. These settings define the quality and file size. Select one or all of the settings to output multiple quality files.

Disabling this checkbox will export the larger sized video file without compressing an MP4.  

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

## Troubleshooting 

### Error: macOS cannot verify the developer of "ffmpeg"
FFMPEG is used to compress the rendered MOV into an MP4, but due to increased security measures, Mac OS will ask for your approval before running it the first time.

Steps to [allow FFMPEG](allow-ffmpeg)

We are not installing or running anything harmful on your machine. Promise.