const container = document.querySelector('.juegos__juego--container');
const items = container.querySelectorAll('.juegos__juego');
const width = window.innerWidth;


if (items.length % 2 !== 0) {
  // Odd number of items → make the last one full width
  items[items.length - 1].classList.add('full-width');
} else {
  // Even number → ensure the last one is normal
  items[items.length - 1].classList.remove('full-width');
}



