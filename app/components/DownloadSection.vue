<template>
  <section id="download" class="section download-section">
    <div class="container download-inner">
      <h2 class="download-title">Stop setting up.<br/>Start locking in.</h2>
      <p class="download-sub">Free. No account. No tracking.</p>
      <a href="/download" class="download-btn">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
        Download for macOS
      </a>
      <span class="download-note">Requires macOS 13 Ventura or later</span>
      <p class="download-legal">By downloading, you agree to our <NuxtLink to="/terms">Terms of Use</NuxtLink> and <NuxtLink to="/privacy">Privacy Policy</NuxtLink>.</p>
    </div>
  </section>
</template>

<style scoped>
.download-section { padding: 100px 0; }
.download-inner { text-align: center; max-width: 440px; margin: 0 auto; }

.download-title {
  font-size: clamp(26px, 3.5vw, 36px); font-weight: 700; line-height: 1.15;
  color: var(--text-primary); letter-spacing: -0.8px; margin-bottom: 10px;
  text-wrap: balance;
}

.download-sub {
  font-size: 14px; color: var(--text-muted); margin-bottom: 32px;
}

.download-btn {
  display: inline-flex; align-items: center; gap: 8px;
  background: var(--text-primary); color: var(--bg-primary);
  padding: 12px 28px; border-radius: 8px;
  font-size: 14px; font-weight: 600; transition: opacity 0.2s;
}
.download-btn:hover { opacity: 0.88; }

.download-note {
  display: block; margin-top: 12px;
  font-size: 11px; color: var(--text-muted); opacity: 0.5;
}

.download-legal {
  margin-top: 20px; font-size: 11px; color: var(--text-muted); opacity: 0.4;
}
.download-legal :deep(a) {
  text-decoration: underline; text-underline-offset: 2px;
  text-decoration-color: rgba(160,160,160,0.3); transition: var(--transition);
}
.download-legal :deep(a):hover {
  color: var(--text-secondary); text-decoration-color: var(--text-muted);
}
</style>
