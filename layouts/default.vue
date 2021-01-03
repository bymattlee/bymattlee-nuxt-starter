<template>
  <div>
    <TheHeader />
    <main class="flex-1 py-40 sm:py-80" role="main">
      <transition name="fade">
        <Nuxt />
      </transition>
    </main>
    <TheFooter />
  </div>
</template>
