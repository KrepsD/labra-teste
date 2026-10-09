document.querySelectorAll('[data-labra-slideshow]').forEach((slideshow) => {
  const slides = Array.from(slideshow.querySelectorAll('[data-labra-slide]'));
  const controls = slideshow.querySelector('.labra-slide-controls');
  const count = slideshow.querySelector('[data-labra-count]');
  const previous = slideshow.querySelector('[data-labra-prev]');
  const next = slideshow.querySelector('[data-labra-next]');
  const toggle = slideshow.querySelector('[data-labra-toggle]');

  if (slides.length < 2 || !controls || !count || !previous || !next || !toggle) return;

  let current = 0;
  let playing = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let timer;
  const show = (index) => {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, position) => {
      slide.hidden = position !== current;
    });
    count.textContent = `${current + 1} de ${slides.length}`;
  };
  const schedule = () => {
    window.clearInterval(timer);
    if (playing && !document.hidden) {
      timer = window.setInterval(() => show(current + 1), 5000);
    }
  };
  const updateToggle = () => {
    toggle.textContent = playing ? 'Pausar apresentação' : 'Reproduzir apresentação';
  };

  slideshow.classList.add('is-enhanced');
  controls.hidden = false;
  previous.addEventListener('click', () => { show(current - 1); schedule(); });
  next.addEventListener('click', () => { show(current + 1); schedule(); });
  toggle.addEventListener('click', () => {
    playing = !playing;
    updateToggle();
    schedule();
  });
  document.addEventListener('visibilitychange', schedule);
  show(0);
  updateToggle();
  schedule();
});
