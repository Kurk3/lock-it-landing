<template>
  <div class="download-page">
    <div class="download-wrap">
      <!-- Header -->
      <header class="download-header">
        <div class="lock-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <rect x="5" y="11" width="14" height="10" rx="2"/>
            <path d="M8 11V7a4 4 0 0 1 8 0v4"/>
            <circle cx="12" cy="16" r="1.5" fill="currentColor" stroke="none"/>
          </svg>
        </div>
        <h1 class="title">Your download has started</h1>
        <p class="subtitle">
          If it didn't,
          <a :href="dmgUrl" class="manual-link">click here to download manually</a>.
        </p>
      </header>

      <!-- First-time setup guide -->
      <section class="guide">
        <div class="guide-label">First-time setup - 30 seconds</div>
        <h2 class="guide-title">How to open Lock It on your Mac</h2>
        <p class="guide-intro">
          Lock It is a new indie app, so on first launch macOS will ask for your permission.
          Follow the steps below to open it - <strong>you only need to do this once</strong>.
        </p>

        <ol class="steps">
          <li class="step">
            <div class="step-num">1</div>
            <div class="step-body">
              <h3>Open the DMG file</h3>
              <p>Go to your <strong>Downloads</strong> folder and double-click <code>Lock-It-1.0.0-universal.dmg</code>. A window will open showing the Lock It icon and the Applications folder.</p>
            </div>
          </li>

          <li class="step">
            <div class="step-num">2</div>
            <div class="step-body">
              <h3>Drag Lock It into Applications</h3>
              <p>Drag the <strong>Lock It</strong> icon onto the <strong>Applications</strong> folder icon shown inside the DMG window. You can now close the DMG window.</p>
            </div>
          </li>

          <li class="step">
            <div class="step-num">3</div>
            <div class="step-body">
              <h3>Open Finder and go to Applications</h3>
              <p>Open <strong>Finder</strong> from your dock. In the left sidebar, click <strong>Applications</strong>. Scroll until you see <strong>Lock It</strong>.</p>
            </div>
          </li>

          <li class="step step-highlight">
            <div class="step-num">4</div>
            <div class="step-body">
              <h3>Right-click Lock It, then choose Open</h3>
              <p>
                This step is important. <strong>Do not double-click.</strong>
                Instead, <strong>right-click</strong> (or <kbd>Control</kbd>-click) on Lock It and select <strong>Open</strong> from the menu.
              </p>
              <div class="callout">
                <div class="callout-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="M12 16h.01"/>
                  </svg>
                </div>
                <div>
                  <strong>Why right-click?</strong> macOS blocks apps from independent developers on first double-click with <em>"Lock It cannot be opened because Apple cannot check it for malicious software."</em> Right-click &rarr; Open skips that block.
                </div>
              </div>
            </div>
          </li>

          <li class="step">
            <div class="step-num">5</div>
            <div class="step-body">
              <h3>Click "Open" in the dialog</h3>
              <p>A dialog will appear asking if you're sure. Click the <strong>Open</strong> button. Lock It will launch and appear in your <strong>menu bar</strong> (top-right of your screen, next to the clock).</p>
            </div>
          </li>
        </ol>

        <!-- Fallback instructions -->
        <details class="fallback">
          <summary>Still getting blocked? Try this backup method</summary>
          <div class="fallback-body">
            <p>If right-click &rarr; Open doesn't work on your version of macOS:</p>
            <ol>
              <li>Double-click Lock It once - you'll see the block message. Click <strong>Done</strong>.</li>
              <li>Open <strong>System Settings</strong> &rarr; <strong>Privacy &amp; Security</strong>.</li>
              <li>Scroll down until you see <em>"Lock It was blocked to protect your Mac."</em></li>
              <li>Click <strong>Open Anyway</strong>.</li>
              <li>Enter your Mac password when prompted. Lock It will launch.</li>
            </ol>
          </div>
        </details>
      </section>

      <div class="divider"></div>

      <!-- Support -->
      <footer class="support">
        <p class="follow-text">Questions, bugs, or feedback?</p>
        <div class="links">
          <a href="https://github.com/Kurk3/lock-it/issues" target="_blank" rel="noopener" class="link-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            Open an Issue
          </a>
          <a href="https://x.com/Adam_Kurek_" target="_blank" rel="noopener" class="link-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            @Adam_Kurek_
          </a>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
const dmgUrl = 'https://github.com/Kurk3/lock-it-landing/releases/latest/download/Lock-it-1.0.0-universal.dmg'

useHead({
  title: 'Thanks for downloading Lock It - Install Guide',
  meta: [{ name: 'robots', content: 'noindex' }]
})

onMounted(() => {
  window.location.href = dmgUrl
})
</script>

<style scoped>
.download-page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 60px 20px 80px;
}

.download-wrap {
  width: 100%;
  max-width: 620px;
}

/* ===== Header ===== */
.download-header {
  text-align: center;
  margin-bottom: 48px;
}

.lock-icon {
  color: var(--text-muted);
  margin-bottom: 18px;
  opacity: 0.4;
  display: flex;
  justify-content: center;
}

.title {
  font-size: 26px;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.4px;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 13px;
  color: var(--text-muted);
  line-height: 1.6;
}

