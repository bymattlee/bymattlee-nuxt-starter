<template>
  <article>
    <header>
      <h1 class="text-18 sm:text-24">
        <NuxtLink :to="`/articles/${article.slug}`">
          {{ article.title }}
        </NuxtLink>
      </h1>
      <div class="mt-5">
        <time class="uppercase text-14">{{ article.publishedAt }}</time>
        <template v-if="article.categories">
          <span>/</span>
          <span class="uppercase text-14">
            Categories:
            <template v-for="(category, index) in article.categories">
              <NuxtLink
                :key="category.slug"
                :to="`/articles/category/${category.slug}`"
              >
                {{ category.title }}
              </NuxtLink>
              {{ index !== article.categories.length - 1 ? ', ' : '' }}
            </template>
          </span>
        </template>
      </div>
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
