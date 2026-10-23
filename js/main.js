'use strict';
const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());
const motionToggle = document.querySelector('#motion-toggle');
motionToggle?.addEventListener('click', () => {
  const paused = document.body.classList.toggle('motion-paused');
  motionToggle.setAttribute('aria-pressed', String(paused));
  motionToggle.textContent = paused ? 'Resume motion' : 'Pause motion';
});
const copyButton = document.querySelector('#copy-email');
const copyStatus = document.querySelector('#copy-status');
copyButton?.addEventListener('click', async () => {
  try {
    if (!navigator.clipboard) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText('anuragkr@umich.edu');
    copyStatus.textContent = 'Email copied to clipboard.';
  } catch {
    copyStatus.textContent = 'Email: anuragkr@umich.edu — select to copy, or use the email link.';
  }
});
if ('IntersectionObserver' in window) {
  const links = [...document.querySelectorAll('nav a[href^="#"]')];
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      for (const link of links) {
        const active = link.getAttribute('href') === '#' + entry.target.id;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      }
    }
  }, { rootMargin: '-10% 0px -65% 0px' });
  document.querySelectorAll('main > section[id]').forEach(section => observer.observe(section));
}