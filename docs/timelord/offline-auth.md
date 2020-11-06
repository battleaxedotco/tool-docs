# Offline authentication

Timelord uses an internet connection when first authorizing its license key and unlocking for use. If you experience connectivity trouble or run an offline machine use this procedure.

Moving layers between Photoshop/Animate and After Effects is one of the core features of Timelord and makes export and import as seamless as possible.

## Open the config settings

<Screenshot 
    url="/timelord/offline-auth-icon.png" 
    alt="click icon" 
    width="214px"
    right
 />
At the Timelord unlock screen, ALT-click the eyeball icon to open the Timelord `config` folder.

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
 
Navigate to `Timelord\config\prefs.json` and open it in a text editor. Look for the line `licenseKey` and paste your license key between quotes.
```
"licenseKey": "12345678-90123456-78901234-56789012",
```

<Screenshot 
    url="/timelord/offline-auth-config.png" 
    alt="Render" 
    left
 />

Save and close the prefs.json file.

Right-click the Timelord panel to `Refresh panel`. Timelord should now be unlocked. Email support@battleaxe.co for any additional questions.