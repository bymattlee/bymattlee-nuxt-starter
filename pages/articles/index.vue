<template>
  <div
    v-if="!this.$fetchState.pending"
    class="container container--small"
    data-s2r="group"
  >
    <header>
      <h1
        class="text-30 text-grey-light-c sm:text-36"
        data-s2r-el="block-fade-up"
      >
        Articles
      </h1>
    </header>
    <div
      class="mt-20 sm:mt-40"
      data-s2r-el="stagger-fade-up"
      data-s2r-delay="0.2"
    >
      <template v-if="articles.length > 0">
        <ArticlePreview
          v-for="(article, index) in articles"
          :key="article.slug"
          :article="article"
          :class="{ 'mt-30 sm:mt-50': index > 0 }"
        />
      </template>
      <p v-else>No articles have been written.</p>
    </div>
  </div>
</template>

<script>
import dynamicHeadTags from '~/utilities/dynamicHeadTags.js'

const query = `
  *[_type == "article" && !(_id in path('drafts.**'))]{
    categories[]->{
      title,
      'slug': slug.current
    },
    excerpt,
    publishedAt,
    'slug': slug.current,
    title
  } | order(publishedAt desc)
`

export default {
  data() {
    return {
      articles: [],
    }
  },
  async fetch() {
    this.articles = await this.$sanity.fetch(query)
  },
  head() {
    const generalData = {
      title: 'Articles',
    }

    return {
      ...dynamicHeadTags(this, generalData),
    }
  },
  watch: {
    articles() {
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
