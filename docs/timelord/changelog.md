---
title: Changelog
---

# Changelog

<div class="changelog">
<a href="https://www.battleaxe.co/lookup" class="nav-link action-button" target="_blank">Download updates</a>

## 1.1.4
Released: 2022-12-26

### Changed
- Migrate off Gumroad license authentication (hotfix required for any keys purchased from gumroad.com)

## 1.1.3
Released: 2022-09-02

### Fixed
- Unable to transfer with Ae 22.6+

### Changed
- Removed comp rendering from Ae to Ps/An because it's a lot better in [Anubis](../anubis/workflow.html#send-to-app)

## 1.1.2
Released: 2021-05-23

### Fixed
- Ps: `Left of undefined` error when saving to external drives on OS X
- Ps: better stability with live text layers

### Changed
- Ae: Added note about open source used

## 1.1.1
Released: 2021-03-15

### Fixed
- Periods in Ps/An file names
- Blank layers from Ps if nested in groups

## 1.1.0
Released: 2021-03-05

### Added
- Ps: Trim transparent pixels from static PSDs
- Ps: Live text on static PSDs
  - SHIFT click exports text layers as PNG
- PS: Static PSD mask support
- An/PS: New Frame + SHIFT adds a new frame with a duration of 2 frame

### Changed
- Rendering from An/Ps now includes the file name to reduce overwriting renders from other source files with the same layer names
- Updated timestamp format
- Ps: Static PSD with an artboard will have the background set to transparent so each PNG will have transparency

### Fixed 
- Ae: exported mp4s of comps names with periods 
- Ps: Error `layerName.includes is undefined` on static PSDs
- Ae: asking where to save files if no comp open
- Windows open folder path
- Ps: static layer names are set to unique to avoid overwriting
- An: Error `Too much recursion`
- Ps: Re-render path error
  
## 1.0.5
Released: 2020-12-16

### Added
- Debug logging to better diagnose compression errors

### Fixed
- Ps: Error `layerName.includes is undefined`
- Ps: Error on line 813 when user cancels sequence export


## 1.0.4
Released: 2020-12-14

### Added
- An: frame names sent to Ae as markers
- Ps/An: rename layers to be unique before exporting to avoid accidental render overwriting
- Ae: loading indicator when compressing

### Changed
- Improvements to FFMPEG's color compression
- Ae: Alert when trying to render and compress a non-video format
- Icon updates for cleaner display in OSX Big Sur

