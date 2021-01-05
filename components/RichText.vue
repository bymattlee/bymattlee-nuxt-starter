<template>
  <div class="rich-text">
    <SanityContent :blocks="content" :serializers="serializers" />
  </div>
</template>

<script>
import ImageBlock from '~/components/ImageBlock'
import InternalLink from '~/components/InternalLink'
import ExternalLink from '~/components/ExternalLink'

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
        },
        marks: {
          internalLink: InternalLink,
          link: ExternalLink,
        },
      },
    }
  },
}
</script>

<style lang="scss">
@import '../assets/scss/1-setup/layout';

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

  .o-embed {
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

  .rich-text__button {
    @apply bg-grey-light-c text-black;
    display: inline-block;
    padding: 0.75rem 2rem;
    text-decoration: none;
    @include mq('sm') {
      padding: 1rem 2.5rem;
    }

    &:hover {
      @media (hover: hover) {
        @apply bg-grey-dark-4 text-grey-light-c;
      }
    }

    &:active {
      @media (hover: hover) {
        @apply bg-grey-light-a text-black;
      }
    }
  }
}
</style>
