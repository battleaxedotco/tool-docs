---
title: Add-ons
---

# Add-ons

## Styles

### Tapered stroke 2020
<Screenshot 
    url="/rubberhose2/addons-taper2020.gif" 
    alt="RH2 styles - Tapered hose 2020"
    width="350px" 
    left />

Ae CC2020.1 made a lot of dreams come true by introducing **Tapered Strokes**. This improved style runs faster and allows for higher contrast between thick and thin.

Included with [v2.11](changelog.html#_2-11). Lookup and [download](http://license.battleaxe.co) the update, then [reset](manage.html#reset-everything) the script to install the update. 

<a href="./download/TaperedStroke-2020.zip" class="nav-link action-button">Download</a>

<br />

### The Steve Kirby pack

<Screenshot 
    url="/rubberhose2/addons-kirby.gif" 
    alt="RH2 styles - Steve Kirby"
    width="350px" 
    left />

Many thanks to [Steve](https://stevekirby.co.uk/) for creating these super high quality styles and sharing with all the kind people on internet.

<a href="./download/SteveKirby_RH2_Styles.zip" class="nav-link action-button">Download</a>


<br />

### [Installing styles →](./style.html#installing-a-style) 

<br />
<br />

## Hose Maker
<Screenshot 
    url="/rubberhose2/addons-hosemaker.gif" 
    alt="RH2 Hose maker"
    width="480px" 
    left />

[Kyle Martinez ](https://twitter.com/kyletmartinez) shares some really [amazing tools](https://gumroad.com/kyletmartinez). Together with [Hernan Torrisi](https://twitter.com/airnanan), they've put together a really good way to replicate the limbs of characters drawn in Illustrator. While it is not possible to convert a path into a hose, this does the next best thing. The script measures the path length, finds the controller positions and recolors the hose to match the art layer. This is a headless script to be used with a script launcher like [KBar](https://aescripts.com/kbar/).

<br />

*Option:* Hold ALT on the keyboard to reverse the controller order. Helpful if the art was drawn from the bottom up. 

It may be necessary to reposition the controllers within the comp to correctly align with the art. This depends on how the art was set up, how it was imported into After Effects, and transforms that may have been done after importing.

Hose Maker cannot replicate outlined shapes or tapered strokes from Illustrator. It's pretty magical, but AE can only do so much.

### Usage
- Convert an Illustrator layer to Shape Layer
- Select the desired hose and new Shape Layer
- Run the script
- Reposition control points as needed

<a href="./download/HoseMaker_1.0.zip" class="nav-link action-button">Download</a>

::: tip Install Script
<Install 
    script 
    name="Hose Maker"
    :hosts="['After Effects']"
/>
:::