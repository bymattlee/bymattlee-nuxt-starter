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
    const dynamicTags = dynamicHeadTags({
      pageTitle: this.page.title,
      siteName: this.$store.state.seo.siteName,
      siteDescription: this.$store.state.seo.siteDescription,
      siteShareImage: this.$urlFor(this.$store.state.seo.siteShareImage)
        .width(1200)
        .url(),
      favicon32: this.$urlFor(this.$store.state.favicons.favicon)
        .width(32)
        .url(),
      favicon16: this.$urlFor(this.$store.state.favicons.favicon)
        .width(16)
        .url(),
      appleTouchIcon: this.$urlFor(this.$store.state.favicons.appleTouchIcon)
        .width(180)
        .url(),
      twitterHandle: this.$store.state.social.twitterHandle,
      currentUrl: `${this.$store.state.hostname}${this.$route.fullPath}`,
    })

    return {
      ...dynamicTags,
    }
  },
}
</script>
