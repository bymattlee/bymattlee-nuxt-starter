<template>
  <div class="container container--small">
    <header>
      <h1 class="text-30 text-grey-light-c sm:text-36">Articles</h1>
    </header>
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
  async asyncData({ $sanity }) {
    const articles = await $sanity.fetch(query)
    return { articles }
  },
  head() {
    const generalData = {
      title: 'Articles',
    }

    return {
      ...dynamicHeadTags(this, generalData),
    }
  },
}
</script>
