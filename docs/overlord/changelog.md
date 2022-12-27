---
title: Changelog
---

# Changelog
<div class="changelog">


<a href="http://license.battleaxe.co/" class="nav-link action-button">Download updates</a>

## 1.25

Released: 2022-12-26

### Changed

- Migrate off Gumroad license authentication (hotfix required for any keys purchased from gumroad.com)

## 1.24
Released: 2022-05-23

### Fixed
- Extending the 1.23 macOS fix to Windows

## 1.23
Released: 2022-05-20
### Fixed
- (macOS 12) Sending shapes from Ae to Ai
- Switch button
- Opening multiple versions of Ae

## 1.22
Released: 2019-07-23
### Changed
- More intelligent handling of nested groups with center anchor point enabled
- Support for clipping masks with center anchor point enabled

## 1.21
Released: 2019-07-16
### Fixed
- Removed debug code that introduced errors on line 1920 and 1178 on text layers with center anchor point enabled
- Bug that tried to download updates like the updatable version

## 1.2
Released: 2019-07-14
### Added
- Both panels open is no longer required. Just open the one you like using. Thanks to Remco Jansen for the help on this.
- Native Ae guides support for CC2019+
- Support for **All Caps** text options by transforming text 
- Support for Ai symbols with Break Symbols button
- Text layer blending modes
- Deauthorize button for removing license key from a shared machine
- Holding SHIFT when pressing the New Artboard/Comp, does the inverse –new Ai comp button (orange) becomes a new comp button (purple). Thanks to Lars Jandel for the idea.

### Fixed
- Zeroing anchor points from v1.11 failed to fully move paths
- Center layer did not work on text layers
- Text not aligning when comp and artboard were different sizes
- Error when holding shift while a lower level property group is selected
- Text layer opacity
- Text layer rotation
- Holding shift when transferring text with a shape selected
- Prevent error when dropping file into panel

### Changed
- Reintroduced an old behavior with a preference when updating shapes to respect comp position or local layer position
- Moved parametric shape positions to the group transform rather than the shape itself

### Removed
- Updatable version has been removed for added stability

## 1.12
Released: 2018-03-20
### Fixed
- Accidentally left some debugging code in v1.11 release
- Error on line 1745
- Error on line 1331
- Error on line 1822

## 1.11
Released: 2018-03-20

### Changed
- Zeroing out the anchor point on paths and parametrics when Center Anchor Point is enabled
- Removed redundant fill opacity and replaced it with group opacity to reduce stroke transparency as well

### Fixed
- Error on line 1247 - clipping masks on compound shapes
- Error on line 1247 - clipping masks on groups. Single clipping groups on a layer become layer masks to simplify layers.
- Text along a path isn’t supported but now the won’t make transfers fail
- Better detection of group blending modes
- Better detection nested group opacity



## 1.10
Released: 2018-02-27
### Added
- Support for Ai gradient fills and strokes (yayayayaya)
- Update fill and stroke colors from Ai
- Support for clipping masks
- Factored in Ae layer Position/Anchor Point transforms when transferring to Ai

### Changed
- Hidden Ai objects within a group will not be transferred to Ae

### Fixed
- Text alignment
- Text leading (supported in Ae CC2017.2)
- Empty text layers broke the whole transfer
- Text not transferring from Ai CC2014
- Further corrected the addition of type name line breaks
- Smarter layer adding when Ae layers selected
- Moved parametric shape positioning into the parametric group itself to simplify keyframing and make converting to bezier much cleaner

**Thanks:** This update would not have been possible without the generous testing time of: Kyle Martinez, Jeff Salvado, Drew Jackson, Nicolas Doretti and Wojciech Piekarczyk.


## 1.03
Released: 2017-11-16
### Added
- Support for Ai Spot Color tints
- Preference to use New Artboard button to create a new Ae comp from an artboard’s dimensions

### Changed
- Created two install versions: Updatable and Stable. *Updatable* will allow the panel to be updated by opening Settings and downloading directly without needing to download, install or restart Ae/Ai. For users experiencing issues with the panel not displaying buttons immediately, the *Stable* version provides a less dynamic system of loading the required files. With *Stable*, Overlord updates will need to be downloaded manually from gumroad.com/library.
- Optimized Settings panel

### Fixed
- Accidentally added line breaks to text layer naming which broke expressions that used a layer name
- Unnamed shapes were naming their shape groups “null"

## 1.02
Released: 2017-10-24
### Added
- Preference in settings to disable app switching when pushing shapes to Ae. Some Windows users report Ae resizing when switching which is terribly annoying. 

