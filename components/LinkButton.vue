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
.link-button {
  @apply inline-block bg-grey-light-c text-black leading-loose px-20 py-8
    transition-colors duration-slow hover:bg-grey-dark-4 hover:text-grey-light-c
    active:bg-grey-light-a active:text-black sm:px-25 sm:py-10;
}
</style>