.manual-link {
  text-decoration: underline;
  text-underline-offset: 2px;
  color: var(--text-secondary);
}

/* ===== Guide ===== */
.guide {
  background: var(--page-bg-alt);
  border: 1px solid var(--page-border);
  border-radius: 16px;
  padding: 36px 32px;
}

.guide-label {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--text-muted);
  margin-bottom: 10px;
}

.guide-title {
  font-size: 22px;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.4px;
  margin-bottom: 12px;
}

.guide-intro {
  font-size: 14px;
  color: var(--text-muted);
  line-height: 1.7;
  margin-bottom: 28px;
}

.guide-intro strong {
  color: var(--text-secondary);
  font-weight: 600;
}

/* ===== Steps ===== */
.steps {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.step {
  display: flex;
  gap: 16px;
  padding: 18px;
  background: var(--bg-primary);
  border: 1px solid var(--page-border);
  border-radius: 12px;
}

.step-highlight {
  border-color: var(--border-light);
  background: #161616;
}

.step-num {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--bg-tertiary);
  border: 1px solid var(--border-light);
  color: var(--text-primary);
  font-size: 13px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  font-variant-numeric: tabular-nums;
}

.step-highlight .step-num {
  background: var(--text-primary);
  color: var(--bg-primary);
  border-color: var(--text-primary);
}

.step-body {
  flex: 1;
  min-width: 0;
}

.step-body h3 {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 6px;
  letter-spacing: -0.2px;
}

.step-body p {
  font-size: 13px;
  color: var(--text-muted);
  line-height: 1.65;
}

.step-body p strong {
  color: var(--text-secondary);
  font-weight: 600;
}

.step-body code {
  font-family: 'SF Mono', ui-monospace, monospace;
  font-size: 12px;
  padding: 2px 6px;
  background: var(--bg-tertiary);
  border: 1px solid var(--page-border);
  border-radius: 4px;
  color: var(--text-secondary);
}

.step-body kbd {
  font-family: 'SF Mono', ui-monospace, monospace;
  font-size: 11px;
  padding: 2px 6px;
  background: var(--bg-tertiary);
  border: 1px solid var(--border-light);
  border-bottom-width: 2px;
  border-radius: 4px;
  color: var(--text-secondary);
}

/* ===== Callout inside highlighted step ===== */
.callout {
  margin-top: 14px;
  padding: 12px 14px;
  background: var(--bg-primary);
  border: 1px solid var(--page-border);
  border-left: 2px solid var(--text-primary);
  border-radius: 6px;
  display: flex;
  gap: 10px;
  font-size: 12px;
  line-height: 1.6;
  color: var(--text-muted);
}

.callout strong {
  color: var(--text-secondary);
}

.callout em {
  color: var(--text-secondary);
  font-style: italic;
}

.callout-icon {
  flex-shrink: 0;
  color: var(--text-secondary);
  margin-top: 1px;
}

/* ===== Fallback (collapsible) ===== */
.fallback {
  margin-top: 24px;
  border: 1px dashed var(--page-border);
  border-radius: 10px;
  padding: 0;
  transition: var(--transition);
}

.fallback:hover {
  border-color: var(--border-light);
}

.fallback summary {
  padding: 14px 16px;
  font-size: 13px;
  font-weight: 500;
  color: var(--text-secondary);
  cursor: pointer;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 8px;
  user-select: none;
}

.fallback summary::-webkit-details-marker { display: none; }

.fallback summary::before {
  content: '+';
  font-size: 16px;
  font-weight: 400;
  color: var(--text-muted);
  width: 16px;
  display: inline-block;
  text-align: center;
  transition: transform 0.2s ease;
}

.fallback[open] summary::before { content: '−'; }

.fallback-body {
  padding: 0 16px 16px;
  font-size: 13px;
  color: var(--text-muted);
  line-height: 1.7;
}

.fallback-body p { margin-bottom: 10px; }

.fallback-body ol {
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.fallback-body strong { color: var(--text-secondary); font-weight: 600; }
.fallback-body em { color: var(--text-secondary); font-style: italic; }

/* ===== Divider & Support ===== */
.divider {
  width: 40px;
  height: 1px;
  background: var(--page-border);
  margin: 40px auto 28px;
}

.support {
  text-align: center;
}

.follow-text {
  font-size: 12px;
  color: var(--text-muted);
  opacity: 0.6;
  margin-bottom: 14px;
}

.links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
}

.link-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 500;
  color: var(--text-secondary);
  padding: 8px 18px;
  border: 1px solid var(--page-border);
  border-radius: 8px;
  transition: var(--transition);
}

.link-btn:hover {
  color: var(--text-primary);
  border-color: var(--text-muted);
}

/* ===== Responsive ===== */
@media (max-width: 640px) {
  .download-page { padding: 40px 16px 60px; }
  .guide { padding: 26px 20px; }
  .guide-title { font-size: 19px; }
  .step { padding: 14px; gap: 12px; }
  .step-num { width: 26px; height: 26px; font-size: 12px; }
  .step-body h3 { font-size: 13px; }
  .step-body p { font-size: 12.5px; }
  .title { font-size: 22px; }
  .links { flex-direction: column; width: 100%; }
  .link-btn { width: 100%; justify-content: center; }
}
</style>
