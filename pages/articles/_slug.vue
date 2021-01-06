<template>
  <div class="container container--small">
    <ArticleDetail :article="article" />
  </div>
</template>

<script>
import throwError from '~/utilities/throwError.js'
import dynamicHeadTags from '~/utilities/dynamicHeadTags.js'

const query = `
  *[_type == "article" && slug.current == $slug && !(_id in path('drafts.**'))]{
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
    mainContent[]{
      ...,
      markDefs[]{
        ...,
        _type == "internalLink" => {
          "slug": @.reference->slug.current,
          "dataType": @.reference->_type
        }
      }
    },
    publishedAt,
    'slug': slug.current,
    title
  }[0]
`

export default {
  async asyncData({ $sanity, params, error }) {
    const article = await $sanity.fetch(query, params).catch((e) => {
      // Throw error if issue with query
      throwError(error)
    })

    // Throw error if data is empty
    if (article === null) throwError(error)

    return { article }
  },
  head() {
    const generalData = {
      title: this.article.title,
      description: this.article.excerpt,
      shareImage: this.article.featuredImage,
    }

    return {
      ...dynamicHeadTags(this, generalData, this.article.articleMetaData || {}),
    }
  },
}
</script>
