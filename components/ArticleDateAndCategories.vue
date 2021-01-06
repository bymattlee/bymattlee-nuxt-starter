<template>
  <div>
    <time
      v-if="article.publishedAt"
      class="uppercase text-14"
      :datetime="article.publishedAt | htmlDate"
    >
      {{ article.publishedAt | readableDate }}
    </time>
    <template v-if="article.categories.length">
      <span>/</span>
      <span class="uppercase text-14">
        Categories:
        <span
          v-for="(category, index) in article.categories"
          :key="category.slug"
          class="inline-flex"
        >
          <NuxtLink :to="category.slug | articleCategoryUrl">
            {{ category.title }}
          </NuxtLink>
          <span v-if="index !== article.categories.length - 1">,&nbsp;</span>
        </span>
      </span>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      default: null,
    },
  },
}
</script>
