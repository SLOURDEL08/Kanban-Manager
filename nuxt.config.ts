export default defineNuxtConfig({
  modules: [
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    'nuxt-icon',
    ['@vee-validate/nuxt',
      { 
        autoImport: true,
      }
    ],
    ['@pinia/nuxt', { disableVuex: true }],
    ['@nuxtjs/google-fonts', {
      families: {
        Lato: {
          wght: [300, 400, 700],
          ital: [300],
        },
      },
    }],

  ],

  // Autres configurations...
  shadcn: {
    prefix: 'Ui',
    componentDir: './components/ui'
  },
  pinia: {
    storesDirs: ['./store/**']
  },

  compatibilityDate: '2024-09-26'
})