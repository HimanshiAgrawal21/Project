const menuBtn = document.querySelector('.navbar__mobilemenu');
const navList = document.querySelector('.navbar__list');
menuBtn.addEventListener('click', () => {
  const isOpen = navList.classList.toggle('is-open');
  menuBtn.setAttribute('aria-expanded', isOpen);
});
const track = document.querySelector('.testimonial__track');
const cards = document.querySelectorAll('.testimonial__card');
const prevBtn = document.querySelector('.testimonial__arrow--prev');
const nextBtn = document.querySelector('.testimonial__arrow--next');

let currentIndex = 0;

function updateSlide() {
  const cardWidth = cards[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === cards.length - 1;
}

nextBtn.addEventListener('click', () => {
  if (currentIndex < cards.length - 1) {
    currentIndex++;
    updateSlide();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlide();
  }
});

let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(updateSlide, 150);
});

updateSlide();