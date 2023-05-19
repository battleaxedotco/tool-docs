---
title: Custom quality
---
# Custom quality settings

Anubis utilizes a [Constant Rate Factor](https://trac.ffmpeg.org/wiki/Encode/H.264#crf) to define the compression level in [FFmpeg](./open-source). 

We think the [default settings](#default-crf-values) have been tuned pretty well, but it is possible to set custom values for each of the `Low`, `Med`, and `High` presets.

## Open the config settings

Open the Anubis `prefs.json` file by twirling down **SYSTEM**, then ALT/Opt-click **Learn Stuff** to open the support folder.

<Screenshot 
    url="/anubis/Anubis-alt-learn.jpg" 
    width="257px"
    alt="Learn Stuff" 
    
 />

 <br />

Navigate to `/Anubis/config/prefs.json` and open it in a text editor. 
<Screenshot 
    url="/timelord/offline-auth-nav.png" 
    alt="Render" 
    left
 />

## Set custom values

Look for the line `compressionLevels`.
```
"compressionLevels": {
    "high": 15,
    "med": 22,
    "low": 29
}
```

These CRF levels go from: 
- 0 (zero compression and high quality) 
- 51 (high compression and low quality). 

Update these numbers then save and close the prefs.json file.

Right-click the Anubis panel to `Refresh panel`. The quality settings will be updated and available for the next export.

## Default CRF values 

| Name | CRF |
|:--|:--|
| High | 15 |
| Medium | 22 |
| Low | 29 |