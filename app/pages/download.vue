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
      <p class="follow-text">Follow the development</p>
      <a href="https://x.com/Adam_Kurek_" target="_blank" rel="noopener" class="x-link">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        @Adam_Kurek_
      </a>
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
  margin-bottom: 12px;
}

.x-link {
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

.x-link:hover {
  color: var(--text-primary);
  border-color: var(--text-muted);
}
</style>
