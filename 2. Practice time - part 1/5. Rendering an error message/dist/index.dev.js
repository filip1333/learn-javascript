"use strict";

// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".
var errorMessage = document.getElementById("error");

function error() {
  console.log(errorMessage);
  errorMessage.textContent = "Something went wrong, please try again";
}