import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createI18n } from 'vue-i18n'
import { translations } from '@/locales/translations.js'
import 'preline'
import '@/assets/styles/fonts.css'
import '@/assets/styles/main.css'
import App from '@/app.vue'
import { routes } from '@/routes.js'

const messages = { en: {}, sv: {} }
for (const section in translations) {
  messages.en[section] = {}
  messages.sv[section] = {}
  for (const key in translations[section]) {
    messages.en[section][key] = translations[section][key].en
    messages.sv[section][key] = translations[section][key].sv
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_PUBLIC_PATH),
  routes,
})

const i18n = createI18n({
  legacy: false,
  locale: 'sv',
  fallbackLocale: 'en',
  messages
})

router.afterEach(() => {
  setTimeout(() => window.HSStaticMethods?.autoInit(), 100)
})

createApp(App).use(router).use(i18n).mount('#app')
