<template>
  <section id="features" class="section">
    <div class="container">
      <h2 class="section-title">What it does</h2>

      <div class="features-list">
        <div v-for="f in features" :key="f.name" class="feature-item">
          <div class="feature-icon" v-html="f.icon"></div>
          <div class="feature-content">
            <span class="feature-name">{{ f.name }}</span>
            <span class="feature-desc">{{ f.desc }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  { name: 'Focus Profiles', desc: 'Save your ideal workspace and activate it instantly', icon: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4M4 7l8 4M4 7v10l8 4m0-10v10"/></svg>' },
  { name: 'Auto-Arrange Windows', desc: 'Apps open and position across multiple desktops', icon: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>' },
  { name: 'Close Distractions', desc: "Quit everything that isn't part of your session", icon: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>' },
  { name: 'Grayscale Mode', desc: 'Strip color to reduce compulsive checking', icon: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/></svg>' },
  { name: 'Ambient Sounds', desc: 'Rain, forest, river — pick your focus soundtrack', icon: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>' },
  { name: 'Session Timer', desc: 'Track how long you stay locked in', icon: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>' },
  { name: 'Stats & Streaks', desc: 'Total focus time, daily streaks, weekly activity', icon: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 3v18h18"/><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/></svg>' },
]
</script>

<style scoped>
.features-list { display: flex; flex-direction: column; gap: 0; margin-top: 36px; }

.feature-item {
  display: flex; align-items: center; gap: 16px;
  padding: 16px 0;
  border-bottom: 1px solid var(--page-border);
}
.feature-item:first-child { border-top: 1px solid var(--page-border); }

.feature-icon {
  flex-shrink: 0; width: 36px; height: 36px;
  display: flex; align-items: center; justify-content: center;
  color: var(--text-muted); background: var(--page-bg-alt);
  border: 1px solid var(--page-border); border-radius: 8px;
}

.feature-content { display: flex; flex-direction: column; gap: 1px; }
.feature-name { font-size: 14px; font-weight: 600; color: var(--text-primary); }
.feature-desc { font-size: 13px; color: var(--text-muted); }
</style>
