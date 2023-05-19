---
title: Offline authentication - Overlord
---
# Offline authentication

Overlord uses an internet connection when first authorizing its license key and unlocking for use. If you experience connectivity trouble or run an offline machine use this procedure.

## Open the config settings

<Screenshot 
    url="/overlord/offline-auth-button.jpg" 
    alt="click icon" 
    width="600px"
    round outline
 />

1. Right click the Overlord panel to open the Settings
2. ALT/Opt Click the **Check for Update** button
3. This will open the Overlord `config` folder.

::: tip Config folder location
- Mac: `/Users/**username**/Library/Application Support/BattleAxe/Overlord/config/`
- Win: `C:/Users/**username**/AppData/Roaming/BattleAxe/Overlord/config/`
:::

<br />

## Edit `prefs.json`

<Screenshot 
    url="/overlord/offline-auth-nav.jpg" 
    alt="Config navigation" 
    round outline
 />

 Navigate to `/Overlord/config/prefs.json` and open it in a text editor. 

<Screenshot 
    url="/overlord/offline-auth-config.jpg" 
    alt="Config" 
    center
    round outline
 />

Look for the line `licenseKey` and paste your license key between quotes.

```
"licenseKey": "12345678-90123456-78901234-56789012",
```


Save and close the prefs.json file.

Right-click the Overlord panel to `Refresh panel`. Overlord should now be unlocked. 

[Contact](./../contact.md) us if you have any trouble.