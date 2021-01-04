const dynamicHeadTags = (vm, pageTitle = '') => {
  // Check for specific page meta data from CMS
  const pageMetaDataTitle =
    vm.page && vm.page.pageMetaData && vm.page.pageMetaData.pageTitle
      ? vm.page.pageMetaData.pageTitle
      : ''
  const pageMetaDataDescription =
    vm.page && vm.page.pageMetaData && vm.page.pageMetaData.pageDescription
      ? vm.page.pageMetaData.pageDescription
      : ''
  const pageMetaDataShareImage =
    vm.page && vm.page.pageMetaData && vm.page.pageMetaData.pageShareImage
      ? vm.page.pageMetaData.pageShareImage
      : ''

  // Set general meta data vars from CMS or above
  const metaTitle = pageMetaDataTitle
  const siteName = vm.$store.state.seo.siteName
  const siteDescription =
    pageMetaDataDescription || vm.$store.state.seo.siteDescription
  const siteShareImage =
    vm.$urlFor(pageMetaDataShareImage).width(1200).url() ||
    vm.$urlFor(vm.$store.state.seo.siteShareImage).width(1200).url()
  const favicon32 = vm.$urlFor(vm.$store.state.favicons.favicon).width(32).url()
  const favicon16 = vm.$urlFor(vm.$store.state.favicons.favicon).width(16).url()
  const appleTouchIcon = vm
    .$urlFor(vm.$store.state.favicons.appleTouchIcon)
    .width(180)
    .url()
  const twitterHandle = vm.$store.state.social.twitterHandle
  const currentUrl = `${vm.$store.state.hostname}${vm.$route.fullPath}`

  // Construct full page title
  const fullTitle = pageTitle ? `${pageTitle} | ${siteName}` : siteName

  return {
    title: metaTitle || fullTitle,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: siteDescription,
      },
      {
        hid: 'msapplication-TileImage',
        name: 'msapplication-TileImage',
        content: appleTouchIcon,
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
        content: metaTitle || pageTitle || siteName,
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
        content: metaTitle || pageTitle || siteName,
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