### Fixed 
- Layer blending modes (Color Burn, Color Dodge, Soft Light, Hard Light, Saturation, Color) failed to transfer
- Compound paths failed when explode modifier enabled 
- Empty layer name when Ai=Ae when sending a single, unnamed layer. Now it defaults to an incremented layer name.
- Panel failed to resize on some systems (requires zxp install)
- Core CEP now overwrites existing bundle files
- Removed error when transferring Ai pattern fill/stroke


## 1.01
Released: 2017-10-18
### Fixed
A glitch with the licensing unlock


## 1.0
Released: 2017-10-18
Public release


## 0.27
Released: 2017-10-11
 
- Layer blending modes
- Error messaging system in panel removes the need for unnecessary popups
- ngAnimate has been added to the the core extension. Error messaging will appear as sharp cuts until the new zxp has been installed.
- Licensing system

### Fixed
- Removed error when pushing Ai art with no elements selected
- New Ray palette can now be the first Ae comp created
- Text justification was not factored in and become misaligned when transferred
- Removed an error when trying to update a path with a text object
- Catch for updating a path and having a keyframe selected

### Changed
- Ungroup exploded layer groups within a shape layer to make further ESL exploding more natural
- If no Ai elements selected do not switch apps on Push. Switching indicates a completed Overlord action.
- If no Ai swatches selected do not switch apps on Push Swatches. Switching indicates a completed Overlord action.
- If no Ai guides present do not switch apps on Push Guides. Switching indicates a completed Overlord action.
- Reversed the order that shapes pulled into Ai are created to match the top-down layer stacking order of Ae.


## 0.26
Released: 2017-10-10
### Fixed
- Download animation didn't turn off after downloading to indicate completion

### Changed
- Removed the default layer name in prefs in favor of pulling from the Ai layer name if shapes or groups are not named

## 0.25
Released: 2017-10-09
### Fixed
- I broke the Settings window while debugging like a moron

## 0.24
Released: 2017-10-09
### Fixed
- Accidentally disabled explode shapes
- Retains Ai layer name when transferring an unexploded selection
- **Center Layer** switch centers each layer when **Explode** switch enabled
- Text misalignment
- Ae layer build failed when an existing layer's property was selected, even if it didn't update anything 
- Preference switches more responsive click area
- Preference switches lit background color when enabled for cleaner visibility as a toggle switch


## 0.23
Released: 2017-09-30
### Added
- **Detect Parametric Shapes** is now on the main panel because it didn't make sense to be hidden in settings.
- Open the user folder with alt click on Update

### Fixed
- Zack Lovatt (the genius) found a crazy error that would break everything if you had never installed a Battle Axe tool before.

### Changed
- Removed Update Shape and Update Color buttons in favor of automatically updating a shape or color depending on whether or not you have an appropriate property selected.
- Visual tweaks to the preference panel


## 0.22
Released: 2017-09-25
### Fixed
- Creating a new doc from an AE comp created a 1920x1080 instead of pulling the comp data
- Accidentally removed the interface brightness adjustments



## 0.21
Released: 2017-09-22
### Added
- Support for CC2018 prerelease


### Fixed
- Removed the dumb *Installing the necessary files. Wait a sec.* message that got stuck on v0.20.


## 0.20
Released: 2017-09-18
(skipped some numbers to match the extension version)
### Added
- AI button to create a new artboard from the active AE comp
- UI colors respond to app interface brightness
- Dashes pushed back to Ai
- Support for Ai Greyscale color mode
- A janky animation to indicate update downloading


### Changed
- New artboard icon
- Detection between a line of text and a box of text


### Fixed
- Bug with trying to split a text layer into multiple shape layers
- Ellipse/Rect shape with an open edge still detecting as a parametric shape from AI
- Cleaned up copy on tooltips



## 0.06
Released: 2017-09-15
### Added
- Support for CC2014. Download **Overlord-Beta_0.19.zip** to install fresh if using a version of AE prior to 2015.3.
- App switching for all Push commands to ensure user sees what's happening
- New functionality to pull shapes from, as well as push to, the other app
- Explode top-most groups while building preference (previously only available by holding ALT)

### Changed
- Moved **Center anchor point to art** pref to panel
- Moved **Center art to comp** pref to panel
- Main icons

### Fixed
- New Ray Palette preference took precedence over being inside of an existence Ray palette comp
- Increment the naming of new Ray comps
- Support for CMYK color conversion. Still some color shift happening when mathematically converting color modes, but will switch the Ai doc prior to import on next version. 



## 0.05
Released: 2017-09-11
- Initial beta release

</div>