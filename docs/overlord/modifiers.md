# Transfer Modifiers

These tiny switches adjust how shapes are sent to After Effects. They have no effect on how shapes are sent to Illustrator.

## Split layers

<Video url="https://www.youtube.com/embed/vfRHG_MywpE" />

Enabling this option create new layers for each top-level shape or group selected. Shapes nested within a group will be combined into a single layer, so ungroup shapes as needed in Illustrator.

Disabling this option will cause all shapes to be transferred to a single layer.

For more advanced and flexible exploding and merging of shape layers, be sure to use [Explode Shape Layers](https://aescripts.com/explode-shape-layers/).



## Parametric shapes

<Video url="https://www.youtube.com/embed/BdR5DqKrq-E" />

All shapes in Illustrator are basic paths, but by enabling this option, the system will automatically detect Ellipses and Rectangles. 

Note: Vertical and horizontal scaling of a shape is fine, but any path manipulation or rotation to the shape will make it impossible for Overlord to detect these parametric shapes. If Overlord still isn't detecting shapes the right way, check out [Parametric Converter](https://gumroad.com/l/ARmYL).


## Center anchor point

<Video url="https://www.youtube.com/embed/yVmYUmT7Gxo" />

Enabling this option will automatically reposition the anchor point to the center of the shape(s).

Disabling this option will place the anchor point at the comp center. 

This is also available through the menu Layer > Transform > Center Anchor Point in Layer Content and with [Motion 2](https://gumroad.com/l/mtmo_motion).


## Center shape in comp

<Video url="https://www.youtube.com/embed/K4qtSqCcCoc" />

When working off an oversized artboard it might me desirable to simply send objects to Ae to be repositioned later.

Enabling this option will automatically reposition the anchor point to the center of the shape(s) and adjust the position to comp center. This will also enable the [Center Anchor Point](#center-anchor-point) option.