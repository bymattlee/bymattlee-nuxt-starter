<template>
  <div class="rich-text">
    <SanityContent
      v-if="fadeType === 'block'"
      :blocks="content"
      :serializers="serializers"
      data-s2r-el
    />
    <SanityContent
      v-if="fadeType === 'stagger'"
      :blocks="content"
      :serializers="serializers"
      data-s2r-el="stagger-fade-up"
      data-s2r-delay="0.2"
    />
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
    fadeType: {
      type: String,
      default: 'block',
      validator(value) {
        return ['block', 'stagger'].includes(value)
      },
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
@import '~/assets/scss/1-setup/layout';

.rich-text {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 1rem;

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  h1 {
    @apply text-36;
    @include mq('sm') {
      @apply text-48;
    }
  }

  h2 {
    @apply text-30;
    @include mq('sm') {
      @apply text-36;
    }
  }

  h3 {
    @apply text-24;
    @include mq('sm') {
      @apply text-28;
    }
  }

  h4 {
    @apply text-18;
    @include mq('sm') {
      @apply text-24;
    }
  }

  * + h1,
  * + h2,
  * + h3,
  * + h4,
  * + h5,
  * + h6 {
    margin-top: 3rem;
    @include mq('sm') {
      margin-top: 3.5rem;
    }
  }

  a {
    text-decoration: underline;

    &:hover {
      @media (hover: hover) {
        text-decoration: none;
      }
    }
  }

  p {
    @apply leading-loose;
    margin: 2rem 0;
    @include mq('sm') {
      margin: 2.5rem 0;
    }

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  ul,
  ol {
    @apply leading-loose;
    margin: 2rem 0 2rem 3rem;
    @include mq('sm') {
      margin: 2.5rem 0 2.5rem 3.5rem;
    }

    li {
      margin: 0;
    }

    ul,
    ol {
      margin: 0.5rem 0 0.5rem 3.5rem;
    }
  }

  ul {
    list-style-type: disc;
  }

  ol {
    list-style-type: decimal;
  }

  .embed {
    margin: 3rem 0;
    @include mq('sm') {
      margin: 4rem 0;
    }

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  .link-button {
    text-decoration: none;
  }
}
</style>
