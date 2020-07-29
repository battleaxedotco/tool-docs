# Changelog

## 0.8.5
Released: July 29, 2020

### Added
- Settings options to add timestamp to rendered filenames to work around Adobe caching issues

### Fixed
- An imported mp4 added at frame zero
- Ps render cancel if no layers selected
- An frame clear for multiple selected frames

## 0.8.4
Released: July 24, 2020

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
Released: July 21, 2020

### Fixed 
- Ps/An toolbar removes scrolling when below 60px tall
- Settings export button
- Ps New Timeline undo back to the creation of doc
  
### Changes
- Context (right-click) *Configure* renamed *Settings*
- Context menu moves *Show Tooltips* to Settings menu

## 0.8.2
Released: July 15, 2020

### Fixed 
- An masks: reapplying masking to layers
- An masks: correct track matte layer in Ae
- Better logic if imported rendered layer is in the comp (Ps/An)
- Imported .mov into An sets layer to guide layer
- Selected An guide layers are skipped when exporting

### Added
- Render selected An symbol layers


## 0.8.1
Released: July 12, 2020

### Added
- An support for masks - its super rough

### Fixed

## 0.8.0
Released: July 9, 2020

### Fixed

- An export multiple layers exports seperately
- An layer import order
- An 20.5 removed BridgeTalk support so reintroducing Amulets newFla() when An is open

### Changed

- ZXP icon to eyeball


## 0.7.9
Released: June 28, 2020

### Changed

- Ps reference mp4 imports as a video layer for better playback - still need to close and reopen the PSD to reload video

### Fixed

- Defined Comp export cancel removes comp render queue
- Ae comp render shouldn't require the AEP to be saved if using defined export path
- Dim path selector when unchecking **Render to Ae proj path**
- An removed error when processing empty frames like when box selecting

## 0.7.8
Released: June 18, 2020

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

Released: June 8, 2020

### Added

- Ps layer coloring

## 0.7.6

Released: May 22, 2020

### Added

- Ps shift click New Layer to create a video layer
- Tooltip visibility preference from context menu

### Changed

- Removed the "wait just a second" progress bar
- Moved Duplicate Blank Layer to Shift click of Clear Frame

## 0.7.5

Released: May 21, 2020

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

Released: April 21, 2020

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

Released: March 19, 2020

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
Released: March 4, 2020

### Initial beta release