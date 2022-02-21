<template>
    <div class="Install">
        <p>
            Please read this End User License Agreement (“EULA”) before you download and use {{name}}.
        </p>
        <p>
            By <span v-if="freebie">downloading</span> <span v-else>purchasing a License Key and/or downloading</span> and using {{name}}, You agree, without reservation to be bound by the terms of this EULA. If You do not agree with the terms of this EULA, please do not purchase a License Key and/or download and use {{name}}.
        </p>

        <a :href="`/eula/${name}_EULA.pdf`" class="nav-link action-button">View EULA</a>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default: '+++'
        },
        freebie: {
            type: Boolean,
            default: false
        }
    },
    computed: {
    },
    filters: {
    }
}
</script>

<style scoped>
</style>