"use strict";

var firstCard = 10;
var secondCard = 4; // 1. Create a new array - cards - that contains firstCard and secondCard

var cards = [firstCard, secondCard];
var sum = firstCard + secondCard;
var hasBlackJack = false;
var isAlive = true;
var message = "";
var messageEl = document.getElementById("message-el");
var sumEl = document.getElementById("sum-el");
var cardsEl = document.getElementById("cards-el");

function startGame() {
  renderGame();
}

function renderGame() {
  // 2. Refer to the cards array when rendering out the cards
  cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
  sumEl.textContent = "Sum: " + sum;

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

function newCard() {
  var card = 6;
  sum += card;
  renderGame();
}