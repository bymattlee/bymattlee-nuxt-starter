<template>
  <div>
    <TheHeader />
    <main class="flex-1 py-40 sm:py-80" role="main">
      <transition name="page-fade">
        <Nuxt />
      </transition>
    </main>
    <TheFooter />
    <transition name="component-fade">
      <MenuOverlay v-if="isOpen" />
    </transition>
  </div>
</template>

<script>
export default {
  computed: {
    isOpen() {
      return this.$store.state.menuOverlay.isOpen
    },
  },
}
</script>
