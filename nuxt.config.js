export default {
  // target: 'static', // Enable when generating static files

  head: {
    title: 'ByMattLee Vue Nuxt Starter',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=5'
      },
      {
        hid: 'mobile-web-app-capable',
        name: 'mobile-web-app-capable',
        content: 'yes'
      },
      {
        hid: 'theme-color',
        name: 'theme-color',
        content: '#222'
      },
      {
        hid: 'apple-mobile-web-app-capable',
        name: 'apple-mobile-web-app-capable',
        content: 'yes'
      },
      {
        hid: 'apple-mobile-web-app-status-bar-style',
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black-translucent'
      },
      {
        hid: 'msapplication-TileColor',
        name: 'msapplication-TileColor',
        content: '#222'
      },
    ],
  },

  css: ['~/assets/scss/main.scss'],

  plugins: [
    '~/plugins/filters.js',
    '~/plugins/sanity-image-builder.js',
    '~/plugins/lazysizes.client.js',
  ],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sanity',
    '@nuxtjs/google-analytics',
  ],

  modules: [
    '@nuxtjs/redirect-module',
    '@nuxtjs/robots',
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
      }
    },
  },

  redirect: [
    {
      from: '^(\\/[^\\?]*[^\\/])(\\?.*)?$',
      to: '$1/$2',
    },
  ],

  tailwindcss: {
    cssPath: '~/assets/scss/main.scss',
  },

  sanity: {
    projectId: 'afxi85wm',
    dataset: 'production',
  },

  googleAnalytics: {
    id: 'G-8LE1MNHB8C',
    dev: process.env.NODE_ENV === 'development',
  },
}
