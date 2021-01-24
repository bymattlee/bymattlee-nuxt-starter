<template>
  <ErrorScreen />
</template>

<script>
import dynamicHeadTags from '~/utilities/dynamicHeadTags.js'

export default {
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  head() {
    return {
      ...dynamicHeadTags(this, 'Page Not Found'),
    }
  },
}
</script>
