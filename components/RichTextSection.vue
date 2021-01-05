<template>
  <section>
    <h1 v-if="pageSection.heading" class="text-30 text-grey-light-c sm:text-36">
      {{ pageSection.heading }}
    </h1>
    <div v-if="pageSection.mainContent" class="rich-text mt-10 sm:mt-20">
      <SanityContent
        :blocks="pageSection.mainContent"
        :serializers="serializers"
      />
    </div>
  </section>
</template>

<script>
import ImageBlock from '~/components/ImageBlock'

export default {
  props: {
    pageSection: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      serializers: {
        types: {
          imageBlock: ImageBlock,
        },
      },
    }
  },
}
</script>
