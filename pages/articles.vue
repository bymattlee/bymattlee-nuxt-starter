<template>
  <div class="container container--small">
    <h1 class="text-30 sm:text-36">Articles</h1>
  </div>
</template>

<script>
import dynamicHeadTags from '../utilities/dynamicHeadTags.js'

export default {
  head() {
    return {
      ...dynamicHeadTags(this, 'Articles'),
    }
  },
}
</script>
