"use strict";

var firstCard = 10;
var secondCard = 4;
var sum = firstCard + secondCard;
var hasBlackJack = false;
var isAlive = true;
var message = "";
var messageEl = document.getElementById("message-el"); // 2. Store the sum paragraph in a variable called sumEl

var sumEL = document.querySelector('#sum-el');

function startGame() {
  // 3. Render the sum on the page using this format -> "Sum: 14"
  sumEL.textContent = 'Sum: ' + sum;

  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }

  messageEl.textContent = message;
}