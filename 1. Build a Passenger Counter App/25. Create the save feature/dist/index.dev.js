"use strict";

// 1. Grab the save-el paragrah and store it in a variable called saveEl
var countEl = document.getElementById("count-el");
var count = 0;
var saveEl = document.getElementById("save-el");

function increment() {
  count += 1;
  countEl.innerText = count;
}

function save() {
  // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
  // 3. Render the variable in the saveEl using innerText
  // NB: Make sure to not delete the existing content of the paragraph
  var exerciseString = count + " - ";
  saveEl.innerText += exerciseString;
  console.log(count);
}