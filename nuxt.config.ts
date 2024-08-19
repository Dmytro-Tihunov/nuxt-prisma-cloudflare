// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['nitro-cloudflare-dev'],
  nitro: {
    preset: 'cloudflare-pages',
    experimental: {
      wasm: true,
    },
  },
})
