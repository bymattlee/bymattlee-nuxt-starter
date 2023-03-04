import { createClient } from '@sanity/client'
import config from '../nuxt.config.js'

const query = `
  *[_type == "article" && !(_id in path('drafts.**'))]{
    excerpt,
    'slug': slug.current,
    title
  } | order(publishedAt desc)
`

const feed = {
  path: '/feed.xml',
  async create(feed) {
    const client = createClient(config.sanity)

    feed.options = {
      title: config.head.title,
      link: `${config.sitemap.hostname}/feed.xml`,
      description: '',
    }

    const articles = await client
      .fetch(query)
      .catch((err) => console.error(err)) // eslint-disable-line no-console

    articles.forEach((article) => {
      const url = `${config.sitemap.hostname}/articles/${article.slug}/`
      feed.addItem({
        title: article.title,
        id: url,
        link: url,
        description: article.excerpt,
      })
    })
  },
  cacheTime: 1000 * 60 * 15,
  type: 'rss2',
}

export default feed
