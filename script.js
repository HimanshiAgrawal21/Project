// const track = document.querySelector('.testimonial__track');
// const cards = document.querySelectorAll('.testimonial__card');
// const prevBtn = document.querySelector('.testimonial__arrow--prev');
// const nextBtn = document.querySelector('.testimonial__arrow--next');

// let currentIndex = 0;
// function updateSlide() {
//   const cardWidth = cards[0].getBoundingClientRect().width;
//   track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
// }
// nextBtn.addEventListener('click', () => {
//   if (currentIndex < cards.length - 1) {
//     currentIndex++;
//     updateSlide();
//   }
// });

// prevBtn.addEventListener('click', () => {
//   if (currentIndex > 0) {
//     currentIndex--;
//     updateSlide();
//   }
// });
function addItem(cart, item) {
  cart.items.push(item);
  cart = { items: ['replaced'] };
}

let myCart = { items: ['apple'] };
addItem(myCart, 'banana');

console.log(myCart.items);