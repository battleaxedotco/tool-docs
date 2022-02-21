---
title: Manage
---

# Manage

<Screenshot 
    url="/rubberhose2/manage-buttons.png" 
    alt="RH2 style buttons"
    width="800px" />

<div class="button-header">
<Screenshot 
    url="/rubberhose2/icon/Autoflop.svg" 
    alt="Add autoflop" 
    width="90px"
    toolbar />

## Autoflop
</div>

<Screenshot 
    url="/rubberhose2/manage-autoflop.gif" 
    alt="RH2 Styles"
    width="350px" 
    right />

Bend direction may be [switched](./controls.html#bend-direction) easily in all RubberHose rigging methods, but this process may also be automated. Click to create a new Autoflop layer that follows the *Start controller*. As the *End controller* passes through the threshold, the bend direction will flip. The AutoFlop layer may be rotated and it's threshold widened to customize the interaction. 

<div class="button-header">
<Screenshot 
    url="/rubberhose2/icon/Duplicate.svg" 
    alt="Duplicate hose group" 
    width="90px"
    toolbar />

## Duplicate
</div>

Select RubberHose layers (from one or several groups) and click to duplicate groups.

Hoses and Rigs have a lot of fancy math and naming going on under the hood to make everything work. For this reason it's not possible to just CMD/CTRL+D to duplicate a group. 

### Duplicate full rig
If you have a master null that serves as a parent to the full rig, select the parent layer and ALT+click the duplicate button to create a whole new rig and batch rename all child layers. 

### Name incrementing
Easily duplicate rigs for the opposite side of the body without renaming. Hose names ending in **_R** will be duplicated to end with **_L** (and vice versa). Hose names ending in **_F** will be duplicated to end with **_B** (and vice versa). 

::: tip Duplicate linked hose
While CMD/CTRL+D will not duplicate a full rig, it will create a duplicate hose that's still linked to the controllers. Use this for use as a matte for more complex compositing. 
:::

<div class="button-header">
<Screenshot 
    url="/rubberhose2/icon/Centerpoint.svg" 
    alt="Add center point" 
    width="90px"
    toolbar />

## Centerpoint
</div>

Create a new control layer at the bend point of a selected hose. This can be used for parenting elbows and knees or setting up a connection point for other rigs. And that new rig could have its own center point. Oh man, it could go on forever. Get wild. 

This center point is added automatically with RubberRig and RubberPin (and serves as the foundational mechanic for both new rigging methods). 

<div class="button-header">
<Screenshot 
    url="/rubberhose2/icon/Rename.svg" 
    alt="Rename hose group" 
    width="90px"
    toolbar />

## Rename
</div>

For the same reason  you can't just duplicate a hose group the way you would with normal After Effects layers, you can’t just rename them either. There's lots of internal naming and manually renaming all group layers and their hidden groups is not reasonable. 

Select at least one layer of the rig and click. A dialog will pop-up to enter an new hose or rig name and/or the controller pairs. All related layers across the comp will be renamed. 


<div class="button-header">
<Screenshot 
    url="/rubberhose2/icon/Visibility.svg" 
    alt="Toggle controller visibility" 
    width="90px"
    toolbar />

## Controller visibility
</div>

We need controllers to make the stuff work, but too many can clutter up a scene –not to mention all those motion paths. 

- Click to toggle visibility of selected controllers.
- Click to toggle visibility of all controllers while nothing is selected
- Alt+Click to reduce controller opacity to zero (rather than clicking the eyeball) with the same selection context. This allows motion paths to remain visible, but hide the controller itself.

<div class="button-header">
<Screenshot 
    url="/rubberhose2/icon/Select.svg" 
    alt="Select hose group" 
    width="90px"
    toolbar />

## Select groups/controls
</div>

Rigs can get complicated quickly and additional support layers that can easily become scattered throughout a comp. Select all rig layers to rearrange them as a group.

- Select a single layer and click to select all layers part of the same group.
- Select multiple layers to select all related layers.
- Alt+Click to select all controllers within a comp.



## Keyframe baking

<Screenshot 
    url="/rubberhose2/manage-baking.gif" 
    alt="RH2 Styles"
    width="350px" 
    right />

Math is hard. Computers are really good at it but if you throw too much at even the strongest system, things are going to slow down. You want this math to be dynamic while animating, but once things are locked take some of the load off.

<Screenshot 
    url="/rubberhose2/icon/Bake.svg" 
    alt="Bake RubberHose Expressions" 
    width="128px"
    toolbar />

### Bake
Less math = less computation time 😉

Select the hose groups and click, the system will get to work building a set of keyframes to take the place of all the math. It might take a little while to process through all of that (depending on the length of your work area), but it'll be worth it.

After the bake, you'll notice that your controllers are now locked so you don't move those anymore. You might also notice that the hose layer is not locked. This means you may still edit the hose style Independent of the animation. 

<Screenshot 
    url="/rubberhose2/icon/Unbake.svg" 
    alt="Bake RubberHose keyframes" 
    width="128px"
    toolbar />
    
### Unbake
Afraid of keyframe commitment? Clicking unbake will return hoses to their dynamic state. 

**Note: the unbaking process tends to run a little slow because of the way After Effects processes through a large collection of keyframes. You didn't do anything wrong.


## Admin tasks

<Screenshot 
    url="/rubberhose2/icon/Upgrade.svg" 
    alt="Upgrade RubberHose Expressions" 
    width="128px"
    toolbar />

### Upgrade hoses
Did you build some really killer RubberHose v1.0 rigs but wish to use the new features in 2.0? Click and all hoses in need of an upgrade within the current comp will have their inner workings rebuilt.

Styles will be preserved. Existing property values will be copied over to the new controls. Any keyframes on the effect panel will be preserved on the Keyframe Reference panel and may be copied to the new panel.

<Screenshot 
    url="/rubberhose2/icon/SampleLabel.svg" 
    alt="Match label colors" 
    width="50px"
    toolbar />

### Match controller to label color
Controller colors are defined in Settings, but if you're super organized, click to match the controller color to the layer's label color. 

Continue the ultra organization and use [Labels](https://aescripts.com/labels/). 

<Screenshot 
    url="/rubberhose2/icon/Help.svg" 
    alt="Open RubberHose online manual" 
    width="80px"
    toolbar />

### Learn RubberHose
Quick access to the pages you're reading right now.

It's easy to forget what buttons do from time to time, so keep on referencing this manual and make sure things work the way you expect it to.

<Screenshot 
    url="/rubberhose2/icon/Settings.svg" 
    alt="Show RubberHose settings" 
    width="80px"
    toolbar />

### Settings
Everyone has personal preferences. So if you like hoses to be created with a specific default Bend Radius, Controller Color or Realism value, set that up in here.

This is also where you see what version you are currently running. Check the [changelog](changelog) to make sure you are up to date.


## Reset everything

<Screenshot 
    url="/rubberhose2/manage-reset.gif" 
    alt="RH2 Styles"
    width="400px" 
    right />

The whole script may also be reset to factory settings from within the RubberHose Settings if you erase a file or things start acting weird.

Occasionally, there will updates and improvements to the [Style Preset](style.html#included-styles) files. When this happens you will want to replace all the dumb old versions with the shiny new versions. Check the [changelog](changelog) to make sure you are up to date.

**Note, resetting everything will also remove any custom styles you created. Back those files up. 