<template>
  <div class="changelog-page">
    <section class="changelog-hero">
      <div class="container">
        <span class="section-label">Changelog</span>
        <h1 class="section-title">Release Notes</h1>
        <p class="section-subtitle">What's new in Lock It. Every update, documented.</p>
      </div>
    </section>

    <section class="changelog-content">
      <div class="container">
        <div class="timeline">
          <div v-for="release in releases" :key="release.version" class="release">
            <div class="release-header">
              <div class="release-version">
                <span class="version-tag">v{{ release.version }}</span>
                <span v-if="release.latest" class="latest-badge">Latest</span>
              </div>
              <span class="release-date">{{ release.date }}</span>
            </div>

            <div class="release-body">
              <div v-if="release.highlights" class="release-highlights">
                <p>{{ release.highlights }}</p>
              </div>

              <div v-for="section in release.sections" :key="section.title" class="release-section">
                <h3 class="release-section-title">
                  <span class="section-icon" v-html="section.icon"></span>
                  {{ section.title }}
                </h3>
                <ul class="release-list">
                  <li v-for="item in section.items" :key="item">{{ item }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="changelog-cta">
          <p>Want to try the latest version?</p>
          <NuxtLink to="/#download" class="btn btn-primary">
            Download Lock It
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Changelog — Lock It',
  meta: [
    { name: 'description', content: 'See what\'s new in Lock It. Every update, bug fix, and new feature — documented.' },
    { property: 'og:title', content: 'Changelog — Lock It' },
    { property: 'og:description', content: 'Release notes for Lock It. Every update documented.' },
  ]
})

const releases = [
  {
    version: '1.0.0',
    date: 'April 2026',
    latest: true,
    highlights: 'The first official release of Lock It. Build focus profiles, automate your desktop, and track your productivity — all from the macOS menu bar.',
    sections: [
      {
        title: 'Features',
        icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
        items: [
          'Custom focus profiles with name, description, and personalized setup',
          'Desktop arrangement — organize apps across multiple macOS Spaces',
          'Fullscreen, split-view, and custom layout support',
          'Grayscale mode to reduce visual distractions',
          'Close other apps when starting a session',
          'One-click session activation from tray popup',
          'Live elapsed timer display (MM:SS / HH:MM:SS)',
          'Confirmation dialog before stopping',
        ]
      },
      {
        title: 'Statistics',
        icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
        items: [
          'Total sessions, focus time, and day streak tracking',
          'Weekly activity bar chart',
          'Per-profile time breakdown',
          'Recent session history',
        ]
      },
      {
        title: 'Settings & System',
        icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
        items: [
          'Auto-launch on macOS login',
          'Dark / Light theme toggle',
          'Reset all data option',
          'Native macOS menu bar integration',
          'Universal binary (Apple Silicon + Intel)',
        ]
      },
      {
        title: 'Bug Fixes',
        icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>',
        items: [
          'Fixed app icon (proper multi-resolution icns instead of renamed PNG)',
          'Added entitlements for Electron (JIT, unsigned memory, automation)',
          'Removed moveToApplicationsFolder code that caused install issues',
          'Resolved macOS quarantine issues with installer',
        ]
      }
    ]
  }
]
</script>

<style scoped>
.changelog-page {
  padding-top: 100px;
}

.changelog-hero {
  padding: 60px 0 40px;
  text-align: center;
}

.changelog-hero .section-subtitle {
  margin: 0 auto;
}

.changelog-content {
  padding: 40px 0 120px;
}

.timeline {
  max-width: 800px;
  margin: 0 auto;
}

.release {
  position: relative;
  padding-left: 32px;
  margin-bottom: 64px;
  border-left: 2px solid var(--page-border);
}

.release::before {
  content: '';
  position: absolute;
  left: -7px;
  top: 8px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--accent);
}

.release-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  flex-wrap: wrap;
  gap: 12px;
}

.release-version {
  display: flex;
  align-items: center;
  gap: 12px;
}

.version-tag {
  font-size: 24px;
  font-weight: 800;
  color: var(--accent);
}

.latest-badge {
  display: inline-block;
  padding: 4px 14px;
  font-size: 12px;
  font-weight: 600;
  color: var(--bg-primary);
  background: var(--accent);
  border-radius: 50px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.release-date {
  font-size: 14px;
  color: var(--text-muted);
}

.release-highlights {
  padding: 20px 24px;
  background: var(--page-bg-alt);
  border: 1px solid var(--page-border);
  border-radius: var(--radius);
  margin-bottom: 24px;
  font-size: 15px;
  color: var(--text-secondary);
  line-height: 1.7;
}

.release-section {
  margin-bottom: 24px;
}

.release-section:last-child {
  margin-bottom: 0;
}

.release-section-title {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-weight: 700;
  color: var(--accent);
  margin-bottom: 12px;
}

.section-icon {
  display: inline-flex;
  color: var(--text-muted);
}

.release-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.release-list li {
  position: relative;
  padding-left: 20px;
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.6;
}

.release-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 10px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--border-light);
}

/* CTA */
.changelog-cta {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 48px;
  background: var(--page-bg-alt);
  border: 1px solid var(--page-border);
  border-radius: var(--radius);
}

.changelog-cta p {
  font-size: 18px;
  color: var(--text-muted);
  margin-bottom: 24px;
}

@media (max-width: 640px) {
  .release {
    padding-left: 24px;
  }

  .release-header {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
