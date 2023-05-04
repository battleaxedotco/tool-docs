---
title: Style
# sidebarDepth: 2
---

# Hose styling - WIP

<Video url="https://www.youtube.com/embed/wTumec0YZzk" />


## Preset library

<Screenshot
    url="/rubberhose3/style-panel.png"
    alt="Style panel"
    width="320px"
    outline
    round
    left
 />


Modeled after the **Effects & Presets** panel in Ae, the Preset library displays all installed presets. Presets are simply `.ffx` files and can belong to 2 types that live together in the preset library.

<Screenshot
    url="/rubberhose3/icon/style-icon.svg"
    alt="Style preset"
    toolbar
    width="30px" />

### Style presets 

Hoses are built on shape layers and a style preset is a combination of:

- Various shape layer elements (strokes, fills, trims, ellipses, etc)
- Layer styles
- Effects

Styles are used to change the appearance of a hose layer from a bendy line to something custom. A collection of styles are included with Rubberhose 3, and new styles may be installed and shared.

<Screenshot
    url="/rubberhose3/icon/bend-icon.svg"
    alt="Bend preset"
    toolbar
    width="30px" />

### Bend presets

The way a hose bends is defined by the [Hose controls](build.html#hose-controls). A Bend preset is a collection of pseudo effects and values that quickly shape how a hose bends. These presets do not affect the visual appearance (color, thickness, etc) of a hose, may apply:

- The number of bends
- Their roundness
- Parametric animation of bends
- Additional expression controls and pseudo effects

Bend presets *do not* adjust the Hose length or Realism values

<br/>


## Included presets

<Screenshot
    url="/rubberhose3/style-core-presets.png"
    alt="Style presets"
    outline
    round
    center
 />

<!-- <ImageGrid :tiles="[
    {
        name: 'Tapered hose',
        text: 'The most requested feature in RubberHose history. The Tapered Hose is the simple way to add shape variety to arms and legs. The fat end may be shifted by to the opposite end with a negative value in Taper %.',
        url:'/rubberhose2/styles-taper.png'
    },
    {
        name: 'Basic hose',
        text: 'Standard hose that is created by default. Sometimes you need to reset everything.',
        url: '/rubberhose2/styles-basic.png'
    },
    {
        name: 'Edge highlight',
        text: 'Highlight created with an Offset Paths, Trim Paths, and Dashed Stroke. Highlight dashes may be customized.',
        url: '/rubberhose2/styles-edge.png'
    },
    {
        name: 'Finger nail',
        text: 'Tap on those rectangle devices without any extra layers. Adjust the location of the fingernail and it follows the animation. Nail and finger colors are changed with the hose Fill as Stroke colors.',
        url: '/rubberhose2/styles-fingernail.png'
    },
    {
        name: 'Gradient',
        text: 'Simple gradient, complex gradient, that\'s up to you. The age of the single color hose is over thanks to the almighty Kyle Martinez. The ends of a gradient track to the controller points and colors may be added as needed. ',
        url: '/rubberhose2/styles-gradient.png'
    },
    {
        name: 'Popeye',
        text: 'For you youngsters who do not know, Popeye was this super strong dude who got hype on some spinach and had weird looking arms. This one is named after him. Inspired by cool stuff from Simon Tibbs.',
        url: '/rubberhose2/styles-popeye.png'
    },
    {
        name: 'Flat / round',
        text: 'Single layer hoses must be either Round or Flat ended. Sometimes you need pants or shorts and now that\'s easy. Remember, styles can be layered by holding ALT and clicking Apply.',
        url: '/rubberhose2/styles-flat-round.png'
    },
    {
        name: 'Round / flat',
        text: 'The exact same as Round-Start Flat-End, but in reverse',
        url: '/rubberhose2/styles-round-flat.png'
    },
    {
        name: 'Tight pants',
        text: 'Based on the Tapered Hose style with some extra controls to create a layered pants effect. The length of the pants can be shortened to create shorts.',
        url: '/rubberhose2/styles-tight-pants.png'
    },
    {
        name: 'Track suit',
        text: 'Break it up, break it up, break it up, break down.',
        url: '/rubberhose2/styles-tracksuit.png'
    },
    {
        name: 'TwoTone',
        text: 'Simple hose shape with additional color styling. The color variation is created by two layers of the same color and a Color Dodge blend mode. Manual adjustment is all you chief.',
        url: '/rubberhose2/styles-twotone.png'
    },
    {
        name: 'TwoTone dash',
        text: 'Stylistic alternate of TwoTone.',
        url: '/rubberhose2/styles-twotone-dash.png'
    },
    ]" /> -->


