<template>
  <div class="container container--small">
    <h1
      v-motion-fade-up
      :delay="100"
      class="text-30 text-grey-light-c opacity-0 sm:text-36"
    >
      Page Not Found
    </h1>
    <div>
      <p v-motion-fade-up :delay="300" class="mt-20 opacity-0 sm:mt-25">
        Sorry, but the page you were trying to view does not exist.
      </p>
      <p v-motion-fade-up :delay="400" class="mt-20 opacity-0 sm:mt-25">
        <LinkButton type="internal" path="/">&raquo; Go Back Home</LinkButton>
      </p>
    </div>
  </div>
</template>
