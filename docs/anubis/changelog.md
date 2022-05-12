---
title: Changelog
---
# Changelog
<div class="changelog">


<a href="http://license.battleaxe.co/" class="nav-link action-button">Download updates</a>


## 1.1.0
Released: 2022-05-16

### Added
- Naming tokens
- Dynamic folder creation at `/`s in file names
- Background render
- Send to App
- Compression progress footer
- Multi-comp export (Ae)
- Compression resize to width
- User editable quality settings
- Premiere export preset selector

### Changed
- Relative path (Ae) defaults to `./` targeting the project file's folder
- (Ae) Output modules load when pressing `⟳` instead of with panel load
- Alt click folder picker to open the folder on disk
- Compression time footer stays on screen until mouse over

### Fixed
- `Open a timeline` bug
- Compression start happing out of order
- More stable non-english character support
- Countless other bugs and quality of life improvements 

## 1.0.4
Released: 2021-05-17

### Fixed
- Drive path and file name errors
- Catch illegal characters in file names
- `fallbackName is undefined` error
- An: `$. is undefined` error
- Not accepting license key if a space is pasted
- Support for `++` in file strings

### Changed
- Clicking inside file name box replaces placeholder with real text for easy editing
- Footer message if file path deleted
- Ae: basic support for multiple comp selection


## 1.0.3
Released: 2021-04-26

### Fixed
- OS X external drive support
- Path selection stability 

## 1.0.2
Released: 2021-04-21

### Fixed
- Error: when no project is open in Ae
- Error: console is undefined

## 1.0.1 - Public release
Released: 2021-04-20


## 0.5.5
Released: 2021-04-19

### Fixed
- Manifest tweaks

### Changed
- Language localization

## 0.5.3
Released: 2021-04-17

### Fixed
- Handling drive paths
- Filter . from file names

## 0.4.8
Released: 2021-04-15

### Fixed
- Ae: output modules not loading if panel is open when Ae opens
  
## 0.4.8
Released: 2021-04-15

### Fixed
- Underscores in file names 
  
## 0.4.6
Released: 2021-04-13

### Changed
- Loader animation .json files updated
- Footer compression time is now cumulative for multiple files
- Text to **MP4 Quality** for clarity

## 0.4.5
Released: 2021-04-11

### Added
- Multiple quality options for generating multiple files

## 0.4.4
Released: 2021-04-09

### Fixed
- Multiple folders opening on multi-file drop

## 0.4.3
Released: 2021-04-06

### Fixed
- File drop handling

## 0.4.2
Released: 2021-04-01

### Fixed
- File name incrementing

## 0.4.1
Released: 2021-03-31

### Added
- Multi-file drop

## 0.4.0
Released: 2021-03-27

### Changed
- Clearable icon for file name and export path

## 0.3.9
Released: 2021-03-26

### Changed
- Compression quality more accurate to file size and compression quality

## 0.3.8
Released: 2021-03-25

### Added
- Ae: Relative/absolute path switching
## 0.3.6
Released: 2021-03-23

### Added
- File name field
- Dynamic timeline name into file name field
- Absolute path field in all apps
## 0.3.4
Released: 2021-03-10

### Added
- Animate selected frame range export
## 0.3.3
Released: 2021-03-05

### Fixed
- Windows opening the Documents folder instead of the render folder 
- Ae: check if the .aep is saved to use CEP folder picker

## 0.3.2
Released: 2021-03-04

### Changed
- At smaller than 60px height the options are removed leaving a single button 

### Fixed 
- Ae: Setting the output module

## 0.3.1
Released: 2021-03-03

### Fixed 
- Black screen of doom
  
## 0.3.0
Released: 2021-03-02

### Changed
- Big refactor

## 0.2.0
Released: 2021-02-15

### Added
- Loader animations
### Fixed
- Double finder open 
  
## 0.1.7
Released: 2021-02-11

### Changed
- More native OS path selector

## 0.1.6
Released: 2021-02-10

### Fixed
- Windows premiere exporting

## 0.1.4
Released: 2021-01-17

### Fixed
- Don't delete the source file when dropping a file
- Add timestamp if option enabled when dropping a file

## 0.1.3
Released: 2021-01-05

### Added
- Support for Animate, Photoshop, Premiere
- Curves adjustment for more accurate color
- FFMpeg debug output

### Changed
- Line breaks in panel to prevent overflow
- Moved Timestamp to JS layer


## 0.1.2
Released: 2020-12-15

### Added 
- Placeholder Lottie loader
- MP4 quality picker
- Curves adjustment for more accurate color


## 0.1.1
Released: 2020-12-05

### Initial beta release

</div>