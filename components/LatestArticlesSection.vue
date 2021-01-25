<template>
  <div class="container container--small" data-s2r="group">
    <h1
      v-if="pageSection.heading"
      class="text-30 text-grey-light-c sm:text-36"
      data-s2r-el="block-fade-up"
    >
      Latest Articles
    </h1>
    <div
      class="mt-20 sm:mt-40"
      data-s2r-el="stagger-fade-up"
      data-s2r-delay="0.2"
    >
      <ArticlePreview
        v-for="(article, index) in articles"
        :key="article.slug"
        :article="article"
        :class="{ 'mt-30 sm:mt-50': index > 0 }"
      />
    </div>
    <p class="mt-40" data-s2r-el="block-fade-up" data-s2r-delay="0.5">
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
  mounted() {
    window.s2r.reInit()
  },
}
</script>
