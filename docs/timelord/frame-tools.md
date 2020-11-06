# Frame tools

<Video url="https://www.youtube.com/embed/rNkUD5dboJs" />

Most of the panel real-estate in Timelord is devoted to frame-by-frame tools in Photoshop and Animate. Show or hide the tools that best support your workflow by right-clicking the panel > Customize. 

## Duration

Adjust the length of selected frames (yes, that means multiple selected frames) consistently between Ps/An.

<Screenshot 
    url="/timelord/DurationRoll.gif" 
    alt="Frame duration" 
    width="540px"
    center />

<Screenshot 
    url="/timelord/icon/frame-dur.svg" 
    alt="Frame duration" 
    toolbar />

### Frame duration 
Equivalent to dragging the end of a frame in Photoshop or SHIFT+F5 and F5 in Animate.

::: tip Shift+Click: +/- 10
For all frame duration tools, holding shift will increase or decrease by 10 frames rather than 1.
:::

<Screenshot 
    url="/timelord/icon/frame-roll.svg" 
    alt="Increase duration" 
    toolbar />

### Roll left / right

Based on the common method of editing video footage this will retain the overall length of the sequenced frames by adjusting the *edit point* between the currently selected and following frames.

::: warning Ps gotcha
Photoshop is unable to keep track of exactly how long each frame is. There is error detection when rolling an individual frame (if you attempt to roll past a single frame) but it is unable to accurately check for this when Shift+rolling. Keep an eye on the total length with rolling 10 frames at a time.
:::


## Frames

<Screenshot 
    url="/timelord/FrameTools.gif" 
    alt="Frame duration" 
    width="540px"
    center />


<Screenshot 
    url="/timelord/icon/frame-new.svg" 
    alt="Add frame" 
    toolbar />

### Add frame

Creates new blank frames after the currently selected frames. Any following frames will be pushed to make room for these new frames.

<Screenshot 
    url="/timelord/icon/frame-delete.svg" 
    alt="Delete frame" 
    toolbar />

### Delete frame

Removes the currently selected frame(s) from the timeline. Any following frames will be moved forward in time to where the deleted frame started.

<Screenshot 
    url="/timelord/icon/frame-dup.svg" 
    alt="Duplicate frame" 
    toolbar />

### Duplicate frame

Quickly create loops between matching frames. This button is [hidden by default](settings.html#customize-toolbar). Idea via [Jay Quercia](http://jayquercia.com/)

<Screenshot 
    url="/timelord/icon/frame-split.svg" 
    alt="Split frame" 
    toolbar />

### Split frame

Selected frame(s) will be split at the playhead. Following frames will not have their start time modified.

::: tip Isn’t this redundant?
This might seem like a duplicate of Photoshop's **Split at Playhead** timeline button, but Ps is unable to split when the playhead is sitting on the last exposure of a frame. This means splitting an on-2s frame into two on-1s isn't really possible.

Animate can split a frame with the **Add Keyframe** timeline button and F6, but in Timelord, the **New Frame** and **Split Frame** buttons are discrete to provide more clarity about what will happen when in the middle of the timeline.
:::

<Screenshot 
    url="/timelord/icon/frame-clear.svg" 
    alt="Clear frame" 
    toolbar />

### Clear frame

Erases all content within the currently selected frame(s) and leaves the empty frame in the timeline. Useful when paired with Split Frame or to just erase a whole frame quickly, this button saves a few steps to select all art within a layer and hit delete.

::: warning Ps playhead
In the same way Photoshop won't let you paint on a layer you can't see, it also won't let you clear a frame if the playhead is not on top of it. 
:::



## Layers

<Screenshot 
    url="/timelord/icon/layer-new.svg" 
    alt="New timeline layer" 
    toolbar />

### New timeline layer

Creates a new layer above the currently selected layer with a blank frame ready to draw. If the playhead is beyond frame 0 the new layer will contain 2 frames: one frame under the playhead and an empty frame extending up to the playhead. This enables immediate drawing.

<Screenshot 
    url="/timelord/icon/layer-dup-blank.svg" 
    alt="Duplicate blank layer" 
    toolbar />

### Duplicate blank layer

Duplicates the selected layer with cleared frames. This can often be useful to create a new layer based on the timing of frames in an existing layer (cleanup, tiedown, coloring, etc). Idea via [Taylor Jon Peters](https://tjpeters.ca/)

<Screenshot 
    url="/timelord/icon/layer-solo.svg" 
    alt="Solo layer" 
    toolbar />

### Solo

Unavailable in Animate and hidden in Photoshop.

This is primarily used for the automatic layer exporting system but is also included as a button. It is not as tightly integrated as the After Effect solo, but might help you. 

::: tip Animate soloing
When soloing layers in Animate it is possible to *add* to the solo'd layers by selecting additional layers and clicking again. You'll see some weird stuff going on with the layer names because, unlike Ae, there is nowhere to store the state of a layer's visibility so this data is stored in the layer name.

If the state of soloing becomes too unruly with all the layer renaming, Shift-click solo to reset all the layers to their original state and remove the extra layer naming.
:::

### Wait, solo is already in Photoshop?

In the Layers panel, Alt-Click a layer's eyeball to solo that layer. Tip via [JT DiMartile](https://variablemedium.com/).



## Photoshop only


<Screenshot 
    url="/timelord/icon/layer-new-video.svg" 
    alt="New video layer" 
    toolbar />

### New video layer (Ps only)

Similar to the [New layer](#new-timeline-layer) button. **Video layers** contain no frames to rearrange so what you paint is what you get. 

<Screenshot 
    url="/timelord/icon/onionskin.svg" 
    alt="Toggle onionskin" 
    toolbar />

### Toggle onionskin

Enable/disable onionskinning without diving through menus. 

Animate's onionskin toggle is not available to 3rd party developers but is available at the top of the timeline (Ctrl/CMD+Alt+O).


<Screenshot 
    url="/timelord/icon/onionskin-settings.svg" 
    alt="Toggle onionskin" 
    toolbar />

### Onionskin settings

Show the onionskin settings without diving through menus.


<Screenshot 
    url="/timelord/icon/size-double.svg" 
    alt="Toggle canvas double size" 
    toolbar />

### Toggle double size canvas

A shortcut to scale up/down the canvas and layers to double size while preserving pixelated edges. This is used if you prefer to draw with a pixelated brush at a higher resolution to make fills and clean-up easier. 

This workflow tip is from an [amazing article](https://medium.com/@joyybox/making-born-in-a-void-85e43d3376ec#b494) by Alex Grigg.

<Screenshot 
    url="/timelord/icon/frame-colors.svg" 
    alt="Frame colors" 
    toolbar />

### Frame colors 

Set the color of frames or layers for better organization. 