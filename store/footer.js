import { groq } from '@nuxtjs/sanity'

export const footerQuery = groq`
  *[_type == "sectionsFooter" && !(_id in path('drafts.**'))]{
    'menu': footerMenu->menuItems[]{
      'name': menuItemName,
      'url': menuItemUrl,
      openInNewTab
    }
  }[0]
`

export const state = () => ({
  menu: [],
})

export const mutations = {
  setData(state, menu) {
    state.menu = menu ? menu.menu : []
  },
}
