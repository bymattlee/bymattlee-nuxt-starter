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
          class="inline-block font-heading uppercase text-14"
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
}
</script>

<style lang="scss">
.footer__nav {
  .nuxt-link-exact-active {
    @apply text-white;
  }
}
</style>
