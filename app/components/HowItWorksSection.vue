<template>
  <section id="how-it-works" class="section">
    <div class="container">
      <p class="how-label">Three steps. That's it.</p>
      <div class="steps">
        <div v-for="(step, i) in steps" :key="i" class="step">
          <div class="step-text">
            <h3 class="step-title">{{ step.title }}</h3>
            <p class="step-desc">{{ step.desc }}</p>
          </div>
          <div class="step-mock">
            <div class="app-frame" v-html="step.mock"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const appIcon = `<div style="width:22px;height:22px;display:flex;align-items:center;justify-content:center;background:#1a1a1a;border-radius:5px;flex-shrink:0"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/><circle cx="12" cy="16" r="1.5" fill="white" stroke="none"/></svg></div>`
const closeIcon = `<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`
const hdr = (extra='') => `<div class="app-header"><div class="app-logo">${appIcon}<span>LOCK IT</span></div><div class="app-header-btns">${extra}<div class="app-header-btn">${closeIcon}</div></div></div>`

const steps = [
  {
    title: 'Create a Profile',
    desc: 'Pick which apps to open, how to arrange them across desktops, and choose an ambient sound. Name it and save.',
    mock: `${hdr()}
      <div class="app-body" style="gap:10px;">
        <div style="font-size:13px;font-weight:600;color:var(--text-primary)">New Profile</div>
        <div style="display:flex;flex-direction:column;gap:6px">
          <div style="font-size:10px;font-weight:600;color:var(--text-secondary);text-transform:uppercase;letter-spacing:0.5px">Profile</div>
          <div style="background:#1a1a1a;border:1px solid #333333;border-radius:6px;padding:8px 10px;font-size:12px;color:var(--text-primary)">Deep Work</div>
          <div style="background:#1a1a1a;border:1px solid #333333;border-radius:6px;padding:8px 10px;font-size:12px;color:var(--text-muted)">VS Code, Terminal, Safari</div>
        </div>
        <div style="display:flex;flex-direction:column;gap:6px">
          <div style="font-size:10px;font-weight:600;color:var(--text-secondary);text-transform:uppercase;letter-spacing:0.5px">Background Sound</div>
          <div style="background:#1a1a1a;border:1px solid #333333;border-radius:6px;padding:8px 10px;font-size:12px;color:var(--text-primary);display:flex;justify-content:space-between"><span>Rain</span><span style="color:var(--text-muted);font-size:10px">60%</span></div>
        </div>
      </div>
      <div class="app-nav"><div></div><div style="display:flex;gap:6px"><div style="padding:6px 14px;font-size:12px;font-weight:500;color:var(--text-secondary);border:1px solid #333333;border-radius:6px">Cancel</div><div style="padding:6px 14px;font-size:12px;font-weight:600;background:var(--text-primary);color:var(--bg-primary);border-radius:6px">Save Profile</div></div></div>`
  },
  {
    title: 'Click Start',
    desc: "Lock It opens your apps in the exact layout, closes everything else, activates grayscale, plays your sound, and starts the timer. You're in the zone in seconds.",
    mock: `${hdr()}
      <div class="app-body" style="padding:20px 14px">
        <div class="mock-locked">
          <div class="mock-lock-icon"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/><circle cx="12" cy="16" r="1.5" fill="currentColor" stroke="none"/></svg></div>
          <div class="mock-locked-label">LOCKED IN</div>
          <div class="mock-timer">47:23</div>
          <div class="mock-mode-tag">Deep Work</div>
          <div class="mock-sound-bar"><svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg> Rain <div class="mock-sound-slider"><div class="mock-sound-fill"></div></div> 60%</div>
          <div class="mock-stop-btn"><svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><rect x="6" y="6" width="12" height="12" rx="2"/></svg> Stop Session</div>
        </div>
      </div>`
  },
  {
    title: 'Stop & See Your Stats',
    desc: "When you're done, stop the session. Lock It saves your focus time, tracks your streak, and shows you exactly how much deep work you've done.",
    mock: `${hdr()}
      <div class="app-body" style="gap:10px">
        <div class="mock-stat-cards"><div class="mock-stat-card"><span class="mock-stat-val">247</span><span class="mock-stat-lbl">Sessions</span></div><div class="mock-stat-card"><span class="mock-stat-val">142h</span><span class="mock-stat-lbl">Focus</span></div><div class="mock-stat-card"><span class="mock-stat-val">12</span><span class="mock-stat-lbl">Streak</span></div></div>
        <div class="mock-chart"><div class="mock-chart-label">This Week</div><div class="mock-bars"><div class="mock-bar-col"><div class="mock-bar" style="height:70%"></div><span class="mock-bar-lbl">M</span></div><div class="mock-bar-col"><div class="mock-bar" style="height:85%"></div><span class="mock-bar-lbl">T</span></div><div class="mock-bar-col"><div class="mock-bar" style="height:45%"></div><span class="mock-bar-lbl">W</span></div><div class="mock-bar-col"><div class="mock-bar" style="height:90%"></div><span class="mock-bar-lbl">T</span></div><div class="mock-bar-col"><div class="mock-bar" style="height:60%"></div><span class="mock-bar-lbl">F</span></div><div class="mock-bar-col"><div class="mock-bar" style="height:30%"></div><span class="mock-bar-lbl">S</span></div><div class="mock-bar-col"><div class="mock-bar" style="height:50%"></div><span class="mock-bar-lbl">S</span></div></div></div>
      </div>
      <div class="app-nav"><div class="app-nav-add">+ Add Profile</div><div class="app-nav-right"><div class="app-nav-btn">Profiles</div><div class="app-nav-btn active">Stats</div><div class="app-nav-btn">Settings</div></div></div>`
  }
]
</script>

<style scoped>
.how-label {
  font-size: 13px; color: var(--text-muted); margin-bottom: 48px;
  letter-spacing: -0.1px;
}

.steps { display: flex; flex-direction: column; gap: 72px; }
.step { display: flex; align-items: center; gap: 56px; }
.step:nth-child(even) { flex-direction: row-reverse; }
.step:nth-child(even) .step-text { text-align: right; }
.step:nth-child(even) .step-desc { margin-left: auto; }
.step-text { flex: 1; }
.step-title { font-size: 22px; font-weight: 700; color: var(--text-primary); margin-bottom: 8px; letter-spacing: -0.4px; }
.step-desc { font-size: 14px; color: var(--text-muted); line-height: 1.65; max-width: 380px; }
.step-mock { flex-shrink: 0; }
@media (max-width: 900px) {
  .step, .step:nth-child(even) { flex-direction: column; }
  .step-text, .step:nth-child(even) .step-text { text-align: left; }
  .step-desc, .step:nth-child(even) .step-desc { margin-left: 0; }
  .step-mock { width: 100%; display: flex; justify-content: center; }
}
</style>
