---
title: Offline authentication - Anubis
---
# Offline authentication

Anubis uses an internet connection when first authorizing its license key and unlocking for use. If you experience connectivity trouble or run an offline machine use this procedure.

## Open the config settings

<Screenshot 
    url="/anubis/offline-auth-icon.jpg" 
    alt="click icon" 
    width="245px"
    left
    round outline
 />
- At the Anubis unlock screen, ALT/Opt-click the dog icon
- This will open the Anubis `config` folder
- Clicking the eyeball without holding ALT/Opt will open [license.battleaxe.co](https://license.battleaxe.co/)

<br />

::: tip Config folder location
- Mac: `/Users/**username**/Library/Application Support/BattleAxe/Anubis/config/`
- Win: `C:/Users/**username**/AppData/Roaming/BattleAxe/Anubis/config/`
:::



## Edit `prefs.json`

<Screenshot 
    url="/anubis/offline-auth-nav.jpg" 
    alt="Config navigation" 
    round outline
 />

 Navigate to `/Anubis/config/prefs.json` and open it in a text editor. 
 
<Screenshot 
    url="/anubis/offline-auth-config.jpg" 
    alt="Config" 
    center
    round outline
 />

Look for the line `licenseKey` and paste your license key between quotes.

```
"licenseKey": "12345678-90123456-78901234-56789012",
```


Save and close the prefs.json file.

Right-click the Anubis panel to `Refresh panel`. Anubis should now be unlocked. 

[Contact](./../contact.md) us if you have any trouble.