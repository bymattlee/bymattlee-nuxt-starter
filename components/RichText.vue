<template>
  <div class="rich-text">
    <SanityContent :blocks="content" :serializers="serializers" />
  </div>
</template>

<script>
import ImageBlock from '~/components/RichText/ImageBlock'
import LinkInternal from '~/components/RichText/LinkInternal'
import LinkExternal from '~/components/RichText/LinkExternal'
import YouTubeBlock from '~/components/RichText/YouTubeBlock'
import VimeoBlock from '~/components/RichText/VimeoBlock'

export default {
  props: {
    content: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      serializers: {
        types: {
          imageBlock: ImageBlock,
          youtubeBlock: YouTubeBlock,
          vimeoBlock: VimeoBlock,
        },
        marks: {
          internalLink: LinkInternal,
          link: LinkExternal,
        },
      },
    }
  },
}
</script>

<style lang="scss">
.rich-text {
  div {
    * {
      &:first-child {
        @apply mt-0;
      }

      &:last-child {
        @apply mb-0;
      }
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply mb-10;
  }

  h1 {
    @apply text-36 sm:text-48;
  }

  h2 {
    @apply text-30 sm:text-36;
  }

  h3 {
    @apply text-24 sm:text-28;
  }

  h4 {
    @apply text-18 sm:text-24;
  }

  * + h1,
  * + h2,
  * + h3,
  * + h4,
  * + h5,
  * + h6 {
    @apply mt-30 sm:mt-35;
  }

  a {
    @apply underline;
  }

  p {
    @apply leading-loose my-20 sm:my-30;
  }

  ul,
  ol {
    @apply leading-loose mt-20 mr-0 mb-20 ml-30 sm:mt-25 sm:mb-25 sm:ml-35;

    ul,
    ol {
      @apply mt-5 mr-0 mb-5 ml-35;
    }
  }

  ul {
    @apply list-disc;
  }

  ol {
    @apply list-decimal;
  }

  blockquote {
    @apply border-l-2 my-30 mx-20 pl-30;
  }

  .link-button {
    @apply no-underline;
  }
}
</style>
