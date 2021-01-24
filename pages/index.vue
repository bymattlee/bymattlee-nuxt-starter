<template>
  <div v-if="page.title !== 'Page Not Found'">
    <template v-if="!this.$fetchState.pending">
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
    </template>
  </div>
  <ErrorScreen v-else />
</template>

<script>
import dynamicHeadTags from '~/utilities/dynamicHeadTags.js'

const query = `
  *[_type == "page" && slug.current == 'index' && !(_id in path('drafts.**'))] {
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
  data() {
    return {
      page: {},
    }
  },
  async fetch() {
    this.page = await this.$sanity.fetch(query, this.$route.params)

    if (this.page === null) {
      this.page = {
        title: 'Page Not Found',
      }
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
  watch: {
    page() {
      // Waits until the markup is rendered before reinitializing s2r
      this.$nextTick(() => {
        const interval = setInterval(() => {
          if (!this.$fetchState.pending) {
            window.s2r.reInit()
            clearInterval(interval)
          }
        }, 10)
      })
    },
  },
}
</script>
