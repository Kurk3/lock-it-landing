<template>
  <div class="layout">
    <NavBar />
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup>
</script>

<style scoped>
.layout {
  min-height: 100vh;
}
</style>
