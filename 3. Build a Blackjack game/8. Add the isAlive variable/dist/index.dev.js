"use strict";

var firstCard = 10;
var secondCard = 12;
var sum = firstCard + secondCard;
var hasBlackJack = false; // 1. Create a variable called isAlive and assign it to true

var isAlive = true; // 2. Flip its value to false in the appropriate code block

if (sum <= 20) {
  console.log("Do you want to draw a new card? 🙂");
} else if (sum === 21) {
  console.log("Wohoo! You've got Blackjack! 🥳");
  hasBlackJack = true;
} else {
  console.log("You're out of the game! 😭");
  isAlive = false;
} // 3. Log it out to check that you're doing it right


console.log(isAlive);