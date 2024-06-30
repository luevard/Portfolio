let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}

function nextSlide() {
  var currentSlide = document.querySelector('.carousel-item.active');
  var nextSlide = currentSlide.nextElementSibling;

  if (!nextSlide) {
      nextSlide = document.querySelector('.carousel-item:first-child');
  }

  currentSlide.classList.remove('active');
  nextSlide.classList.add('active');
}

function prevSlide() {
  var currentSlide = document.querySelector('.carousel-item.active');
  var prevSlide = currentSlide.previousElementSibling;

  if (!prevSlide) {
      prevSlide = document.querySelector('.carousel-item:last-child');
  }

  currentSlide.classList.remove('active');
  prevSlide.classList.add('active');
}


showSlide(slideIndex);

setInterval(nextSlide, 5000);
