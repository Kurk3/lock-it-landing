<template>
  <nav :class="['navbar', { scrolled: isScrolled }]">
    <div class="container nav-inner">
      <NuxtLink to="/" class="logo">
        <div class="logo-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>
        <span class="logo-text">Lock It</span>
      </NuxtLink>

      <div class="nav-links">
        <NuxtLink to="/#features">Features</NuxtLink>
        <NuxtLink to="/#how-it-works">How It Works</NuxtLink>
        <NuxtLink to="/#pricing">Pricing</NuxtLink>
        <NuxtLink to="/changelog">Changelog</NuxtLink>
      </div>

      <a href="#download" class="btn btn-primary btn-sm">
        Download Free
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      </a>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 20px 0;
  transition: var(--transition);
}

.navbar.scrolled {
  padding: 12px 0;
  background: rgba(14, 14, 14, 0.85);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-icon {
  color: var(--accent);
}

.logo-text {
  font-size: 20px;
  font-weight: 700;
  color: var(--accent);
}

.nav-links {
  display: flex;
  gap: 36px;
}

.nav-links a {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-muted);
  transition: var(--transition);
}

.nav-links a:hover {
  color: var(--accent);
}

.btn-sm {
  padding: 10px 24px;
  font-size: 14px;
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
}
</style>
