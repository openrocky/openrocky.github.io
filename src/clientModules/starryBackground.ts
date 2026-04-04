// Injects starry sky background into all pages
function createStarrySky() {
  if (typeof document === 'undefined') return;
  if (document.querySelector('.starry-bg')) return;

  const bg = document.createElement('div');
  bg.className = 'starry-bg';
  bg.innerHTML = `
    <div class="stars-layer-1"></div>
    <div class="stars-layer-2"></div>
    <div class="stars-layer-3"></div>
    <div class="shooting-star"></div>
    <div class="shooting-star-2"></div>
  `;
  document.body.prepend(bg);
}

if (typeof window !== 'undefined') {
  // Run on initial load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createStarrySky);
  } else {
    createStarrySky();
  }

  // Re-check on route changes (SPA navigation)
  const observer = new MutationObserver(() => {
    if (!document.querySelector('.starry-bg')) {
      createStarrySky();
    }
  });
  if (document.body) {
    observer.observe(document.body, {childList: true});
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      observer.observe(document.body, {childList: true});
    });
  }
}

export default {};
