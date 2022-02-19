<template>
    <div class="footer">
     © {{ year }} <a href="https://battleaxe.co">Battle Axe Inc.</a> Atlanta, GA
    </div>
</template>

<script>

export default {
  name: 'Footer',

  data () {
    return {
    }
  },

  computed: {
    year() {
      const date = new Date
      return date.getFullYear()
    }
  }
}
</script>

<style lang="stylus">
.footer
    padding 2.5rem
    border-top 1px solid  var(--border)
    text-align center

</style>
