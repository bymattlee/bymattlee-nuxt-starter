<template>
  <nav class="footer__nav mt-40">
    <ul>
      <li
        v-for="menuItem in menu"
        :key="menuItem.name"
        class="inline-block mx-10 md:mx-20"
      >
        <NuxtLink
          :to="menuItem.url"
          :class="[
            'inline-block font-heading uppercase text-14',
            { 'nuxt-link-exact-active': isSameSection(`${menuItem.url}`) },
          ]"
        >
          {{ menuItem.name }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menu: this.$store.state.footer.menu,
    }
  },
  methods: {
    isSameSection(url) {
      // Highlight menu item if user is in the same section (same beginning path)
      const currentItemSlug = url.split('/')[1]
      const currentSectionSlug = this.$route.path.split('/')[1]
      return currentItemSlug === currentSectionSlug
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
