<template>
  <section class="section screenshots">
    <div class="container">
      <div class="text-center">
        <span class="section-label">Preview</span>
        <h2 class="section-title">See Lock It <span class="highlight">in action</span></h2>
        <p class="section-subtitle mx-auto">
          A clean, native macOS experience designed to get out of your way.
        </p>
      </div>

      <div class="screenshots-tabs">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          :class="['tab-btn', { active: activeTab === tab.id }]"
          @click="activeTab = tab.id"
        >
          <span v-html="tab.icon"></span>
          {{ tab.label }}
        </button>
      </div>

      <div class="screenshot-display">
        <div class="display-frame">
          <div class="window-bar">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
            <span class="window-title">Lock It</span>
          </div>
          <div class="display-content">
            <!-- Focus View -->
            <div v-if="activeTab === 'focus'" class="mock-screen focus-screen">
              <div class="focus-active-profile">
                <div class="focus-icon-large">&#x1F4BB;</div>
                <h3>Deep Work</h3>
                <p class="focus-subtitle">VS Code + Terminal + Safari</p>
                <div class="focus-timer-display">01:24:37</div>
                <div class="focus-controls">
                  <button class="ctrl-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="19 20 9 12 19 4 19 20"/><line x1="5" y1="19" x2="5" y2="5"/></svg>
                  </button>
                  <button class="ctrl-btn stop">Stop Session</button>
                  <div class="volume-indicator">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
                    <span>Rain — 75%</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Stats View -->
            <div v-if="activeTab === 'stats'" class="mock-screen stats-screen">
              <div class="stats-grid">
                <div class="stat-card">
                  <span class="stat-val">247</span>
                  <span class="stat-lbl">Sessions</span>
                </div>
                <div class="stat-card">
                  <span class="stat-val">142h</span>
                  <span class="stat-lbl">Focus Time</span>
                </div>
                <div class="stat-card accent-card">
                  <span class="stat-val">12</span>
                  <span class="stat-lbl">Day Streak</span>
                </div>
              </div>
              <div class="chart-mock">
                <div class="chart-title">This Week</div>
                <div class="bar-chart">
                  <div v-for="day in weekData" :key="day.label" class="bar-col">
                    <div class="bar" :style="{ height: day.height }"></div>
                    <span class="bar-label">{{ day.label }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Profiles View -->
            <div v-if="activeTab === 'profiles'" class="mock-screen profiles-screen">
              <div class="profiles-list">
                <div v-for="p in profiles" :key="p.name" class="profile-row">
                  <span class="p-icon">{{ p.icon }}</span>
                  <div class="p-info">
                    <div class="p-name">{{ p.name }}</div>
                    <div class="p-detail">{{ p.detail }}</div>
                  </div>
                  <div class="p-time">{{ p.time }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('focus')

const tabs = [
  {
    id: 'focus',
    label: 'Focus Session',
    icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>'
  },
  {
    id: 'stats',
    label: 'Statistics',
    icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>'
  },
  {
    id: 'profiles',
    label: 'Profiles',
    icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>'
  }
]

const weekData = [
  { label: 'Mon', height: '70%' },
  { label: 'Tue', height: '85%' },
  { label: 'Wed', height: '45%' },
  { label: 'Thu', height: '90%' },
  { label: 'Fri', height: '60%' },
  { label: 'Sat', height: '30%' },
  { label: 'Sun', height: '50%' }
]

const profiles = [
  { icon: '\u{1F4BB}', name: 'Deep Work', detail: 'VS Code + Terminal + Rain', time: '62h' },
  { icon: '\u{1F3A8}', name: 'Design', detail: 'Figma + Safari + Forest', time: '34h' },
  { icon: '\u{270D}\u{FE0F}', name: 'Writing', detail: 'iA Writer + River Stream', time: '28h' },
  { icon: '\u{1F4DA}', name: 'Research', detail: 'Safari + Notes + Forest Birds', time: '18h' }
]
</script>

<style scoped>
.highlight { color: var(--text-secondary); }

.screenshots-tabs {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: 48px 0 40px;
}

.tab-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 24px;
  font-size: 14px;
  font-weight: 500;
  font-family: var(--font);
  color: var(--text-muted);
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 50px;
  cursor: pointer;
  transition: var(--transition);
}

.tab-btn:hover { border-color: var(--border-light); }

.tab-btn.active {
  background: var(--accent);
  border-color: var(--accent);
  color: var(--bg-primary);
}

.display-frame {
  max-width: 800px;
  margin: 0 auto;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.4);
}

