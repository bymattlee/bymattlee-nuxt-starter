<template>
  <div class="container container--small">
    <h1 class="text-30 sm:text-36">Articles</h1>
  </div>
</template>

<script>
import dynamicHeadTags from '../utilities/dynamicHeadTags.js'

export default {
  head() {
    const dynamicTags = dynamicHeadTags({
      pageTitle: 'Articles',
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
