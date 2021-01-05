<template>
  <section>
    <div class="container container--small">
      <h1
        v-if="pageSection.heading"
        class="text-30 text-grey-light-c sm:text-36"
      >
        Latest Articles
      </h1>
      <div class="mt-20 sm:mt-40">
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
      <p class="mt-40">
        <LinkButton type="internal" path="/articles">
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
  async fetch() {
    this.articles = await this.$sanity.fetch(query)
  },
  data() {
    return {
      articles: [],
    }
  },
}
</script>
