import { headerQuery } from './header.js'
import { footerQuery } from './footer.js'
import { seoQuery } from './seo.js'
import { faviconsQuery } from './favicons.js'
import { socialQuery } from './social.js'
import { analyticsQuery } from './analytics.js'

export const state = () => ({
  hostname: '',
})

export const mutations = {
  setHostname(state, hostname) {
    state.hostname = hostname
  },
}

export const actions = {
  async nuxtServerInit({ commit }, { req, $sanity }) {
    // Set hostname
    const protocol =
      process.env.NODE_ENV === 'production' ? 'http://' : 'http://'
    commit('setHostname', `${protocol}${req.headers.host}`)

    // Set header data
    const headerData = await $sanity.fetch(headerQuery)
    commit('header/setData', headerData)

    // Set footer data
    const footerData = await $sanity.fetch(footerQuery)
    commit('footer/setData', footerData)

    // Set seo data
    const seoData = await $sanity.fetch(seoQuery)
    commit('seo/setData', seoData)

    // Set favicons data
    const faviconsData = await $sanity.fetch(faviconsQuery)
    commit('favicons/setData', faviconsData)

    // Set social data
    const socialData = await $sanity.fetch(socialQuery)
    commit('social/setData', socialData)

    // Set analytics data
    const analyticsData = await $sanity.fetch(analyticsQuery)
    commit('analytics/setData', analyticsData)
  },
}
