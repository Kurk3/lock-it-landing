<template>
  <section id="how-it-works" class="section how-it-works">
    <div class="container">
      <div class="text-center">
        <span class="section-label">How It Works</span>
        <h2 class="section-title">Focus in <span class="highlight">3 simple steps</span></h2>
        <p class="section-subtitle mx-auto">
          From setup to deep focus in under a minute. No complicated configuration needed.
        </p>
      </div>

      <div class="steps">
        <div v-for="(step, index) in steps" :key="step.title" class="step">
          <div class="step-number">{{ index + 1 }}</div>
          <div class="step-content">
            <h3 class="step-title">{{ step.title }}</h3>
            <p class="step-desc">{{ step.description }}</p>
          </div>
          <div class="step-visual">
            <div v-html="step.visual"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const steps = [
  {
    title: 'Create a Profile',
    description: 'Pick your apps, arrange desktops, choose an ambient sound. Give it a name and you\'re set.',
    visual: `<div class="mock-create">
      <div class="mock-input"><span class="mock-label">Name</span><span class="mock-value">Deep Work</span></div>
      <div class="mock-input"><span class="mock-label">Apps</span><span class="mock-value">VS Code, Terminal, Safari</span></div>
      <div class="mock-input"><span class="mock-label">Sound</span><span class="mock-value">Rain</span></div>
    </div>`
  },
  {
    title: 'Click Start',
    description: 'Lock It launches your apps in the configured layout, enables grayscale, starts the timer, and plays audio.',
    visual: `<div class="mock-start">
      <div class="mock-timer">24:37</div>
      <div class="mock-playing">Rain — Playing</div>
      <div class="mock-status-bar">
        <div class="mock-progress"></div>
      </div>
    </div>`
  },
  {
    title: 'Focus & Track',
    description: 'The timer runs in the menu bar while you work. When done, session stats are saved automatically.',
    visual: `<div class="mock-stats">
      <div class="mock-stat-row"><span>Today</span><span class="val">3h 42m</span></div>
      <div class="mock-stat-row"><span>Streak</span><span class="val">12 days</span></div>
      <div class="mock-stat-row"><span>Sessions</span><span class="val">247</span></div>
    </div>`
  }
]
</script>

<style scoped>
.how-it-works {
  background: var(--bg-secondary);
}

.highlight {
  color: var(--text-secondary);
}

.steps {
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 64px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

.step {
  display: flex;
  align-items: center;
  gap: 32px;
  padding: 40px;
  background: var(--bg-primary);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  transition: var(--transition);
}

.step:hover {
  border-color: var(--border-light);
}

.step-number {
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 800;
  color: var(--accent);
  background: var(--bg-tertiary);
  border-radius: 16px;
}

.step-content {
  flex: 1;
}

.step-title {
  font-size: 20px;
  font-weight: 700;
  color: var(--accent);
  margin-bottom: 8px;
}

.step-desc {
  font-size: 15px;
  color: var(--text-muted);
  line-height: 1.6;
}

.step-visual {
  flex-shrink: 0;
  width: 220px;
  padding: 20px;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: var(--radius);
}

/* Mock visuals */
:deep(.mock-input) {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid var(--border);
  font-size: 13px;
}

:deep(.mock-input:last-child) {
  border-bottom: none;
}

:deep(.mock-label) {
  color: var(--text-muted);
}

:deep(.mock-value) {
  color: var(--text-primary);
  font-weight: 500;
}

:deep(.mock-start) {
  text-align: center;
}

:deep(.mock-timer) {
  font-size: 36px;
  font-weight: 800;
  color: var(--accent);
  font-variant-numeric: tabular-nums;
}

:deep(.mock-playing) {
  font-size: 12px;
  color: var(--text-muted);
  margin: 8px 0 12px;
}

:deep(.mock-status-bar) {
  height: 4px;
  background: var(--border);
  border-radius: 2px;
  overflow: hidden;
}

:deep(.mock-progress) {
  width: 40%;
  height: 100%;
  background: var(--accent);
  border-radius: 2px;
}

:deep(.mock-stat-row) {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  font-size: 14px;
  color: var(--text-muted);
}

:deep(.val) {
  color: var(--accent);
  font-weight: 600;
}

@media (max-width: 768px) {
  .step {
    flex-direction: column;
    text-align: center;
  }

  .step-visual {
    width: 100%;
  }
}
</style>
