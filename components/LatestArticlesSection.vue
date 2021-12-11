<template>
  <div class="container container--small">
    <h1
      v-if="pageSection.heading"
      v-motion-fade-up
      :delay="100"
      class="text-30 text-grey-light-c sm:text-36"
    >
      Latest Articles
    </h1>
    <div class="mt-20 sm:mt-40">
      <ArticlePreview
        v-for="(article, index) in articles"
        :key="article.slug"
        v-motion-fade-up
        :delay="300 + 100 * index"
        :article="article"
        :class="{ 'mt-30 sm:mt-50': index > 0 }"
      />
    </div>
    <p v-motion-fade-up :delay="300 + 100 * articles.length" class="mt-40">
      <LinkButton type="internal" path="/articles/">
        &raquo; View All Articles
      </LinkButton>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    pageSection: {
      type: Object,
      default: null,
    },
  },
  computed: {
    articles() {
      const articles = this.$store.state.articles.articles
      const numberOfArticles = 3
      return articles.slice(0, numberOfArticles)
    },
  },
}
</script>
