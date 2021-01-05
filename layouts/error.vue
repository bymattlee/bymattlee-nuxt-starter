<template>
  <div class="container container--small">
    <h1 class="text-30 sm:text-36">Page not found</h1>
    <p class="mt-20 sm:mt-25">{{ error.message }}</p>
    <p class="mt-20 sm:mt-25">
      <LinkButton type="internal" path="/">&raquo; Go Back Home</LinkButton>
    </p>
  </div>
</template>

<script>
import dynamicHeadTags from '../utilities/dynamicHeadTags.js'

export default {
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  head() {
    return {
      ...dynamicHeadTags(this, 'Page not found'),
    }
  },
}
</script>
