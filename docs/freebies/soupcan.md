# Soupcan

Faux 3D cylinder preset built from simple shapes for easy animation.

<Screenshot 
    url="/freebies/Soupcan.gif" 
    alt="Soupcan" 
    width="400px"
    center />


## Create new shape

### *From Presets & Effects panel*
Drag the preset into your comp to create a new layer with the shapes and controls.

### *From KBar*
Create a shape layer with anything in it (keyboard shortcut Q) then click the appropriate KBar button to replace the shapes and add controls.

## Controls

<Screenshot 
    url="/freebies/Soupcan-panel.png" 
    alt="Cylintroid controls" 
    width="400px"
    center />

- **Width**: The horizontal size of the shape 
- **Height**: The vertical size of the shape 
- **Invert**: Toggle the locations of the top and bottom colors
  - Useful when flipping the shape and the motion should continue rather than oscillate
- **Flip**: Simulation of rotation along the x-axis 
  - Negative values show the bottom edge of the shape
- **Anchor Position**: sets the location of the layer's anchor point to control how a cylinder expands. Center expands outward, Top expands down, Bottom expands upward. The top and bottom anchors will be set at the midpoints of the upper and lower faces of the cylinder.

## Examples

<a href="https://www.instagram.com/p/B5Xxy-eHXc_" target="_blank">
<Screenshot 
    url="/freebies/Soupcan-Toasty.png" 
    alt="Toasty promo" 
    width="600px"
    center />
</a>

<a href="https://adamplouff.com/10-years" target="_blank">
<Screenshot 
    url="/freebies/Soupcan-Roomba.gif" 
    alt="10 Years film" 
    width="600px"
    center />
</a>


## Installation

<a href="https://github.com/battleaxedotco/tool-docs/releases/download/soupcan/Soupcan.zip" class="nav-link action-button">Download Soupcan</a>

<pre>
├── 📂 Soupcan
│   ├── 📂 aep
│   │   │   └── Soupcan-Coin flip.aep
│   ├── 📂 Kbar icon
│   │   │   └── <a href="/freebies/Soupcan.svg">Soupcan.svg</a>
│   ├──  Soupcan help.html
│   ├──  <b>Soupcan.ffx</b>
</pre>


<Install 
    preset 
    name="Soupcan"
    :hosts="['After Effects']"
/>


## Changelog

### 1.1
Released: September 22, 2020
#### Added
- Separate Flip control
- Invert control for full rotation

#### Changed
- Updates to shape layering for more stable drawing at thin sizes

### 1.02
Released: September 15, 2020
#### Changed
- Renamed from `Cylindroid` to `Soupcan`

### 1.01 
Released: December 03, 2019
#### Added
- Color pickers (top, bottom, side)

#### Fixed 
- Bottom edge when vertical size goes negative (thanks to Jack from [2deadfrog.com](http://2deadfrog.com))

### 1.00 
Released: December 02, 2019
- Initial release