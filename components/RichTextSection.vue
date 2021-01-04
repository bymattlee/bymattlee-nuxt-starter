<template>
  <section>
    <h1 v-if="pageSection.heading" class="text-30 text-grey-light-c sm:text-36">
      {{ pageSection.heading }}
    </h1>
    <div v-if="pageSection.mainContent" class="rich-text mt-10 sm:mt-20">
      <SanityContent :blocks="pageSection.mainContent" />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    pageSection: {
      type: Object,
      default: null,
    },
  },
}
</script>
