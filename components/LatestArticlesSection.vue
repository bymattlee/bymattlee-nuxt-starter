<template>
  <section v-if="!$fetchState.pending">
    <div ref="container" class="container container--small" data-s2r="group">
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
      <p class="mt-40">
        <LinkButton type="internal" path="/articles/">
          &raquo; View All Articles
        </LinkButton>
      </p>
    </div>
  </section>
</template>

<script>
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
  } | order(publishedAt desc)[0...3]
`

export default {
  props: {
    pageSection: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      articles: [],
    }
  },
  async fetch() {
    this.articles = await this.$sanity.fetch(query)
  },
  watch: {
    articles() {
      // Waits until the markup is rendered before reinitializing s2r
      this.$nextTick(() => {
        const interval = setInterval(() => {
          if (typeof this.$refs.container !== 'undefined') {
            window.s2r.reInit()
            clearInterval(interval)
          }
        }, 10)
      })
    },
  },
}
</script>
