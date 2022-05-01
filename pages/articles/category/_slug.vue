<template>
  <div v-if="category">
    <div class="container container--small">
      <header>
        <h1
          v-motion-fade-up
          :delay="100"
          class="text-30 text-grey-light-c opacity-0 sm:text-36"
        >
          '{{ category.title }}' Articles
        </h1>
      </header>
      <div class="mt-20 sm:mt-40">
        <template v-if="category.articles.length">
          <ArticlePreview
            v-for="(article, index) in category.articles"
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
  </div>
  <ErrorScreen v-else />
</template>

<script>
import dynamicHeadTags from '~/utilities/dynamicHeadTags.js'

export default {
  head() {
    const generalData = {
      title: this.category
        ? `'${this.category.title}' Articles`
        : 'Page Not Found',
      description: this.category ? this.category.description : '',
    }

    return {
      ...dynamicHeadTags(this, generalData),
    }
  },
  computed: {
    category() {
      const category = this.$store.state.articles.categories.filter(
        (category) => {
          return category.slug === this.$route.params.slug
        }
      )
      return category[0] || null
    },
  },
}
</script>
