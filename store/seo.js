export const seoQuery = `
  *[_type == "settingsSeo" && !(_id in path('drafts.**'))]{
    siteDescription,
    siteName,
    siteShareImage
  }[0]
`

export const state = () => ({
  siteDescription: '',
  siteName: '',
  siteShareImage: '',
})

export const mutations = {
  setData(state, data) {
    state.siteDescription = data ? data.siteDescription : ''
    state.siteName = data ? data.siteName : ''
    state.siteShareImage = data ? data.siteShareImage : ''
  },
}
