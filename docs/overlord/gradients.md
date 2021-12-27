# Gradients

New in Overlord v1.1 is support for Illustrator Gradients. 

### Is this a big deal?
Yep. The standard Illustrator file import does *not* support gradients at all –it just turns the layer grey. Through some fancy workarounds, it’s now possible. We all rejoice together. 

<Video url="https://www.youtube.com/embed/xM2DhTNwfHc" />


## Limitations

- Because of the complexity of the workaround, there is a limit of 8 colors on gradients. Additional color stops will be ignored.
- Gradient strokes are supported, but the additional methods of applying gradients (Along stroke and Across stroke) are not possible in Ae and will be ignored.
- Radial gradient aspect ratio will be ignored


## Misaligned end points

If you find your gradient misaligned, select the Ai Gradient tool (G shortcut) and redraw it. Why? If you rotate a shape then reposition that shape, the crazy matrix transformation going on which overrides the access to gradient positioning data.