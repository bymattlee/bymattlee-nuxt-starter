<template>
  <section
    class="bg-black fixed inset-0 w-full h-full z-menu-overlay flex flex-col pt-80 pb-40 sm:hidden"
  >
    <div class="flex-1 flex justify-center items-center">
      <nav class="menu-overlay__nav">
        <ul>
          <li
            v-for="menuItem in menu"
            :key="menuItem.name"
            class="my-15 text-center"
          >
            <NuxtLink
              :to="menuItem.url"
              :class="[
                'inline-block font-heading uppercase text-16',
                { 'nuxt-link-exact-active': isSameSection(`${menuItem.url}`) },
              ]"
              @click.native="close"
            >
              {{ menuItem.name }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
    <SocialIcons class="mt-20 text-center" />
  </section>
</template>

<script>
export default {
  data() {
    return {
      menu: this.$store.state.header.menu,
    }
  },
  computed: {
    isOpen() {
      return this.$store.state.menuOverlay.isOpen
    },
  },
  methods: {
    isSameSection(url) {
      // Highlight menu item if user is in the same section (same beginning path)
      const currentItemSlug = url.split('/')[1]
      const currentSectionSlug = this.$route.path.split('/')[1]
      return currentItemSlug === currentSectionSlug
    },
    close() {
      this.$store.commit('menuOverlay/close')
    },
  },
}
</script>

<style lang="scss">
.menu-overlay__nav {
  .nuxt-link-exact-active {
    @apply text-white;
  }
}
</style>
