<template>
  <nav class="footer__nav mt-40">
    <ul>
      <li
        v-for="footerNavItem in footerNavItems"
        :key="footerNavItem.name"
        class="inline-block mx-10 md:mx-20"
      >
        <NuxtLink
          :to="footerNavItem.url"
          class="inline-block font-heading uppercase text-14"
        >
          {{ footerNavItem.name }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    footerNavItems: {
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
.footer__nav {
  .nuxt-link-exact-active {
    @apply text-white;
  }
}
</style>
