export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Kaan ŞEN',
    htmlAttrs: {
      lang: 'tr',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Kaan ŞEN' },
    ],

    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600;700;800;900&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap',
      },

      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.15.4/css/all.css',
        crossorigin: 'anonymous',
        integrity:
          'sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm',
      },
    ],
    script: [
      {
        src: 'https://kit.fontawesome.com/ea57adae30.js',
        body: true,
        crossorigin: 'anonymous',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/scss/colors.scss',
    '~assets/scss/mixins.scss',
    '~assets/scss/animations.scss',
    '~assets/scss/main.scss',
  ],

  styleResources: {
    scss: ['~assets/scss/*.scss'],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  server: {
    host: '192.168.1.114', // default: localhost
  },
}
