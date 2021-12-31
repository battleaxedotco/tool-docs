---
title: Buttcapper
---

# Buttcapper

The stroke cap selector Adobe kinda forgot.

## Usage
Buttcapper is context sensitive, meaning it understands what you have selected and affects strokes based on this selection.

- If you select a shape, it will change the stroke
- If you select a layer, it will change all the strokes within the layer
- If you deselect all layers, it will change all strokes within the comp





<br />
<br />

### Set caps

<Screenshot 
    url="/freebies/Buttcapper-Caps.gif" 
    alt="Buttcapper set caps" 
    width="350px"
    right />

Click to set the stroke caps based on the layer or shape selection. Options are:


<Screenshot 
    url="/freebies/icon/buttcapper-butt.svg" 
    alt="Butt capp" 
    toolbar />

<div style="padding-top: 22px">Butt</div>


<Screenshot 
    url="/freebies/icon/buttcapper-round.svg" 
    alt="Round cap" 
    toolbar />

<div style="padding-top: 22px">Round</div>

<Screenshot 
    url="/freebies/icon/buttcapper-projecting.svg" 
    alt="Projecting cap" 
    toolbar />

<div style="padding-top: 22px">Projecting</div>


<br />
<br />


### Set joins

<Screenshot 
    url="/freebies/Buttcapper-Joins.gif" 
    alt="Buttcapper set joins" 
    width="350px"
    right />


**Alt** or **Shift** click any of the cap buttons to adjust the stroke joins. Options are:
<Screenshot 
    url="/freebies/icon/buttcapper-butt.svg" 
    alt="Butt capp" 
    toolbar />
    
<div style="padding-top: 22px">Miter</div>

<Screenshot 
    url="/freebies/icon/buttcapper-round.svg" 
    alt="Round cap" 
    toolbar />

<div style="padding-top: 22px">Round</div>

<Screenshot 
    url="/freebies/icon/buttcapper-projecting.svg" 
    alt="Projecting cap" 
    toolbar />

<div style="padding-top: 22px">Bevel</div>

<br />
<br />


### Maintain stroke width

<Screenshot 
    url="/freebies/Buttcapper-StrokeWidth.gif" 
    alt="Buttcapper maintain stroke width" 
    width="350px"
    right />


<Screenshot 
    url="/freebies/icon/buttcapper-strokewidth.svg" 
    alt="Maintain stroke width" 
    toolbar />
Click to apply the most optimized version of the [Maintain Stroke Expression](https://battleaxe.tumblr.com/post/101945073972/maintain-stroke-weight-expression) with the same logic as the rest of Buttcapper.

**Alt** or **Shift** click to remove the expression.


<br />

## Download
<a href="https://github.com/battleaxedotco/tool-docs/releases/download/buttcapper/Buttcapper.zip" class="nav-link action-button">Download Buttcapper</a>

<eula
    name="Buttcapper" />

## Installation


<Install 
    scriptUI 
    name="Buttcapper"
    :hosts="['After Effects']"
/>

## [KBar](https://aescripts.com/kbar/) setup
Since screen real-estate is so precious inside of Ae, and you may only use 1-2 of the buttons, it is easy to customize your interface with Kbar.

If you don't know about [Kbar](https://aescripts.com/kbar/), your productivity has been taking a major hit without even knowing it. Buy it, use it, thank me later.

<Screenshot 
    url="/freebies/Buttcapper-Kbar.png" 
    alt="Buttcapper Kbar" 
    width="450px"
    center />

### Step-by-step
- Right click the Kbar panel to open Settings
- Click **Add Button**
- Select **Run JSX/JSXBIN File**
- Navigate to the Buttcapper.jsx file (probably in the `After Effects\Scripts\ScriptUI Panels` folder)
  - If you stop right here, clicking the new button will open the whole Buttcapper panel 
- In the optional **Script Function** field type the name of the button. The available names are:
  - `butt`
  - `round`
  - `projecting`
  - `strokewidth`
- (optional) Click the **ICON** button to set a custom icon
- Drop down the top menu and select **PNG/SVG**
- Click the **BROWSE** button to locate the files included with the download
- Click **OK** to close the icon picker
- Click **OK** to close the script picker
- The new button will be added to Kbar 

<div style="position: relative; padding-bottom: 66%; height: 0; overflow: hidden; width: 100%; height: auto; margin-bottom: 16px;">
<video width="800" height="532" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" autoplay loop muted controls>
  <source src="/freebies/Buttcapper-KbarSetup.mp4" type="video/mp4">
</video>
</div>

## Changelog

### 1.5 
Released: September 15, 2020

#### Added
- Apply **[Maintain Stroke Width](https://battleaxe.tumblr.com/post/101945073972/maintain-stroke-weight-expression)** expression button
- Scripting formatting for easier use with Kbar
  
#### Changes
- UI simplification
- Icon redesign
- HiDPI icons

#### Removed
- Button color variation

### 1.1
Released: August 18, 2015
- Initial release