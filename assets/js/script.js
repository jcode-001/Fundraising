"use strict";
import { blogData } from "./blogData.js";

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
let slideIndex = 0;

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}

screen.availWidth === 600
  ? showSlides()
  : console.log("Screen size is not up to 600px yet");

// Todo: Fetch data and update the blogData Object

// display each blogData into index.html
const blogList = document.getElementById("blog-list");

for (const postId in blogData) {
  const post = blogData[postId];

  const blogSection = document.createElement("div");
  blogSection.classList.add("mySlides");
  blogSection.classList.add("fade");
  blogSection.classList.add("card");

  const blogImage = document.createElement("div");
  blogImage.classList.add("card-img");
  blogImage.innerHTML = `<img src="${post.image}" alt="${post.title}" />`;

  const blogContent = document.createElement("div");
  blogContent.classList.add("card-content");
  blogContent.innerHTML = `
        <strong>${post.title}</strong>
        <div>
            <p>${post.content}</p>
        </div>
    `;

  blogSection.appendChild(blogImage);
  blogSection.appendChild(blogContent);

  const blogLink = document.createElement("a");
  blogLink.href = `/pages/form/post.html?post=${postId}`;
  blogLink.appendChild(blogSection);

  blogList.appendChild(blogLink);

  console.log(blogSection);
}

console.log("active...");
