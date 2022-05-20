---
title: Changelog
---

# Changelog

<div class="changelog">

<a href="http://license.battleaxe.co/" class="nav-link action-button">Download updates</a>

## 2.13
Released: 2021-12-31
### Fixed
- Duplicating a RubberPin rig now updates the pin expressions
- Renaming a RubberPin rig now updates the pin expressions

## 2.12
Released: 2021-09-24
### Added
- [KBar](https://aescripts.com/kbar/) icon

### Fixed 
- Responsive (and less confusing) view of the registration screen
- UI aligned top left more consistently

## 2.11 
Released: 2020-06-10
### Added
- Style: **Tapered Stroke 2020** with support for new Tapered Strokes in Ae 17.1

### Fixed 
- Alphabetical sorting of styles

## 2.10
Released: 2019-01-03
### Fixed
- Updated Knob Knee and Edge Highlight style to remove errors in CC2019


## 2.09
Released: 2018-10-22
### Fixed
- Support for CC2019 Javascript expression engine
- Upgrading hoses flipped the direction of styles
- Scaling/flopping a RubberRig 


## 2.08
Released: 2017-11-16
### Fixed
- Tapered hose endcap. 2.07 moved some math to fix a controller rotation glitch but by doing that it broke the end cap of the Tapered Hose. This update fixes that and is no longer dependent on Auto Rotation to be enabled.  Reset the script in Settings to reinstall the style files.


## 2.07
Released: 2017-11-06
### Fixed
- Some users have report rotation jitter in the controller layers when Auto Rotate is enabled. This is a fix for that super annoying behavior. It has to do with the order Ae solves the math on some systems.


## 2.06
Released: 2017-09-22
### Changed
- Updated expressions on RubberRig to allow for rigs to scale to a parented layer. Parent the end controllers and leave the center controllers un-parented. 
- Updated expressions on RubberRig to allow for rigs to scale -100 on the X axis to flop an entire rig.

### Fixed 
- Updated Tapered Hose and Tight Pants style to correct for a use-case involving a high Realism value and the thickness snapping when controllers pass one another's Y-Position value.


## 2.05
Released: 2017-06-22
### Added
- [Match controller color][1] to layer label color. Be ultra organized. It’s fun. Thanks to [Kyle Martinez][2] for suggesting.
- Layer label colors are now selectable within the Settings menu. Thanks to [RenderTom][3], [Zack Lovatt][4] and [Kyle Martinez][2] for sharing his slick label settings code.

[4]: https://zacklovatt.com/
[3]: http://www.rendertom.com/
[2]: https://twitter.com/kyletmartinez
[1]: http://www.battleaxe.co/rh2-manage#match

### Changed
- RubberRig layer scale compensation. Prior to update, RubberRig was unable to correct for the scaling of art layers when creating an automatic rig size.
- Rearranged *Settings* panel to better reflect the new layer label color preference.

### Fixed 
- Refining the stability of interactions between controller layer order. Some users have noticed controller Auto Rotate flickering on and off -if you are having this problem and would like to help me test solutions, please email adam@battleaxe.co
- AutoFlop broke when *Auto Rotate Start* was enabled.
- AutoFlop to BodyMovin export now supported.
- Reduced AutoFlop unnecessary expression complexity.
- Updated all styles to support negative X value parent scaling for changing character direction.



## 2.04
Released: 2017-02-01
### Fixed
- Disappearing styles. A handful of users reported the magical vanishing of all styles when applying new styles. This glitch typically happened when using CS2017 on Windows with a stacked panel. If that’s your setup then you totally need this update!



## 2.03
Released: 2017-01-25
### Added
- Scale hose thickness with parenting for all included styles. 

### Changed
- Naming of *Round-Start Flat-End* style to Round-ButtCap01 and 02. Much shorter and non-dumb names.

### Fixed
- Sloppy code from last update (2.02) for Tapered Hose butt-caps. Everything worked great until you switched to a new set of controller names. Bad developer. Bad.
- After clicking a button in the *Manage* panel, focus is given back to the timeline. Small fix, but saves an extra frustrating click to get out of the RH panel.


## 2.02
Released: 2017-01-17
### Added
- ButtCap option on Tapered Hose style.
- Color pickers on TrackSuit style.
- Annoying alert when trying to RubberPin a shape layer. This is to avoid improper use the Puppet Tool. PreComp those shape layers or use imported layers.

### Changed
- When creating a new hose, the end controller will be selected by default.

### Fixed
- Expression universalization for included styles.
- Tapered and TightPants styles more accurately retain shape when raising the Realism property.
- Improved stability when using negative values for taper% on Tapered and TightPants styles.


## 2.01
Released: 2017-01-11
- Initial release

</div>