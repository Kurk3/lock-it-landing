<template>
  <section id="download" class="section download">
    <div class="glow-accent download-glow"></div>
    <div class="container">
      <div class="download-card">
        <span class="section-label">Download</span>
        <h2 class="section-title">Ready to <span class="highlight">lock in</span>?</h2>
        <p class="download-desc">
          Download Lock It for free and start building your perfect focus environment today.
        </p>

        <div class="download-btn-group">
          <a href="#" class="btn btn-primary btn-lg">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Download for macOS
          </a>
        </div>

        <div class="download-meta">
          <span>macOS 12+ required</span>
          <span class="meta-dot"></span>
          <span>Universal (Apple Silicon + Intel)</span>
          <span class="meta-dot"></span>
          <span>v1.0.0</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.download {
  position: relative;
  overflow: hidden;
}

.download-glow {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.2;
  width: 800px;
  height: 800px;
}

.highlight { color: var(--text-secondary); }

.download-card {
  text-align: center;
  position: relative;
  z-index: 1;
  padding: 80px 40px;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
}

.download-desc {
  font-size: 18px;
  color: var(--text-muted);
  max-width: 500px;
  margin: 0 auto 40px;
  line-height: 1.7;
}

.download-btn-group {
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
}

.btn-lg {
  padding: 18px 40px;
  font-size: 18px;
}

.download-meta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-size: 13px;
  color: var(--text-muted);
}

.meta-dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--border);
}

@media (max-width: 640px) {
  .download-meta {
    flex-direction: column;
    gap: 4px;
  }

  .meta-dot { display: none; }

  .download-card {
    padding: 48px 20px;
  }
}
</style>
