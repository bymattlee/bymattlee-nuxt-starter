<template>
  <div class="container container--small" data-s2r="group">
    <h1
      class="text-30 text-grey-light-c sm:text-36"
      data-s2r-el="block-fade-up"
    >
      Page Not Found
    </h1>
    <div data-s2r-el="stagger-fade-up" data-s2r-delay="0.2">
      <p class="mt-20 sm:mt-25">
        Sorry, but the page you were trying to view does not exist.
      </p>
      <p class="mt-20 sm:mt-25">
        <LinkButton type="internal" path="/">&raquo; Go Back Home</LinkButton>
      </p>
    </div>
  </div>
</template>

<script>
import dynamicHeadTags from '~/utilities/dynamicHeadTags.js'

export default {
  data() {
    return {
      page: {
        title: 'Page Not Found',
      },
    }
  },
  head() {
    const generalData = {
      title: this.page.title,
    }

    return {
      ...dynamicHeadTags(this, generalData, this.page.pageMetaData || {}),
    }
  },
  mounted() {
    window.s2r.reInit()
  },
}
</script>
