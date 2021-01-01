<template>
  <nav class="header__nav hidden sm:block">
    <ul>
      <li
        v-for="(menuItem, index) in headerNav.menu"
        :key="menuItem.name"
        :class="['inline-block', { 'ml-20 md:ml-40': index >= 1 }]"
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
  *[_type == "sectionsHeader" && !(_id in path('drafts.**'))]{
    'menu': headerMenu->menuItems[]{
      'name': menuItemName,
      'url': menuItemUrl,
      openInNewTab
    }
  }[0]
`

export default {
  async fetch() {
    this.headerNav = await this.$sanity.fetch(query)
  },
  data() {
    return {
      headerNav: [],
    }
  },
}
</script>

<style lang="scss">
.header__nav {
  .nuxt-link-exact-active {
    @apply text-white;
  }
}
</style>
