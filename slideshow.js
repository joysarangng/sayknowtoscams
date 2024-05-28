let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Looping the slideshow
function nextSlide() {
  slideIndex++;
  if (slideIndex === totalSlides) {
    slideIndex = 0;
  }

// Moves it to next slide
  updateSlidePosition(); 
}

function updateSlidePosition() {
  const slideWidth = slides[0].clientWidth;
  document.querySelector('.slides').style.transform = `translateX(${-slideIndex * slideWidth}px)`;
}

// Auto-scroll
const intervalTime = 3500; 
let slideInterval = setInterval(nextSlide, intervalTime);

// Pause auto-scroll on mouse hover
const slideshowContainer = document.querySelector('.slideshow-container');
slideshowContainer.addEventListener('mouseenter', () => {
  clearInterval(slideInterval);
});

slideshowContainer.addEventListener('mouseleave', () => {
  slideInterval = setInterval(nextSlide, intervalTime);
});
