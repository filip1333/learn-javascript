"use strict";

var firstCard = 10;
var secondCard = 4;
var sum = firstCard + secondCard;
var hasBlackJack = false;
var isAlive = true;
var message = "";

if (sum <= 20) {
  message = "Do you want to draw a new card? 🙂";
} else if (sum === 21) {
  message = "Wohoo! You've got Blackjack! 🥳";
  hasBlackJack = true;
} else {
  message = "You're out of the game! 😭";
  isAlive = false;
}

console.log(message);