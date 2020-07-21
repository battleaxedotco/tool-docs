<template>
    <div class="Install">
        <div v-if="extension">
            <ul>
                <li>Download <a href="https://aescripts.com/learn/zxp-installer/">ZXP Installer</a> from <a href="https://aescripts.com/">aescripts + aeplugins</a></li>
                <li>Drag <b>{{name}}.zxp</b> into ZXP Installer</li>
                <li>Close and re-open {{hosts | commas}}</li>
                <li>Navigate to the top Window menu, Extension>{{name}}</li>
                <li>Click to open the panel</li>
            </ul>

            <div class="custom-block warning">
                <div class="custom-block-title"><br />
                    Manual install
                </div>
                <p>
                    If you follow all the Ae instructions and {{name}} still isn't showing up in the AE Window>Extensions menu, do a manual install. You didn't do anything wrong, it just happens sometimes wth extensions.
                    <ul>
                        <li>Change the extension of the {{name}}.zxp file to .zip. It might give you a dialog warning about changing the file type but ignore it.</li>
                        <li>Unzip this file to get a folder called {{name}}</li>
                        <li>Navigate to the Adobe extensions folder:</li>
                        <ul><li><b>Mac</b>: /Users/**username**/Library/Application Support/Adobe/CEP/extensions/</li></ul>
                        <ul><li><b>Win</b>: C:/Users/**username**/AppData/Roaming/Adobe/CEP/extensions/</li></ul>
                        <li>Copy this {{name}} folder to the /extensions/ folder</li>
                        <li>Restart Ae and look for {{name}} in the Window>Extensions folder</li>
                    </ul>
                </p>
            </div>
        </div>

        <div v-else-if="scriptUI">
            <h3>CC2019+</h3>
            <Screenshot 
                url="/install/CC2019-Install.png" 
                alt="Ae script install" 
                width="380px"
                right />
            <p>In newer versions of After Effects, it is now possible install {{ name }} and other scripts without digging through your hard drive. </p>
            <p><i>File > Scripts > Install Script UI Panel…</i></p>
            <p>Restart Ae and {{ name }} will be available in the <b>Window</b> menu at the top of the screen. Scroll down to find the installed scripts.
            </p>


            <h3>CC2018 and older</h3>
            <Screenshot 
                url="/install/Rubberhose-Install.png" 
                alt="RubberHose install" 
                center />
            
            <ul>
                <li>Unzip the <b>{{ name }}.zip</b> download</li>
                <li>Copy <b>{{ name }}.jsxbin</b> to the ScriptUI Panels folder</li>
                <li>Restart After Effects</li>
                <li>{{ name }} will be available in the <b>Window</b> menu at the top of the screen. Scroll down to find the installed scripts.</li>
            </ul>

            <h4>Install paths</h4>
            <p><b>OSX:</b> <code>Applications\After Effects #version#\Scripts\ScriptUI Panels</code></p>
            <p><b>Windows:</b> <code>Program Files\Adobe\Adobe After Effects #version#\Support Files\Scripts\ScriptUI Panels</code></p>

            <h3>Allow scripts to write files</h3>
            <p>
                If you haven't enabled this weird setting before you will get an error the first time you run {{ name }}. 
            </p>
            <p>Open After Effects preferences and find <b>Scripting & Expressions</b>. At the top you'll see one that needs a checkmark:</p>
            <p><b>Allow Scripts to Write Files and Access Network</b></p>
            <Screenshot 
                url="/install/Allow-scripts-to-write-files.png" 
                alt="Allow scripts to write files" 
                width="700px"
                 />
            
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default: '+++'
        },
        hosts: {
            type: Array,
            default: ['After Effects']
        },
        extension: {
            type: Boolean,
            default: false
        },
        scriptUI: {
            type: Boolean,
            default: false
        },
    },
    computed: {
        size () {
            let size = this.aspect.split('x')
            let width = parseInt(size[0])
            let height = parseInt(size[1])
            
            console.log(size);
            return (height / width) * 100
        }
    },
    filters: {
        commas(arr) {
            if (arr.length > 2) {
                let hostJoin = ''
                for (let i = 0; i < arr.length-1; i++) {
                    const hostName = arr[i]
                    hostJoin += arr[i] + ', '
                }
                hostJoin += 'and ' + arr[arr.length-1]

                return hostJoin
            } else if(arr.length == 2) {
                return arr[0] + ' and ' + arr[1]
            } else {
                return arr[0]
            }
        }
    }
}
</script>

<style scoped>
.video-block {
  position: relative; 
  /* padding-bottom: 56.25%; 16:9 */
  height: 0;
  overflow: hidden;
  width: 100%; 
  height: auto;
  margin-bottom: 16px;
}

.video-block iframe {
  position: absolute;
  top: 0; left: 0;
  width: 100%; 
  height: 100%;
}
</style>