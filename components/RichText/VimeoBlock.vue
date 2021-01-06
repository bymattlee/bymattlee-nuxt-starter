<template>
  <div class="embed aspect-w-16 aspect-h-9">
    <iframe
      :data-src="`https://player.vimeo.com/video/${vimeoId}`"
      class="lazyload"
    />
  </div>
</template>

<script>
import getVideoId from 'get-video-id'

export default {
  props: {
    vimeoUrl: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      vimeoId: getVideoId(this.vimeoUrl).id,
    }
  },
}
</script>
