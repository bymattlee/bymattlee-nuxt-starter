<template>
  <section>
    <div class="container container--small">
      <h1
        v-if="pageSection.heading"
        v-motion-fade-up
        :delay="100"
        class="text-30 text-grey-light-c opacity-0 sm:text-36"
      >
        {{ pageSection.heading }}
      </h1>
      <RichText
        v-if="pageSection.mainContent.length"
        v-motion-fade-up
        :delay="300"
        :content="pageSection.mainContent"
        class="mt-10 opacity-0 sm:mt-20"
      />
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
