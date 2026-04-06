export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  future: {
    compatibilityVersion: 4
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Lock It — Focus & Productivity for macOS',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'One click to open your apps, arrange your windows, and eliminate distractions. Free focus profiles for macOS — from the menu bar.' },
        { name: 'keywords', content: 'macOS focus app, productivity app, menu bar app, focus mode, deep work, window management, macOS automation, focus timer, distraction blocker, Lock It' },
        { name: 'author', content: 'Lock It' },
        { name: 'robots', content: 'index, follow' },
        { name: 'theme-color', content: '#0e0e0e' },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Lock It' },
        { property: 'og:title', content: 'Lock It — One click. Locked in.' },
        { property: 'og:description', content: 'Create focus profiles that open your apps, arrange your windows, and eliminate distractions — all with a single click from the menu bar. Free, forever.' },
        { property: 'og:locale', content: 'en_US' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Lock It — One click. Locked in.' },
        { name: 'twitter:description', content: 'Focus profiles for macOS. Open apps, arrange windows, kill distractions, play ambient sound — one click from the menu bar.' },
        // Apple specific
        { name: 'apple-mobile-web-app-title', content: 'Lock It' },
        { name: 'application-name', content: 'Lock It' },
      ],
      link: [
        { rel: 'canonical', href: 'https://lockit.app' },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Lock It',
            operatingSystem: 'macOS',
            applicationCategory: 'ProductivityApplication',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD'
            },
            description: 'Focus profiles for macOS. One click to open your apps, arrange your windows, play ambient sound, and start a timer.',
            downloadUrl: 'https://github.com/Kurk3/lock-it/releases/latest',
            softwareVersion: '1.0.0',
            aggregateRating: undefined
          })
        }
      ]
    }
  },
  css: ['~/assets/css/main.css'],
  nitro: {
    prerender: {
      routes: ['/', '/changelog']
    }
  }
})
