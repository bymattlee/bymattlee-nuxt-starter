export const pagesQuery = `
  *[_type == "page" && !(_id in path('drafts.**'))] {
    pageMetaData{
      pageDescription,
      pageShareImage,
      pageTitle
    },
    pageSections[]{
      ...,
      mainContent[]{
        ...,
        markDefs[]{
          ...,
          _type == "internalLink" => {
            "slug": @.reference->slug.current,
            "dataType": @.reference->_type
          }
        }
      }
    },
    'slug': slug.current,
    title,
    'updatedAt': _updatedAt
  }
`

export const state = () => ({
  pages: [],
})

export const mutations = {
  setData(state, data) {
    state.pages = data || []
  },
}
