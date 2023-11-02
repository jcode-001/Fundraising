"use strict";

//  <!-- JavaScript Form Validation For add-campaign.html-->

const validateForm = () => {
  // List of form field IDs to validate
  const fieldsToValidate = [
    "fundraiser-title",
    "fundraiser-category",
    "fundraiser-country",
    "fundraiser-city",
    "donation-currency",
    "first-name",
    "last-name",
    "email",
    "account-password",
  ];

  // Initialize the validation flag
  let isValid = true;

  // Loop through the form fields and validate each one
  fieldsToValidate.forEach((fieldId) => {
    const value = document.getElementById(fieldId).value;
    const errorId = `${fieldId}-error`;
    const errorMessage = document.getElementById(errorId);

    if (!value) {
      errorMessage.textContent = `${fieldId.replace("-", " ")} is required.`;
      errorMessage.style.display = "block";
      isValid = false;
    } else {
      errorMessage.textContent = "";
    }
  });

  return isValid;
};
// Form Validation ends <----

// Get the file input element
const profileImageInput = document.getElementById("profile_image");

// Get the image preview element
const profileImagePreview = document.getElementById("profile-preview");

// Get the profile image container
const profileImageContainer = document.getElementById(
  "profile-image-container"
);

const uploadImage = document.querySelector(".upload");

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
