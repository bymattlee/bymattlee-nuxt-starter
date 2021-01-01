import { groq } from '@nuxtjs/sanity'

export const menuQuery = groq`
  *[_type == "sectionsFooter" && !(_id in path('drafts.**'))]{
    'menu': footerMenu->menuItems[]{
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
  setMenu(state, menu) {
    state.menu = menu ? menu.menu : []
  },
}
