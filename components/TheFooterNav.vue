<template>
  <nav class="footer__nav mt-40">
    <ul>
      <li
        v-for="menuItem in footerNav.menu"
        :key="menuItem.name"
        class="inline-block mx-10 md:mx-20"
      >
        <NuxtLink
          :to="menuItem.url"
          class="inline-block font-heading uppercase text-14"
        >
          {{ menuItem.name }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
import { groq } from '@nuxtjs/sanity'

const query = groq`
  *[_type == "sectionsFooter" && !(_id in path('drafts.**'))]{
    'menu': footerMenu->menuItems[]{
      'name': menuItemName,
      'url': menuItemUrl,
      openInNewTab
    }
  }[0]
`

export default {
  async fetch() {
    this.footerNav = await this.$sanity.fetch(query)
  },
  data() {
    return {
      footerNav: [],
    }
  },
}
</script>

<style lang="scss">
.footer__nav {
  .nuxt-link-exact-active {
    @apply text-white;
  }
}
</style>
