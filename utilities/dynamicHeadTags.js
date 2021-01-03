const dynamicHeadTags = (
  pageTitle = '',
  siteName = '',
  siteDescription = '',
  siteShareImage = '',
  favicon32 = '',
  favicon16 = '',
  appleTouchIcon = '',
  twitterHandle = '',
  currentUrl = ''
) => {
  const fullTitle = pageTitle ? `${pageTitle} | ${siteName}` : siteName

  return {
    title: fullTitle,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: siteDescription,
      },
      {
        hid: 'msapplication-TileImage',
        name: 'msapplication-TileImage',
        content: '',
      },
      {
        hid: 'application-name',
        name: 'application-name',
        content: siteName,
      },
      {
        hid: 'apple-mobile-web-app-title',
        name: 'apple-mobile-web-app-title',
        content: siteName,
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: siteName,
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: siteName,
      },
      {
        hid: 'og:type',
        name: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: currentUrl,
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: siteShareImage,
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: siteDescription,
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
        content: fullTitle,
      },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: currentUrl,
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: siteDescription,
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: siteShareImage,
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: twitterHandle,
      },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: twitterHandle,
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: favicon32,
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: favicon16,
      },
      {
        rel: 'apple-touch-icon',
        type: 'image/png',
        sizes: '180x180',
        href: appleTouchIcon,
      },
    ],
  }
}

export default dynamicHeadTags
