---
title: Offline authentication
---
# Offline authentication

Anubis uses an internet connection when first authorizing its license key and unlocking for use. If you experience connectivity trouble or run an offline machine use this procedure.

## Open the config settings

<Screenshot 
    url="/anubis/offline-auth-icon.png" 
    alt="click icon" 
    width="214px"
    right
 />
At the Anubis unlock screen, ALT-click the dog icon to open the Anubis `config` folder.

::: tip License lookup
Clicking the eyeball without holding ALT will open [license.battleaxe.co](https://license.battleaxe.co/)
:::

<br />

## Edit `prefs.json`

<Screenshot 
    url="/timelord/offline-auth-nav.png" 
    alt="Render" 
    left
 />
 
Navigate to `/Anubis/config/prefs.json` and open it in a text editor. Look for the line `licenseKey` and paste your license key between quotes.
```
"licenseKey": "12345678-90123456-78901234-56789012",
```

<Screenshot 
    url="/anubis/offline-auth-config.jpg" 
    alt="Config" 
    center
 />

Save and close the prefs.json file.

Right-click the Timelord panel to `Refresh panel`. Timelord should now be unlocked. Email help@battleaxe.co for any additional questions.