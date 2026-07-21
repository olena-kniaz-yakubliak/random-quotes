"use strict";
import quotes from "../data/quotes.js";
import { generateRandomInt } from "../utils.js";
import { handleFavorite } from "./favorites.js";

let currentQuote = null;

function handleQuote() {
  const randomQuote = choseRandomQuote(quotes);
  currentQuote = randomQuote;
  displayQuote(randomQuote);
}

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
  return quotes[randomIndex];
}

export { handleQuote, currentQuote };
