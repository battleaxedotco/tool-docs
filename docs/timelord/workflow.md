---
title: Workflow
---

# Workflow

## New Timeline

<Screenshot 
    url="/timelord/ae-timeline.png" 
    alt="New timeline" 
    width="240px"
    right />

Each of the panels has a **New Timeline** button that will create a new file in Photoshop or Animate. Rather than creating a new timeline from a predefined template, Timelord will pull data from the open After Effects comp and create a timeline to match the:

- Size
- Duration
- Frame-rate
- Name
- Background color
- Work area (Ps only)

<Screenshot 
    url="/timelord/toolbar-new.png" 
    alt="New timeline" 
    width="425px"
    center />

::: tip Animate not responding?
Photoshop and Animate's Timelord panels do not need to be visible in order to hear messages from other apps, but Animate does. As of CC2020, Animate does not load 3rd party tools until getting past the intro screen by at least opening a file. This means you must first create a dummy FLA before Timelord can talk between An and Ae.
:::

<Screenshot 
    url="/timelord/icon/comp-new.svg" 
    alt="New Comp" 
    toolbar />

### New comp

[Hidden by default](settings.html#customize-toolbar), it is also possible to create a new comp to match your open Ps/An timeline if you prefer to start projects by drawing. 



## Layer transfer

<Screenshot 
    url="/timelord/toolbar-render.png" 
    alt="Default An buttons" 
    width="425px"
 />

Arguably one of the most important aspects of Timelord is the ability to export files and automatically transfer them into After Effects. Additionally, the Ae comp may be rendered out and imported into Ps or An for use as a reference to draw over. 

[Read more about transferring layers](./transfer) →


<Screenshot 
    url="/timelord/ae-relative.png" 
    alt="Transfer art" 
    width="240px"
    right />
    
### Relative export

This is enabled by default. When **Render to project file path** is enabled, all exported files will be saved relative to the Ae project file. The relative path is set by the **Render path from the project file** folder picker directly below.

When this checkbox is disabled, you will be asked each time where to save. This will also happen if Ae is closed or the Ae project file has not been saved.

### What about still Ps layers?

As a bonus, it is also possible to export layers and groups from Photoshop to Ae –like [Overlord](http://battleaxe.co/overlord) for raster files. 

### [Importing a whole PSD/FLA](transfer.html#import-full-psd-fla-files)

Yep, that's possible too.

## Frame tools

<Screenshot 
    url="/timelord/toolbar-tools.png" 
    alt="Frame tools" 
    width="540px"
    center />

Most of Timelord's buttons are used to work with frames-by-frame animation. Buttons are designed to add new functionality and simplify common tasks while creating as much of a uniform experience between Photoshop and Animate as possible.

[Read more about each frame tool](./frame-tools) →