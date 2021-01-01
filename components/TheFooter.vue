<template>
  <footer class="bg-grey-dark-1 py-40 py-60 text-center" role="contentinfo">
    <div class="container">
      <NuxtLink to="/">
        <IconByMattLee class="w-40" />
      </NuxtLink>
      <TheFooterNav />
      <TheFooterSocialIcons />
      <p class="mt-40 uppercase text-12">
        &copy; {{ currentYear }} ByMattLee. All Rights Reserved.
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    }
  },
}
</script>
