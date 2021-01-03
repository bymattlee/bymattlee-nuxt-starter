<template>
  <div class="container container--small">
    <h1>Page not found</h1>
    <p>Sorry, but the page you were trying to view does not exist.</p>
    <p><NuxtLink to="/">» Go Back Home</NuxtLink></p>
  </div>
</template>

<script>
import { dynamicHeadTags } from '../utilities/dynamicHeadTags.js'

export default {
  head() {
    const dynamicTags = dynamicHeadTags(
      'Page not found',
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
