<template>
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
</template>

<script>
import throwError from '~/utilities/throwError.js'
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
  async asyncData({ $sanity, params, error }) {
    const category = await $sanity.fetch(query, params).catch((e) => {
      // Throw error if issue with query
      throwError(error)
    })

    // Throw error if data is empty
    if (category === null) throwError(error)

    return { category }
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
  mounted() {
    window.s2r.reInit()
  },
}
</script>