### Fixed
- Ae: conflict between [Lazy 2](https://aescripts.com/lazy/)
- Ps: layer names with slashes are replaced with dashes but won't error
- Ae: error on line 545 when exporting reference MP4 - canceled items
- An: importing MP4 removes alert about the layer length


## 1.0.3
Released: 2020-11-16

### Fixed
- Failing to export a reference MP4 from Ae. **System error: macOS cannot verify the developer of "ffmpeg"**. Switching to a more universal build of FFMPEG. If flagged by your system, follow these steps to [allow FFMPEG](allow-ffmpeg).


## 1.0.2
Released: 2020-11-12

### Added
- PSD import into Ae may now be Layer Size

### Changed
- Ps: When importing an MP4, PSDs without a timeline will be converted in order to playback video
  

## 1.0.1
Released: 2020-11-09

### Fixed
- An: error - `runScript: Argument number 1 is invalid`
- Ae: enabling/disabling UI buttons failed to update until refreshing the panel


## 1.0.0 - Public release
Released: 2020-11-06


## 0.8.9
Released: 2020-10-25

### Changed
- Render Ae comp to Ps/An places the new mp4 at the correct time
- An render to Ae supports single frame layers
- Don't shift timeline on Ps duplicate frame
  
### Fixed
- Ps: img sequence check for masks was breaking import
- Ps: static layer better logic for grouped layers
- Ps: new Ae comp button works with static PSDs (default values are a 24fps, 5 second long comp)
- An: New Ae Comp measures the duration of the first layer to define the comp length
- An: reselect layers when exporting
- An: render timeline re-selecting frames
- Rename and increment layer names on export to avoid overwriting
- Only scale Ps renders if adding to Ae –skip if already in comp

## 0.8.8
Released: 2020-09-25

### Fixed
- Compression from Ae looks a lot cleaner
- Simplified the host calls 
- Removed An render all as a default
- Open render folder instead of switching to Ae if using a defined path render
- Ps: Skip the /SEQ subfolder when rendering to a defined path
- Ps: Message if no layers selected to render
- Settings switch from Default to All

### Changes
- Simplified strings
- Localized strings
  - Spanish
  - Portuguese
  - French
  - Italian
  - Russian
  - Japanese

## 0.8.7
Released: 2020-08-14

### Fixed
- Ps default buttons excluded Render Layer


## 0.8.6
Released: 2020-08-14

### Added
- Duplicate frame button

### Fixed
- Ps Render Layer button not responding to settings

## 0.8.5
Released: 2020-07-29

### Added
- Settings options to add timestamp to rendered filenames to work around Adobe caching issues

### Fixed
- An imported mp4 added at frame zero
- Ps render cancel if no layers selected
- An frame clear for multiple selected frames

## 0.8.4
Released: 2020-07-024

### Added
- An Render Timeline button for generating a single SWF instead of layers

### Fixed
- An Settings button not a function
- Icon sizes for Ps/An
- An export layers: skip hidden layers

### Changes
- Initial panel size increased to 250x166 for more visibility during onboarding 
- Adjust the padding between toolbar button tooltips
- Adjust the vertical threshold for tooltips displaying to the right 

## 0.8.3
Released: 2020-07-21

### Fixed 
- Ps/An toolbar removes scrolling when below 60px tall
- Settings export button
- Ps New Timeline undo back to the creation of doc
  
### Changes
- Context (right-click) *Configure* renamed *Settings*
- Context menu moves *Show Tooltips* to Settings menu

## 0.8.2
Released: 2020-07-15

### Fixed 
- An masks: reapplying masking to layers
- An masks: correct track matte layer in Ae
- Better logic if imported rendered layer is in the comp (Ps/An)
- Imported .mov into An sets layer to guide layer
- Selected An guide layers are skipped when exporting

### Added
- Render selected An symbol layers


## 0.8.1
Released: 2020-07-12

### Added
- An support for masks - its super rough

### Fixed

## 0.8.0
Released: 2020-07-09

### Fixed

- An export multiple layers exports separately
- An layer import order
- An 20.5 removed BridgeTalk support so reintroducing Amulets newFla() when An is open

### Changed

- ZXP icon to eyeball


## 0.7.9
Released: 2020-06-28

### Changed

- Ps reference mp4 imports as a video layer for better playback - still need to close and reopen the PSD to reload video

### Fixed

- Defined Comp export cancel removes comp render queue
- Ae comp render shouldn't require the AEP to be saved if using defined export path
- Dim path selector when unchecking **Render to Ae proj path**
- An removed error when processing empty frames like when box selecting

## 0.7.8
Released: 2020-06-18

### Added

- Toolbar customize modal

### Changed

- Removed keyboard modifier buttons - one button per func
- Ps ⇒ An import now opens imported footage or adds to the current comp

### Fixed

- Ps/An render order more accurate by checking prefs first
- ffmpeg not verified error
- Ps dup blank only for frame timeline layers
- An dup blank skip video layers

## 0.7.7

Released: 2020-06-08

### Added

- Ps layer coloring

## 0.7.6

Released: 2020-05-22

### Added

- Ps shift click New Layer to create a video layer
- Tooltip visibility preference from context menu

### Changed

- Removed the "wait just a second" progress bar
- Moved Duplicate Blank Layer to Shift click of Clear Frame

## 0.7.5

Released: 2020-05-21

### Added

- New PSD/FLA can now open Ps/An if closed (bridgeTalk)
- Listener starts automatically in Ae and Ps so renders may be sent without the panel being open
- Support for Ps video layer rendering
- Support for Ps static layer rendering in timeline

### Fixed

- An locked layer now prevents modifying layer
- An clear frame preserves frame durations instead of joining with previous frame
- Additional Ps progress dialog closing
- Ae comp rendering notice if output module unavailable
- Removed "Getting comp data" message

## 0.7.4

Released: 2020-04-21

### Added

- Shift click NEW LAYER to duplicate selected layer with blank frames
- Blank dup layers named with the suffix "_Timing"
- New PSD button shows a set of presets if Ae is not open or doesn't have an open comp to sample from
- License key entry

### Fixed

- PS new layer: Playhead pushed one extra frame
- PS new layer: background length one extra frame
- Removed inaccurate "Cannot connect to Ps" message
- Ps export now filters selected layers to only unique parent groups. Exports quicker and allows for Shift selection of frames
- Skipping selected background layers on timeline PSDs

## 0.7.3

Released: 2020-03-19

### Fixed

- Now checks the ruler units to avoid creating a Ps file 72x larger than necessary
- Ps export, catch if parent group is selected rather than a frame
- New PSD, add a single frame to the total length. Became evident in very short comps.
- Ps now listed in ZXP Installer

### Changes

- New icon design
- New Ps timeline work areas are set to 2 seconds maximum to decrease the likelihood of accidental long renders
- Moved tool tips down to more clearly view icon
- Ps New Frame moves the playhead forward one frame

## 0.7.2
Released: 2020-03-04

### Initial beta release

</div>