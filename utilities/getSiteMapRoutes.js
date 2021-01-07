import createClient from '@sanity/client'
import config from '../nuxt.config.js'

const pagesQuery = `
  *[_type == "page" && !(_id in path('drafts.**'))] {
    'slug': slug.current,
  }
`

const articlesQuery = `
  *[_type == "article" && !(_id in path('drafts.**'))]{
    'slug': slug.current,
  } | order(publishedAt desc)
`

const getSiteMapRoutes = async () => {
  const client = createClient(config.sanity)
  const routes = []

  // Query page slugs and add to routes array
  await client.fetch(pagesQuery).then((pages) => {
    pages.forEach((page) => {
      const exclude = ['index']
      if (!exclude.includes(page.slug)) routes.push(page.slug)
    })
  })

  // Query article slugs and add to routes array
  await client.fetch(articlesQuery).then((articles) => {
    articles.forEach((article) => routes.push(`/articles/${article.slug}`))
  })

  return routes
}

export default getSiteMapRoutes
