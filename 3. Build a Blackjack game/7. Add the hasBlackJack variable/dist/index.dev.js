"use strict";

var firstCard = 10;
var secondCard = 11;
var sum = firstCard + secondCard;
var hasBlackJack = false;

if (sum <= 20) {
  console.log("Do you want to draw a new card? 🙂");
} else if (sum === 21) {
  console.log("Wohoo! You've got Blackjack! 🥳");
  hasBlackJack = true;
} else {
  console.log("You're out of the game! 😭");
} // CASH OUT!


console.log(hasBlackJack);