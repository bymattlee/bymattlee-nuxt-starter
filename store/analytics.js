import { groq } from '@nuxtjs/sanity'

export const analyticsQuery = groq`
  *[_type == "settingsAnalytics" && !(_id in path('drafts.**'))]{
    googleAnalyticsId
  }[0]
`

export const state = () => ({
  googleAnalyticsId: '',
})

export const mutations = {
  setData(state, data) {
    state.googleAnalyticsId = data ? data.googleAnalyticsId : ''
  },
}
