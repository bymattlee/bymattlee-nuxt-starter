<template functional>
  <a
    :href="props.href"
    :class="{ 'rich-text__button': props.dataType }"
    target="_blank"
    rel="noopener"
  >
    <slot />
  </a>
</template>
