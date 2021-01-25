<template>
  <div v-if="category">
    <div class="container container--small" data-s2r="group">
      <header>
        <h1
          class="text-30 text-grey-light-c sm:text-36"
          data-s2r-el="block-fade-up"
        >
          '{{ category.title }}' Articles
        </h1>
      </header>
      <div
        class="mt-20 sm:mt-40"
        data-s2r-el="stagger-fade-up"
        data-s2r-delay="0.2"
      >
        <template v-if="category.articles.length">
          <ArticlePreview
            v-for="(article, index) in category.articles"
            :key="article.slug"
            :article="article"
            :class="{ 'mt-30 sm:mt-50': index > 0 }"
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
  mounted() {
    window.s2r.reInit()
  },
}
</script>
