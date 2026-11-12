import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  modules: ['@nuxt/image'],
  compatibilityDate: '2026-08-30',
  devtools: { enabled: true },
  css: ['~/assets/styles/main.scss'],
  
  // Объясняем Nuxt, куда ведет тильда
  alias: {
    '~': fileURLToPath(new URL('./', import.meta.url)),
    '@': fileURLToPath(new URL('./', import.meta.url))
  },

  // ДОБАВЛЯЕМ БЛОК С НАСТРОЙКАМИ API
  runtimeConfig: {
    public: {
      apiBase: 'http://127.0.0.1:8000', // Адрес вашего Django сервера
    },
  },
})