import Vue from 'vue'

// Remove whitespace between elements
Vue.directive('trim-whitespace', {
  inserted: (el) => {
    el.innerHTML = el.innerHTML.replace(
      /\s*<("[^"]*"|'[^']*'|[^'">])*>\s*/g,
      (match) => match.trim()
    )
  },
})
