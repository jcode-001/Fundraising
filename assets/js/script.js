"use strict";
// Navbar variables
const menuToggleBtn = document.querySelector("[data-navbar-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

// /Element toggle function
const elemToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

menuToggleBtn.addEventListener("click", function () {
  elemToggleFunc(navbar);
});

// Go to top btn
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 800) {
    goTopBtn.classList.add("active");
  } else {
    goTopBtn.classList.remove("active");
  }
});

// Carousel
var slideIndex = 0;

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

screen.availWidth === 600
  ? showSlides()
  : console.log("Screen size is not up to 600px yet");

// Blog Data
const blogData = {
  post1: {
      title: "Blog Post 1",
      content: "Content for Blog Post 1...",
      image: "https://example.com/image1.jpg"
  },
  post2: {
      title: "Blog Post 2",
      content: "Content for Blog Post 2...",
      image: "https://example.com/image2.jpg"
  },
  // Add more blog posts...
};
