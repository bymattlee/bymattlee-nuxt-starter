<template>
  <header class="bg-black py-20" role="banner">
    <div class="container flex items-center justify-between">
      <h1>
        <NuxtLink to="/" class="xs:flex xs:items-center">
          <IconByMattLee class="w-40" />
          <span class="hidden uppercase md:block md:text-22 md:ml-10">
            {{ siteName }}
          </span>
        </NuxtLink>
      </h1>
      <TheHeaderMenuButton />
      <TheHeaderMenu />
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      siteName: this.$store.state.seo.siteName,
    }
  },
}
</script>
