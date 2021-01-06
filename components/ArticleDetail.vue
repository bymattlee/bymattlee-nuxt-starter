<template>
  <article>
    <div if="article.featuredImage" class="mb-20 sm:mb-40">
      <ImageItem :asset-id="article.featuredImage.asset._ref" />
    </div>
    <header>
      <h1 class="text-24 sm:text-28">{{ article.title }}</h1>
      <ArticleDateAndCategories :article="article" class="mt-5" />
      <RichText
        v-if="article.mainContent.length"
        :content="article.mainContent"
        class="mt-30"
      />
    </header>
  </article>
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
