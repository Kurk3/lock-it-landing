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

// Nav icon SVGs
const profilesIcon = `<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4M4 7l8 4M4 7v10l8 4m0-10v10"/></svg>`
const statsIcon = `<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 3v18h18"/><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/></svg>`
const settingsIcon = `<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`

const steps = [
  {
    title: 'Create a Profile',
    desc: 'Pick which apps to open, how to arrange them across desktops, and choose an ambient sound. Name it and save.',
    mock: `${hdr()}
      <div class="app-body" style="gap:10px;">
        <div style="font-size:13px;font-weight:600;color:var(--text-primary)">New Profile</div>

        <!-- Profile section -->
        <div style="display:flex;flex-direction:column;gap:6px">
          <div style="font-size:10px;font-weight:600;color:var(--text-secondary);text-transform:uppercase;letter-spacing:0.5px">Profile</div>
          <div style="background:#1a1a1a;border:1px solid #333333;border-radius:6px;padding:8px 10px;font-size:12px;color:var(--text-primary)">Deep Work</div>
          <div style="background:#1a1a1a;border:1px solid #333333;border-radius:6px;padding:8px 10px;font-size:12px;color:var(--text-muted)">VS Code, Terminal, Safari</div>
        </div>

        <!-- Desktop section -->
        <div style="display:flex;flex-direction:column;gap:6px">
          <div style="font-size:10px;font-weight:600;color:var(--text-secondary);text-transform:uppercase;letter-spacing:0.5px">Desktops</div>
          <div style="background:#1a1a1a;border:1px solid #333333;border-radius:10px;padding:10px;display:flex;flex-direction:column;gap:8px">
            <div style="display:flex;align-items:center;justify-content:space-between"><span style="font-size:11px;font-weight:600;color:var(--text-primary)">Desktop 1</span></div>
            <div style="display:flex;gap:4px;background:#0e0e0e;border-radius:6px;padding:2px">
              <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:5px;padding:5px 6px;font-size:10px;font-weight:500;background:#282828;color:var(--text-primary);border-radius:4px">
                <div style="display:flex;gap:1px;width:20px;height:14px"><div style="flex:1;background:var(--text-secondary);border-radius:2px"></div></div>
                Full Screen
              </div>
              <div style="flex:1;display:flex;align-items:center;justify-content:center;gap:5px;padding:5px 6px;font-size:10px;font-weight:500;color:var(--text-muted);border-radius:4px">
                <div style="display:flex;gap:1px;width:20px;height:14px"><div style="flex:1;background:#383838;border-radius:2px"></div><div style="flex:1;background:#383838;border-radius:2px"></div></div>
                Split View
              </div>
            </div>
            <div style="display:flex;gap:3px;height:44px">
              <div style="flex:1;display:flex;align-items:center;justify-content:center;background:#0e0e0e;border:1px solid #383838;border-radius:6px;font-size:11px;font-weight:500;color:var(--text-primary)">VS Code</div>
            </div>
          </div>
        </div>

        <!-- Close Other Apps toggle -->
        <div style="display:flex;align-items:center;justify-content:space-between;padding:4px 0">
          <div style="display:flex;flex-direction:column;gap:2px">
            <div style="font-size:10px;font-weight:600;color:var(--text-secondary);text-transform:uppercase;letter-spacing:0.5px">Close Other Apps</div>
            <span style="font-size:10px;color:var(--text-muted)">Quit other running apps when session starts</span>
          </div>
          <div style="width:36px;height:20px;border-radius:10px;background:var(--text-primary);position:relative;flex-shrink:0">
            <div style="position:absolute;top:2px;left:2px;width:16px;height:16px;border-radius:50%;background:#0e0e0e;transform:translateX(16px)"></div>
          </div>
        </div>

        <!-- Background Sound -->
        <div style="display:flex;flex-direction:column;gap:6px">
          <div style="font-size:10px;font-weight:600;color:var(--text-secondary);text-transform:uppercase;letter-spacing:0.5px">Background Sound</div>
          <div style="background:#1a1a1a;border:1px solid #333333;border-radius:6px;padding:8px 10px;font-size:12px;color:var(--text-primary);display:flex;justify-content:space-between;align-items:center">
            <span>Rain</span>
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#a0a0a0" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
          </div>
          <div style="display:flex;align-items:center;gap:8px;color:var(--text-muted)">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
            <div style="flex:1;height:4px;background:#282828;border-radius:2px;position:relative"><div style="position:absolute;left:0;top:0;height:100%;width:60%;background:var(--text-primary);border-radius:2px"></div></div>
            <span style="font-size:11px;color:var(--text-muted);min-width:30px;text-align:right">60%</span>
          </div>
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
          <div class="mock-lock-animation">
            <div class="mock-pulse-ring"></div>
            <div class="mock-pulse-ring mock-pulse-delay"></div>
            <div class="mock-lock-icon"><svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/><circle cx="12" cy="16" r="1.5" fill="currentColor"/></svg></div>
          </div>
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
        <!-- Profile breakdown -->
        <div style="display:flex;flex-direction:column;gap:3px">
          <div style="display:flex;align-items:center;gap:8px;padding:8px 10px;background:#1a1a1a;border:1px solid #333333;border-radius:8px"><span style="flex:1;font-size:12px;font-weight:500;color:var(--text-primary)">Deep Work</span><span style="font-size:11px;color:var(--text-secondary)">98h</span></div>
          <div style="display:flex;align-items:center;gap:8px;padding:8px 10px;background:#1a1a1a;border:1px solid #333333;border-radius:8px"><span style="flex:1;font-size:12px;font-weight:500;color:var(--text-primary)">Design</span><span style="font-size:11px;color:var(--text-secondary)">32h</span></div>
          <div style="display:flex;align-items:center;gap:8px;padding:8px 10px;background:#1a1a1a;border:1px solid #333333;border-radius:8px"><span style="flex:1;font-size:12px;font-weight:500;color:var(--text-primary)">Writing</span><span style="font-size:11px;color:var(--text-secondary)">12h</span></div>
        </div>
      </div>
      <div class="app-nav"><div class="app-nav-add">+ Add Profile</div><div class="app-nav-right"><div class="app-nav-btn">${profilesIcon} Profiles</div><div class="app-nav-btn active">${statsIcon} Stats</div><div class="app-nav-btn">${settingsIcon} Settings</div></div></div>`
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

/* Pulse animation for lock icon */
.mock-lock-animation {
  position: relative; width: 80px; height: 80px;
  display: flex; align-items: center; justify-content: center; margin-bottom: 8px;
}
.mock-pulse-ring {
  position: absolute; width: 100%; height: 100%;
  border: 1px solid rgba(255,255,255,0.1); border-radius: 50%;
  animation: mock-pulse 3s ease-in-out infinite;
}
.mock-pulse-delay { animation-delay: 1.5s; }
@keyframes mock-pulse { 0%,100% { transform: scale(0.8); opacity: 0; } 50% { transform: scale(1.2); opacity: 1; } }

@media (max-width: 900px) {
  .step, .step:nth-child(even) { flex-direction: column; }
  .step-text, .step:nth-child(even) .step-text { text-align: left; }
  .step-desc, .step:nth-child(even) .step-desc { margin-left: 0; }
  .step-mock { width: 100%; display: flex; justify-content: center; }
}
</style>
