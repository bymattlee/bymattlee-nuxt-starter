<template>
  <div v-if="page">
    <div
      v-for="(pageSection, index) in page.pageSections"
      :key="`${index}-${pageSection._type}`"
      :class="{ 'mt-40 sm:mt-60': index >= 1 }"
    >
      <RichTextSection
        v-if="pageSection._type === 'richTextSection'"
        :page-section="pageSection"
      />
      <LatestArticlesSection
        v-if="pageSection._type === 'latestArticlesSection'"
        :page-section="pageSection"
      />
    </div>
  </div>
  <ErrorScreen v-else />
</template>

<script>
import dynamicHeadTags from '~/utilities/dynamicHeadTags.js'

export default {
  head() {
    const generalData = {
      title: this.page ? this.page.title : 'Page Not Found',
    }
    const specificData = this.page ? this.page.pageMetaData : {}

    return {
      ...dynamicHeadTags(this, generalData, specificData),
    }
  },
  computed: {
    page() {
      const page = this.$store.state.pages.pages.filter((page) => {
        return page.slug === 'index'
      })
      return page[0] || null
    },
  },
}
</script>
