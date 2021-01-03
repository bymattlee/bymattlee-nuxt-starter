<template>
  <div class="container container--small">
    <h1>Articles</h1>
  </div>
</template>

<script>
import dynamicHeadTags from '../utilities/dynamicHeadTags.js'

export default {
  head() {
    const dynamicTags = dynamicHeadTags(
      'Articles',
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
