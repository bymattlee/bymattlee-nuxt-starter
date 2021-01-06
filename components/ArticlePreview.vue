<template>
  <article>
    <header>
      <h1 v-if="article.title" class="text-18 sm:text-24">
        <NuxtLink :to="article.slug | articleUrl" class="text-grey-light-a">
          {{ article.title }}
        </NuxtLink>
      </h1>
      <ArticleDateAndCategories :article="article" class="mt-5" />
    </header>
    <p v-if="article.excerpt" class="mt-20">{{ article.excerpt }}</p>
  </article>
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
