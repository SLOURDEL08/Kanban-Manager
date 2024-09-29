export default defineNuxtConfig({
  modules: [
    '@nuxt/image',
    'shadcn-nuxt',
    'nuxt-icon',
    '@nuxt/ui',
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
  shadcn: {
    prefix: 'Ui',
    componentDir: './components/ui'
  },
   vue: {
    compilerOptions: {
      // Indique à Vue que 'USlideover' est un élément personnalisé
      isCustomElement: (tag) => ['USlideover'].includes(tag),
    },
  },
  pinia: {
    storesDirs: ['./store/**']
  },

  compatibilityDate: '2024-09-26'
})