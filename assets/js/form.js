"use strict";
// Form 1
const form1 = document.getElementById("form1");
// Form 2
const form2 = document.getElementById("form2");

const addOptions = function (array, parentElement) {
  array.forEach((item) => {
    const option = document.createElement("option");
    const value = document.createTextNode(item);
    option.value = value.data;
    option.appendChild(value);

    parentElement.appendChild(option);
  });
};

const validateForm = function (event) {
  event.preventDefault();

  // Get form field values for the first form
  const fundraiserTitle = document.getElementById("fundraiser-title").value;
  const fundraiserCategory = document.getElementById(
    "fundraiser-category"
  ).value;
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("account-password").value;
  const agree = document.getElementById("agree").checked;

  let isValid = true;

  if (fundraiserTitle.trim() === "") {
    isValid = false;
    document.getElementById("fundraiser-title-error").textContent =
      "Fundraiser title is required.";
  } else {
    document.getElementById("fundraiser-title-error").textContent = "";
  }

  if (fundraiserCategory === "") {
    isValid = false;
    document.getElementById("fundraiser-category-error").textContent =
      "Select a fundraiser category.";
  } else {
    document.getElementById("fundraiser-category-error").textContent = "";
  }

  if (firstName.trim() === "") {
    isValid = false;
    document.getElementById("first-name-error").textContent =
      "First name is required.";
  } else {
    document.getElementById("first-name-error").textContent = "";
  }

  // if (!agree) {
  //   isValid = false;
  //   error1.textContent = "Please agree to the terms and conditions.";
  // } else {
  //   error1.textContent = "";
  // }

  if (isValid) {
    // Redirect to the next page for the first form on successful validation
    window.location.href = "add-campaign-2.html";
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const currency = [
    "Euro (EUR)",
    "British Pound Sterling (GBP)",
    "Japanese Yen (JPY)",
    "Canadian Dollar (CAD)",
    "Australian Dollar (AUD)",
    "Swiss Franc (CHF)",
    "Chinese Yuan (CNY)",
  ];
  const countries = ["Nigeria", "United Kingdom", "Ghana"];

  if (form1) {
    const currencySelect = document.getElementById("donation-currency");
    addOptions(currency, currencySelect);

    const countrySelect = document.getElementById("fundraiser-country");
    addOptions(countries, countrySelect);

    form1.addEventListener("submit", validateForm);
  }

  const error2 = document.getElementById("error2");

  if (form2) {
    form2.addEventListener("submit", function (event) {
      event.preventDefault();

      // Get form field values for the second form
      const fundraiserStory = document.getElementById("fundraiser-story").value;

      let isValid = true;

      if (fundraiserStory.trim() === "") {
        isValid = false;
        document.getElementById("fundraiser-story-error").textContent =
          "Fundraiser story is required.";
      } else {
        document.getElementById("fundraiser-story-error").textContent = "";
      }

      if (isValid) {
        // Redirect to the next page for the second form on successful validation
        window.location.href = "next_page_2.html";
      }
    });
  }
});

// Get the file input element
const profileImageInput = document.getElementById("profile_image");
const fundraiserImageInput = document.getElementById("fundraiser_photo");
// Get the image preview element
const profileImagePreview = document.getElementById("profile-preview");
// Get the profile image container
const profileImageContainer = document.getElementById(
  "profile-image-container"
);

const uploadImage = document.querySelector(".upload");
const uploadImage2 = document.querySelector(".fundraiser-photo-upload");

if (form1) {
  // Add an event listener to detect when a file is selected
  profileImageInput.addEventListener("change", function () {
    const file = this.files[0]; // Get the selected file

    if (file) {
      // Display the profile image container
      profileImageContainer.style.display = "block";
      uploadImage.style.display = "none";

      // Create a URL for the selected image and set it as the src attribute of the profile image
      profileImagePreview.src = URL.createObjectURL(file);
    } else {
      // Clear the preview and hide the profile image container if no file is selected
      profileImagePreview.src = "";
      profileImageContainer.style.display = "none";
    }
  });
}

if (form2) {
  // Add an event listener to detect when a file is selected
  fundraiserImageInput.addEventListener("change", function () {
    const file = this.files[0]; // Get the selected file

    if (file) {
      // Display the profile image container
      profileImageContainer.style.display = "block";
      uploadImage2.style.display = "none";

      // Create a URL for the selected image and set it as the src attribute of the profile image
      profileImagePreview.src = URL.createObjectURL(file);
    } else {
      // Clear the preview and hide the profile image container if no file is selected
      profileImagePreview.src = "";
      // profileImageContainer.style.display = "none";
    }
  });
}
