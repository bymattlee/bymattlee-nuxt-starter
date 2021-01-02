import { groq } from '@nuxtjs/sanity'

export const headerQuery = groq`
  *[_type == "sectionsHeader" && !(_id in path('drafts.**'))]{
    'menu': headerMenu->menuItems[]{
      'name': menuItemName,
      'url': menuItemUrl,
      openInNewTab
    }
  }[0]
`

export const state = () => ({
  menu: null,
})

export const mutations = {
  setData(state, menu) {
    state.menu = menu ? menu.menu : null
  },
}
