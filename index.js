"use strict";

import quotes from "./src/quotes.js";
import { generateRandomInt } from "./src/utils.js";
import { handleFavorite } from "./src/favoritesHandler.js";

const generateButton = document.getElementById("generate-btn");

let currentQuoteIndex;
let currentQuote = null;

function displayQuote(quote) {
  const { text, author, isFavorite } = quote;
  const quoteElement = document.getElementById("quote");
  const authorElement = document.getElementById("author");

  quoteElement.textContent = text;
  authorElement.textContent = author;
  handleFavorite(isFavorite);
}

function choseRandomQuote(quotes) {
  const randomIndex = generateRandomInt(quotes.length);
  currentQuoteIndex = randomIndex;
  return quotes[randomIndex];
}

function generateAndDisplayRandomQuote() {
  const randomQuote = choseRandomQuote(quotes);
  currentQuote = randomQuote;
  displayQuote(randomQuote);
}

generateButton.addEventListener("click", generateAndDisplayRandomQuote);

export { currentQuote };
