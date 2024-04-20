
let slideIndex = 0;
let interval;
let slideshowRunning = false;

function showSlides(n) {
  const slides = document.querySelectorAll('img');
  
  if (n > slides.length - 1) {
    
    slideIndex = 0;
  }

  if (n < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach(slide => (slide.style.display = 'none'));
  slides[slideIndex].style.display = 'block';
}


function startStopSlideshow() {

  if (!slideshowRunning) {

    interval = setInterval(() => {
      slideIndex++;
      showSlides(slideIndex);
    }, 1000); // Change slide every 2 seconds
    document.getElementById('startStopBtn').textContent = 'Stop';
    slideshowRunning = true;

  } else {
    clearInterval(interval);
    document.getElementById('startStopBtn').textContent = 'Start';
    slideshowRunning = false;
  }
}

function plusSlides(n) {
  clearInterval(interval);
  slideshowRunning = false;
  slideIndex += n;
  showSlides(slideIndex);
}

document.getElementById('startStopBtn').addEventListener('click', startStopSlideshow);
document.getElementById('prevBtn').addEventListener('click', () => plusSlides(-1));
document.getElementById('nextBtn').addEventListener('click', () => plusSlides(1));
showSlides(slideIndex); // Display initial slide
