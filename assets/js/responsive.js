window.addEventListener('DOMContentLoaded', (event) => {
  document
  .getElementById('nav_toggle')
  .addEventListener('click', (e) => e.target.classList.toggle('hide-mobile'))
});

const images = document.querySelectorAll('.image');
const newImage = document.querySelector('.mobile-image');

window.addEventListener('resize', () => {
  if (window.innerWidth < 1000) {
    images.forEach(image => {
      image.style.display = 'none';
    });
    newImage.style.display = 'block';
  } else {
    images.forEach(image => {
      image.style.display = 'block';
    });
    newImage.style.display = 'none';
  }
});

