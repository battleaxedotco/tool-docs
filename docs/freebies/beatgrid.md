# Beatgrid

Based on a great idea for a [BPM grid overlay](http://www.sandervandijk.tv/after-effects-features/timeline#1.2-bpm-grid) for the Ae timeline by [Sander Van Dijk](http://www.sandervandijk.tv/). Though not as robust as an integrated solution, it does provide enough to synchronize elements to 4/4 beats with markers and keyframes.

## Usage

<Screenshot 
    url="/freebies/Beatgrid-panel.png" 
    alt="Beatgrid" 
    width="350px" />

BeatGrid's controls are very simple. Enter the beats per minute numerically or using the `-`/`+` buttons then click either the `♩` bor `♬ ♬` buttons. A new empty shape layer will be created with markers on it. Marker 1 (at the start of the timeline) represents the first bar of music including the length of the bar. The next marker will be labeled 5 because it is the 5th bar and the start of the next 4 bar phrase, and so on until the end of the comp.

<Screenshot 
    url="/freebies/Beatgrid-01.png" 
    alt="Beatgrid markers" 
    zoom
    center />

This in not the place for music theory, but BeatGrid provides two levels of granularity.

### Whole notes

Pressing U will reveal a set of keyframes aligned to the beats that are normally counted:

1, 2, 3, 4 - 2, 2, 3, 4 - 3, 2, 3, 4 - 4, 2, 3, 4

<Screenshot 
    url="/freebies/Beatgrid-02.png" 
    alt="Beatgrid markers" 
    zoom
    center />

### Quarter notes

For more subdivision that is still linked to the time of the music, 16th notes provide extra flexibility, but may also be hidden with `SHIFT + P` on the keyboard.

<Screenshot 
    url="/freebies/Beatgrid-03.png" 
    alt="Beatgrid markers" 
    zoom
    center />

## FAQ
### Can I snap layers to time?
Select the BeatGrid layer and press `U` on the keyboard to reveal the individual beats. Hold the `SHIFT` key when dragging a layer's start, end and keyframes to snap to the revealed keyframes. This a behavior of Ae and can be useful for aligning elements to the music tempo as well as any other alignment needs.

### Are the markers and keys aligned to frame? 
Nope. The point if this is to provide musical timing markers, and this means they will not always line up to your frame-rate. But that's ok. Using `SHIFT` to snap keys or layers will round to the nearest frame.

### Why not just have all the beats as markers on the layer?
Rather than destroy you timeline with markers or wreck the ability to use `J`/`K` keyboard shortcuts to navigate the timeline, there are multiple levels of detail. This is a choice for an extra step, but I prefer the ability to zoom out and see less musical detail. Similar to an audio DAW like Ableton, Audition, Logic.

### But why?
When I start a project I will often have a target length in mind but I need to know what musical timing would fit based on the number of measures and how I want the music to progress or resolve through the video. Whether you're writing music or searching for a track that will fit a project length, knowing a rough musical timing can be very valuable.

## Installation

<a href="https://github.com/battleaxedotco/tool-docs/releases/download/beatgrid/Beatgrid.zip" class="nav-link action-button">Download Beatgrid</a>

<Install 
    scriptUI 
    name="Beatgrid"
    :hosts="['After Effects']"
/>