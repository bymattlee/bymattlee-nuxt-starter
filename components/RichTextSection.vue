<template>
  <section>
    <div class="container container--small">
      <h1
        v-if="pageSection.heading"
        class="text-30 text-grey-light-c sm:text-36"
      >
        {{ pageSection.heading }}
      </h1>
      <RichText
        v-if="pageSection.mainContent.length"
        :content="pageSection.mainContent"
        class="mt-10 sm:mt-20"
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
