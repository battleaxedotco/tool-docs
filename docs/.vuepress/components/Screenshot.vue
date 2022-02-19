<template>
    <div class="screenshot" :style="">
        <div class="img" 
            :class="{ center : center, left : left, right : right, toolbar : toolbar }" >
            <img :src="url" :alt="alt" :style="{ 'width' : maxWidth }" :class="{ zoom : zoom, outline : outline, round : round }">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        url: {
            type: String,
            default: ''
        },
        alt: {
            type: String,
            default: ''
        },
        width: {
            type: String,
            default: 'auto'
        },
        center: {
            type: Boolean,
            default: false
        },
        right: {
            type: Boolean,
            default: false
        },
        left: {
            type: Boolean,
            default: false
        },
        toolbar: {
            type: Boolean,
            default: false
        },
        zoom: {
            type: Boolean,
            default: false
        },
        outline: {
            type: Boolean,
            default: false
        },
        round: {
            type: Boolean,
            default: false
        },
    },
    computed: {
        maxWidth () {
            return this.width
        }
    },
}
</script>

<style scoped>

.screenshot {
    margin: 16px 0;
    clear: left;
}
.center {
    margin-left: auto;
    margin-right: auto;
}
.toolbar>img {
    height: 40px;
    margin-right: 4px;
    padding-top: 20px;
}
.left, .toolbar {
    float: left;
    margin-right: 16px;
}
.right {
    float: right;
    margin-left: 16px;
}
.img {
    /* width: 100%; */
    height: auto;
    padding-top: 8px;
}
.text {
    font-size: 0.9rem;
    line-height: 1.6em;
    letter-spacing: 0.05em;
}

.outline {
    border: solid 1px rgba(128, 128, 128, 0.3);
    border-radius: 4px;
}
.round {
    border-radius: 12px;
}

@media (max-width: 500px) {
    .img:not(.toolbar) {
        margin-left: auto;
        margin-right: auto;
        float: none;
    }
}
</style>