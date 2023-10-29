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

//
