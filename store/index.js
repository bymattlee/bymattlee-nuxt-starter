import { menuQuery as headerMenuQuery } from './header.js'
import { menuQuery as footerMenuQuery } from './footer.js'

export const actions = {
  async nuxtServerInit({ commit }, { $sanity }) {
    // Set header menu data
    const headerMenuData = await $sanity.fetch(headerMenuQuery)
    commit('header/setMenu', headerMenuData)

    // Set footer menu data
    const footerMenuData = await $sanity.fetch(footerMenuQuery)
    commit('footer/setMenu', footerMenuData)
  },
}
