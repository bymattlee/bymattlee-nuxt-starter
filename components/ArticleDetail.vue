<template>
  <div>
    <article>
      <figure
        v-if="article.featuredImage"
        v-motion-fade-up
        :delay="delayFeaturedImage"
        class="mb-20 opacity-0 sm:mb-40"
      >
        <ImageItem :asset-id="article.featuredImage.asset._ref" />
      </figure>
      <header>
        <h1
          v-motion-fade-up
          :delay="delayTitle"
          class="text-24 opacity-0 sm:text-28"
        >
          {{ article.title }}
        </h1>
        <ArticleDateAndCategories
          v-motion-fade-up
          :delay="delayDateAndCategories"
          :article="article"
          class="mt-5 opacity-0"
        />
        <RichText
          v-if="article.mainContent.length"
          v-motion-fade-up
          :delay="delayText"
          :content="article.mainContent"
          class="mt-30 opacity-0"
        />
      </header>
    </article>
    <ArticleDetailPagination
      v-if="article.previousArticleSlug || article.nextArticleSlug"
      v-motion-fade-up
      :delay="delayPagination"
      :article="article"
      class="opacity-0"
    />
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      animationElement: 0,
      delayFeaturedImage: 100,
      delayTitle: 100 + 100 * (this.article.featuredImage ? 1 : 0),
      delayDateAndCategories:
        100 +
        100 *
          ((this.article.featuredImage ? 1 : 0) +
            (this.article.delayTitle ? 1 : 0)),
      delayText:
        100 +
        100 *
          ((this.article.featuredImage ? 1 : 0) +
            (this.article.delayTitle ? 1 : 0) +
            1),
      delayPagination:
        100 +
        100 *
          ((this.article.featuredImage ? 1 : 0) +
            (this.article.delayTitle ? 1 : 0) +
            1 +
            (this.article.previousArticleSlug || this.article.nextArticleSlug
              ? 1
              : 0)),
    }
  },
}
</script>
