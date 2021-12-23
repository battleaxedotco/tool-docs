---
title: Color accuracy
---
# Ae Color Accuracy

::: danger Lossless might be giving you worng colors
TLDR: The name **Lossless** sounds it would render the most accurate colors possible, but the default **Animation** codec that is selected with the Lossless output module which will shift colors in the mid-saturations values when compressed. 

Render using **Uncompressed YUV** or **ProRes** before compressing an MP4 for the best color reproduction.
:::

<!-- <Video url="https://www.youtube.com/embed/LG5LXUXTNVQ" /> -->

## Lossless ≠ accurate (when compressed)

When you first install After Effects, the default output module is **Lossless**. This output module uses the **Animation** codec and produces a large video file that you may or may not be able to view outside of an Adobe app. 

This is a high quality format that works well when in a production setting (it can carry an Alpha channel and colors are handled correctly within the Adobe ecosystem), but it does not always compress well.

## Color comparison

<Screenshot 
    url="/anubis/Color-Animation.png" 
    alt="Animation codec" 
    zoom />

<Screenshot 
    url="/anubis/Color-Uncompressed.png" 
    alt="Uncompressed Codec" 
    zoom />

## Creating a new Output module

#### 1. Edit > Templates > Output Module
<Screenshot 
    url="/anubis/Color-01-template.jpg" 
    alt="Edit-Template" 
    width="469px"
     />

<br />

#### 2. Click **New** Output Module
<Screenshot 
    url="/anubis/Color-02-new.jpg" 
    alt="New-Template" 
    width="872px"
     />

<br />

#### 3. Click **Format Options…**
<Screenshot 
    url="/anubis/Color-03-format.jpg" 
    alt="New-Template" 
    width="598px"
     />


<br />

#### 4. Select either an **Uncompressed YUV** or a high quality **ProRes** codec

<Screenshot 
    url="/anubis/Color-04-options.jpg" 
    alt="New-Template" 
    width="482px"
     />


<br />

#### 5. Name the new output module (it doesn't need to be *Anubis Module*)
<Screenshot 
    url="/anubis/Color-05-name.jpg" 
    alt="New-Template" 
    width="874px"
     />


<br />

#### 6. Right-click to Refresh Panel and reload the output modules 
<Screenshot 
    url="/anubis/Color-06-refresh.jpg" 
    alt="New-Template" 
    width="354px"
     />


<br />

#### 7. Select your new output module
<Screenshot 
    url="/anubis/Color-07-select.jpg" 
    alt="New-Template" 
    width="355px"
     />


<br />

New Anubis renders from Ae will use the new output module with a more reliable codec prior to compression. As they say: *Garbage in, garbage out*.