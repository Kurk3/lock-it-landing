<template>
  <div class="download-page">
    <div class="download-card">
      <div class="lock-icon">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <rect x="5" y="11" width="14" height="10" rx="2"/>
          <path d="M8 11V7a4 4 0 0 1 8 0v4"/>
          <circle cx="12" cy="16" r="1.5" fill="currentColor" stroke="none"/>
        </svg>
      </div>
      <h1 class="title">Thank you for downloading Lock It</h1>
      <p class="subtitle">Your download should start automatically. If it doesn't, <a :href="dmgUrl" class="manual-link">click here</a>.</p>
      <div class="divider"></div>
      <p class="follow-text">Questions, bugs, or feedback?</p>
      <div class="links">
        <a href="https://github.com/Kurk3/lock-it/issues" target="_blank" rel="noopener" class="link-btn github-link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          Open an Issue
        </a>
        <a href="https://x.com/Adam_Kurek_" target="_blank" rel="noopener" class="link-btn x-link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          @Adam_Kurek_
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const dmgUrl = 'https://github.com/Kurk3/lock-it-landing/releases/latest/download/Lock-it-1.0.0-universal.dmg'

useHead({
  title: 'Thanks for downloading Lock It',
  meta: [{ name: 'robots', content: 'noindex' }]
})

onMounted(() => {
  window.location.href = dmgUrl
})
</script>

<style scoped>
.download-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.download-card {
  text-align: center;
  max-width: 400px;
}

.lock-icon {
  color: var(--text-muted);
  margin-bottom: 20px;
  opacity: 0.4;
}

.title {
  font-size: 22px;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.4px;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 13px;
  color: var(--text-muted);
  line-height: 1.6;
}

.manual-link {
  text-decoration: underline;
  text-underline-offset: 2px;
  color: var(--text-secondary);
}

.divider {
  width: 40px;
  height: 1px;
  background: var(--page-border);
  margin: 24px auto;
}

.follow-text {
  font-size: 12px;
  color: var(--text-muted);
  opacity: 0.5;
  margin-bottom: 14px;
}

.links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.link-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 500;
  color: var(--text-secondary);
  padding: 8px 18px;
  border: 1px solid var(--page-border);
  border-radius: 8px;
  transition: all 0.2s;
}

.link-btn:hover {
  color: var(--text-primary);
  border-color: var(--text-muted);
}

@media (max-width: 480px) {
  .links { flex-direction: column; }
}
</style>
