import Vue from 'vue'
import { DateTime } from 'luxon'

// Convert date into HTML format
Vue.filter('htmlDate', (isoDate) => {
  return DateTime.fromISO(isoDate).toFormat('yyyy-LL-dd')
})

// Convert date into readable format
Vue.filter('readableDate', (isoDate) => {
  return DateTime.fromISO(isoDate).toFormat('LLL dd, yyyy')
})

// Return full article url
Vue.filter('articleUrl', (slug) => {
  return `/articles/${slug}/`
})

// Return full article category url
Vue.filter('articleCategoryUrl', (slug) => {
  return `/articles/category/${slug}/`
})
