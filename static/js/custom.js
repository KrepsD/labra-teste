document.querySelectorAll('[data-labra-slideshow]').forEach((slideshow) => {
  const slides = Array.from(slideshow.querySelectorAll('[data-labra-slide]'));
  const controls = slideshow.querySelector('.labra-slide-controls');
  const count = slideshow.querySelector('[data-labra-count]');
  const previous = slideshow.querySelector('[data-labra-prev]');
  const next = slideshow.querySelector('[data-labra-next]');

  if (slides.length < 2 || !controls || !count || !previous || !next) return;

  let current = 0;
  const show = (index) => {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, position) => {
      slide.hidden = position !== current;
    });
    count.textContent = `${current + 1} de ${slides.length}`;
  };

  slideshow.classList.add('is-enhanced');
  controls.hidden = false;
  previous.addEventListener('click', () => show(current - 1));
  next.addEventListener('click', () => show(current + 1));
  show(0);
});
