import { groq } from '@nuxtjs/sanity'

export const socialQuery = groq`
  *[_type == "settingsSocial" && !(_id in path('drafts.**'))]{
    socialSites[] {
      facebookUrl,
      twitterUrl,
      instagramUrl,
      youtubeUrl
    },
    twitterHandle
  }[0]
`

export const state = () => ({
  socialSites: null,
  twitterHandle: null,
})

export const mutations = {
  setData(state, data) {
    state.socialSites = data ? data.socialSites : null
    state.twitterHandle = data ? data.twitterHandle : null
  },
}
