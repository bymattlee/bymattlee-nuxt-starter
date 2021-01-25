import config from '../nuxt.config.js'
import { headerQuery } from './header.js'
import { footerQuery } from './footer.js'
import { seoQuery } from './seo.js'
import { faviconsQuery } from './favicons.js'
import { socialQuery } from './social.js'
import { pagesQuery } from './pages.js'
import { articlesQuery, articleCategoriesQuery } from './articles.js'

export const state = () => ({
  hostname: config.sitemap.hostname,
})

export const actions = {
  async nuxtServerInit({ commit }, { req, $sanity }) {
    // Set header data
    const headerData = await $sanity
      .fetch(headerQuery)
      .catch((err) => console.error(err)) // eslint-disable-line no-console
    commit('header/setData', headerData)

    // Set footer data
    const footerData = await $sanity
      .fetch(footerQuery)
      .catch((err) => console.error(err)) // eslint-disable-line no-console
    commit('footer/setData', footerData)

    // Set seo data
    const seoData = await $sanity
      .fetch(seoQuery)
      .catch((err) => console.error(err)) // eslint-disable-line no-console
    commit('seo/setData', seoData)

    // Set favicons data
    const faviconsData = await $sanity
      .fetch(faviconsQuery)
      .catch((err) => console.error(err)) // eslint-disable-line no-console
    commit('favicons/setData', faviconsData)

    // Set social data
    const socialData = await $sanity
      .fetch(socialQuery)
      .catch((err) => console.error(err)) // eslint-disable-line no-console
    commit('social/setData', socialData)

    // Set pages data
    const pagesData = await $sanity
      .fetch(pagesQuery)
      .catch((err) => console.error(err)) // eslint-disable-line no-console
    commit('pages/setData', pagesData)

    // Set articles data
    const articlesData = await $sanity
      .fetch(articlesQuery)
      .catch((err) => console.error(err)) // eslint-disable-line no-console
    commit('articles/setArticles', articlesData)

    // Set article categories data
    const articleCategoriesData = await $sanity
      .fetch(articleCategoriesQuery)
      .catch((err) => console.error(err)) // eslint-disable-line no-console
    commit('articles/setCategories', articleCategoriesData)
  },
}
