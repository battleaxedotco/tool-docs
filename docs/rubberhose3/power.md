---
title: Power
sidebarDepth: 1
---

# Powering up rigs

<Video url="https://www.youtube.com/embed/sQDPZDoKzBg" />

The Essential Graphics Panel (EGP) is a powerful system inside of After Effects that allows properties inside of a precomp to become available in the parent comp. Precomps have always been reusable, but now these Essential Properties may act as overrides to existing values (colors, text, transforms, etc). If you have never explored EGP check out [this video](https://www.youtube.com/watch?v=Ku9LCNAV2pg).

For Rubberhose, this means it is possible to create a single character rig with as many controls, layers, mattes, as needed to make it look good, and then surface only the important controls. This also means a single rig may be used multiple times in the same comp. This is super powerful.


<Screenshot
    url="/rubberhose3/icon/rig-to-egp.svg"
    alt="Rig to EGP"
    toolbar />

## Rig to EGP

<Screenshot
    url="/rubberhose3/power-rig-to-egp.mp4"
    alt="Rig to EGP"
    video
    outline
    round
    center />

Click to add Rubberhose control and other properties to the Essential Graphics panel based on what you have selected.

#### With no layers selected

- *All Rubberhose controls* within the comp will be added to EGP
- This includes:
  - Controller positions and rotations

#### Selected layers

- Selection is a hose layer
  - The [hose controls](https://./controls) will be added to EGP
- Selection is any other layer (including Rubberhose controllers)
  - The layer *position* and *rotation* will be added to EGP

#### Selected properties

- Each property will be added to EGP (as long as they are supported by EGP)

This works the same as dragging properties into EGP but quicker.


<Screenshot
    url="/rubberhose3/icon/egp-to-rig.svg"
    alt="EGP to rig"
    toolbar />

## EGP to rig

<Screenshot
    url="/rubberhose3/power-egp-to-rig.mp4"
    alt="EGP rig"
    video
    outline
    round
    center />

1. Add a precomp with Essential Properties to the current comp
2. Click
3. All controllers and position properties will be recreated in this main comp using the original art

These new controllers will be parented to the precomp layer and drive the controllers inside of the precomp. Transform the precomp layer as needed and the controllers will be transformed as well. Being parented to the precomp means the controller positions will still sync up so what you see is what you get.

::: tip All position properties you say?
Yes. You read that correctly. This feature is not Rubberhose specific. Any position properties that are on the precomp as Essential Properties will be recreated in the main comp.

This includes Duik, Limber and any other type of controllers you have in your precomp. If it is a position property in EGP, it will get rebuilt.
:::

### Duplicate an EGP precomp

<Screenshot
    url="/rubberhose3/power-egp-dup.mp4"
    alt="EGP rig duplication"
    video
    outline
    round
    center />

The [Duplicate](./manage.html#duplicate) button has a secondary function to help with with EGP rigs.

 1. Select the EGP precomp
 2. Click Duplicate
 3. A popup will allow you to rename the duplicate
 4. The precomp and any child layers will be duplicated

::: tip Can I remove controllers?

Yes. If you end up with a bunch of extra controller in the main comp (like Start controllers that are parented to the body) that you will never animate, simply delete the controller.

You will get an expression error. Disable or delete that expression and the controller value within the precomp will revert to its previous location
:::

## Essential property rigging

<Video url="https://www.youtube.com/embed/RwZvUzXzQTI" />

We encourage you to make friends with the EGP panel. It will make your work-life better. 


<Screenshot
    url="/rubberhose3/icon/bake.svg"
    alt="Bake hoses"
    toolbar />


## Bake hoses

Rubberhose draws paths with math, and a comp can slow down with a lot of hoses to calculate. Once your animation is mostly locked (this process is easily undone using **Unbake**), click to convert all expressions to keyframes on each frame.

All live paths expressions will be disabled and editing the positions of the controllers will not adjust any hoses.

It is still possible to edit the style of a hose and any additional layers that are controlled by the hose path.


<Screenshot
    url="/rubberhose3/icon/unbake.svg"
    alt="Bake hoses"
    toolbar />

## Unbake hoses

Where **Bake** converts live expressions to keyframes, **Unbake** deletes all of the path keyframes and reverts the hose into its live state.

This process may take a while depending on how long your comp is. This is because of how Ae removes keyframes one-by-one. Just be patient.
