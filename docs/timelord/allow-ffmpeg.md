---
title: Allow FFmpeg
---
# Allow FFmpeg

**FFmpeg** is used to compress the rendered MOV into an MP4 that Ps and An is able to play back, but due to increased security measures, **Mac OS** will ask for your approval before running it the first time. FFmpeg is used by most compression apps, but because Timelord is an extension and not a notorized and signed app from the *App Store*, you are seeing this error.

<Screenshot 
    url="/timelord/ffmpeg-trash.jpg" 
    alt="move ffmpeg to trash" 
    width="400px"
 />

## Locate FFMPEG
<Screenshot 
    url="/timelord/ffmpeg-shift.jpg" 
    alt="shift click to reveal" 
    width="320px"
    right
 />

**SHIFT-click** either of the Eyeball icons in the Ae Timelord panel to open a Finder window revealing FFMPEG within the extension (instead of digging through your hard drive).
<br />



## Open FFmpeg

<Screenshot 
    url="/timelord/ffmpeg-path.jpg" 
    alt="ffmpeg-path" 
 />
 <br />

<Screenshot 
    url="/timelord/ffmpeg-open.jpg" 
    alt="open ffmpeg" 
    width="400px"
    right
 />

After locating **FFmpeg** inside of Timelord extension, right-click or control-click to open it. This is different from doubling clicking and will show a new popup with the option to `Open` it. Click `Open` and **Terminal** should then launch and show a bunch of info about FFmpeg in the command line. 

Close **Terminal** and ***Timelord*** should be ready to export MP4s.

<Screenshot 
    url="/timelord/ffmpeg-terminal.jpg" 
    alt="ffmpeg in terminal"
    width="500px" 
 />
