<template>
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <p class="hero-eyebrow">macOS menu bar app</p>
        <h1 class="hero-title">One click.<br/>Locked in.</h1>
        <p class="hero-sub">Focus profiles that open your apps, arrange your windows, kill distractions, play ambient sound, and start a timer. One button.</p>
        <div class="hero-actions">
          <a href="https://github.com/Kurk3/lock-it/releases/latest" class="hero-cta">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            Download for macOS
          </a>
          <span class="hero-free">Free, forever</span>
        </div>
      </div>
      <div class="hero-mock">
        <div class="app-frame">
          <div class="app-header">
            <div class="app-logo"><div class="app-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/><circle cx="12" cy="16" r="1.5" fill="white" stroke="none"/></svg></div><span>LOCK IT</span></div>
            <div class="app-header-btns">
              <div class="app-header-btn"><svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg></div>
              <div class="app-header-btn"><svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></div>
            </div>
          </div>
          <div class="app-body">
            <div v-for="m in modes" :key="m.name" class="mock-mode-card">
              <div class="mock-mode-info"><span class="mock-mode-name">{{ m.name }}</span><span class="mock-mode-desc">{{ m.desc }}</span></div>
              <div class="mock-mode-actions"><div class="mock-btn-start">Start</div><div class="mock-btn-group"><div class="mock-btn-modify">Modify</div></div></div>
            </div>
          </div>
          <div class="app-nav">
            <div class="app-nav-add">+ Add Profile</div>
            <div class="app-nav-right">
              <div class="app-nav-btn active"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4M4 7l8 4M4 7v10l8 4m0-10v10"/></svg> Profiles</div>
              <div class="app-nav-btn"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 3v18h18"/><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/></svg> Stats</div>
              <div class="app-nav-btn"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="3"/></svg> Settings</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const modes = [
  { name: 'Deep Work', desc: 'VS Code, Terminal, Safari — Rain' },
  { name: 'Design', desc: 'Figma, Safari — Forest Birds' },
  { name: 'Writing', desc: 'iA Writer — River Stream' },
]
</script>

<style scoped>
.hero { padding: 120px 0 60px; }

.hero-content { text-align: center; max-width: 560px; margin: 0 auto 56px; }

.hero-eyebrow {
  font-size: 12px; font-weight: 500; color: var(--text-muted);
  letter-spacing: 0.5px; margin-bottom: 16px;
}

.hero-title {
  font-size: clamp(40px, 6vw, 64px); font-weight: 800; line-height: 0.95;
  color: var(--text-primary); letter-spacing: -2px; margin-bottom: 20px;
  text-wrap: balance;
}

.hero-sub {
  font-size: 15px; color: var(--text-muted); line-height: 1.6;
  max-width: 440px; margin: 0 auto 28px;
  text-wrap: balance;
}

.hero-actions { display: flex; align-items: center; justify-content: center; gap: 16px; }

.hero-cta {
  display: inline-flex; align-items: center; gap: 8px;
  background: var(--text-primary); color: var(--bg-primary);
  padding: 10px 22px; border-radius: 8px;
  font-size: 13px; font-weight: 600; transition: opacity 0.2s;
}
.hero-cta:hover { opacity: 0.88; }

.hero-free { font-size: 12px; color: var(--text-muted); }

.hero-mock { display: flex; justify-content: center; }

.app-icon {
  width: 22px; height: 22px; display: flex; align-items: center; justify-content: center;
  background: #1a1a1a; border-radius: 5px; flex-shrink: 0;
}

@media (max-width: 600px) {
  .hero { padding: 100px 0 40px; }
  .hero-content { margin-bottom: 40px; }
  .hero-actions { flex-direction: column; gap: 8px; }
}
</style>
