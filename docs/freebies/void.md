---
title: Void
---

# Void

<Video url="https://www.youtube.com/embed/L1D_R83Slh4" />

### Yeah but why?
Every time you create a null you are actually creating a solid layer that has to live in a **Solids** folder in the Ae project. Every time you import a project into another project this **Solids** folder comes with it, and if you import that project into another project you have 2 **Solids** folders, but in different locations unless you manually manage the project (which you wont do). You see where this is going. 

And don't get me started on the top-left anchor point. 🙄

**Void** layers are shape layers that do not exist in the project panel and make for a lighter project. They are truly empty. Stare into the void. 




<FreebieSubscribe />



## Controls

The interface is split into 2 areas, **Create** and **Replace**.

<Screenshot 
    url="/freebies/Void_ui.jpg" 
    alt="Void controls" 
    width="350px"
    outline round
    center />


### Create

These top 3 buttons are used to create the shape layer alternatives to **Null**, **Solid** and **Adjustment** layers.

#### New Void

Click to create a shape layer alternative to a **Null** layer. Any selected layers will automatically be parented to the new **Void** layer

<Screenshot 
    url="/freebies/Void-ZeroTransforms.gif"
    alt="Void controls" 
    width="450px"
    outline
    center />
Select a single layer and the new **Void** will be created at the anchor point of the selected layer. This will zero out the *Position*, *Scale* and *Rotation* of the selection.

<Screenshot 
    url="/freebies/Void-AutoParent.gif"
    alt="Void controls" 
    width="450px"
    outline
    center />
Select multiple layers and the new **Void** will be created at the mid-point of the selected layers.

#### New Variant

Click to create a shape layer alternative to a **Adjustment** layer. This is a comp-size, filled shape layer, with it's switch set to *Adjustment* layer. Why would this need to exist in the project folder?

#### New Volume

Click to create a shape layer alternative to a **Solid** layer. This is a comp-size, filled shape layer. A color picker will open at creation, but you may just as easily press ESC on your keyboard to dismiss it. 

::: tip Solids do still have a use
Keep in mind that some effects need absolute coordinates to draw correctly. If you use a shape layer (like a **Volume**), it will not be possible to transform the effect by transforming the layer. Create a Volume from the dockable ScriptUI panel, and hold the ALT/Option key to automatically precomp the new **Volume** layer. 

But at this point you are creating a new precomp in the project instead of a solid layer. And you might just want to keep using a Solid. Pick your poison. 
:::


### Replace
Legacy layers may be replaced in a comp or the entire project by clicking any of these buttons. 

After replacing, Void will check the Project panel to see if the source layers are used in any other comps, and if not, will delete them. Enjoy a lighter project. 


## Secret menu

With the UI open (from the docked ScriptUI panel or from KBar), there are 2 alternate Void creation options.

### Shift + ALT/Opt + New Void

`Ultra Void mode` : Create a new Void without pseudo effects or strokes.

Absolute nothingness.

### Shift + New Void 

A new Void will be created at the center of comp, just like when you have no layers selected, even if you *do* have layers selected. Useful for scaling layers from comp center even with odd placement.

---

## Included files

<pre>
├── 📂 Void.zip
│   ├── 📂 headless
│   │   │   └── Void-newVariant.jsx
│   │   │   └── Void-newVoid.jsx
│   │   │   └── Void-newVolume.jsx
│   ├── 📂 icon
│   │   │   └── <a href="/kbar/Void.svg">Void.svg</a>
│   ├── 📂 KBar
│   │   │   └── Void.kbar
│   │   │   └── <a href="https://aescripts.com/kbar/" target="_blank">download KBar.url</a>
│   ├── <a href="/freebies/void">Void manual.url</a> (link to this page)
│   ├── <b>Void.jsx</b>
</pre>

## Keyboard shortcut setup
Did you know that anything that exists as an Ae menu item may be set to a keyboard shortcut? Included with the download are 3 headless files that are used for creating the new layers. 

<Screenshot
    url="/freebies/Void-Keyboard.jpg"
    alt="Void controls"
    outline
    center />

- File > Scripts > Install Script
- Select the included Headless script files
  - The files will be copied to Ae's scripts folder (one up from ScriptUI Panels)
  - **OSX:** `/Applications/After Effects #version#/Scripts/`
  - **Windows:** `/Program Files/Adobe/Adobe After Effects #version#/Support Files/Scripts/`
- Restart After Effects
  - This will update the menu items
- Open the Ae **Keyboard Shortcuts**: Edit > Keyboard Shortcuts
- Search for **Void**
- Update the keyboard shortcut to replace the native functions, or create your own

<Install 
    scriptUI 
    kbar
    name="Void"
    :hosts="['After Effects']"
/>


<br />
<br />

## Changelog
<div class="changelog">

## 1.1.1

Released: 2023-05-31

### Fixed
- Separate dimensions now respects the Ae preference correctly

## 1.1.0

Released: 2023-05-18

### Added
- Create Voids and link to selected 2D position properties
- SHIFT + New Void: sets the Void position to comp center while setting it as the parent
- ALT/Opt + SHIFT + New Void: Creates a Void without any pseudo effects or strokes - `Ultra Void mode`

### Changed

- New Void adopts the name of a single selected layer
- ALT/Opt + New Void: Still creates a hidden Void at the bottom of the layer stack, but retains the previous selection

### Fixed
- Name incrementation logic improved


## 1.0.4
Released: 2023-01-03

### Added
- Void _roundness_ control
- Copying effects from nulls to voids when replacing

### Changed
- Zero _Scale_ and _Rotation_ when selecting a single layer
- New Void is inserted in parenting chain. If selected layer(s) have a single parent layer, this parent will become the parent of the new Void. 
- New Void layer is locked when holding ALT/Opt to create a hidden Void

## 1.0.3
Released: 2022-12-29

### Changed
- Logic to preserve the parenting hierarchy and only parent the top-most selected layers to a new Void layer

## 1.0.2
Released: 2022-12-28

### Added
- Support for zeroing 3D layers
- Support for finding the midpoint of 3D layers


## 1.0.1 
Released: 2022-12-28

### Fixed
- Replace solids was removing footage


## 1.0.0 
Released: 2022-12-27
- Initial release

</div>