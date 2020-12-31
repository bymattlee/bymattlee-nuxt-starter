<template>
  <button class="text-16 uppercase relative sm:hidden">
    <span v-if="!isActive">Menu</span>
    <span v-if="isActive">Close</span>
  </button>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    }
  },
}
</script>
