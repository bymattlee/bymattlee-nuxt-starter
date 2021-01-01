<template>
  <nav class="mt-40">
    <ul>
      <li
        v-for="(socialSite, index) in social.socialSites"
        :key="index"
        class="inline-block mx-5 md:mx-10"
      >
        <a
          v-if="socialSite.facebookUrl"
          :href="socialSite.facebookUrl"
          class="inline-block"
          target="_blank"
          rel="noopener"
          aria-label="Like On Facebook"
        >
          <IconFacebook class="w-30" />
        </a>
        <a
          v-else-if="socialSite.twitterUrl"
          :href="socialSite.twitterUrl"
          class="inline-block"
          target="_blank"
          rel="noopener"
          aria-label="Follow On Twitter"
        >
          <IconTwitter class="w-30" />
        </a>
        <a
          v-else-if="socialSite.instagramUrl"
          :href="socialSite.instagramUrl"
          class="inline-block"
          target="_blank"
          rel="noopener"
          aria-label="Follow On Instagram"
        >
          <IconInstagram class="w-30" />
        </a>
        <a
          v-else-if="socialSite.youtubeUrl"
          :href="socialSite.youtubeUrl"
          class="inline-block"
          target="_blank"
          rel="noopener"
          aria-label="Subscribe On YouTube"
        >
          <IconYouTube class="w-30" />
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { groq } from '@nuxtjs/sanity'

const query = groq`
  *[_type == "settingsSocial" && !(_id in path('drafts.**'))]{
    socialSites[] {
      facebookUrl,
      twitterUrl,
      instagramUrl,
      youtubeUrl
    },
    twitterHandle
  }[0]
`

export default {
  async fetch() {
    this.social = await this.$sanity.fetch(query)
  },
  data() {
    return {
      social: [],
    }
  },
}
</script>
