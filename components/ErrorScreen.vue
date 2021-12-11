<template>
  <div class="container container--small">
    <h1
      v-motion-fade-up
      :delay="100"
      class="text-30 text-grey-light-c sm:text-36"
    >
      Page Not Found
    </h1>
    <div>
      <p v-motion-fade-up :delay="300" class="mt-20 sm:mt-25">
        Sorry, but the page you were trying to view does not exist.
      </p>
      <p v-motion-fade-up :delay="400" class="mt-20 sm:mt-25">
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
}
</script>
