---
title: Transform Sammich
---

# Transform Sammich

<Video url="https://www.youtube.com/embed/cx95Vbo6m5Y" />

There are a lot of quick-rendering effects inside of Ae –but some of them are limited in controls. By stacking two **Transform** effects around these minimal effects it is possible to add a ton of variety to your designs. Watch through Jake's tutorial ↑ for details on setup; then automate the process with this scriptlet ↓ for [KBar](https://aescripts.com/kbar/). 

## The code
``` js
if (app.project.activeItem.selectedProperties.length > 0 && app.project.activeItem.selectedProperties[0].propertyGroup(1).matchName == 'ADBE Effect Parade') {
    
app.beginUndoGroup('Apply Transform Sammich');

var selectedEffects = app.project.activeItem.selectedProperties;
var effectsGroup = selectedEffects[0].propertyGroup(1);
var firstEffectIdx = selectedEffects[0].propertyIndex;
var lastEffectIdx = selectedEffects[selectedEffects.length - 1].propertyIndex;

var first = effectsGroup.addProperty('ADBE Geometry2');
first.name = 'Sammich Top'
first('ADBE Geometry2-0001').expression = 'effect("Sammich Bottom")("ADBE Geometry2-0002")';
first('ADBE Geometry2-0002').expression = 'effect("Sammich Bottom")("ADBE Geometry2-0001")';
first('ADBE Geometry2-0003').expression = '100';
first('ADBE Geometry2-0005').expression = '-effect("Sammich Bottom")("ADBE Geometry2-0005")';
first('ADBE Geometry2-0006').expression = 'effect("Sammich Bottom")("ADBE Geometry2-0006")';
first('ADBE Geometry2-0007').expression = '-effect("Sammich Bottom")("ADBE Geometry2-0007")';
first.moveTo(firstEffectIdx);
var second = effectsGroup.addProperty('ADBE Geometry2');
second.name = 'Sammich Bottom'
second('ADBE Geometry2-0003').expression = '100';
second.moveTo(lastEffectIdx + 2);

app.endUndoGroup();
} else { alert('Select effects to make a Sammich') }
```

## Scriptlet setup

::: tip KBar icon
Download all of our KBar icons [here](kbar-icons.md)
:::

<Install 
    scriptlet 
    name="Sammich"
/>
