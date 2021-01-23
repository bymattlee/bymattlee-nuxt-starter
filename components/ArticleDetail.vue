<template>
  <article>
    <div if="article.featuredImage" class="mb-20 sm:mb-40" data-s2r-el>
      <ImageItem :asset-id="article.featuredImage.asset._ref" />
    </div>
    <header>
      <h1 class="text-24 sm:text-28" data-s2r-el>{{ article.title }}</h1>
      <ArticleDateAndCategories :article="article" class="mt-5" data-s2r-el />
      <RichText
        v-if="article.mainContent.length"
        :content="article.mainContent"
        fade-type="block"
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
