<template>
  <div class="container container--small">
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <p>{{ error.message }}</p>
    <p><NuxtLink to="/">» Go Back Home</NuxtLink></p>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  head() {
    return {
      title: this.error.message,
    }
  },
}
</script>
