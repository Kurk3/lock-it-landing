<template>
  <section class="hero">
    <div class="glow-accent hero-glow-1"></div>
    <div class="glow-accent hero-glow-2"></div>

    <div class="container hero-content">
      <div class="hero-badge">
        <span class="badge-dot"></span>
        macOS Menu Bar App
      </div>

      <h1 class="hero-title">
        Lock in your focus.<br />
        <span class="hero-highlight">Lock out distractions.</span>
      </h1>

      <p class="hero-description">
        Create customizable focus profiles that arrange your apps, play ambient sounds,
        and eliminate distractions — all from the macOS menu bar.
      </p>

      <div class="hero-actions">
        <a href="#download" class="btn btn-primary">
          Download for macOS
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
        </a>
        <a href="#features" class="btn btn-secondary">
          Learn More
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <polyline points="19 12 12 19 5 12" />
          </svg>
        </a>
      </div>

      <div class="hero-stats">
        <div class="stat">
          <span class="stat-number">100%</span>
          <span class="stat-label">Free</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat">
          <span class="stat-number">macOS</span>
          <span class="stat-label">Native</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat">
          <span class="stat-number">0</span>
          <span class="stat-label">Distractions</span>
        </div>
      </div>

      <!-- App Preview -->
      <div class="hero-preview">
        <div class="preview-window">
          <div class="window-bar">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
          </div>
          <div class="preview-content">
            <div class="preview-sidebar">
              <div class="sidebar-item active">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <span>Focus</span>
              </div>
              <div class="sidebar-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                <span>Profiles</span>
              </div>
              <div class="sidebar-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
                <span>Stats</span>
              </div>
            </div>
            <div class="preview-main">
              <div class="profile-card">
                <div class="profile-icon">&#x1F4BB;</div>
                <div>
                  <div class="profile-name">Deep Work</div>
                  <div class="profile-desc">VS Code + Terminal + Rain</div>
                </div>
                <button class="start-btn">Start</button>
              </div>
              <div class="profile-card">
                <div class="profile-icon">&#x1F3A8;</div>
                <div>
                  <div class="profile-name">Design</div>
                  <div class="profile-desc">Figma + Safari + Forest</div>
                </div>
                <button class="start-btn">Start</button>
              </div>
              <div class="profile-card active-session">
                <div class="profile-icon">&#x270D;&#xFE0F;</div>
                <div>
                  <div class="profile-name">Writing</div>
                  <div class="profile-desc">Session active — 47:23</div>
                </div>
                <button class="stop-btn">Stop</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.hero {
  position: relative;
  padding: 160px 0 80px;
  overflow: hidden;
}

.hero-glow-1 {
  top: -200px;
  right: -200px;
  opacity: 0.3;
}

.hero-glow-2 {
  bottom: -100px;
  left: -200px;
  opacity: 0.15;
}

.hero-content {
  text-align: center;
  position: relative;
  z-index: 1;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 20px;
  font-size: 13px;
  font-weight: 500;
  color: var(--text-muted);
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 50px;
  margin-bottom: 32px;
}

.badge-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

.hero-title {
  font-size: clamp(40px, 7vw, 72px);
  font-weight: 900;
  line-height: 1.05;
  margin-bottom: 24px;
  color: var(--accent);
  letter-spacing: -2px;
}

.hero-highlight {
  background: linear-gradient(135deg, #ffffff, #a0a0a0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: 20px;
  color: var(--text-muted);
  max-width: 620px;
  margin: 0 auto 40px;
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 48px;
}

.hero-stats {
  display: inline-flex;
  align-items: center;
  gap: 32px;
  padding: 16px 40px;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 50px;
  margin-bottom: 64px;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}

.stat-number {
  font-size: 20px;
  font-weight: 800;
  color: var(--accent);
}

.stat-label {
  font-size: 12px;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.stat-divider {
  width: 1px;
  height: 32px;
  background: var(--border);
}

/* ===== APP PREVIEW ===== */
.hero-preview {
  max-width: 720px;
  margin: 0 auto;
}

.preview-window {
  background: var(--bg-secondary);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  overflow: hidden;
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.5), 0 0 60px var(--white-glow);
}

.window-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px 20px;
  background: var(--bg-primary);
  border-bottom: 1px solid var(--border);
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.dot.red { background: #ff5f57; }
.dot.yellow { background: #febc2e; }
.dot.green { background: #28c840; }

.preview-content {
  display: flex;
  min-height: 300px;
}

.preview-sidebar {
  width: 180px;
  padding: 20px 16px;
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.sidebar-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border-radius: 10px;
  font-size: 14px;
  color: var(--text-muted);
  transition: var(--transition);
}

.sidebar-item.active {
  background: var(--bg-tertiary);
  color: var(--accent);
}

.preview-main {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.profile-card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 20px;
  background: var(--bg-primary);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  transition: var(--transition);
}

.profile-card:hover {
  border-color: var(--border-light);
}

.profile-icon {
  font-size: 28px;
}

.profile-name {
  font-size: 15px;
  font-weight: 600;
  color: var(--accent);
}

.profile-desc {
  font-size: 13px;
  color: var(--text-muted);
  margin-top: 2px;
}

.start-btn,
.stop-btn {
  margin-left: auto;
  padding: 8px 20px;
  border-radius: 50px;
  font-size: 13px;
  font-weight: 600;
  font-family: var(--font);
  cursor: pointer;
  border: none;
  transition: var(--transition);
}

.start-btn {
  background: var(--accent);
  color: var(--bg-primary);
}

.stop-btn {
  background: var(--danger);
  color: #fff;
  box-shadow: 0 0 20px var(--danger-glow);
}

.active-session {
  border-color: var(--border-light);
  background: var(--bg-tertiary);
}

@media (max-width: 768px) {
  .hero {
    padding: 120px 0 60px;
  }

  .hero-actions {
    flex-direction: column;
  }

  .hero-stats {
    gap: 20px;
    padding: 12px 24px;
  }

  .preview-sidebar {
    display: none;
  }
}
</style>