.window-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 14px 20px;
  background: var(--bg-primary);
  border-bottom: 1px solid var(--border);
}

.dot { width: 12px; height: 12px; border-radius: 50%; }
.dot.red { background: #ff5f57; }
.dot.yellow { background: #febc2e; }
.dot.green { background: #28c840; }

.window-title {
  margin-left: auto;
  margin-right: auto;
  font-size: 13px;
  color: var(--text-muted);
  font-weight: 500;
}

.display-content {
  min-height: 360px;
  padding: 32px;
}

/* ===== FOCUS SCREEN ===== */
.focus-active-profile { text-align: center; }
.focus-icon-large { font-size: 48px; margin-bottom: 12px; }
.focus-active-profile h3 { font-size: 24px; font-weight: 700; color: var(--accent); }
.focus-subtitle { font-size: 14px; color: var(--text-muted); margin: 4px 0 24px; }

.focus-timer-display {
  font-size: 56px;
  font-weight: 800;
  color: var(--accent);
  font-variant-numeric: tabular-nums;
  letter-spacing: -1px;
  margin-bottom: 24px;
}

.focus-controls { display: flex; align-items: center; justify-content: center; gap: 16px; }

.ctrl-btn {
  padding: 10px 24px;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 600;
  font-family: var(--font);
  cursor: pointer;
  border: 1px solid var(--border);
  background: var(--bg-tertiary);
  color: var(--text-primary);
  transition: var(--transition);
}

.ctrl-btn.stop {
  background: var(--danger);
  border-color: var(--danger);
  color: #fff;
}

.volume-indicator {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: var(--text-muted);
}

/* ===== STATS SCREEN ===== */
.stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 24px; }

.stat-card {
  padding: 20px;
  background: var(--bg-primary);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  text-align: center;
}

.accent-card { border-color: var(--border-light); background: var(--bg-tertiary); }

.stat-val { display: block; font-size: 28px; font-weight: 800; color: var(--accent); }
.stat-lbl { font-size: 12px; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px; }

.chart-mock { padding: 24px; background: var(--bg-primary); border: 1px solid var(--border); border-radius: var(--radius); }
.chart-title { font-size: 14px; font-weight: 600; color: var(--text-primary); margin-bottom: 20px; }

.bar-chart { display: flex; align-items: flex-end; gap: 12px; height: 120px; }
.bar-col { flex: 1; display: flex; flex-direction: column; align-items: center; gap: 8px; height: 100%; justify-content: flex-end; }
.bar { width: 100%; background: var(--accent); border-radius: 4px 4px 0 0; transition: height 0.4s ease; min-height: 4px; }
.bar-label { font-size: 11px; color: var(--text-muted); }

/* ===== PROFILES SCREEN ===== */
.profiles-list { display: flex; flex-direction: column; gap: 12px; }

.profile-row {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 18px 20px;
  background: var(--bg-primary);
  border: 1px solid var(--border);
  border-radius: var(--radius);
}

.p-icon { font-size: 28px; }
.p-name { font-size: 15px; font-weight: 600; color: var(--accent); }
.p-detail { font-size: 13px; color: var(--text-muted); margin-top: 2px; }
.p-time { margin-left: auto; font-size: 14px; font-weight: 700; color: var(--text-secondary); }

@media (max-width: 640px) {
  .screenshots-tabs { flex-wrap: wrap; }
  .stats-grid { grid-template-columns: 1fr; }
}
</style>
