<template>
  <nav class="header__nav hidden sm:block">
    <ul>
      <li
        v-for="(headerNavItem, index) in headerNavItems"
        :key="headerNavItem.name"
        :class="['inline-block', { 'ml-20 md:ml-40': index >= 1 }]"
      >
        <NuxtLink
          :to="headerNavItem.url"
          class="inline-block font-heading uppercase text-14"
        >
          {{ headerNavItem.name }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    headerNavItems: {
      type: Array,
      default() {
        return [
          {
            name: 'Home',
            url: '/',
          },
          {
            name: 'Articles',
            url: '/articles',
          },
          {
            name: 'About',
            url: '/about',
          },
          {
            name: '404',
            url: '/404',
          },
        ]
      },
    },
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
