---
title: Transfer Modifiers
permalink: /modifiers
---

# {{ $frontmatter.title }}

These tiny switches adjust how shapes are sent to After Effects. They have no effect on how shapes are sent to Illustrator.

## Split

<iframe width="560" height="315" src="https://www.youtube.com/embed/vfRHG_MywpE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Enabling this option create new layers for each top-level shape or group selected. Shapes nested within a group will be combined into a single layer, so ungroup shapes as needed in Illustrator.

Disabling this option will cause all shapes to be transferred to a single layer.

For more advanced and flexible exploding and merging of shape layers, be sure to use <a href="https://aescripts.com/explode-shape-layers/" target="_blank">Explode Shape Layers</a>.



## Ai → Ae

This is the core mechanic of Overlord. Select the shapes you want in Ai, regardless of layering, and transfer them to Ae. 

This process may be modified by the small switches next to Push and Pull to explode shapes to layers, detect parametric ellipses and rectangles, and more. 

### Modifier keys
Holding SHIFT will add selected AI shapes to the selected AE layers.


## Ae → Ai
Overlord is first of all a tool for After Effects, so priority is given to the transfer of Ai shapes to Ae. The vector editing tools in Ai are a lot easier to use than twirling menus in shape layers so Overlord allows you to send shape layers back to Ai for editing. This will effectively allow Illustrator to be used as the drawing interface for shape layers. 

### Modifier keys

Holding **ALT** will clear the AI document before adding sending shapes to it. It's a good idea to create a new dedicated document if this is how you plan to work. 