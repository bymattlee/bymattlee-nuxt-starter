<template>
  <div class="container container--small">
    <h1 class="text-30 sm:text-36">{{ page.title }}</h1>
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'
import throwError from '../utilities/throwError.js'
import dynamicHeadTags from '../utilities/dynamicHeadTags.js'

export const query = groq`
  *[_type == "page" && slug.current == 'index' && !(_id in path('drafts.**'))] {
    pageMetaData{
      pageDescription,
      pageShareImage,
      pageTitle
    },
    pageSections[]{
      ...,
      mainContent[]{
        ...,
        markDefs[]{
          ...,
          _type == "internalLink" => {
            "slug": @.reference->slug.current,
            "dataType": @.reference->_type
          }
        }
      }
    },
    'slug': slug.current,
    title,
    'updatedAt': _updatedAt
  }[0]
`

export default {
  async asyncData({ $sanity, params, error }) {
    const page = await $sanity.fetch(query, params).catch((e) => {
      // Throw error if issue with query
      throwError(error)
    })

    // Throw error if data is empty
    if (page === null) throwError(error)

    return { page }
  },
  head() {
    return {
      ...dynamicHeadTags(this, this.page.title),
    }
  },
}
</script>
