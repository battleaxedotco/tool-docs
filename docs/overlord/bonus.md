---
title: Bonus actions
---

# Bonus actions

## Switch apps

<Video url="https://www.youtube.com/embed/GHr0yn9V9mE" />

It's simple enough to switch between apps with a CMD/ALT+Tab, but if you're juggling email, chats, and countless browser windows, it can be more than a single keystroke to switch. 

Clicking without a companion app open will launch the most recent version of it (if you have multiple copies of Adobe apps installed). 


## New artboard

<Video url="https://www.youtube.com/embed/0Bv7QVrkVdQ" />

Artboards in Illustrator may be any size, but it's a good idea to work at the same size and aspect as your comp in AE. This button will create a new artboard (or new document if selected in Settings) matching the size of the comp to send shapes to.

### Modifier keys
Holding SHIFT when pressing the New Artboard/Comp, does the inverse –new Ai comp button (orange) becomes a new comp button (purple). 


## Push swatches

<Video url="https://www.youtube.com/embed/CeIilwzimfU" />

Color swatches live in the swatch palette. Select a set of Illustrator color swatches and click to send to AE. There are a couple different transfer options available based on context and in [Settings]().

- Transfer to the current comp as a guide layer
  - This is the default action
  - The size and orientation is selectable in Settings
- Create a new [Ray](https://aescripts.com/ray-dynamic-color/) palette
  - Enabling this preference (along with having Ray installed) will create a new Ray palette comp
- Add to and replace a Ray palette
  - If you are currently inside of a Ray palette, sending swatches will add colors to the current palette
  - Holding ALT on the keyboard will create a new layer to add colors to –nondestructively replacing the palette


## Push guides

<Video url="https://www.youtube.com/embed/b89oi6L6eBU" />

Starting in CC2019+ and Overlord 1.2, vertical and horizontal guides may be transferred as native Ae guides. [Update video](https://youtu.be/AIjyUp2LvZw?t=18).

Non-vertical/horizontal guides (weird shapes) and when transferring to CC2018 and below will be transferred as guide layers (non-rendered layers) in Ae. 


## Break symbols

Unfortunately, Ai symbols are invisible to 3rd party tools like Overlord. This means they are skipped with transferring. By clicking this button, all selected symbols on the artboard will be converted to regular shapes and will be available to transfer. 

Because this process actually modifies your Ai file, it is a separate process rather than being an automatic function of transferring.

[Break Symbols](https://youtu.be/AIjyUp2LvZw?t=35) is available in Overlord v1.2+