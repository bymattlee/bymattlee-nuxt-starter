<template>
  <LinkButton v-if="linkButton" type="external" :href="href">
    <slot />
  </LinkButton>
  <a v-else :href="href" target="_blank" rel="noopener">
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    linkButton: {
      type: Boolean,
      default: false,
    },
    href: {
      type: String,
      default: '',
    },
  },
}
</script>
