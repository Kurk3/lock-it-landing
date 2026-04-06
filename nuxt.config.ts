export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  future: {
    compatibilityVersion: 4
  },
  app: {
    head: {
      title: 'Lock It — Focus & Productivity for macOS',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Create customizable focus profiles that arrange your apps, play ambient sounds, and eliminate distractions — all from the menu bar.' },
        { property: 'og:title', content: 'Lock It — Focus & Productivity for macOS' },
        { property: 'og:description', content: 'Create customizable focus profiles that arrange your apps, play ambient sounds, and eliminate distractions.' },
        { name: 'theme-color', content: '#0e0e0e' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap' }
      ]
    }
  },
  css: ['~/assets/css/main.css']
})
