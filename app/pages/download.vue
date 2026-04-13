<template>
  <div class="download-redirect">
    <p>Starting download...</p>
  </div>
</template>

<script setup>
const dmgUrl = 'https://github.com/Kurk3/lock-it-landing/releases/latest/download/Lock-it-1.0.0-universal.dmg'

useHead({
  title: 'Downloading Lock It',
  meta: [{ name: 'robots', content: 'noindex' }]
})

onMounted(() => {
  window.location.href = dmgUrl
})
</script>

<style scoped>
.download-redirect {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.download-redirect p {
  font-size: 14px;
  color: var(--text-muted);
}
</style>
