<template>
  <section>
    <h1 v-if="pageSection.heading" class="text-30 text-grey-light-c sm:text-36">
      Latest Articles
    </h1>
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
