export const articlesQuery = `
  *[_type == "article" && !(_id in path('drafts.**'))]{
    articleMetaData{
      pageDescription,
      pageShareImage,
      pageTitle
    },
    categories[]->{
      title,
      'slug': slug.current
    },
    excerpt,
    featuredImage,
    mainContent[]{
      ...,
      markDefs[]{
        ...,
        _type == "internalLink" => {
          "slug": @.reference->slug.current,
          "dataType": @.reference->_type
        }
      }
    },
    publishedAt,
    'slug': slug.current,
    title
  } | order(publishedAt desc)
`
export const articleCategoriesQuery = `
  *[_type == "articleCategory" && !(_id in path('drafts.**'))] {
    description,
    'slug': slug.current,
    title,
    'articles': *[_type == "article" && references(^._id)]{
      categories[]->{
        title,
        'slug': slug.current
      },
      excerpt,
      publishedAt,
      'slug': slug.current,
      title
    } | order(publishedAt desc)
  }
`

export const state = () => ({
  articles: [],
  categories: [],
})

export const mutations = {
  setArticles(state, data) {
    state.articles = data || []
  },
  setCategories(state, data) {
    state.categories = data || []
  },
}
