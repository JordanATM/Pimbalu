// Scroll reveal animation
const observer = new IntersectionObserver(
  (entries) => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  }),
  { threshold: 0.12 }
);

document.querySelectorAll(
  '.producto-card, .step, .testimonio, .nosotros__inner, .stat, .nosotros__list li'
).forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

// Nav active link highlight on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.id;
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--pink)' : '';
  });
}, { passive: true });

// Staggered animation for candy grid
document.querySelectorAll('.candy-card').forEach((card, i) => {
  card.style.animationDelay = `${i * 0.4}s`;
});
