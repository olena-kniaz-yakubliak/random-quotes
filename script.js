"use strict";

import quotes from "./quotes.js";

const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const generateButton = document.getElementById("generate-btn");
const favoriteToggleButton = document.getElementById("favorite-btn");

let currentQuoteIndex;

function generateRandomQuote() {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[currentQuoteIndex];

  // const quote = randomQuote.quote;
  // const author = randomQuote.author;
  //const { quote, author } = randomQuote;

  quoteElement.textContent = randomQuote.quote;
  authorElement.textContent = randomQuote.author;
}

function toggleFavorites() {
  quotes[currentQuoteIndex].isFavorite = !quotes[currentQuoteIndex].isFavorite;
  console.log(quotes[currentQuoteIndex].isFavorite);
  if(!)
}

generateButton.addEventListener("click", generateRandomQuote);
favoriteToggleButton.addEventListener("click", toggleFavorites);
