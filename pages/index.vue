<template>
  <div class="container container--small">
    <section
      v-for="(pageSection, index) in page.pageSections"
      :key="`${index}-${pageSection._type}`"
      :class="{ 'mt-40 sm:mt-60': index >= 1 }"
    >
      <div v-if="pageSection._type === 'richTextSection'">
        <h1
          v-if="pageSection.heading"
          class="text-30 text-grey-light-c sm:text-36"
        >
          {{ pageSection.heading }}
        </h1>
        <div
          v-if="pageSection.mainContent"
          class="portable-text mt-10 sm:mt-20"
        >
          <SanityContent :blocks="pageSection.mainContent" />
        </div>
      </div>
      <div v-else-if="pageSection._type === 'latestArticlesSection'">
        <h1 class="text-30 text-grey-light-c sm:text-36">Latest Articles</h1>
      </div>
    </section>
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'
import throwError from '../utilities/throwError.js'
import dynamicHeadTags from '../utilities/dynamicHeadTags.js'

export const query = groq`
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
  async asyncData({ $sanity, params, error }) {
    const page = await $sanity.fetch(query, params).catch((e) => {
      // Throw error if issue with query
      throwError(error)
    })

    // Throw error if data is empty
    if (page === null) throwError(error)

    return { page }
  },
  head() {
    return {
      ...dynamicHeadTags(this, this.page.title),
    }
  },
}
</script>
