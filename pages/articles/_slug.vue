<template>
  <div v-if="article.title !== 'Page Not Found'">
    <div
      v-if="!this.$fetchState.pending"
      class="container container--small"
      data-s2r="single"
      data-s2r-type="stagger-fade-up"
    >
      <ArticleDetail :article="article" />
    </div>
  </div>
  <ErrorScreen v-else />
</template>

<script>
import dynamicHeadTags from '~/utilities/dynamicHeadTags.js'

const query = `
  *[_type == "article" && slug.current == $slug && !(_id in path('drafts.**'))]{
    articleMetaData{
      pageDescription,
      pageShareImage,
      pageTitle
    },
    categories[]->{
      title,
      'slug': slug.current
    },
    excerpt,
    featuredImage,
    mainContent[]{
      ...,
      markDefs[]{
        ...,
        _type == "internalLink" => {
          "slug": @.reference->slug.current,
          "dataType": @.reference->_type
        }
      }
    },
    publishedAt,
    'slug': slug.current,
    title
  }[0]
`

export default {
  data() {
    return {
      article: {},
    }
  },
  async fetch() {
    this.article = await this.$sanity.fetch(query, this.$route.params)

    if (this.article === null) {
      this.article = {
        title: 'Page Not Found',
        description: '',
        shareImage: '',
      }
    }
  },
  head() {
    const generalData = {
      title: this.article.title,
      description: this.article.excerpt,
      shareImage: this.article.featuredImage,
    }

    return {
      ...dynamicHeadTags(this, generalData, this.article.articleMetaData || {}),
    }
  },
  watch: {
    article() {
      // Waits until the markup is rendered before reinitializing s2r
      this.$nextTick(() => {
        const interval = setInterval(() => {
          if (!this.$fetchState.pending) {
            window.s2r.reInit()
            clearInterval(interval)
          }
        }, 10)
      })
    },
  },
}
</script>
