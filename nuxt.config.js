export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
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
        content: '#212121'
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
        content: '#212121'
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/scss/main.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/sanity-image-builder.js',
    '~/plugins/lazysizes.client.js',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sanity',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/redirect-module'],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
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

  // Custom Tailwind entry file
  tailwindcss: {
    cssPath: '~/assets/scss/main.scss',
  },

  // Sanity configuration for data
  sanity: {
    projectId: 'afxi85wm',
    dataset: 'production',
  },
}
