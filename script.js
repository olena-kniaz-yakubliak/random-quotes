"use strict";

import quotes from "./quotes.js";

const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const generateButton = document.getElementById("generate-btn");
const favoriteToggleButton = document.getElementById("favorite-btn");
const faviritesContainer = document.getElementById("favorites-container");

let currentQuoteIndex;

function toggleFavoritesIcon(isFavorite) {
  favoriteToggleButton.classList.toggle("fa", isFavorite);
  favoriteToggleButton.classList.toggle("far", !isFavorite);
}

function generateRandomQuote() {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[currentQuoteIndex];

  // const quote = randomQuote.quote;
  // const author = randomQuote.author;
  //const { quote, author } = randomQuote;

  quoteElement.textContent = randomQuote.quote;
  authorElement.textContent = randomQuote.author;
  toggleFavoritesIcon(randomQuote.isFavorite);
  favoriteToggleButton.style.display = "inline-block";
}

function showFavoriteCard(quote, author) {
  const favoriteCard = document.createElement("div");
  favoriteCard.classList.add("favorite-card");
  favoriteCard.innerHTML = `
      <p>${quote}</p>
      <p class = 'author'>${author}</p>
      `;
  faviritesContainer.appendChild(favoriteCard);
}

function hideFavoriteCard(quote) {
  const favoriteCards = document.querySelectorAll(".favorite-card");
  favoriteCards.forEach((card) => {
    if (card.textContent.includes(quote)) {
      card.remove();
    }
  });
}

function toggleFavorites() {
  const currentQuote = quotes[currentQuoteIndex];
  currentQuote.isFavorite = !currentQuote.isFavorite;
  toggleFavoritesIcon(currentQuote.isFavorite);
  favoriteToggleButton.style.display = "inline-block";

  if (currentQuote.isFavorite) {
    showFavoriteCard(currentQuote.quote, currentQuote.author);
  } else {
    //remove card when is unfavorite
    hideFavoriteCard(currentQuote.quote);
  }
}

generateButton.addEventListener("click", generateRandomQuote);
favoriteToggleButton.addEventListener("click", toggleFavorites);

generateRandomQuote();
