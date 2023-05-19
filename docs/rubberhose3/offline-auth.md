---
title: Offline authentication - Rubberhose 3
---
# Offline authentication

Rubberhose 3 uses an internet connection when first authorizing its license key and unlocking for use. If you experience connectivity trouble or run an offline machine use this procedure.

## Open the config settings

<Screenshot 
    url="/rubberhose3/offline-auth-icon.png" 
    alt="click icon" 
    width="337px"
    left
    round outline
 />
- At the Rubberhose 3 unlock screen, ALT/Opt-click the icon
- This will open the Rubberhose 3 `config` folder
- Clicking the eyeball without holding ALT/Opt will open [license.battleaxe.co](https://license.battleaxe.co/)

<br />

::: tip Config folder location
- Mac: `/Users/**username**/Library/Application Support/BattleAxe/Rubberhose 3/config/`
- Win: `C:/Users/**username**/AppData/Roaming/BattleAxe/Rubberhose 3/config/`
:::



## Edit `prefs.json`

<Screenshot 
    url="/rubberhose3/offline-auth-nav.jpg"
    alt="Config navigation" 
    round outline
 />

 Navigate to `/Rubberhose 3/config/prefs.json` and open it in a text editor. 
 
<Screenshot 
    url="/rubberhose3/offline-auth-config.jpg"
    alt="Config" 
    width="576px"
    center
    round outline
 />

Look for the line `licenseKey` and paste your license key between quotes.

```
"licenseKey": "12345678-90123456-78901234-56789012",
```


Save and close the prefs.json file.

Right-click the Rubberhose 3 panel to `Refresh panel`. Rubberhose 3 should now be unlocked. 

[Contact](./../contact.md) us if you have any trouble.