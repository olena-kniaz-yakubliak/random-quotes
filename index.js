"use strict";

import quotes from "./src/quotes.js";
import { generateRandomInt } from "./src/utils.js";
import {
  hideFavoriteCard,
  showFavoriteCard,
  toggleFavoritesIcon,
} from "./src/favoritesHandler.js";

const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const generateButton = document.getElementById("generate-btn");
const favoriteToggleButton = document.getElementById("favorite-btn");
const favoritesContainer = document.getElementById("favorites-container");

let currentQuoteIndex;

function generateRandomQuote() {
  const randomIndex = generateRandomInt(quotes.length);
  const { quote, author, isFavorite } = quotes[randomIndex];
  currentQuoteIndex = randomIndex;

  quoteElement.textContent = quote;
  authorElement.textContent = author;
  toggleFavoritesIcon(isFavorite, favoriteToggleButton);
  favoriteToggleButton.style.display = "inline-block";
}

function toggleFavorites() {
  const currentQuote = quotes[currentQuoteIndex];
  currentQuote.isFavorite = !currentQuote.isFavorite;
  toggleFavoritesIcon(currentQuote.isFavorite, favoriteToggleButton);
  favoriteToggleButton.style.display = "inline-block";

  if (currentQuote.isFavorite) {
    showFavoriteCard(
      currentQuote.quote,
      currentQuote.author,
      favoritesContainer,
    );
  } else {
    hideFavoriteCard(currentQuote.quote);
  }
}

generateButton.addEventListener("click", generateRandomQuote);
favoriteToggleButton.addEventListener("click", toggleFavorites);

generateRandomQuote();
