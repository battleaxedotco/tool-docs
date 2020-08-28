<template>
  <main
    class="home"
    aria-labelledby="main-title"
  >

  <div style="margin-bottom: 64px">
    <h1>Support</h1>
    <div class="support">
      <div>
        <h2>Licensing</h2>
        <p>Purchase info is linked to your email address. Quickly look up downloads, keys and receipts.</p>
        <a href="http://license.battleaxe.co" class="nav-link action-button">License lookup</a>
      </div>
      
      <div>
        <h2>Frequently asked questions</h2>
        <p>Purchase info is linked to your email address. Quickly look up downloads, keys and receipts.</p>
        <a href="http://battleaxe.co/help" class="nav-link action-button">FAQ</a>
      </div>

      <div>
        <h2>Need more help?</h2>
        <p>Send an email to support@battleaxe.co and we’ll get you set up.</p>
      </div>
      
    </div>

  </div>
    <h1>Manuals</h1>
    <div
      v-if="data.products && data.products.length"
      class="features"
    >
    <h2>Products</h2>
      <div
        v-for="(feature, index) in data.products"
        :key="index"
        class="feature"
      >
        <h2><a :href="feature.link">{{ feature.title }}</a></h2>
        <p>{{ feature.details }}</p>
      </div>
    </div>


    <div
      v-if="data.freebies && data.freebies.length"
      class="features"
    >
    <h2>Freebies</h2>
      <div
        v-for="(feature, index) in data.freebies"
        :key="index"
        class="feature"
      >
        <h2><a :href="feature.link">{{ feature.title }}</a></h2>
        <p>{{ feature.details }}</p>
      </div>
    </div>

    <Content class="theme-default-content custom" />

    <div
      v-if="data.footer"
      class="footer"
      v-html="data.footer"
    >
      <!-- {{ data.footer }} -->
    </div>
  </main>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'

export default {
  name: 'Home',

  components: { NavLink },

  computed: {
    data () {
      return this.$page.frontmatter
    },

    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  }
}
</script>

<style lang="stylus">
h1, h2
  width 100%
.support
  // display flex
.support>*
  // background salmon
header
  display flex
.home
  padding $navbarHeight 2rem 0
  max-width $homePageWidth
  margin 0px auto
  display block
  .hero
    text-align center
    img
      max-width: 100%
      max-height 410px
      display block
      margin 3rem auto 1.5rem
    h1
      font-size 3rem
    h1, .description, .action
      margin 1.8rem auto
    .description
      max-width 35rem
      font-size 1.6rem
      line-height 1.3
      color lighten($textColor, 40%)
    .action-button
      display inline-block
      font-size 1.2rem
      color #fff
      background-color $accentColor
      padding 0.8rem 1.6rem
      border-radius 4px
      transition background-color .1s ease
      box-sizing border-box
      border-bottom 1px solid darken($accentColor, 10%)
      &:hover
        background-color lighten($accentColor, 10%)
  .features
    // border-top 1px solid $borderColor
    padding 1.2rem 0
    // margin-top 2.5rem
    display flex
    flex-wrap wrap
    align-items flex-start
    align-content stretch
    justify-content space-between
  .feature
    flex-grow 1
    flex-basis 30%
    max-width 30%
    margin-bottom 48px
    h2
      font-size 1.4rem
      margin-top 0
      font-weight 500
      border-bottom none
      padding-bottom 0
      color lighten($textColor, 10%)
    p
      color lighten($textColor, 25%)
  .footer
    padding 2.5rem
    border-top 1px solid $borderColor
    text-align center
    // color lighten($textColor, 25%)

@media (max-width: $MQMobile)
  .home
    .features
      flex-direction column
    .feature
      max-width 100%
      padding 0 2.5rem

@media (max-width: $MQMobileNarrow)
  .home
    padding-left 1.5rem
    padding-right 1.5rem
    .hero
      img
        max-height 210px
        margin 2rem auto 1.2rem
      h1
        font-size 2rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
    .feature
      h2
        font-size 1.25rem
</style>
