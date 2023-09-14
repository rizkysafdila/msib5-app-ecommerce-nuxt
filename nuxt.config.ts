// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: { strict: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    'nuxt-icon',
    'nuxt-swiper',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxt/image'
    // '@nuxtjs/eslint-module'
  ],
  app: {
    head: {
      title: 'GITS Commerce'
    }
  },
  googleFonts: {
    families: {
      Poppins: [100, 300, 400, 500, 600, 700, 900]
    }
  },
  image: {
    dir: 'assets/images'
  },
  css: ['@/assets/css/main.css'],
  imports: {
    dirs: [
      // Composables
      'composables',
      'composables/*/index.{ts,js,mjs,mts}',
      'composables/**',

      // Utils
      'utils',
      'utils/*/index.{ts,js,mjs,mts}',
      'utils/**'
    ]
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'] // import { defineStore as definePiniaStore } from 'pinia'
    ]
  }
})
