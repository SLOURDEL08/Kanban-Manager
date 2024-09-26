export default defineNuxtConfig({
  modules: [
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
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

  compatibilityDate: '2024-09-26'
})