<template>
  <figure class="my-30 sm:my-40">
    <ImageItem :asset-id="asset._ref" :alt="alternativeText" />
    <figcaption class="mt-10 text-12 sm:text-14">{{ caption }}</figcaption>
  </figure>
</template>

<script>
export default {
  props: {
    asset: {
      type: Object,
      default: null,
    },
    caption: {
      type: String,
      default: '',
    },
    alternativeText: {
      type: String,
      default: '',
    },
  },
}
</script>
