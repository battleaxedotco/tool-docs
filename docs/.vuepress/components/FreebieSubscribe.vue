<template>
    <div class="download">
        <a href="https://link.battleaxe.co/freebies" class="nav-link action-button" target="_blank">Subscribe to download</a>

        <h4>A newsletter? Ew.</h4>
        <p>
            We write a blog of workflow tips, ideas, development stories, and product updates. When we publish these posts it sends out an email. Your inbox is the inner sanctum of your digital life and the last thing we would want to do is spam you or sell your info. 
        </p>
        <p>
            Unsubscribe at any time.
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
.download {
    border: 1px solid rgba(128, 128, 128, 0.3);
    /* text-align: center; */
    /* margin: 0 auto; */
    max-width: 600px;
    padding: 2em;
}
.action-button {
    padding: 1.3em 2em !important;
}
</style>