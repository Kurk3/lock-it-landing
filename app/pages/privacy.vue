<template>
  <div class="legal-page">
    <section class="legal-hero">
      <div class="container">
        <span class="section-label">Legal</span>
        <h1 class="section-title">Privacy Policy</h1>
        <p class="legal-updated">Last updated: April 10, 2026</p>
      </div>
    </section>

    <section class="legal-content">
      <div class="container">
        <div class="legal-body">

          <div class="legal-block">
            <h2>The short version</h2>
            <p>Lock It does not collect, transmit, or store any of your personal data on external servers. Everything stays on your Mac. We don't run analytics, we don't track you, and we don't require an account. That's it.</p>
          </div>

          <div class="legal-block">
            <h2>What data Lock It stores</h2>
            <p>Lock It saves the following data locally on your computer, inside the standard macOS application support directory (<code>~/Library/Application Support/Lock It/</code>):</p>
            <div class="legal-list">
              <div class="legal-list-item">
                <span class="legal-list-label">Focus profiles</span>
                <span class="legal-list-desc">Profile name, description, selected apps, desktop layout preferences, volume level, and grayscale setting.</span>
              </div>
              <div class="legal-list-item">
                <span class="legal-list-label">Session statistics</span>
                <span class="legal-list-desc">Session start and end timestamps, duration, which profile was used, daily streak count, and total focus time.</span>
              </div>
              <div class="legal-list-item">
                <span class="legal-list-label">App settings</span>
                <span class="legal-list-desc">Theme preference, auto-launch on login setting, and volume levels.</span>
              </div>
            </div>
          </div>

          <div class="legal-block">
            <h2>What Lock It does not collect</h2>
            <p>Lock It does not collect or process any of the following: names, email addresses, location data, IP addresses, device identifiers, browsing history, usage analytics, crash reports, or any form of telemetry. The app makes zero network requests. It works entirely offline.</p>
          </div>

          <div class="legal-block">
            <h2>macOS permissions</h2>
            <p>Lock It requests Accessibility permission from macOS. This is required to arrange application windows across desktops, activate grayscale mode, and manage running applications during a focus session. This permission is used solely for local system automation and never for monitoring or recording user activity.</p>
          </div>

          <div class="legal-block">
            <h2>Third-party services</h2>
            <p>Lock It does not integrate with any third-party services, analytics platforms, advertising networks, or cloud storage providers. The application is entirely self-contained.</p>
          </div>

          <div class="legal-block">
            <h2>Data deletion</h2>
            <p>You can delete all stored data at any time using the "Reset all data" option in the app settings, or by removing the Lock It folder from your Application Support directory. Uninstalling the app removes the application binary — to fully remove stored data, delete the support folder as well.</p>
          </div>

          <div class="legal-block">
            <h2>Landing page</h2>
            <p>The Lock It website (lockit.app) is a static site. It does not use cookies, does not run analytics scripts, and does not collect any visitor data. The download link points to a GitHub release.</p>
          </div>

          <div class="legal-block">
            <h2>Children's privacy</h2>
            <p>Lock It does not collect personal information from anyone, including children under the age of 13. Since no data is collected or transmitted, no special provisions are necessary under COPPA or similar regulations.</p>
          </div>

          <div class="legal-block">
            <h2>Changes to this policy</h2>
            <p>If this policy is updated, the changes will be reflected on this page with an updated date. Since Lock It collects no data, meaningful changes are unlikely.</p>
          </div>

          <div class="legal-block">
            <h2>Contact</h2>
            <p>If you have questions about this privacy policy, reach out at <a href="mailto:support@lockit.app">support@lockit.app</a>.</p>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Privacy Policy — Lock It',
  meta: [
    { name: 'description', content: 'Lock It privacy policy. No data collection, no tracking, no accounts. Everything stays on your Mac.' },
    { property: 'og:title', content: 'Privacy Policy — Lock It' },
    { property: 'og:description', content: 'Lock It privacy policy. No data collection, no tracking, no accounts.' },
  ]
})
</script>

<style scoped>
.legal-page { padding-top: 100px; }

.legal-hero { padding: 60px 0 40px; text-align: center; }

.legal-updated {
  font-size: 13px; color: var(--text-muted); margin-top: 8px;
}

.legal-content { padding: 40px 0 120px; }

.legal-body { max-width: 680px; margin: 0 auto; }

.legal-block { margin-bottom: 40px; }
.legal-block:last-child { margin-bottom: 0; }

.legal-block h2 {
  font-size: 17px; font-weight: 700; color: var(--text-primary);
  margin-bottom: 12px; letter-spacing: -0.2px;
}

.legal-block p {
  font-size: 14px; color: var(--text-secondary); line-height: 1.75;
}

.legal-block p a {
  color: var(--text-primary); text-decoration: underline;
  text-underline-offset: 3px; text-decoration-color: var(--border-light);
  transition: var(--transition);
}
.legal-block p a:hover { text-decoration-color: var(--text-primary); }

.legal-block code {
  font-size: 12px; padding: 2px 7px; background: var(--page-bg-alt);
  border: 1px solid var(--page-border); border-radius: 4px;
  font-family: 'SF Mono', 'Fira Code', monospace;
}

.legal-list {
  margin-top: 16px; display: flex; flex-direction: column; gap: 12px;
}

.legal-list-item {
  padding: 16px 20px; background: var(--page-bg-alt);
  border: 1px solid var(--page-border); border-radius: var(--radius-sm);
}

.legal-list-label {
  display: block; font-size: 13px; font-weight: 600;
  color: var(--text-primary); margin-bottom: 4px;
}

.legal-list-desc {
  font-size: 13px; color: var(--text-muted); line-height: 1.6;
}

@media (max-width: 640px) {
  .legal-hero { padding: 40px 0 24px; }
  .legal-content { padding: 24px 0 80px; }
}
</style>
