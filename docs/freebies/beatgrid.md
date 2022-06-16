---
title: Beatgrid
---

# Beatgrid

Based on a brilliant idea for a [BPM grid overlay](http://www.sandervandijk.tv/after-effects-features/timeline#1.2-bpm-grid) inside of Ae's timeline by [Sander Van Dijk](http://www.sandervandijk.tv/). Not nearly as integrated as a native solution, Beatgrid does provide enough to synchronize elements to 4/4 beats with markers and keyframes.

## Usage

<Screenshot 
    url="/freebies/Beatgrid-panel.png" 
    alt="Beatgrid" 
    width="350px" />

Controls are simple: `Tap` the tempo, `-`/`+` buttons to decrease/increase or type in the BPM if you know it. Click the `♩ ♩ ♩ ♩` button to create time markers.

An empty shape layer will be created with markers and keyframes in time with the tempo. Marker `1` (at the start of the timeline) starts the first measure. The next marker will be labeled `5` to mark the 5th measure. Like what you see in music recording apps. This pattern continues until the end of the comp.

<Screenshot 
    url="/freebies/Beatgrid-measures.jpg" 
    alt="Beatgrid markers" 
    zoom
    center />

### Beat view

Pressing `U` on the keyboard will reveal a set of keyframes aligned to the beats. Keys on the *Anchor Point* will count the measures and keys on the *Position* will count quarter notes:

1, 2, 3, 4 - 2, 2, 3, 4 - 3, 2, 3, 4 - 4, 2, 3, 4

<Screenshot 
    url="/freebies/Beatgrid-notes.jpg" 
    alt="Beatgrid markers" 
    zoom
    center />

## FAQ
### Can I snap layers to time?
Select the Beatgrid layer and press `U` on the keyboard to reveal the individual beats. Hold the `SHIFT` key when dragging a layer's start, end, or keyframes to snap to the revealed Beatgrid keyframes. This is a behavior of Ae and can be useful for aligning elements to the music tempo as well as any other alignment needs.

### Are the markers and keys aligned to frame? 
Nope. The point of this is to provide musical timing markers, and this means they will not always line up to your frame-rate. But that's ok. Using `SHIFT` to snap keys or layers will round to the nearest frame.

### Why not just have all the beats as markers on the layer?
Rather than destroy your timeline with markers or wreck the ability to use `J`/`K` keyboard shortcuts to navigate the timeline, there are multiple levels of detail. This is a choice for an extra step, but I prefer the ability to zoom out and see less musical detail. Similar to an audio DAW like Ableton, Audition, Logic.

### What's the point of all this?
When I start a project I will often have a target length in mind but I need to know what musical timing would fit based on the number of measures and how I want the music to progress or resolve through the piece. Whether you're writing music or searching for a track that will fit a project length, knowing a rough musical timing can be pretty helpful.


## [Download](https://battleaxe.gumroad.com/l/beatgrid)

<eula
    name="Beatgrid" freebie />

## Installation


<pre>
├── 📂 Beatgrid
│   ├── 📂 KBar icon
│   │   │   └── <a href="/freebies/Beatgrid.svg">Beatgrid.svg</a>
│   ├──  Beatgrid help.html
│   ├──  <b>Beatgrid.ffx</b>
</pre>

<Install 
    scriptUI 
    name="Beatgrid"
    :hosts="['After Effects']"
/>

<br />
<br />

## Changelog
<div class="changelog">

## 1.1 
Released: 2020-09-22
### Added
- Tap tempo button

### Changes 
- UI redesign
- Removed emoji for windows support
- Removed the measure button for a single type of marker creation

## 1.0
Released: 2020-01-14
- Initial release

</div>