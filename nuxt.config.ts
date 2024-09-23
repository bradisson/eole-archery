// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    'nuxt-icon',
    '@pinia/nuxt',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/ui',
  ],
  eslint: {
    config: {
      stylistic: {
        jsx: true,
      },
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
