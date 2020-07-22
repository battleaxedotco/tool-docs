<template>
    <div class="image-grid">
        <div v-for="(tile, index) in tiles" :key="index">
            <img :src="tile.url" alt="">
            <h3>{{ tile.name }}</h3>
            <p>{{ tile.text }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            elements: []
        }
    },
    props: {
        tiles: {
            type: Array,
            default: []
        },
    },
    watch: {
        // tiles(t) {
        //     console.log(t);
        //     this.elements = JSON.parse(t)
        // }
    },
    created() {
        console.log(this.tiles);
        console.log( JSON.parse(this.tiles) )
    }
}
</script>

<style scoped>
p {
    font-size: 0.8rem;
}
h3 {
    font-size: 1.3rem;
}
.image-grid {
    margin: 16px 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 8px;
    grid-row-gap: 8px;
}

@media (max-width: 960px) {
.image-grid {
    grid-template-columns: repeat(2, 1fr);
}
}
@media (max-width: 500px) {
.image-grid {
    grid-template-columns: repeat(1, 1fr);
}
}
</style>