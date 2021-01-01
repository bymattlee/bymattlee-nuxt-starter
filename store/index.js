import { menuQuery } from './header.js'

export const actions = {
  async nuxtServerInit({ commit }, { $sanity }) {
    // Set header menu
    const menuData = await $sanity
      .fetch(menuQuery)
      .catch((err) => console.error(err))
    commit('header/setMenu', menuData.menu)
  },
}
