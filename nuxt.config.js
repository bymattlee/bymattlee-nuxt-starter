import getSiteMapRoutes from './utilities/getSiteMapRoutes.js'
import articleFeedData from './utilities/articleFeedData.js'

export default {
  target: 'static',

  head: {
    title: 'ByMattLee Nuxt Starter',
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=5',
      },
      {
        hid: 'mobile-web-app-capable',
        name: 'mobile-web-app-capable',
        content: 'yes',
      },
      {
        hid: 'theme-color',
        name: 'theme-color',
        content: '#222',
      },
      {
        hid: 'apple-mobile-web-app-capable',
        name: 'apple-mobile-web-app-capable',
        content: 'yes',
      },
      {
        hid: 'apple-mobile-web-app-status-bar-style',
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black-translucent',
      },
      {
        hid: 'msapplication-TileColor',
        name: 'msapplication-TileColor',
        content: '#222',
      },
    ],
  },

  components: true,

  plugins: [
    '~/plugins/filters.js',
    '~/plugins/sanityImageBuilder.js',
    '~/plugins/lazysizes.client.js',
    '~/plugins/s2r.client.js',
  ],

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sanity',
    '@nuxtjs/google-gtag',
    '@aceforth/nuxt-optimized-images',
  ],

  modules: [
    '@nuxtjs/redirect-module',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@nuxtjs/feed',
  ],

  build: {
    extractCSS: process.env.NODE_ENV === 'production',
    html: {
      minify: {
        collapseBooleanAttributes: true,
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        conservativeCollapse: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processScripts: ['application/ld+json'],
        removeComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
      },
    },
  },

  router: {
    trailingSlash: true,
  },

  redirect: [
    // Redirect URLs to use a trailing slash
    {
      from: '^(\\/[^\\?]*[^\\/])(\\?.*)?$',
      to: '$1/$2',
    },
  ],

  eslint: {
    cache: false,
  },

  loading: false,

  css: ['~/assets/scss/main.scss'],

  tailwindcss: {
    cssPath: '~/assets/scss/main.scss',
  },

  optimizedImages: {
    optimizeImages: true,
  },

  sanity: {
    projectId: 'afxi85wm',
    dataset: 'nuxt',
    useCdn: false,
  },

  robots: {
    UserAgent: '*',
    Disallow: '/',
    Sitemap: '/sitemap.xml',
  },

  sitemap: {
    hostname:
      process.env.NODE_ENV === 'production'
        ? 'https://bymattlee-nuxt-starter.netlify.app'
        : 'http://localhost:3000',
    trailingSlash: true,
    routes: getSiteMapRoutes,
  },

  feed: [articleFeedData],

  'google-gtag': {
    id: 'G-8K28D0N1CK',
  },
}
