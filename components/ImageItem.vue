<template>
  <img class="lazyload" :data-srcset="imageSrcset" sizes="auto" />
</template>

<script>
export default {
  props: {
    assetId: {
      type: String,
      default: '',
    },
  },
  computed: {
    imageSrcset() {
      const imageWidths = [200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800]
      const srcset = []
      imageWidths.forEach((width) =>
        srcset.push(`
          ${this.$urlFor(this.assetId).width(width).url()} ${width}w
        `)
      )
      return srcset.join(', ')
    },
  },
}
</script>
