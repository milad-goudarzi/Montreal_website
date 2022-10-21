export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: false,
  serverMiddleware: [
    {
      path: "/api",
      handler: "~/server/api.js"
    }
  ],
  head: {
    title: 'Montreal',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'Montreal', name: 'website for traveling', content: 'holiday in montreal' },
      {
        hid: "description",
        name: "description",
        content: "Website for traveller to know how the beautiful art of Montreal.",
      },
      { property: "og:site_name", content: "Montreal Website" },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://imaje.herokuapp.com",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "My Amazing website for montreal",
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "Website for traveller to know how the beautiful art of Montreal.",
      },
      { hid: 'keywords', name: 'keywords', content: 'what to see in Canada, Canada trip, Canada short trip, where to go in Canada, big cities in Canada, cities in Canada, airport Canada, train Canada, romantic city in Canada, Valentines day Canada, travel blog, nomad, nomad lifestyle, wanderlust, travel bug, sightseeing, sightsee, getaway, weekend getaway, budget trips, affordable trips, globetrotting, events in montreal, service in montreal, itinerary in montreal, summer in montreal, winter in montreal, bixi, Metro, igloofest' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Belleza&display=swap" },
    ],
    script: [
      { src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" },
      { src: "https://cdn.jsdelivr.net/npm/vue-scrollto" }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/style.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    ['vue-scrollto/nuxt', { duration: 10 }],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // baseURL: 'http://localhost:3000'
    baseURL: 'https://imaje.herokuapp.com'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
