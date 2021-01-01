<template>
  <button
    class="text-16 uppercase relative sm:hidden"
    @click="toggleMenuOverlay"
  >
    <span v-if="!this.$store.state.menuOverlay.isOpen">Menu</span>
    <span v-if="this.$store.state.menuOverlay.isOpen">Close</span>
  </button>
</template>

<script>
export default {
  methods: {
    toggleMenuOverlay() {
      this.$store.commit('menuOverlay/toggle')
    },
  },
}
</script>
