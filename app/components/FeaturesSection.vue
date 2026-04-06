<template>
  <section id="features" class="section features">
    <div class="container">
      <div class="text-center">
        <span class="section-label">Features</span>
        <h2 class="section-title">Everything you need to<br /><span class="highlight">stay in the zone</span></h2>
        <p class="section-subtitle mx-auto">
          Lock It gives you a complete toolkit to create the perfect focus environment, right from your menu bar.
        </p>
      </div>

      <div class="features-grid">
        <div v-for="feature in features" :key="feature.title" class="feature-card">
          <div class="feature-icon" v-html="feature.icon"></div>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-desc">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
    title: 'Desktop Arrangement',
    description: 'Organize apps across multiple macOS Spaces with fullscreen, split-view, or custom layouts automatically.'
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>`,
    title: 'Ambient Sounds',
    description: 'Immerse yourself with Rain, River Stream, or Forest Birds. Adjustable volume per profile for the perfect atmosphere.'
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    title: 'Session Timer',
    description: 'Track every focus session with a live elapsed timer displayed right in your menu bar popup.'
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`,
    title: 'Grayscale Mode',
    description: 'Automatically convert your screen to grayscale to reduce visual distractions and stay focused on what matters.'
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
    title: 'Detailed Statistics',
    description: 'View total sessions, focus time, day streaks, weekly activity charts, and per-profile breakdowns.'
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    title: 'Focus Profiles',
    description: 'Create unlimited custom profiles with specific app arrangements, sounds, and settings tailored to each workflow.'
  }
]
</script>

<style scoped>
.features {
  position: relative;
}

.highlight {
  color: var(--text-secondary);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 64px;
}

.feature-card {
  padding: 36px;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  transition: var(--transition);
}

.feature-card:hover {
  border-color: var(--border-light);
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.feature-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  background: var(--bg-tertiary);
  color: var(--accent);
  border-radius: 14px;
  margin-bottom: 20px;
}

.feature-title {
  font-size: 18px;
  font-weight: 700;
  color: var(--accent);
  margin-bottom: 10px;
}

.feature-desc {
  font-size: 15px;
  color: var(--text-muted);
  line-height: 1.65;
}

@media (max-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
