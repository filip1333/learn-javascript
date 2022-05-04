"use strict";

var firstCard = 10;
var secondCard = 12;
var sum = firstCard + secondCard;

if (sum < 21) {
  console.log('Do you want to draw a new card?');
} else if (sum === 21) {
  console.log("Wooho! You've got Blackjack!");
} else {
  console.log("You're out of the game!");
}