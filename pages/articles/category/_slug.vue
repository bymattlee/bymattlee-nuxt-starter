<template>
  <div v-if="category.title !== 'Page Not Found'">
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

const query = `
  *[_type == "articleCategory" && slug.current == $slug && !(_id in path('drafts.**'))] {
    description,
    'slug': slug.current,
    title,
    'articles': *[_type == "article" && references(^._id)]{
      categories[]->{
        title,
        'slug': slug.current
      },
      excerpt,
      publishedAt,
      'slug': slug.current,
      title
    } | order(publishedAt desc)
  }[0]
`

export default {
  data() {
    return {
      category: {},
    }
  },
  async fetch() {
    this.category = await this.$sanity.fetch(query, this.$route.params)

    if (this.category === null) {
      this.category = {
        title: 'Page Not Found',
        description: '',
      }
    }
  },
  head() {
    const category = this.category
    const generalData = {
      title: `'${category.title}' Articles`,
      description: category.description,
    }

    return {
      ...dynamicHeadTags(this, generalData),
    }
  },
  watch: {
    category() {
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
