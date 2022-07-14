---
title: Schmeeer
---

# Schmeeer

<Video url="https://www.youtube.com/embed/EYKCa8Q6ZVU" />

Because the [Echo effect](https://www.youtube.com/watch?v=N2qxF8V57FE) doesn't always make sense. Work with echo's more intuitively and by dynamically adding frames and adjusting the length based on the on-screen motion of a layer.

Dynamic smearing is driven by the on-screen motion in *position*, *rotation*, *scale* and even *parented* movement.

## [Download](https://battleaxe.gumroad.com/l/schmeeer)


## Controls

<Screenshot 
    url="/freebies/Schmeeer_ui.jpg" 
    alt="Cylintroid controls" 
    width="400px"
    outline round
    center />

- **Smear length**: How far do you want to smear? 
  - 100% will be the full distance between the current and previous frame
  - 50% will be half the distance between the current and previous frame
- **Distance threshold**: How far does a layer need to move before the smears start?
  - Layer movement less than the threshold (in pixels) will not have smears applied. 
  - *Note:* Smears are cool, but they are typically impactful because of a contrast between smeared and non-smeared frames. Smearing everything can make things look too smooshy, but it's your project. Do whatever you want. 
- **Count multiplier**: Increase this value if you notice stepping on the smears. Be careful because this value is multiplying the the number of echoes. 
- **Echo effect**: You can probably leave alone unless you know what you're doing

## Examples

<Screenshot 
    url="/freebies/Newtons_Cradle_800x800.gif" 
    alt="Newtons Cradle" 
    width="600px"
    center />

<Screenshot 
    url="/freebies/Bonkbonk_Honk_800x800.gif" 
    alt="BonkBonk" 
    width="600px"
    center />



## Installation

<pre>
├── 📂 Schmeeer
│   ├── 📂 aep
│   │   │   └── Schmeeer-Coin flip.aep
│   ├── 📂 KBar icon
│   │   │   └── <a href="/kbar/Schmeeer.svg">Schmeeer.svg</a>
│   ├──  Schmeeer help.html
│   ├──  <b>Schmeeer.ffx</b>
</pre>


<Install 
    preset 
    name="Soupcan"
    :hosts="['After Effects']"
/>


<br />
<br />

## Changelog
<div class="changelog">

## 1.0.0 
Released: 2022-07-13
- Initial release

</div>