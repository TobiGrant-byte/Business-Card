// --- Keep card centered even when keyboard opens or screen resizes ---
function adjustCardPosition() {
  const card = document.querySelector('.card');
  if (!card) return;

  const viewportHeight = window.innerHeight;
  const cardHeight = card.offsetHeight;
  const topOffset = (viewportHeight - cardHeight) / 2;

  card.style.marginTop = `${topOffset > 20 ? topOffset - 20 : 10}px`;
}
window.addEventListener('load', adjustCardPosition);
window.addEventListener('resize', adjustCardPosition);

// --- Pause floating animation when offscreen (saves battery) ---
const card = document.querySelector('.card');
if (card) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      card.style.animationPlayState = entry.isIntersecting ? 'running' : 'paused';
    });
  });
  observer.observe(card);
}
