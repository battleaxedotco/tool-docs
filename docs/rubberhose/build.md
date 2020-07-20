# Build

<Screenshot 
    url="/rubberhose2/build-buttons.png" 
    alt="RH2 build buttons"
    width="800px" />

## RubberHose

<Screenshot 
    url="/rubberhose2/build-hose.gif" 
    alt="RH2 build buttons"
    width="500px" 
    center />


### Brief history
Way back in 2015 only a few options existed for character animation in After Effects. As if millions of voices suddenly cried out in terror for a  bendy line that worked how you imagined it would, RubberHose was born. That and much trigonometry. 

Time has past and a new Hose is here. One that learned a lot from the original and is stronger and wiser than before. 

### Build
A single click will create a customizable bendy line. A Hose group consists of a Hose layer and two controllers (Start and End). The End Controller (Wrist, Ankle, End) is typically furthest from the body and is animated most. On this End Controller is a set of Controls for adjusting the properties of the hose.

Open the Effect Panel (F3) to edit the Controls. 

Learning to work with hoses is easier done than read. Check out the [tutorial project](/rubberhose#tutorial-project) or some of the [tutorial videos](/rubberhose/tutorials).

### Controls
With many rig types you have to define the shape and properties of a limb before animating. With RubberHose everything remains live and can be adjusted during animation for the best results possible. RubberHose 2 has simplified and collected all major properties onto the Master Control (the one that's furthest from the body –Wrist or Ankle).

- Hose Length
Bend Radius
- Realism
- Bend Direction
- Controller Auto Rotate
  
For more detailed explanation, read up on the [Controls]() page.

### Settings
Maybe you always to turn up the Realism, maybe you like a lower Bend Radius, maybe you work at a smaller resolution and wish controllers could were smaller, maybe you wish hoses could be locked at the time of creation because you always end up clicking the hose instead of the controller. 

The more you use RubberHose the more of your own style you'll discover. To save yourself some time updating hoses every time you build, you can dial in your hose settings under the [Manage]() group.



## RubberRig
<Screenshot 
    url="/rubberhose2/build-rig.gif" 
    alt="RH2 build RubberRig"
    width="500px" 
    center />

### Creation

Create layers in After Effects or import from Illustrator and Photoshop.

- Turn on the Title Safe grid with the quote key (to the left of Return)
- Align the connection point of the two layers at the center of the comp
- Select the first layer of the chain (typically the upper leg or arm) 
- Select the end layer of the chain (typically the lower leg or arm)
- Press the New RubberRig button.
  
The art layers will be connected to a new set of controllers that function like the stretchable RubberHose controls you know and love. 

<Screenshot 
    url="/rubberhose2/build-rig-stretch.gif" 
    alt="Stretch RubberRig"
    width="400px" 
    left />

### Stretching
A defining feature of RubberHose is the stretching that happens when controllers are dragged beyond their Hose Length. Stretchiness has now made its way to layer rigging. 

The initial length of each layer is defined by the Segment Length control in the Effect Panel. Dial this in to the correct length if it's not exactly right after creation.

Some limb segments are longer than others and this length difference can be adjusted with the Center Bias control on the Center controller's Effect Panel.

<Screenshot 
    url="/rubberhose2/build-rig-alignment.gif" 
    alt="Align RubberRig"
    width="400px" 
    left />

### Alignment
Depending on how your art was created or aligned this automatic setup might not be perfect. Use each layer's Rotation property to align it's end to the corresponding controller. Use the layer's Anchor Point property to align where it joins the other layer.

<Screenshot 
    url="/rubberhose2/build-rig-backward.gif" 
    alt="Backward RubberRig"
    width="400px" 
    left />

### Glitch: backward rig
If your rig creation produces some kind of weird, inside-out rotation and alignment, it's probably because of the order in which you selected the layers. Be sure you select the top-most layer first (upper arm/leg) then the lower layer before creating the rig. 

Select layers in the right order or embrace the weird looking.


## RubberPin

<Screenshot 
    url="/rubberhose2/build-pin.gif" 
    alt="RH2 build RubberPin"
    width="500px" 
    center />

### About
If your idea is too complex for shape layers in [RubberHose](#rubberhose) and the art needs that smoooooooth bend (unlike [RubberRig](#rubberrig)), it's time for Puppet Pins. Loved and hated by many, it's now painless to connect a set of 3 pins and control them as easy as a hose and [stretchable](#stretching) like all rigging methods. 

One unique feature of RubberPin is the ability to use multiple controller/pin groups on a single layer. Yep, go crazy.


### Setting pins

<Screenshot 
    url="/rubberhose2/build-pin-create.gif" 
    alt="Build RubberPin"
    width="400px" 
    right />

RubberPin rigs are created by connecting the individual pin points to controller layers.

**NOTE** Pins are sorted from comp top to bottom (rather than based on creation order or selection order). So avoid arms that go straight out horizontally or bend upward. Put at least a slight downward angle on those limbs. 

- Using the PuppetPin tool (CTRL/CMD+P) add 3 pins to a layer –this adds keyframes at the same time
- Press **U** on the keyboard to reveal these new keyframes
- Select these 3 new keyframes (or the properties themselves)
- Click the button
- A set of controllers will be created and expressions added to the pin properties
- A fourth control will be created as a parent for the art layer and the end controllers*. Use this to scale, position and rotate the whole group

*note: the center controller should remain un-parented for correct positioning.



### Bend radius

<Screenshot 
    url="/rubberhose2/build-pin-starch.gif" 
    alt="RubberPin starch"
    width="400px" 
    right />

By default, Puppet Pins bend pretty smooth but it would nice to customize the quality of a bend like [Bend Radius]() on a hose. Sadly that's not how pins work. Along with Pins you can add Starch points. This allows a layer to be straightened in areas and curved in others. 

Play around with adding Starch near the end controllers or varying the Amount of a Starch point in the center. It opens up a new level of customization. 



### Linking pins to a hose

<Screenshot 
    url="/rubberhose2/build-pin-overlay.gif" 
    alt="RubberPin linked to hose"
    width="400px" 
    right />

Adding tattoos or complex texture to a hose was a lot of manual alignment in v1.0, but with RubberPin it's easy to bend layers and also link a set of pins to an existing controller rig group (this keeps layer count to a minimum).

- Select 3 pins (like normal)
- Then select a controller from the group to link to
- ALT+Click the new RubberPin button

At this point the you can set the pinned layer to preserve transparency or the original hose may be duplicated (CMD/CTRL+D) and used as a track matte to mask the alpha of the pinned layer.


## Controller naming

<Screenshot 
    url="/rubberhose2/build-naming.png" 
    alt="Controller naming"
    width="400px" 
    center />

No matter how you rig, everything built with RubberHose needs a name. Each new rig group will be named based on **Hose Name…** field and the **controller pairs** selector. Controller pairs are reused as characters typically have the same kinds of parts (arms, legs, necks).
Each time a hose or rigging group is created the name must be manually renamed, or it will be automatically incremented. This gives groups a unique name and avoiding expressions targeting the wrong layers.

Controller pairs may be rearranged, added and deleted in the list view to best suit your workflow. 