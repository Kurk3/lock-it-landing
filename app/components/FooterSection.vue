<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-inner">
        <div class="footer-brand">
          <div class="logo">
            <div class="logo-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <span class="logo-text">Lock It</span>
          </div>
          <p class="footer-desc">Focus & Productivity<br />Menu Bar App for macOS</p>
        </div>

        <div class="footer-links">
          <div class="footer-col">
            <h4>Product</h4>
            <NuxtLink to="/#features">Features</NuxtLink>
            <NuxtLink to="/#how-it-works">How It Works</NuxtLink>
            <NuxtLink to="/#pricing">Pricing</NuxtLink>
            <NuxtLink to="/#download">Download</NuxtLink>
          </div>
          <div class="footer-col">
            <h4>Resources</h4>
            <NuxtLink to="/changelog">Changelog</NuxtLink>
            <a href="#">Support</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} Lock It. Built with focus.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer {
  padding: 64px 0 32px;
  border-top: 1px solid var(--border);
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  gap: 64px;
  margin-bottom: 48px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}

.logo-icon { color: var(--accent); }

.logo-text {
  font-size: 18px;
  font-weight: 700;
  color: var(--accent);
}

.footer-desc {
  font-size: 14px;
  color: var(--text-muted);
  line-height: 1.6;
}

.footer-links {
  display: flex;
  gap: 64px;
}

.footer-col {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-col h4 {
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--text-muted);
  margin-bottom: 4px;
}

.footer-col a {
  font-size: 14px;
  color: var(--text-secondary);
  transition: var(--transition);
}

.footer-col a:hover {
  color: var(--accent);
}

.footer-bottom {
  padding-top: 32px;
  border-top: 1px solid var(--border);
}

.footer-bottom p {
  font-size: 13px;
  color: var(--text-muted);
  text-align: center;
}

@media (max-width: 640px) {
  .footer-inner {
    flex-direction: column;
    gap: 40px;
  }

  .footer-links {
    gap: 40px;
  }
}
</style>
