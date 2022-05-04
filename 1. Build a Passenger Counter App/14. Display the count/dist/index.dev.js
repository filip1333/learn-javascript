"use strict";

// document.getElementById("count").innerText = 5
// change the count-el in the HTML to reflect the new count
var countEl = document.getElementById("count-el");
console.log(countEl);
var count = 0;

function increment() {
  count = count + 1;
  countEl.innerText = count;
  console.log(count);
}