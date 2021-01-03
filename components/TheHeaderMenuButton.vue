<template>
  <button
    class="text-16 uppercase relative sm:hidden"
    @click="toggleMenuOverlay"
  >
    <span v-if="!menuOverlayIsOpen">Menu</span>
    <span v-if="menuOverlayIsOpen">Close</span>
  </button>
</template>

<script>
export default {
  computed: {
    menuOverlayIsOpen() {
      return this.$store.state.menuOverlay.isOpen
    },
  },
  methods: {
    toggleMenuOverlay() {
      this.$store.commit('menuOverlay/toggle')
    },
  },
}
</script>
