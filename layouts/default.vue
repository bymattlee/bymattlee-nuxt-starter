<template>
  <div>
    <TheHeader />
    <main class="flex-1 pt-40 pb-60 sm:pt-80 sm:pb-100" role="main">
      <Nuxt />
    </main>
    <TheFooter />
    <transition name="component">
      <MenuOverlay v-if="menuOverlayIsOpen" />
    </transition>
  </div>
</template>

<script>
export default {
  computed: {
    menuOverlayIsOpen() {
      return this.$store.state.menuOverlay.isOpen
    },
  },
  head() {
    return {
      htmlAttrs: {
        lang: 'en-US',
      },
      bodyAttrs: {
        class: [this.menuOverlayIsOpen ? 'overflow-hidden' : ''],
      },
    }
  },
}
</script>
