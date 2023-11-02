---
title: Hylian
---
<Redirect to="https://battleaxe.co/hylian" />

# Hylian

Duplicate selected layers with property links to all keyframed properties on the original layer. 

Sort of a *link to the past*.

<Video url="https://www.youtube.com/embed/3phCo_VijFA" aspect="1x1" />

<FreebieSubscribe />

## Usage

Click the button. There isn't much to it. 

Selected layers will be duplicated like normal. If the selected layer has keyframes, the keyframes on the duplicate layer will be removed and replaced with a relative property link.

### Great for:
- Mattes
- Layer order switching
- Any time you need multiple properties controlled by a single layer


::: tip Link properties without animation
Hylian uses keyframes to know what properties should be property linked –rather than the potentially hundreds of properties that could be keyframed wihtin a single layer). 

But if you haven't worked out animation yet just click one of the stopwatch icons and drag down to set a single keyframe on the visible properties. Hylian will know that you want those to be linked and then you can delete the keys on the original layer.
:::
### Why are the expressions unnecessarily long?

Expressions are pretty flexible and like most things in Ae, it's possible to do things several different ways. You could type:

- `comp("Comp 1").layer("Base").transform.position`
- `thisComp.layer("Base").transform.position`
- `thisComp.layer("Base").position`
- `thisComp.layer("Base")("ADBE Transform Group")("ADBE Position")`

Each of these are correct, but in varying degrees of relativity and support for other users. The last expression is relative to the current comp, and uses longer MatchNames for properties. This means if you handed your project to someone with a different language of Ae than you, it would still work ok –after all `position` is not the same word in non-english.

<Screenshot 
    url="/freebies/Hylian-expressions.jpg" 
    alt="Hylian expressions" 
    zoom
    center />

<br />

<eula
    name="Hylian" freebie />
## Installation
<Install 
    scriptUI 
    name="Hylian"
    :hosts="['After Effects']"
/>


## [KBar](https://aescripts.com/kbar/) setup
Screen real-estate is precious inside of Ae, so why not skip the panel and run Hylian from KBar.

If you don't know about [KBar](https://aescripts.com/kbar/), your productivity has been taking a major hit without even knowing it. Buy it, use it, thank me later.

<Screenshot 
    url="/freebies/Hylian-KBar.jpg" 
    alt="Hylian KBar" 
    width="450px"
    center />

### Step-by-step
- Right click the KBar panel to open Settings
- Click **Add Button**
- Select **Run JSX/JSXBIN File**
- Navigate to the Hylian.jsx file (probably in the `After Effects\Scripts\ScriptUI Panels` folder)
  - If you stop right here, clicking the new button will open the whole Hylian panel 
- In the optional **Script Function** field type: `link` – without this, the panel will open normally
- (optional) Click the **ICON** button to set a custom icon
- Drop down the top menu and select **PNG/SVG**
- Click the **BROWSE** button to locate the files included with the download
- Click **OK** to close the icon picker
- Click **OK** to close the script picker
- The new button will be added to KBar 



<br />
<br />

## Changelog

<div class="changelog">


## 1.0.1
Released: 2021-01-22
### Fixed
- Essential Graphics panel properties 
## 1.0.0
Released: 2020-12-22
- Initial release

</div>