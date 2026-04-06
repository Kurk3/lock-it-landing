<template>
  <footer class="footer">
    <div class="container footer-inner">
      <div class="footer-left">
        <div class="footer-logo">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/><circle cx="12" cy="16" r="1.5" fill="currentColor" stroke="none"/></svg>
          <span>Lock It</span>
        </div>
        <p class="footer-tagline">Focus & productivity for macOS.</p>
      </div>
      <div class="footer-links">
        <div class="footer-col">
          <span class="footer-col-title">Product</span>
          <NuxtLink to="/#how-it-works">How It Works</NuxtLink>
          <NuxtLink to="/#why-it-works">Why It Works</NuxtLink>
          <NuxtLink to="/#features">Features</NuxtLink>
          <NuxtLink to="/#download">Download</NuxtLink>
        </div>
        <div class="footer-col">
          <span class="footer-col-title">Resources</span>
          <NuxtLink to="/changelog">Changelog</NuxtLink>
          <a href="mailto:support@lockit.app">Support</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </div>
    <div class="container footer-bottom">
      <span>&copy; {{ new Date().getFullYear() }} Lock It. All rights reserved.</span>
    </div>
  </footer>
</template>

<style scoped>
.footer { padding: 64px 0 0; border-top: 1px solid var(--page-border); }

.footer-inner { display: flex; justify-content: space-between; gap: 48px; }

.footer-logo { display: flex; align-items: center; gap: 8px; color: var(--text-primary); font-weight: 700; font-size: 14px; margin-bottom: 8px; }

.footer-tagline { font-size: 13px; color: var(--text-muted); }

.footer-links { display: flex; gap: 64px; }

.footer-col { display: flex; flex-direction: column; gap: 10px; }

.footer-col-title { font-size: 11px; font-weight: 600; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }

.footer-col a { font-size: 13px; color: var(--text-muted); transition: var(--transition); }
.footer-col a:hover { color: var(--text-primary); }

.footer-bottom {
  margin-top: 48px; padding: 20px 0;
  border-top: 1px solid var(--page-border);
  font-size: 12px; color: var(--text-muted); opacity: 0.5;
}

@media (max-width: 600px) {
  .footer-inner { flex-direction: column; gap: 32px; }
  .footer-links { gap: 40px; }
}
</style>
