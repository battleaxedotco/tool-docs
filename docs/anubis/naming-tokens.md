---
title: Naming tokens
---

# Naming tokens

New in _v1.1_, Naming Tokens are a set of short letter combinations following a `$`. Based on the system of file naming from [Cinema 4D](https://greyscalegorilla.com/cinema-4d-tokens-never-name-a-render-again/), it is possible to create a sequence that will generate dynamic names and folders for all your renders.

<Video url="https://www.youtube.com/embed/LG5LXUXTNVQ" placeholder />


## Dynamic file names 

It is now possible to include the time, date and other useful info in the file name. These elements are replaced automatically in the file name, so while it looks a little weird, on *April 4, 2022 at 11:42am:*

`$comp-$YY_$MM_$DD-$HH_$mm`

Becomes ↓

`UltraGoodAnimation-22_04_17-11_42.mp4`

## Dynamic folder names 

One of the most powerful parts of the system is the dynamic creation of render folders. By adding slashes to the file name field, Anubis will create sub-folders starting at where you point the export folder picker.

A common use is to create dated, daily render folders as a method of organizing the exports for each of your projects. 

`$YY_$MM_$DD/$comp`

Becomes ↓

`/21_12_18/UltraGoodAnimation.mp4`

::: tip Relative path (Ae)
Don't forget about [relative render folders](workflow.html#relative-path-from-ae-project-after-effects-only) from After Effects. This means each project can have its own render folder, with dated sub folders. 
::: 

## Token insert

<Screenshot 
    url="/anubis/NamingTokensInsert.jpg" 
    alt="Anubis" 
    left
    outline round
    width="328px" />

Next to the **File Name** field there is a little `[v]` button. Inside of here are some of the more common tokens available. Click to add it to the end of the file name. These are not all of the supported tokens, just a few of the most commonly used.

<br />

## All available tokens
| Sequence | Description |
|:--|:--|
| $prj | Saved file name |
| $comp | Comp or timeline name (Ae and Pr) |
| $fps | Frames per second |
| $app | Host app (Ae, An, Pr, Ps) |
| $range | Frame range being rendered |
| $YY | 2 digit year (22) |
| $YYYY | 4 digit year (2022) |
| $M | Month number (4) |
| $MM | Month number padded (04) |
| $MMM | 3 letter month name (Jan) |
| $MMMM | Month name (January) |
| $D | Day number (4) |
| $DD | Day number padded (04) |
| $DDD | 3 letter day of the week (Mon) |
| $DDDD | Day of the week (Monday) |
| $h | (1-12) Hour number (3:07pm = 3) |
| $hh | (01-12) Hour number padded (3:07pm = 03) |
| $H | (0-23) Hour number (3:07pm = 15) |
| $HH | (00-23) Hour number padded  (3:07pm = 15) |
| $m | Minute number (3:07pm = 7) |
| $mm | Minute number padded (3:07pm = 07) |
| $s | Second number (3:07:09pm = 9) |
| $ss | Second number padded (3:07:09pm = 09) |
| $A | AM or PM |
| $a | am or pm |

## Why so many date variations?

The way dates are displayed depends a lot on your preference. The many options are to provide as much flexibility as possible.

```
$M    = 2
$MM   = 02
$MMM  = Feb
$MMMM = February
```

## Do you take requests

If you would like a additional token added to the system, [contact](/contact) us and we'll see what we can do.