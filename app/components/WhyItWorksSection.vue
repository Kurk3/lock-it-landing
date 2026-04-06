<template>
  <section id="why-it-works" class="section">
    <div class="container">
      <h2 class="section-title">Built on how your brain actually focuses.</h2>
      <p class="section-desc">Not a productivity hack. Designed around real research on attention, habits, and deep work.</p>

      <div class="points">
        <div v-for="(p, i) in points" :key="i" class="point">
          <div class="point-num">{{ i + 1 }}</div>
          <div class="point-content">
            <h3 class="point-title">{{ p.title }}</h3>
            <p class="point-text">{{ p.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const points = [
  {
    title: 'Setup friction kills your focus before it starts',
    text: 'Research from UC Irvine shows it takes 23 minutes to refocus after a context switch. Every time you manually open apps, arrange windows, and close tabs — you\'re burning cognitive energy before the real work begins. Lock It removes that friction. One click and your workspace is ready.'
  },
  {
    title: 'Your environment decides what you do',
    text: 'Behavioral psychologists call it choice architecture — the space you\'re in shapes your behavior. A desktop with Slack, Twitter, and email open is built for distraction. Lock It restructures your screen. It closes what doesn\'t matter and places only the tools you need in front of you.'
  },
  {
    title: 'Color keeps you hooked to the screen',
    text: 'Studies from the Center for Humane Technology show that color triggers compulsive screen use. Removing it cuts the dopamine loop that pulls you toward distractions. Lock It activates grayscale automatically when a session starts. Your screen becomes a tool, not a trap.'
  },
  {
    title: 'The right sound puts your brain in work mode',
    text: 'Research in the Journal of Consumer Research found that moderate ambient noise (~70dB) boosts creative thinking. Nature sounds lower your stress response and promote calm focus. Lock It plays rain, forest, or river — tuned to whatever works for you.'
  },
  {
    title: 'Rituals build flow',
    text: 'Mihaly Csikszentmihalyi\'s research on flow states shows that consistent pre-work rituals train your brain to focus faster. The same setup, same sound, same trigger — your brain learns that when Lock It activates, it\'s time to work.'
  },
  {
    title: 'Tracking what you do changes what you do',
    text: 'The Hawthorne Effect: measuring behavior improves it. When you see your focus streaks, total hours, and session history, you naturally push to stay consistent. Lock It tracks every session — time, streaks, per-profile stats. Your deep work becomes visible.'
  }
]
</script>

<style scoped>
.points { display: flex; flex-direction: column; gap: 0; margin-top: 48px; }

.point {
  display: flex; gap: 20px; padding: 28px 0;
  border-bottom: 1px solid var(--page-border);
}
.point:first-child { border-top: 1px solid var(--page-border); }

.point-num {
  flex-shrink: 0; width: 28px; height: 28px;
  display: flex; align-items: center; justify-content: center;
  font-size: 12px; font-weight: 700; color: var(--text-muted);
  background: var(--page-bg-alt); border: 1px solid var(--page-border); border-radius: 6px; margin-top: 2px;
}

.point-content { flex: 1; }

.point-title { font-size: 16px; font-weight: 600; color: var(--text-primary); margin-bottom: 6px; }

.point-text { font-size: 14px; color: var(--text-muted); line-height: 1.65; }
</style>
