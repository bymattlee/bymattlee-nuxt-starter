<template>
  <div class="container container--small">
    <header>
      <h1 class="text-30 text-grey-light-c sm:text-36">
        '{{ category.title }}' Articles
      </h1>
    </header>
    <div class="mt-20 sm:mt-40">
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
      mainContent,
      publishedAt,
      'slug': slug.current,
      title
    } | order(publishedAt desc)
  } | order(title asc)[0]
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
    return {
      ...dynamicHeadTags(this, `'${this.category.title}' Articles`),
    }
  },
}
</script>
