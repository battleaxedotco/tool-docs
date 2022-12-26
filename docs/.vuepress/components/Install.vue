<template>
    <div class="Install">
        <div v-if="extension">
            <ul>
                <li>Download <a href="https://aescripts.com/learn/zxp-installer/">ZXP Installer</a> from <a href="https://aescripts.com/">aescripts + aeplugins</a></li>
                <li>Drag <b>{{name}}.zxp</b> into ZXP Installer</li>
                <li>Close and re-open {{hosts | commas}}</li>
                <li>Navigate to the top <b>Window</b> menu, <b>Extensions</b> > <b>{{name}}</b></li>
            </ul>

            <div class="custom-block warning">
                <div class="custom-block-title"><br />
                    Manual install
                </div>
                <p>
                    If you follow all the Ae instructions and {{name}} still isn't showing up in the AE Window>Extensions menu, do a manual install. You didn't do anything wrong, it just happens sometimes with extensions.
                    <ul>
                        <li>Change the extension of the <b>{{name}}.zxp</b> file to <b>.zip</b>. It might give you a dialog warning about changing the file type but ignore it.</li>
                        <li>Unzip this file to get a folder called <b>{{name}}</b></li>
                        <li>Navigate to the Adobe extensions folder:</li>
                        <ul>
                            <li><b>Win</b>: <code>C:\Program Files (x86)\Common Files\Adobe\CEP\extensions\</code></li>
                            <li><b>Mac</b>: <code>/Users/**username**/Library/Application Support/Adobe/CEP/extensions/</code></li>
                            <ul><li>Open the <code>/Library/</code> folder by switching to Finder and opening the top <b>Go</b> menu. Hold the ALT key and <b>Library</b> will appear.</li></ul>
                        </ul>
                        <li>Copy this {{name}} folder to the /extensions/ folder</li>
                        <ul><li><b>Note</b>: If you don't see these folders, go ahead and create them</li></ul>
                        <li>Restart Ae and look in the top <b>Window</b> menu for <b>Extensions</b> > <b>{{name}}</b></li>
                    </ul>
                </p>
            </div>
        </div>

        <div v-else-if="preset">
            <h3>Basic install</h3>
            Copy .ffx files into the Ae presets folder, then restart Ae.
            <ul>
                <li><b>OS X</b>:<code>~/Documents/Adobe/After Effects CC 2020/Presets/</code></li>
                <li><b>Windows</b>:<code>My Documents/Adobe/After Effects CC 2020/Presets/</code></li>
            </ul> 
            
            



            <p>Presets will be available in the <b>Effects & Presets</b> panel by searching or under <br />
            <b>*Animation Presets > Presets</b></p>

            <h3>Ultra productive install</h3>
            <p>A much quicker way to use presets is with <a href="https://aescripts.com/kbar/">KBar</a> from <a href="https://aescripts.com/">aescripts + aeplugins</a>. Save your .ffx preset files to a main location (bonus nerd points for using a shared folder like Dropbox).</p>
            <ul>
                <li>Right click the KBar panel > <b>KBar Settings</b></li>
                <li>Click <b>Add Button</b></li>
                <li>Click Apply Preset</li>
                <li>Navigate to the .ffx file on disk</li>
                <li>Name it and set an icon</li>
            </ul>
        </div>

        <div v-else-if="scriptUI">
            <h2>Dockable panel</h2>
            <h3>CC2019+</h3>
            <Screenshot 
                url="/install/CC2019-Install.png" 
                alt="Ae script install" 
                width="380px"
                right />
            <p>In newer versions of After Effects, it is possible to install {{ name }} and other scripts without digging through your hard drive. </p>
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
            <ul>
                <li><b>OSX:</b> <code>/Applications/After Effects #version#/Scripts/ScriptUI Panels/</code></li>
                <li><b>Windows:</b> <code>/Program Files/Adobe/Adobe After Effects #version#/Support Files/Scripts/ScriptUI Panels/</code></li>
            </ul>

            <div v-if="writeFiles">
                <h3>Allow scripts to write files</h3>
                <p>
                    If you haven't enabled this weird setting before you will get an error the first time you run {{ name }}. 
                </p>
                <p>Open the After Effects preferences and find <b>Scripting & Expressions</b>. At the top you'll see one that needs a checkmark:</p>
                <p><b>Allow Scripts to Write Files and Access Network</b></p>
                <Screenshot 
                    url="/install/Allow-scripts-to-write-files.png" 
                    alt="Allow scripts to write files" 
                    width="700px"
                    />
            </div>
            
        </div>
        <div v-else-if="script">
            <h3>CC2019+</h3>
            <!-- <Screenshot 
                url="/install/CC2019-Install.png" 
                alt="Ae script install" 
                width="380px"
                right /> -->
            <p>In newer versions of After Effects, it is possible to install {{ name }} and other scripts without digging through your hard drive. </p>
            <p><i>File > Scripts > Install Script File…</i></p>
            <p>Restart Ae and {{ name }} will be available in the <b>Window</b> menu at the top of the screen. Scroll down to find the installed scripts.
            </p>


            <h3>CC2018 and older</h3>
            <!-- <Screenshot 
                url="/install/Rubberhose-Install.png" 
                alt="RubberHose install" 
                center /> -->
            
            <ul>
                <li>Unzip the <b>{{ name }}.zip</b> download</li>
                <li>Copy <b>{{ name }}.jsx</b> to the ScriptUI Panels folder</li>
                <li>Restart After Effects</li>
                <li>{{ name }} will be available in the <b>Window</b> menu at the top of the screen. Scroll down to find the installed scripts.</li>
            </ul>

            <h4>Install paths</h4>
            <ul>
                <li><b>OSX:</b> <code>/Applications/After Effects #version#/Scripts/</code></li>
                <li><b>Windows:</b> <code>/Program Files/Adobe/Adobe After Effects #version#/Support Files/Scripts/</code></li>
            </ul>

            <div v-if="writeFiles">
                <h3>Allow scripts to write files</h3>
                <p>
                    If you haven't enabled this weird setting before you will get an error the first time you run {{ name }}. 
                </p>
                <p>Open the After Effects preferences and find <b>Scripting & Expressions</b>. At the top you'll see one that needs a checkmark:</p>
                <p><b>Allow Scripts to Write Files and Access Network</b></p>
                <Screenshot 
                    url="/install/Allow-scripts-to-write-files.png" 
                    alt="Allow scripts to write files" 
                    width="700px"
                    />
            </div>
            
        </div>
        <div v-else-if="scriptlet">
            <ol>
                <li>Right click the KBar panel to open <strong>Settings</strong></li>
                <li>Click <strong>Add Button</strong></li>
                <li>Select <strong>Run Scriptlet</strong></li>
                <li>Under <strong>Scriptlet</strong> paste the sriptlet code</li>
                <li>Next to <strong>Description</strong> click <strong>ICON</strong></li>
                <li>Drop down <strong>Text Label</strong> and select <strong>PNG/SVG</strong></li>
                <li>Click the <strong>BROWSE</strong> button to locate {{name}}.svg icon</li>
                <li>Click <strong>OK</strong> to close the icon picker</li>
                <li>Click <strong>OK</strong> to close the script picker</li>
                <li>The new button will be added to KBar</li>
            </ol>
            
            <div style="position: relative; padding-bottom: 104%; height: 0; overflow: hidden; width: 100%; height: auto; margin-bottom: 16px;">
            <video width="800" height="832" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" autoplay loop muted controls>
            <source src="/install/Scriptlet.mp4" type="video/mp4">
            </video>
            </div>

        </div>

        <div v-if="kbar">
            <h2><a href="https://aescripts.com/kbar/" target="_blank">KBar</a> install</h2>
            <p>Beginning in KBar 3, it is now possible to import new buttons.</p>
            <Screenshot url="/install/KBar-import.jpg" alt="Kbar install" center outline round />
        
            <ul>
                <li>Unzip the <b>{{ name }}.zip</b> download</li>
                <li>Locate the included <b>{{ name }}.kbar</b> file</li>
                <li>Inside of Ae, open KBar. Right click within the KBar panel > <b>KBar settings</b></li>
                <li>Navigate to the <b>Settings</b>tab</li>
                <li>Click <b>Import from .kbar</b></li>
                <li>Navigate to <b>{{ name }}.kbar</b></li>
                <li>Feel free to move and rearrange buttons to best fit your layout</li>
            </ul>

            </div>
        
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
        kbar: {
            type: Boolean,
            default: false
        },
        script: {
            type: Boolean,
            default: false
        },
        scriptlet: {
            type: Boolean,
            default: false
        },
        preset: {
            type: Boolean,
            default: false
        },
        writeFiles: {
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