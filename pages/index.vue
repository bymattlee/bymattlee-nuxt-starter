<template>
  <div class="container container--small">
    <h1>Home</h1>
  </div>
</template>

<script>
import { dynamicHeadTags } from '../utilities/dynamicHeadTags.js'

export default {
  data() {
    return {
      meta: {
        pageTitle: null,
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
      },
    }
  },
  head() {
    const dynamicTags = dynamicHeadTags(
      this.meta.pageTitle,
      this.meta.siteName,
      this.meta.siteDescription,
      this.meta.siteShareImage,
      this.meta.favicon32,
      this.meta.favicon16,
      this.meta.appleTouchIcon,
      this.meta.twitterHandle,
      this.meta.currentUrl
    )

    return {
      ...dynamicTags,
    }
  },
}
</script>