<Screenshot
    url="/rubberhose3/icon/save-style.svg"
    alt="Save style"
    toolbar />

## Save preset

<Screenshot
    url="/rubberhose3/style-save-style.mp4"
    alt="Save preset"
    video
    outline
    round
    center />

Reusing a carefully designed style or bend preset is an effective way to speed up future work.

Select a hose and click **Save Preset**. A **Save Animation Preset as:** dialog will open. Select where to save. You will probably see a warning like this informing you that you are saving a preset outside of the Ae presets folder. That's exactly what we are doing to make these files visible to the Rubberhose 3 extension.

We recommend saving to the `/Rubberhose 3` Presets folder but feel free to save it somewhere else if you want to share the preset.

The Presets will reload automatically and any new files will now be visible in the presets library.


<br/>



<Screenshot
    url="/rubberhose3/icon/copy-style.svg"
    alt="Copy style"
    toolbar />

## Copy style

If you make small changes to a style but not enough to save as a new preset file. Use copy/paste to quickly apply styles between legs, arms and other characters.

Select a hose and click **Copy style**. The **Paste style** button will light up with the name of the style.

<Screenshot
    url="/rubberhose3/icon/paste-style.svg"
    alt="Paste style"
    toolbar />

## Paste style

Once a style is copied into the Rubberhose 3 style clipboard it will be available to paste onto additional hoses. This clipboard is discrete from the Adobe or system clipboard and will not be overwritten.

Closing and reopening the panel, or right-click > Reload panel will clear this style clipboard.

## Installing presets

<Screenshot
    url="/rubberhose3/style-install-preset.mp4"
    alt="Install preset"
    video
    outline
    round
    center />

Additional style and bend presets may be installed by pasting `.ffx` files in the presets folder on disk, then **Reload Styles** or reopen the Rubberhose 3 panel.

Locate the presets folder by right clicking the panel > **Open styles folder.**

- **Win**: `C:\Program Files (x86)\Common Files\BattleAxe\Rubberhose3\styles\`
- **Mac**: `/Users/**username**/Library/Application Support/BattleAxe/Rubberhose3/styles/`
  - Open the `/Library/` folder by switching to Finder and opening the top **Go** menu. Hold the **Option** key and **Library** will appear.


::: warning Running a script popup
To keep you safe, After Effects has a default preference that alerts you whenever a script is trying to open something on your computer. This alert will popup every time you tell Rubberhose 3 to open the styles folder. 

To disable this, open After Effects **Preferences** > **Scripting and Expressions** and uncheck 
:::
### Organizing presets

Preset files and folders within the library folder are organized alphabetically. Create new folders and rename preset files to group presets near each other. Changes to the files and folders in the library will be reflected after `right-click > Reload Styles`.

::: tip Overwriting the default hose

When a new hose is created it will apply the **Rubberhose 3/Basic hose.ffx** style preset. So if you have a style you would like to use as default, save it and overwrite this **Basic Hose** file.
:::

### Resetting the included styles

The included styles live in the **Rubberhose 3** folder. To reset the included styles simply delete this folder and right click the panel > Reload panel. The included styles will be rebuilt.

