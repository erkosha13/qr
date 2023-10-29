document.addEventListener("DOMContentLoaded", function () {
  let dots = document
    .getElementsByClassName("slider__nav")[0]
    .getElementsByTagName("span");
  for (let i = 0; i < dots.length; i++) {
    if (i === 0) {
      dots[i].style.backgroundColor = "gray"; // Установка серого цвета для первого элемента
    } else {
      dots[i].style.backgroundColor = "white"; // Установка белого цвета для остальных элементов
    }
  }
});

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = document
    .getElementsByClassName("slider__cards")[0]
    .getElementsByTagName("img");
  const dots = document
    .getElementsByClassName("slider__nav")[0]
    .getElementsByTagName("span");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].style.backgroundColor = "white"; // Сброс цвета для всех точек
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].style.backgroundColor = "gray"; // Установка серого цвета для активной точки

  setTimeout(showSlides, 4000);
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

//-----------------------------------------slider end//

let slideIndices = [0, 0, 0];
showDropSlides();

function showDropSlides() {
  let i;
  const sliders = document.querySelectorAll(".drop__slider__card");
  sliders.forEach((slider, index) => {
    const slides = slider.getElementsByTagName("img");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    if (slideIndices[index] >= slides.length) {
      slideIndices[index] = 0;
    } else if (slideIndices[index] < 0) {
      slideIndices[index] = slides.length - 1;
    }
    slides[slideIndices[index]].style.display = "block";
  });
}

function plusSlides(n, index) {
  slideIndices[index] += n;
  showDropSlides();
}

function currentSlide(n, index) {
  slideIndices[index] = n;
  showDropSlides();
}

//-----------------------------------accordion//

const acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

//----------------------------------------------popup//

function openModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}



function openModal1() {
  var modal = document.getElementById("myModal1");
  modal.style.display = "block";
}

function closeModal1() {
  var modal = document.getElementById("myModal1");
  modal.style.display = "none";
}



function openModal2() {
  var modal = document.getElementById("myModal2");
  modal.style.display = "block";
}

function closeModal2() {
  var modal = document.getElementById("myModal2");
  modal.style.display = "none";
}



function openModal3() {
  var modal = document.getElementById("myModal3");
  modal.style.display = "block";
}

function closeModal3() {
  var modal = document.getElementById("myModal3");
  modal.style.display = "none";
}

