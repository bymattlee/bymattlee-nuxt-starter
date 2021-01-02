import { headerQuery } from './header.js'
import { footerQuery } from './footer.js'
import { socialQuery } from './social.js'

export const actions = {
  async nuxtServerInit({ commit }, { $sanity }) {
    // Set header data
    const headerData = await $sanity.fetch(headerQuery)
    commit('header/setData', headerData)

    // Set footer data
    const footerData = await $sanity.fetch(footerQuery)
    commit('footer/setData', footerData)

    // Set social data
    const socialData = await $sanity.fetch(socialQuery)
    commit('social/setData', socialData)
  },
}
