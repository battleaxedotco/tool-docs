<template>
  <main
    class="home"
    aria-labelledby="main-title"
  >

  <div style="margin-bottom: 64px">
    <div class="support">
      <div class="row">
        <div class="block half">
          <h2>License</h2>
          <p>Access license keys, receipts and product updates with your purchase email.</p>
          <a href="http://license.battleaxe.co" class="nav-link action-button">License lookup</a>
        </div>
        <div class="block half">
          <h2>Community</h2>
          <p><a href="https://00-00.co" target="_blank">NULLS</a> is the public forum for all things Battle Axe and a positive places for designers and animators. Ask questions and share what you know.</p>
          <a href="https://00-00.co" class="nav-link action-button" target="_blank">Join the conversation</a>
        </div>
      </div>

      <div class="row center" v-if="data.products && data.products.length">
        <div class="product-block" v-for="(tool, index) in data.products"
          :key="index">
          <h2><a :href="tool.link">{{ tool.title }}</a></h2>
          <!-- <p>{{ tool.details }}</p> -->
          <ul v-if="tool.links">
            <li v-for="(link, linkIdx) in tool.links" :key="linkIdx">
              <a :href="tool.link + link.url">{{link.name}}</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- <div>
        <h2>Frequently asked questions</h2>
        <p>Purchase info is linked to your email address. Quickly look up downloads, keys and receipts.</p>
        <a href="http://battleaxe.co/help" class="nav-link action-button">FAQ</a>
      </div>

      <div>
        <h2>Need more help?</h2>
        <p>Send an email to help@battleaxe.co and we’ll get you set up.</p>
      </div> -->
      
      <div class="row" v-if="data.faqs && data.faqs.length" style="justify-content: space-around">
        <h2>Frequently asked questions</h2>
        <!-- <div class="row" > -->
          <div class="faq" v-for="(faq, faqIdx) in data.faqs" :key="faqIdx" style="max-width: 240px">
            <!-- <a :href="faq.link">{{faq.title}}</a> -->
            <h4>{{faq.title}}</h4>
              <ul v-if="faq.links && faq.links.length">
                <li v-for="(link, linkIdx) in faq.links" :key="linkIdx">
                  {{  }}
                  <a :href="link.url.charAt(0) == '/' ? link.url : `/faq.html#${link.url}`">{{link.name}}</a>
                </li>
              </ul>
          <!-- </div> -->
        </div>
      </div>


      <div class="row">
        <div class="block half">
          <h2>Contact</h2>
          <p>Can’t find what you’re looking for? Contact us and we’ll get back to you as soon as possible.</p>
          <a href="/contact" class="nav-link action-button">Contact</a>
        </div>
      </div>
    </div>

  </div>
    <!-- <h1>Manuals</h1>
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
    </div> -->


    <!-- <div
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
    </div> -->

    <Content class="theme-default-content custom" />
    
    <Footer />
  </main>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'
import Footer from '@theme/components/Footer.vue'

export default {
  name: 'Home',

  components: { 
    NavLink,
    Footer,
  },

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
.home 
  h1, h2
    width 100%
    margin-left 0
  li
    list-style-type "ᳵ "
.support
  // display flex
.support>*
  // background salmon
header
  display flex
.row 
  display flex
  flex-wrap wrap
  gap 20px
  margin-top 126px
.center
  margin-left auto
  margin-right auto
.half 
  width calc(50% - 10px)
.product-block
  background rgba(128, 128, 128, 0.1)
  padding 16px
  min-width 270px
  h2
    margin 0
    border none
    font-size 24px
    a
      text-decoration none
  ul
    list-style none
    line-height 2em
    text-underline-offset 1px
  a
    text-decoration underline
    text-underline-offset 1px
    color var(--text-color)
.faq
  ul
    line-height 2em
    text-decoration underline
    text-underline-offset 1px
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
    // border-top 1px solid  var(--border)
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
    border-top 1px solid  var(--border)
    text-align center
    // color lighten($textColor, 25%)

@media (max-width: $MQMobile)
  .home
    .features
      flex-direction column
    .feature
      max-width 100%
      padding 0 2.5rem
  .half, .product-block
    width 100%


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
