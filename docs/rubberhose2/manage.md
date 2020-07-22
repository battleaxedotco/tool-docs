# Manage

<Screenshot 
    url="/rubberhose2/manage-buttons.png" 
    alt="RH2 style buttons"
    width="800px" />

## Autoflop

Bend direction can be changed and transitioned easily with all RubberHose rigging methods, but this process may also be automated as a controller passes a threshold point by adding an AutoFlop. Click to create a discrete layer that follows the Start Controller. This AutoFlop layer may be rotated and it's threshold widened to customize the interaction. 

<Screenshot 
    url="/rubberhose2/manage-autoflop.gif" 
    alt="RH2 Styles"
    width="350px" 
    right />
In v1, autoflop was located within the Start controller and made visible with dedicated buttons, after quite a bit of use, it became clear that wasn't the best solution (when the start controller was parented the Autoflop angle shifted too). Now autoflop has been moved to its own layer that can be turned on and off with normal visibility controls. The falloff angle and disabling of autoflop can be found on the Autoflop layer itself.


## Duplicate
Select some RubberHose layers (from one or several groups) and click to duplicate groups. Hose names will be incremented automatically, along with a set of contextual incrementing (_R becomes _L and _F becomes _B). 

If you have a master null that serves as a parent to all of you rig, select the parent and ALT+Click to duplicate a whole rig and batch rename all child layers. 

Hoses and Rigs have a lot of fancy math and naming going on under the hood to make everything work. For this reason it's not possible to just CMD/CTRL+D to duplicate a group with its own set of controls –hose layers will always be connected. 

This new level of interconnectedness means that you no longer need the Linked Layer button from v1. Just duplicate a hose and style it up as you like. The linking of the hose length, bend direction, bend radius, etc will stay active. 


## Centerpoint
New to v2 is the ability to add a real layer to the bend point of a hose. Select a layer and click to add a new centerpoint. Rotation on this layer can also be disabled with the layer's effect panel if needed.

This can be used for parenting elbows and knees or setting up a connection point for other rigs. And that new rig could have its own center point. Oh man, it could go on forever. Get wild. 

This center point is added automatically with RubberRig and RubberPin (and serves as the foundational mechanic for both new rigging methods). 


## Rename
For the same reason that you can't just duplicate a hose group the way you would with normal After Effects layers, you can’t just rename them either. There's lots of internal stuff going on so you'll want to rename all layers in the group and update their inner-workings with the button. 

Select at least one layer of the group you want to rename and click. A dialog will pop-up to enter an new hose or rig name and/or the controller pairs. All related layers across the comp will be renamed. 


## Controller visibility
We need controllers to make the stuff work, but too many can clutter up a scene –not to mention all those motion paths. 

- Click to toggle visibility of selected controllers.
- Click to toggle visibility of all controllers while nothing is selected
- Alt+Click to reduce controller opacity to zero (rather than clicking the eyeball) with the same selection context. This allows motion paths to remain visible, but hide the controller itself.


## Select groups/controls
Rigs can get complicated with additional support layers that can easily become scattered throughout a comp. 

- Click to select all layers a part of the same group as the selected layer.
- Select multiple layers to select all related layers.
- Alt+Click to select all controllers within a comp.


## Keyframe baking

<Screenshot 
    url="/rubberhose2/manage-baking.gif" 
    alt="RH2 Styles"
    width="350px" 
    right />

Math is hard. Computers a really good at this stuff but if you throw a ton at even the strongest system, it's going to slow down. The way After Effects is designed doesn't make drawing hoses easy, so it takes a lot of math to make it work. The more hoses you add to a comp, the more math has to be done. RubberHose 2 has made a major leap in speed and now runs as fast as After Effects will allow, by removing any trace of redundant math. Sometimes it's still not fast enough.

### Bake
When you start looking for new hobbies to fill all that time you once used for animating because you have a ton of hoses in a scene, it's time to Bake.

Simply select a layers any number of hose groups you are not currently animating, click, and the system will get to work building a set of keyframes to take the place of all that crazy math. It could take a little while to process through all of that (depending on the length of your work area), but it'll be worth it.

Less math = less computation time 😘

After the bake, you'll notice that your controllers are now locked so you don't move those anymore. You might also notice that the hose layer is not locked. This means you can still edit the hose style of Independent of the animation. 

### Unbake
Baking animation might sound a little intimidating since it's hard to commit to the idea that everything is moving exactly how you like forever. Don't stress about it. Since the early planning stages of version 1.0, it has always been the central priority to keep everything live and fully editable. In the same way that baking is a single click operation, rest easy knowing that by selecting a single layer from baked groups and clicking, you will return a hose to the live state to further refine animation.

> Animation is never final, but deadlines eternal. 
> 
> – an imaginary smart person

**Note: the unbaking process tends to run a little slow because of the way After Effects processes through a large collection of keyframes. You didn't do anything wrong.


## Admin tasks

### Upgrade hoses
Let's say you used RubberHose v1.0 you made some really killer rigs and you like using them but you wished they ran faster and did all the cool stuff from version 2.0. Click this button. All hoses in need of an upgrade with the current comp will have their inner workings rebuilt.

Styles will be preserved. Existing property values will be copied over to the new controls. Any keyframes on the effect panel will be preserved on the Keyframe Reference panel and may be copied to the new panel.

### Match controller to label color
Controller colors are defined in Settings, but if you're super organized, click to match the controller color to the layer's label color. 

Continue the ultra organization and use [Labels](https://aescripts.com/labels/). 

### Learn RubberHose
Quick access to the pages you're reading right now.

It's easy to forget what buttons do from time to time, so keep on referencing this documentation and make sure things work the way you expect it to.

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