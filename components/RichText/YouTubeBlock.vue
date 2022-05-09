<template>
  <div class="aspect-w-16 aspect-h-9 my-30 sm:my-40">
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
