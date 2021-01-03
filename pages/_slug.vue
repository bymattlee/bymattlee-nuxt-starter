<template>
  <div class="container container--small">
    <h1>{{ page.title }}</h1>
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'
import throwError from '../utilities/throwError.js'
import dynamicHeadTags from '../utilities/dynamicHeadTags.js'

export const query = groq`
  *[_type == "page" && slug.current == $slug && !(_id in path('drafts.**'))] {
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
    const dynamicTags = dynamicHeadTags(
      this.page.title,
      this.$store.state.seo.siteName,
      this.$store.state.seo.siteDescription,
      this.$urlFor(this.$store.state.seo.siteShareImage).width(1200).url(),
      this.$urlFor(this.$store.state.favicons.favicon).width(32).url(),
      this.$urlFor(this.$store.state.favicons.favicon).width(16).url(),
      this.$urlFor(this.$store.state.favicons.appleTouchIcon).width(180).url(),
      this.$store.state.social.twitterHandle,
      `${this.$store.state.hostname}${this.$route.fullPath}`
    )

    return {
      ...dynamicTags,
    }
  },
}
</script>
