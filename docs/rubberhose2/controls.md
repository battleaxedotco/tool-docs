# Controls
Hose and rig controls are found on the end controller (where the majority of keyframing happens) under the effects panel –F3 on the keyboard.

Hose controls are  where characters become your own. Don't just accept the preset values, find the perfect balance of smush and snap bring your folks to life.

## Hose length

<Screenshot 
    url="/rubberhose2/ctrl-length.gif" 
    alt="RH2 hose length"
    width="350px" 
    right />

The main concept behind RubberHose is that a hose bends based on its length. A hose can be stretched beyond its defined length, but once the distance between controllers is less than the Hose Length, the hose will bend to get out of the way. 



## Bend radius

<Screenshot 
    url="/rubberhose2/ctrl-radius.gif" 
    alt="RH2 bend radius"
    width="350px" 
    right />

Every hose bends once the distance between controllers goes below the Hose Length. You have complete control over how sharp or curved the bend is (or anywhere in-between). 

- 0: straight lines with a single bend point
- 100: fully curved line with the bend spread across the whole hose.

Bend Radius can be pushed into negative numbers to create an overlapped loop, or past 100 to exaggerate roundness. 



## Realism

<Screenshot 
    url="/rubberhose2/ctrl-realism.gif" 
    alt="RH2 realism"
    width="350px" 
    right />

Anyone familiar with traditional IK knows well the snap that happens when a limb goes from bent to straight. This is 100% physically accurate, but accuracy isn't always appropriate in animation. 

With the Realism value you dial in how true to reality or soft and squishy you want the hose to straighten.  



## Bend direction

<Screenshot 
    url="/rubberhose2/ctrl-direction.gif" 
    alt="RH2 bend direction"
    width="350px" 
    right />

The direction or a bend is fully customizable and animatable. Set the direction at the start of animation and feel free to change the direction as you work. The transition from one side to another is taken care of for you. 

The intermediate values between -100 and 100 can be helpful when a character's move must be pushed into perspective. This foreshortening effect could be accomplished with a reduction of the Hose Length, but is easier controlled by thinking of the *Bend Direction* as a kind of multiplier. 



## Auto rotate

<Screenshot 
    url="/rubberhose2/ctrl-autorotate.gif" 
    alt="RH2 auto rotate"
    width="350px" 
    right />

On either end of a rig is a controller. These controllers may be parented to other layers (hands or feet) and forgotten about. Or sometimes you'll want these controllers to act as the parents of other layers. In order for these layers to feel attached to the hose you'll probably want the controllers to rotate automatically. 

These controllers may be rotated and keyframed like normal —the automatic rotation happens in addition to all that. 

If you don't need automatic rotation just switch it off in the RubberHose 2 effect panel. Disabling will save a tiny amount of render-time. 



## Stretch feedback

<Screenshot 
    url="/rubberhose2/ctrl-stretch.gif" 
    alt="RH2 stretch feedback"
    width="350px" 
    right />


In order to provide as much flexibility (yes, pun intended) as possible, hoses can stretch to any length beyond their Hose Length. As a friendly reminder that a stretch is happening, the controllers will change color. It's a small thing but can be very helpful for preserving the volume of a hose. 

If you don't care about this then feel free to disable Stretch Feedback in [settings](manage.html#settings). 



## Math stuff

<Screenshot 
    url="/rubberhose2/ctrl-bernie.gif" 
    alt="RH2 math stuff"
    width="350px" 
    right />



This is the spot dedicated to doing most of the fancy math that makes RubberHose work. Don't mess with this stuff. Seriously. 



## Center bias

<Screenshot 
    url="/rubberhose2/ctrl-bias.gif" 
    alt="RH2 center bias"
    width="350px" 
    right />



RubberRig and RubberPin both feature the ability to move the center point, but they aren't trying to draw a bendy shape layer (which makes things complicated). Creating this effect on a RubberHose layer is made possible by distorting the underlying shape but isn't as mathematically correct as the other systems.

This is still an experimental feature and may be enabled within settings. It's experimental because it currently causes some other features to break. Controller auto rotation will not be completely accurate, added centerpoints will not line up and complex styles tend to fall apart or get distorted. Be warned!!! 🦂