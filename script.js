let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = document
    .getElementsByClassName("slider__cards")[0]
    .getElementsByTagName("img");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000); // Измените этот параметр, чтобы задать интервал времени между слайдами
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

//-----------------------------------------slider end//

function currentSlide(n) {
  showSlides(slideIndex = n);
}

let dropSlideIndex = 0;
showDropSlides();

function showDropSlides() {
  let i;
  const sliders = document.querySelectorAll('.drop__slider__card');
  sliders.forEach((slider) => {
      const slides = slider.getElementsByTagName('img');
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = 'none';
      }
      dropSlideIndex++;
      if (dropSlideIndex > slides.length) {
          dropSlideIndex = 1;
      }
      slides[dropSlideIndex - 1].style.display = 'block';
  });
  setTimeout(showDropSlides, 4000); // Измените этот параметр, чтобы задать интервал времени между слайдами
}


