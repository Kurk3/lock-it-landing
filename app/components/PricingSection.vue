<template>
  <section id="pricing" class="section pricing">
    <div class="container">
      <div class="text-center">
        <span class="section-label">Pricing</span>
        <h2 class="section-title">Free. <span class="highlight">No strings attached.</span></h2>
        <p class="section-subtitle mx-auto">
          Lock It is completely free to use. No subscriptions, no ads, no tracking.
        </p>
      </div>

      <div class="pricing-card-wrapper">
        <div class="pricing-card">
          <div class="pricing-badge">Forever Free</div>
          <div class="pricing-price">
            <span class="price-amount">$0</span>
            <span class="price-period">/ forever</span>
          </div>
          <ul class="pricing-features">
            <li v-for="feature in features" :key="feature">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {{ feature }}
            </li>
          </ul>
          <a href="#download" class="btn btn-primary btn-full">
            Download Now
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  'Unlimited focus profiles',
  'Desktop arrangement automation',
  'Ambient sounds library',
  'Grayscale mode',
  'Session timer & statistics',
  'Weekly activity tracking',
  'Auto-launch on login',
  'Dark & Light theme',
  'No account required',
  'No data collection'
]
</script>

<style scoped>
.pricing {
  background: var(--bg-secondary);
}

.highlight { color: var(--text-secondary); }

.pricing-card-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 56px;
}

.pricing-card {
  width: 100%;
  max-width: 480px;
  padding: 48px;
  background: var(--bg-primary);
  border: 2px solid var(--accent);
  border-radius: var(--radius-lg);
  text-align: center;
  position: relative;
  box-shadow: 0 0 60px var(--white-glow);
}

.pricing-badge {
  display: inline-block;
  padding: 6px 20px;
  font-size: 13px;
  font-weight: 600;
  color: var(--bg-primary);
  background: var(--accent);
  border-radius: 50px;
  margin-bottom: 24px;
}

.pricing-price {
  margin-bottom: 36px;
}

.price-amount {
  font-size: 64px;
  font-weight: 900;
  color: var(--accent);
  letter-spacing: -2px;
}

.price-period {
  font-size: 18px;
  color: var(--text-muted);
  margin-left: 4px;
}

.pricing-features {
  list-style: none;
  text-align: left;
  margin-bottom: 40px;
}

.pricing-features li {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 0;
  font-size: 15px;
  color: var(--text-secondary);
  border-bottom: 1px solid var(--border);
}

.pricing-features li:last-child {
  border-bottom: none;
}

.btn-full {
  width: 100%;
  justify-content: center;
}
</style>
