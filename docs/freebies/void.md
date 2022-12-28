---
title: Void
---

# Void

<Video url="https://www.youtube.com/embed/L1D_R83Slh4" />

### Yeah but why?
Every time you create a null you are actually creating a solid layer that has to live in a **Solids** folder in the Ae project. Every time you import a project into another project this **Solids** folder comes with it, and if you import that project into another project you have 2 **Solids** folders, but in different locations unless you manually manage the project (which you wont do). You see where this is going. 

And don't get me started on the top-left anchor point. 🙄

<Screenshot 
    url="/freebies/Void-Change my mind.jpg"
    alt="Nulls are awful" 
    full
    center />

**Void** layers are shape layers that do not exist in the project panel and make for a lighter project. They are truly empty. Stare into the void. 




## Download
<a href="https://battleaxe.lemonsqueezy.com/checkout/buy/980120bd-43ef-4b5d-b7f0-fdf956009cbd?embed=1&desc=0&discount=0&dark=1" class="lemonsqueezy-button action-button">Pay what you want</a><script src="https://app.lemonsqueezy.com/js/lemon.js" defer></script>



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