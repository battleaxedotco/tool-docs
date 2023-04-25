---
title: Build
sidebarDepth: 1
---

# Building hoses

<Video url="https://www.youtube.com/embed/rNkUD5dboJs" />


<Screenshot
    url="/rubberhose3/icon/new-hose.svg"
    alt="New hose"
    toolbar />

## New Rubberhose

<Screenshot
    url="/rubberhose3/build-new-hose.mp4"
    alt="New hose"
    video
    outline
    round
    center />

Hoses are the foundation for everything in Rubberhose and this is the quickest way to create a hose. Click to create a hose group with 3 layers:

- End controller
- Start controller
- Hose

The new hose will be created using the values in the [Settings](./settings) area.




<Screenshot
    url="/rubberhose3/icon/path-to-hose.svg"
    alt="Path to hose"
    toolbar />

## Path to hose

<Screenshot
    url="/rubberhose3/build-path-to-hose.mp4"
    alt="Path to hose"
    video
    outline
    round
    center />

In addition to creating a new hose at the center of the comp, it is also possible to convert a path drawn with shape layers into a hose, or transfered a vector art path from Illustrator with [Overlord]([https://www.battleaxe.co/overlord](https://www.battleaxe.co/overlord)).

#### Inaccuracies

Rubberhose approximates the shape of the path using hose math. Curves  probably won’t be perfect, S-curves will be a little off, and a realism value of < 100% means the bend position will be a little less sharp. After converting a path, adjust it to taste.

### 3 point paths

<Screenshot
    url="/rubberhose3/build-path-to-hose-gotcha.mp4"
    alt="3 point paths"
    video
    outline
    round
    center />
    
While it is possible to draw a bendy line using only 2 points and long tangents it is important to draw your path with 3 points. Rubberhose is designed to look for that middle point





<Screenshot
    url="/rubberhose3/icon/rubberrig.svg"
    alt=" New RubberRig"
    toolbar />
    
## New RubberRig

<Screenshot
    url="/rubberhose3/build-rubberrig.mp4"
    alt="RubberRig"
    video
    outline
    round
    center />

Rig a set of 3+ layers quickly by parenting them in a chain, select the final layer (a hand, foot, etc), then click. Rubberhose will math up the positions of each layer’s anchor point in order to:

1. create a hose with bend points for each layer
2. create bones between each bend point
3. parent each of the art layers to the bones

::: tip Why not path parent each layer to the hose?

[Parent to hose](./manage.html#parent-to-hose) is designed to link a layer's anchor point to a hose at a slidable spot. This is useful for attaching elements to hoses, but they will not stretch. Bones stretch between hose points so anything parented to a bone will also stretch.  
:::


### The parent chain

The way we communicate to Rubberhose where to set controls and bend points is by first creating a [forward kinematics](https://youtu.be/-0BO_jn6HFk?t=98) rig where the end of a limb is parented to the next segment, which is then parented to the next segment all the way back up to the root of the limb. 

```plaintext
├── Upper arm
│   ├── Lower arm
│   │   ├── Hand
```

3 layers are required to define at least a start, bend point and end controller. 

::: warning Why do I need a hand or foot layer?

The creation of bones is defined by the location of anchor points in the parenting chain. The last layer is required to tell Rubberhose where the end controller should be. Without the 3rd layer, Rubberhose would not know how long the last segment should be. You are free to delete it after creating a rig.
:::