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
    title: "Help me recover from unidentified rare disease",
    content:
      "Hello everyone! My name is Dora,Im from Hungary. Well,it is not easy to start...I have",
    image: "assets/images/war__gaza-war.jpg",
  },
  post2: {
    title: "Help me recover from unidentified rare disease",
    content:
      "Hi everyone! My name is Dora,Im from Hungary. Well,it is not easy to start...I have",
    image: "assets/images/war__gaza-war.jpg",
  },
  post3: {
    title: "Help me recover from unidentified rare disease",
    content:
      "Hi everyone! My name is Dora,Im from Hungary. Well,it is not easy to start...I have",
    image: "assets/images/war__gaza-war.jpg",
  },
  // Add more blog posts...
};
// Todo: Fetch data and update the blogData Object

//
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
  blogLink.href = `post.html?post=${postId}`;
  blogLink.appendChild(blogSection);

  blogList.appendChild(blogLink);

  console.log(blogSection);
}
