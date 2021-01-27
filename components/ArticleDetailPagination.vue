<template>
  <section class="flex justify-between text-14 uppercase mt-60 sm:mt-80">
    <div>
      <NuxtLink
        v-if="article.previousArticleSlug"
        :to="article.previousArticleSlug | articleUrl"
        class="text-grey-light-a"
      >
        &laquo; Previous Article
      </NuxtLink>
    </div>
    <div>
      <NuxtLink
        v-if="article.nextArticleSlug"
        :to="article.nextArticleSlug | articleUrl"
        class="text-grey-light-a"
      >
        Next Article &raquo;
      </NuxtLink>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      default: null,
    },
  },
}
</script>
