import NuxtConfiguration from '@nuxt/config'
import colors from 'vuetify/es5/util/colors'

const config: NuxtConfiguration = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },
  // Set the router's base path
  router: {
    base: process.env.NODE_ENV === 'production'
      ? '/longreads/lifestyle/'
      : '/'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
      'slick-carousel/slick/slick.scss',
      'slick-carousel/slick/slick-theme.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: "~plugins/slick-slide.ts", ssr: false }
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/vuetify',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    theme: {
      primary: colors.blue.lighten2,
      secondary: colors.blueGrey.darken4,
      accent: colors.grey.darken3,
      info: colors.teal.lighten1,
      warning: colors.amber.base,
      error: colors.deepOrange.accent4,
      success: colors.green.accent3
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}

export default config
