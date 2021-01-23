<template>
  <nav class="header__nav hidden sm:block">
    <ul>
      <li
        v-for="(menuItem, index) in menu"
        :key="menuItem.name"
        :class="['inline-block', { 'ml-20 md:ml-40': index >= 1 }]"
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
      menu: this.$store.state.header.menu,
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
.header__nav {
  .nuxt-link-exact-active {
    @apply text-white;
  }
}
</style>
