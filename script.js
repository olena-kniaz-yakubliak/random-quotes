"use strict";

import quotes from "./quotes.js";

const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const generateButton = document.getElementById("generate-btn");
const favoriteToggleButton = document.getElementById("favorite-btn");
const faviritesContainer = document.getElementById("favorites-container");

let currentQuoteIndex;

function generateRandomQuote() {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[currentQuoteIndex];

  // const quote = randomQuote.quote;
  // const author = randomQuote.author;
  //const { quote, author } = randomQuote;

  quoteElement.textContent = randomQuote.quote;
  authorElement.textContent = randomQuote.author;
  if (randomQuote.isFavorite) {
    favoriteToggleButton.classList.add("fa");
    favoriteToggleButton.classList.remove("far");
  } else {
    favoriteToggleButton.classList.remove("fa");
    favoriteToggleButton.classList.add("far");
  }
  favoriteToggleButton.style.display = "inline-block";
}

function toggleFavorites() {
  const currentQuote = quotes[currentQuoteIndex];
  currentQuote.isFavorite = !currentQuote.isFavorite;
  if (currentQuote.isFavorite) {
    favoriteToggleButton.classList.add("fa");
    favoriteToggleButton.classList.remove("far");
  } else {
    favoriteToggleButton.classList.remove("fa");
    favoriteToggleButton.classList.add("far");
  }

  if (currentQuote.isFavorite) {
    const favoriteCard = document.createElement("div");
    favoriteCard.classList.add("favorite-card");
    favoriteCard.innerHTML = `
      <p>${currentQuote.quote}</p>
      <p class = 'author'>${currentQuote.author}</p>
      `;
    faviritesContainer.appendChild(favoriteCard);
  } else {
    //remove card when is unfavorite
    const favoriteCards = document.querySelectorAll(".favorite-card");
    favoriteCards.forEach((card) => {
      if (card.textContent.includes(currentQuote.quote)) {
        card.remove();
      }
    });
  }
}

generateButton.addEventListener("click", generateRandomQuote);
favoriteToggleButton.addEventListener("click", toggleFavorites);

//generateRandomQuote();
