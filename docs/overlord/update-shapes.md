# Update shapes

Twirling down a shape layer and selecting the path, rectangle, ellipse or group that contains one of these will allow Ae shapes to be updated when transferring from Ai. 

### Keyframing
Updating may be used to replace the current shape or auto keyframe to set key poses from Ai art layers. 

<Video url="https://www.youtube.com/embed/4FVAeOMRtME" />


## Color updates

New in v1.1, colors will now update when the parent group is selected. Including:

- Solid fill color
- Stroke color and stroke width
- Gradient colors and start/end points


## Parametric shapes

If your Ae shape is a parametric rectangle or ellipse, updating will measure the outer bounds of the new Ai shape and apply these dimensions –even if you move path points to break the uniform shape. Right-click the parametric in Ae to Convert to Bezier Path first.

## Available properties

Overlord looks for available Ae properties before updating. It will not create new strokes, fills or gradients if they are not present. This is intentional to prevent extra, un-keyframable properties. Use the **Add** dropdown to manually add new visual styling.