// https://nuxt.com/docs/api/configuration/nuxt-config
import * as path from 'path'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    'nuxt-primevue',
    'nuxt-icon',
    '@pinia/nuxt',
  ],
  eslint: {
    config: {
      stylistic: {
        jsx: true,
      },
    },
  },
  primevue: {
    usePrimeVue: true,
    options: {
      unstyled: false,
      ripple: true,
    },
    cssLayerOrder: 'tailwind-base, primevue, tailwind-utilities',
    components: {
      include: '*',
      exclude: ['Galleria', 'Carousel', 'Chart', 'Editor'],
    },
    directives: {
      include: ['Ripple', 'Tooltip'],
    },
  },
  css: [
    '~/assets/scss/main.scss',
    '~/assets/css/tailwind.css',
    '~/assets/css/theme.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
