<template>
  <div class="container container--small">
    <header>
      <h1
        v-motion-fade-up
        :delay="100"
        class="text-30 text-grey-light-c opacity-0 sm:text-36"
      >
        Articles
      </h1>
    </header>
    <div class="mt-20 sm:mt-40">
      <template v-if="articles.length > 0">
        <ArticlePreview
          v-for="(article, index) in articles"
          :key="article.slug"
          v-motion-fade-up
          :delay="300 + 100 * index"
          :article="article"
          :class="['opacity-0', { 'mt-30 sm:mt-50': index > 0 }]"
        />
      </template>
      <p v-else>No articles have been written.</p>
    </div>
  </div>
</template>

<script>
import dynamicHeadTags from '~/utilities/dynamicHeadTags.js'

export default {
  head() {
    const generalData = {
      title: 'Articles',
    }

    return {
      ...dynamicHeadTags(this, generalData),
    }
  },
  computed: {
    articles() {
      return this.$store.state.articles.articles
    },
  },
}
</script>
