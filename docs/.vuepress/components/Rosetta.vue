<template>
    <div class="Install">
        <p>
            Missing the <strong>Window</strong> > <strong>Extensions</strong> menu in Photoshop in CC 2022? Adobe is slowly switching to a new plugin system called UXP, and Extensions are disabled by default in new versions of Ps. 
        </p>

        <h3>Enabling Extensions</h3>
        <div>
            <Screenshot 
            url="/install/Rosetta_01.jpg" 
            alt="Open Photoshop prefs" 
            width="494px" />
            <br />
            Open the Photoshop preferences > Plugins
            <Screenshot 
            url="/install/Rosetta_02.jpg" 
            alt="Enable extensions" 
            width="800px" />
            Enable both:
            <ul>
                <li>Allow Extensions to Connect to the Internet</li>
                <li><strong>Load Extensions Panels</strong> ← most important</li>
            </ul>
        </div>

        <br />

        <h3>Rosetta mode</h3>
        <p>
            But wait, are those options greyed out? Are you on Apple Silicon? You will need to activate <strong>Rosetta mode</strong> to enable Extensions in Photoshop. 
        </p>
        <Screenshot 
            url="/install/Rosetta_03.jpg" 
            alt="Extensions disabled" 
            width="598px" />
        <Screenshot 
            url="/install/Rosetta_04.jpg" 
            alt="Show Photoshop info" 
            width="800px" />

        <ul>
            <li>Close Photoshop</li>
            <li>Navigate to the Photoshop application</li>
            <li>Right click > get Info or CMD+I</li>
        </ul>

        <Screenshot 
            url="/install/Rosetta_05.jpg" 
            alt="Enable Rosetta mode" 
            width="438px" />
            <br />
        <p>Enable the checkbox <strong>Open using Rosetta</strong>. Restart Photoshop.</p>

        <Screenshot 
            url="/install/Rosetta_02.jpg" 
            alt="Enable extensions" 
            width="800px" />
            <p>
            The Legacy Extensions checkboxes should now be editable. Enable these prefs, restart Ps again, and <strong>Window</strong> > <strong>Extensions</strong> > <strong>{{name}}</strong> will now be available.
            </p>

    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default: '+++'
        },
    },
}
</script>

<style scoped>

</style>