---
title: Getting started
permalink: /getting-started
---

# {{ $frontmatter.title }}

## New Timeline

<img :src="$withBase('/timelord/01_New timeline.png')" alt="Timelord - new timeline">

Each of the panels has a **New Timeline** button that will create a new file in Photoshop or Animate. Rather than creating a new timeline from a predefined template, Timelord will pull data from the open After Effects comp and create a timeline to match the:

- Size
- Duration
- Frame-rate
- Name
- Background color
- Work area (Ps only)

<img :src="$withBase('/timelord/01_New timeline_An.png')" alt="Timelord - new timeline">

The number of potential screen sizes and formats is only growing, so start with timelines that match your output comp specs.

<p class="callout info">
    Sending an Ae comp's info requires the Ae and Ps or An to be open and the Timelord panel visible somewhere in the app. It is possible to dock the panel in Photoshop and Animate, but as of CC2020, Animate does not load 3rd party tools until getting past the intro screen by at least opening a file. This means you must first create a dummy FLA before Timelord can talk between An and Ae.
</p>

## Frame tools

<img :src="$withBase('/timelord/01_Frame tools.png')" alt="Timelord - frame tools">

Most of Timelord's buttons are used to work with frames-by-frame animation. Buttons are designed to add new functionality and simplify common tasks while creating as much of a uniform experience between Photoshop and Animate as possible.

<p class="callout info">
    Read more about each frame tool
</p>

### Multi-select
[gif multiple frames within a layer extending]

Modifying multiple selected frames as a group feels intuitive within Ae and this behavior is key to how Timelord works. All of the frame modifier tools will affect multiple selected frames.

## Transfer art

<img :src="$withBase('/timelord/01_Transfer Art.png')" alt="Timelord - transfer art">

Arguably one of the most important aspects of Timelord is the ability to export files and automatically transfer them into After Effects. Additionally, the Ae comp may be rendered out and imported into Ps or An for use as a reference to draw over. 

<img :src="$withBase('/timelord/01_Transfer Art Ae.png')" alt="Timelord - transfer art">

<p class="callout info">
    Read more about each frame tool
</p>

## Export type

There are two ways to move files out of Ps/An and into Ae based on a option in the Timelord Ae panel.

### Relative export

This is enabled by default. When **Render to project file path** is enabled, all exported files will be saved relative to the Ae project file. The relative path is set by the **Render path from project file** folder picker directly below.

### Path export

By disabling the **Render to project file path** checkbox will ask you to select a save path every time you export.

This is the fall-back when a relative export is not successful. This could mean Ae is closed, or the project file has not been saved.

## What about static Ps layers?

As a bonus, it is also possible to export layers and groups from Photoshop to Ae –like Overlord for raster files. Timelord will detect if you are working with a PS timeline and if not, it will solo the selected layer and export a png to Ae. 

## What about importing the whole PSD/FLA?

From Ps or An, shift click the Export button and the whole file will be sent to Ae.