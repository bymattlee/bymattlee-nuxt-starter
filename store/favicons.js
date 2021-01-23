export const faviconsQuery = `
  *[_type == "settingsFavicons" && !(_id in path('drafts.**'))]{
    appleTouchIcon,
    favicon
  }[0]
`

export const state = () => ({
  appleTouchIcon: '',
  favicon: '',
})

export const mutations = {
  setData(state, data) {
    state.appleTouchIcon = data ? data.appleTouchIcon : ''
    state.favicon = data ? data.favicon : ''
  },
}
