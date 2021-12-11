<template>
  <div v-if="article">
    <div class="container container--small">
      <ArticleDetail :article="article" />
    </div>
  </div>
  <ErrorScreen v-else />
</template>

<script>
import dynamicHeadTags from '~/utilities/dynamicHeadTags.js'

export default {
  head() {
    const generalData = {
      title: this.article ? this.article.title : 'Page Not Found',
      description: this.article ? this.article.excerpt : '',
      shareImage: this.article ? this.article.featuredImage : '',
    }
    const specificData = this.article ? this.article.articleMetaData : {}

    return {
      ...dynamicHeadTags(this, generalData, specificData),
    }
  },
  computed: {
    article() {
      const article = this.$store.state.articles.articles.filter((article) => {
        return article.slug === this.$route.params.slug
      })
      return article[0] || null
    },
  },
}
</script>
