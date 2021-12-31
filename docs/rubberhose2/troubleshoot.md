---
title: Troubleshoot
---

# Troubleshoot

## Unable to unlock

<Screenshot 
    url="/rubberhose2/unlock.jpg" 
    alt="Unlock Rubberhose"
    width="232px" 
    left />

When you first open RubberHose 2 you will see a cryptic message regarding your immortal soul and the honesty related to use of the script. Add a checkbox and the button should change to **CONTINUE BRAVE WARRIOR**. Click that and start using RubberHose.

It's nonsense, but it's the kind of nonsense we like around here.

<br />

### Using Dropbox on macOS?
If you find yourself stuck at this screen, it might have to do with a glitch between Adobe apps and **Dropbox Backup** feature on macOS. 

Follow along with this [great article](https://aescripts.com/knowledgebase/index/view/faq/dropbox-macos-warning/) from <a href="https://aescripts.com/">aescripts + aeplugins</a> to get that cleared up.

<br />

## Settings wont open

Some systems have trouble opening the [settings](./manage.html#settings) panel. This is a known issue but we are unable to replicate it in order to fix it; but there is workaround.

### Open preferences

<Screenshot 
    url="/rubberhose2/AePrefs.jpg" 
    alt="After Effects preferences"
    width="500px" 
    zoom
    right />
- Open the Ae preferences > General
- Click to open the preference file on disk 

<br />

<Screenshot 
    url="/rubberhose2/PrefsFile.jpg" 
    alt="Unlock Rubberhose"
    width="500px" 
    zoom
    right />
- Open **Adobe After Effects [version] Prefs.txt** in a text editor
- Search for the **Settings_RubberHose 2** group
- Manually edit any of the preferences
- Or, select and delete the whole group to reset all RH preferences to the factory default

<br />

- Save and close the prefs file
- Restart Ae