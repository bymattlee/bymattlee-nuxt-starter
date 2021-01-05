<template>
  <NuxtLink v-if="type === 'internal'" :to="path" class="link-button">
    <slot />
  </NuxtLink>
  <a
    v-else-if="type === 'external'"
    :href="href"
    class="link-button"
    target="_blank"
    rel="noopener"
  >
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'internal',
      validator(value) {
        return ['internal', 'external'].includes(value)
      },
    },
    path: {
      type: String,
      default: '',
    },
    href: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
@import '~/assets/scss/1-setup/layout';

.link-button {
  @apply bg-grey-light-c text-black leading-loose;
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
</style>
