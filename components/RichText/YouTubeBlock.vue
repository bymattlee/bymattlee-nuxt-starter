<template>
  <div class="embed aspect-w-16 aspect-h-9">
    <iframe
      :data-src="`https://www.youtube.com/embed/${youtubeId}`"
      class="lazyload"
    />
  </div>
</template>

<script>
import getVideoId from 'get-video-id'

export default {
  props: {
    youtubeUrl: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      youtubeId: getVideoId(this.youtubeUrl).id,
    }
  },
}
</script>
