<template>
  <button
    class="text-16 uppercase relative sm:hidden"
    @click="toggleMenuOverlay"
  >
    <span v-if="!isOpen">Menu</span>
    <span v-if="isOpen">Close</span>
  </button>
</template>

<script>
export default {
  computed: {
    isOpen() {
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
