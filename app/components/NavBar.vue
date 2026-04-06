<template>
  <nav :class="['navbar', { scrolled: isScrolled }]">
    <div class="container nav-inner">
      <NuxtLink to="/" class="logo">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/><circle cx="12" cy="16" r="1.5" fill="currentColor" stroke="none"/></svg>
        <span>LOCK IT</span>
      </NuxtLink>
      <div class="nav-center">
        <NuxtLink to="/#how-it-works">How It Works</NuxtLink>
        <NuxtLink to="/#why-it-works">Science</NuxtLink>
        <NuxtLink to="/#features">Features</NuxtLink>
        <NuxtLink to="/changelog">Changelog</NuxtLink>
      </div>
      <a href="https://github.com/Kurk3/lock-it-landing/releases/latest/download/Lock-It-1.0.0-universal.dmg" class="nav-download">Download</a>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const isScrolled = ref(false)
const handleScroll = () => { isScrolled.value = window.scrollY > 20 }
onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.navbar {
  position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
  padding: 14px 0; transition: all 0.3s ease;
}
.navbar.scrolled {
  padding: 10px 0;
  background: rgba(14,14,14,0.85);
  backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--page-border);
}
.nav-inner { display: flex; align-items: center; justify-content: space-between; }

.logo {
  display: flex; align-items: center; gap: 10px;
  color: var(--text-primary); text-decoration: none;
}
.logo span {
  font-size: 12px; font-weight: 800; letter-spacing: 2.5px;
}

.nav-center { display: flex; gap: 28px; }
.nav-center a {
  font-size: 13px; font-weight: 400; color: var(--text-muted);
  transition: color 0.2s; letter-spacing: -0.1px;
}
.nav-center a:hover { color: var(--text-primary); }

.nav-download {
  font-size: 12px; font-weight: 600; color: var(--bg-primary);
  background: var(--text-primary); padding: 7px 18px; border-radius: 6px;
  transition: opacity 0.2s;
}
.nav-download:hover { opacity: 0.88; }

@media (max-width: 768px) {
  .nav-center { display: none; }
}
</style>
