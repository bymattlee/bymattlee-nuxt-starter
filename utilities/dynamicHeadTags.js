const dynamicHeadTags = (passedOptions) => {
  const defaultOptions = {
    pageTitle: '',
    metaTitle: '',
    siteName: '',
    siteDescription: '',
    siteShareImage: '',
    favicon32: '',
    favicon16: '',
    appleTouchIcon: '',
    twitterHandle: '',
    currentUrl: '',
  }

  const options = {
    ...defaultOptions,
    ...passedOptions,
  }

  const fullTitle = options.pageTitle
    ? `${options.pageTitle} | ${options.siteName}`
    : options.siteName

  return {
    title: options.metaTitle || fullTitle,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: options.siteDescription,
      },
      {
        hid: 'msapplication-TileImage',
        name: 'msapplication-TileImage',
        content: options.appleTouchIcon,
      },
      {
        hid: 'application-name',
        name: 'application-name',
        content: options.siteName,
      },
      {
        hid: 'apple-mobile-web-app-title',
        name: 'apple-mobile-web-app-title',
        content: options.siteName,
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: options.metaTitle || options.pageTitle || options.siteName,
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: options.siteName,
      },
      {
        hid: 'og:type',
        name: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: options.currentUrl,
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: options.siteShareImage,
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: options.siteDescription,
      },
      {
        hid: 'og:locale',
        name: 'og:locale',
        content: 'en_US',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: options.metaTitle || options.pageTitle || options.siteName,
      },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: options.currentUrl,
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: options.siteDescription,
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: options.siteShareImage,
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: options.twitterHandle,
      },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: options.twitterHandle,
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: options.favicon32,
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: options.favicon16,
      },
      {
        rel: 'apple-touch-icon',
        type: 'image/png',
        sizes: '180x180',
        href: options.appleTouchIcon,
      },
    ],
  }
}

export default dynamicHeadTags
