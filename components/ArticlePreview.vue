<template>
  <article>
    <header>
      <h1 class="text-18 sm:text-24">
        <NuxtLink :to="article.slug | articleUrl">
          {{ article.title }}
        </NuxtLink>
      </h1>
      <div class="mt-5">
        <time
          class="uppercase text-14"
          :datetime="article.publishedAt | htmlDate"
        >
          {{ article.publishedAt | readableDate }}
        </time>
        <template v-if="article.categories">
          <span>/</span>
          <span class="uppercase text-14">
            Categories:
            <span
              v-for="(category, index) in article.categories"
              :key="category.slug"
              v-trim-whitespace
            >
              <NuxtLink :to="category.slug | articleCategoryUrl">
                {{ category.title }}
              </NuxtLink>
              {{ index !== article.categories.length - 1 ? ', ' : '' }}
            </span>
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
