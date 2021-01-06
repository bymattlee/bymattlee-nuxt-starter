<template>
  <LinkButton v-if="linkButton" type="internal" :path="toPath">
    <slot />
  </LinkButton>
  <NuxtLink v-else :to="toPath">
    <slot />
  </NuxtLink>
</template>

<script>
export default {
  props: {
    slug: {
      type: String,
      default: '',
    },
    dataType: {
      type: String,
      default: '',
    },
    linkButton: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    toPath() {
      if (this.dataType === 'page') {
        return this.slug === 'index' ? '/' : `/${this.slug}/`
      } else if (this.dataType === 'article') {
        return `/articles/${this.slug}/`
      } else {
        return this.slug
      }
    },
  },
}
</script>
