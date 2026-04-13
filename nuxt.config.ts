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
        { name: 'twitter:description', content: 'Focus profiles for macOS. Open apps, arrange windows, kill distractions — one click from the menu bar.' },
        // Apple specific
        { name: 'apple-mobile-web-app-title', content: 'Lock It' },
        { name: 'application-name', content: 'Lock It' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
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
            description: 'Focus profiles for macOS. One click to open your apps, arrange your windows, and start a timer.',
            downloadUrl: 'https://github.com/Kurk3/lock-it-landing/releases/latest/download/Lock-it-1.0.0-universal.dmg',
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
      routes: ['/', '/changelog', '/privacy', '/terms']
    }
  }
})
