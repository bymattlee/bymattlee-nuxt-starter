<template>
  <nav>
    <ul>
      <li
        v-for="(socialSite, index) in socialSites"
        :key="index"
        class="inline-block mx-10"
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
export default {
  data() {
    return {
      socialSites: this.$store.state.social.socialSites,
    }
  },
}
</script>
