<template>
    <div class="Grid">
        <!-- <div v-for="(type, typeIndex) in assets" :key="typeIndex" class="state-box">
            <h2 :id="typeIndex">{{ typeIndex | uppercase }}</h2>
            <div>
                <div v-for="(state, stateIndex) in type" :key="stateIndex" class="col-6 col-sm-4 col-md-3" no-gutters>
                    <img :src="require(`/kbar/${state}.svg`)" style="width: inherit" :alt="state">
                    <h4>{{ state | removeUnderscores }}</h4>
                </div>
            </div>
        </div> -->
        <div v-for="(asset, assetIndex) in assets" :key="assetIndex" class="col-6 col-sm-4 col-md-3">
            <div>
                <img :src="`/kbar/${asset}.svg`" style="width: inherit" :alt="asset" class="outline">
                <h4 style="font-size: 0.7em;">{{ asset | removeUnderscores }}</h4>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        assets: {
            type: Array,
            default: ['Overlord']
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
        uppercase(str) {
            return str.toUpperCase()
        },
        removeUnderscores(str) {
            return str.replace(/_|-/g, ' ')
        },
    }
}
</script>

<style scoped>
.Grid {
    margin-top: 64px;
    display: flex;
    gap: 32px;
    flex-wrap: wrap;
    justify-content: center;
}
.Grid > * {
    /* width: 25%; */
    flex: 0 0 20%;
    padding: 2px;
    max-width: 64px;
}
.outline {
    border: solid 1px rgba(128, 128, 128, 0.3);
    border-radius: 4px;
}
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