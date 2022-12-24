export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'xxp',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // '~/assets/scss/_mixin',
    { src: '~/assets/scss/_mixin.scss' },
  ],
  styleResources: {
    scss: [
      '~/assets/scss/_mixin.scss',
    ]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/vuetify',
    '@nuxtjs/style-resources',
    'nuxt-webfontloader',
  ],

  buildModules: ["nuxt-microcms-module"],
  microcms: {
    options: {
      serviceDomain: process.env.SERVICE_DOMAIN,
      apiKey: process.env.API_KEY,
    },
    mode: process.env.NODE_ENV === "production" ? "server" : "all",
  },

    // 追加
    webfontloader: {
      google: {
        families: ['M+PLUS+1+Code']
      }
    },
  //  追加
  vuetify: {
    theme: {
      primary: '#03a9f4',
      secondary: '#607d8b',
      accent: '#9c27b0',
      error: '#f44336',
      warning: '#ffc107',
      info: '#009688',
      success: '#4caf50'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
