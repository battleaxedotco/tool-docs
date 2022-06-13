---
title:  Troubleshooting
---

# Trouble&shy;shooting

## Shapes are not transferring

1. The first thing to try is a system restart. That can clear out the connections between the apps.
2. Next, try sending a simple shape from Ai to Ae like a filled rectangle. This is to rule out any layer complexity that could be confusing Overlord. If that rectangle works it means your art is too complex. 
3. Check for [unsupported elements](#unsupported-elements).
4. Try and Object > **Expand** or Object > **Flatten Transparency** to simplify things

::: tip "Open Ai doc" error
That is a bit of a catch-all error if Overlord cannot understand something. Elements that are made to be "live" for ongoing editing can sometimes be confusing to Overlord and run this error.
::: 


## Ae window shrinks when transferring (Windows)
This is a normal behavior for Ae on Windows machines. When Overlord calls Ae to the foreground, it reverts to its last real size and top-of-screen maximize is ignored.

Instead of dragging the Ae window to the top of the screen to maximize, press `Ctrl + \` or by dragging the edges of the app. 

## Layer are not separated in Ae

### Check the **[Split modifier](./modifiers.html#split-layers)**

The default behavior for Overlord is to create all shapes on a single layer. To automatically split groups or shapes onto their own layer, be sure to enable this switch.

### Layers vs Groups

*Short answer:* Overlord uses Groups to most effectively organize shapes, and will ignore Ai layers when transferring. 

Since visual designers often use multiple artboards to organize frames, Overlord is built to prioritize a multi-artboard workflow. 

Overlord uses the top left corner of the active artboard to know where the 0,0 point of a comp would be and how to align shapes. 

::: tip Forget about Ai layers
You were probably taught that separating shapes onto layers was the most important thing when transferring to Ae. Not with Overlord.

Despite having some strong similarities, Ai and Ae handle things very differently. In Ai you can have shapes on multiple artboards within the same Layer. Then when you import this Ai file into Ae, it will only use the first Artboard and ignore the other artboards. Shapes that are outside of the first artboard are ignored. 

This is one of the key differences between Overlord and the native Ai file import.
::: 

## Shapes are misaligned 

### Does your file have multiple artboards?
Be sure to click on the active artboard to activate it before transferring to Ae. This tells Overlord to use the artboard's origin is the zero point for each shape.

### Are there groups inside of groups inside of groups? 

While groups are supported, and encouraged with Overlord, the deeper they get the more complex transform math needs to be calculated. This is where the misalignment happens.

<Screenshot 
    url="/overlord/Mega-groups.jpg" 
    alt="Deeply nested groups" 
    width="322px" 
    />

1. Select all problematic shapes
2. Un-group (`CMD/Ctrl + Shift + G`) multiple times until the shapes sit at the same level of the hierarchy
3. Select shapes that belong together
4. Group (`CMD/Ctrl + G`) shapes into a more readable collection of shapes and groups
   - Bonus points for naming your groups
5. Transfer to Ae

<Screenshot 
    url="/overlord/Simple-groups.jpg" 
    alt="Simple groups" 
    width="444px" 
    />


<br />


## Images are not transferring

Images are coming in v2. For now the only way to transfer images from Ai to Ae is to import the files the old fashioned way. 

The vision of Overlord v1 was to rebuild shapes in Ae without intermediate Ai files and importing so images were not a priority. As that became more of an interest, Timelord was a project designed to better crystalize the process of saving and managing files behind the scene (so you don't need to tell it where to save and can keep working fast). Now that we have a good idea of how to manage images, it will become a part of Overlord in the future. Intuitive file management is a lot tougher than it sounds.

Thanks for your patience!

## Multiple (beta) versions of Ae opening
The app switch is called by the app name and beta versions tend to confuse the switching code. Disable the app switch in the Overlord settings.

1. Right-click > Settings
2. ALT click Check for updates to open the settings folder
3. Navigate to `/Overlord/config/prefs.json` and open this file in a text editor
4. Change disableAppSwitching to `"disableAppSwitching": true,`
5. Save and close this file
6. Right-click > Reload the Overlord panel
   
Overlord will no longer try to switch to Ae.

## Unsupported elements

Overlord is limited by what After Effects can draw with shape layers. There are a bunch of elements that Ai uses that Ae does not have an equivalent. These will be skipped during transfer.

- Freeform gradients
- Gradient meshes
- Freeform gradients
- Patterns
- Tapered strokes

If your design requires any of these elements import you will want to import these layer with the traditional Ai import method. I often still use Ai layers for background layers and more complex elements that will be animated as a whole layer. The old and new ways work pretty well together.

**Tapered strokes:** Starting in CC2020, Ae now supports Tapered Strokes. Unfortunately, it is not possible to access this taper data in Ai. Until Adobe opens this up, it is not possible to transfer tapered strokes.

## Problems updating shapes

That process for updating shapes is a little particular and uses the same Push/Pull buttons but detects what's selected. You have to select the path or the path group itself to replace shapes. Without a path/rectangle/ellipse selected, Push and Pull will create a new layer.

[Video tutorial](https://youtu.be/8-HrJmfgjZU)

**Update multiple shapes:** Sadly, because of the hierarchy differences between apps and the lack of identification for shape elements, it's not possible to intelligently update multiple shapes at a time. Until IDs get added to all the elements in Ae, we’re stuck with updating one at a time.

## Gradient endpoints misaligned

<Screenshot 
    url="/overlord/Offset-gradient.jpg" 
    alt="Offset gradient" 
    width="286px" 
    left/>

If you find the gradient in points to be offset from the shape in Ae, select the shape in Ai, press G and redraw the gradient after transforming and then transfer.

There is a lot of matrix math is going on in Ai to figure out the position of gradient endpoints and if a shape is repositioned and rotated then Overlord gets confused. 

[Video tutorial](https://www.youtube.com/watch?v=xM2DhTNwfHc&feature=youtu.be&t=59)

<br />

## Mixed text styles or multiple fonts not transferring

It's not possible in any Adobe app to set stylistic options (font, weight, color, kerning, etc) on a per-character basis. But what you can do, is copy/paste with font styling preserved.

Transfer a text layer like normal, then highlight the text in Ai, copy, highlight the text in Ae and paste. 

It's a little bit of a workaround, but you should get the layer positioning from Overlord, then be able to re-apply the text and styling.

## Remove license key 

<Screenshot 
    url="/overlord/Deauth.jpg" 
    alt="Deauthorize Overlord" 
    width="314px" 
    left/>

When working on a shared computer or moving to a new machine you may want to take your license with you. 

Right click the panel to open settings. In the bottom right corner is a Deauthorize button. Click to remove the license key from the system. 

<br />

## Vector colors look wrong 

1. **Double check that the Ai file is not CMYK**
   
   Ae only supports RGB color and cannot accurately replicate the color the way Ai does with its print emulation. The best it can do is mathematically convert the colors. The way around it in Ai, change to File>Document Color Mode>RGB Color.

2. **Yes, Ai is RGB but color is still still wrong**

    The problem is probably the projects color profile. Check out this article on [color accuracy](./color-accuracy).

## Empty panel / no buttons

If the extension panel shows up blank there is a problem loading some of the code to display the UI.

<Screenshot 
    url="/overlord/Blank-panel.jpg" 
    alt="Blank panel" 
    width="480px" 
    />

### Are you on macOS?

#### Using dropbox?
Try turning off [Backup This Mac](https://aescripts.com/knowledgebase/index/view/faq/dropbox-macos-warning/)

#### Do you have an external GPU?

<Screenshot 
    url="/images/External-gpu.png" 
    alt="Blank panel" 
    width="200px" 
    left 
    />

1. Navigate to the Adobe application 
2. Right-click > **Get Info** or `CMD+I`
3. Disable **Prefer External GPU**
4. Restart the Adobe app


<br />

#### Delete the prefs file
1. Go to Finder
2. Pull down the GO menu
3. Hold the ALT key and Library will appear
4. Click to open the `/Library/` folder
5. Navigate to `/Library/Application Support/BattleAxe/Overlord/config/`
6. Delete `prefs.json`

### Are you on Windows?
Try deleting the preference file:
`C:/Users/**username**/AppData/Roaming/BattleAxe/Overlord/`

### Still not working?
Try uninstalling then reinstalling Ai/Ae.
