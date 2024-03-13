<template>
  <main class="page" :class="{changelog: $page.frontmatter.contact }">
    <slot name="top" />

    <div class="outdated">These pages are no longer maintained. Visit <a href="https://link.battleaxe.co/help">battleaxe.co</a> for up to date docs.</div>

    <Content class="theme-default-content" />
    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'

export default {
  components: { PageEdit, PageNav },
  props: ['sidebarItems']
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  padding-bottom 2rem
  display block
  overflow-x: hidden

</style>
