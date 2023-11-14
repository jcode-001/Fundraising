"use strict";
import { blogData } from "./blogData.js";

console.log("Scripts start here after import . line 2 post.js");
console.log("active...");

// Set post when a post is clicked from the home page
const postTitle = document.getElementById("post-title");
const postContent = document.getElementById("post-content");

const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get("post");
console.log("Line 13:", postId);

if (blogData[postId]) {
  postContent.innerHTML = `
  <header class="page-header">
  <div class="container">
      <a href="#" class="logo">
          <img src="/assets/images/logo.png" alt="Funel logo" />
      </a>

      <div class="navbar-wrapper">
          <button class="navbar-menu-btn" data-navbar-toggle-btn>
              <ion-icon name="menu-outline"></ion-icon>
          </button>

          <nav class="navbar" data-navbar>
              <ul class="navbar-list">
                  <li class="nav-item">
                  <a href="../index.html" class="nav-link">Home</a>
                  </li>

                  <li class="nav-item">
                      <a href="#about" class="nav-link">What we do</a>
                  </li>

                  <li class="nav-item">
                      <a href="#features" class="nav-link">Why us?</a>
                  </li>
                  <button class="btn btn-primary  donate-btn"><a href="#">Donate</a></button>
          </nav>
      </div>
  </div>
</header>
<!-- news section -->
<div class="df whole-news-section">
<section class="news-section">
  <p>Latest News</p>
  <h1>${blogData[postId].title}</h1>
  <div class="news-img">
      <img src="${blogData[postId].image}" alt="">
  </div>
  <div class="news-post">
      <p class="news-paragraph">${blogData[postId].content}</p>
  </div>
</section>
<section class="donate-form-container">
  <form action="" method="post">
      <label for="amount">Amount:</label>
      <input
            type="text"
            name="donation-amount"
            placeholder="Enter amount"
            required
            class="input"
            value="250"
          />
          <button class="blue-btn donate-btn capitalize">donate</button>

  </form>
</section>
</div>

  `;
  document.title = blogData[postId].title; // Set the page title
} else {
  console.log("error occured");
  // Handle the case when the blog post is not found
}
