"use strict";

import { currentQuote } from "../index.js";

const favoritesContainer = document.getElementById("favorites-container");

const toggleBtn = document.getElementById("favorite-btn");
toggleBtn.addEventListener("click", toggleFavorites);

hideBtn(toggleBtn);

function toggleFavorites() {
  currentQuote.isFavorite = !currentQuote.isFavorite;
  toggleFavoritesIcon(currentQuote.isFavorite, toggleBtn);

  if (currentQuote.isFavorite) {
    showFavoriteCard(
      currentQuote.text,
      currentQuote.author,
      favoritesContainer,
    );
  } else {
    hideFavoriteCard(currentQuote.text);
  }
}

function handleFavorite(isFavorite) {
  showBtn(toggleBtn);
  toggleFavoritesIcon(isFavorite, toggleBtn);
}

function toggleFavoritesIcon(isFavorite, el) {
  el.classList.toggle("fa", isFavorite);
  el.classList.toggle("far", !isFavorite);
}

function showBtn(btn) {
  btn.style.display = "inline-block";
}

function hideBtn(btn) {
  btn.style.display = "none";
}

function showFavoriteCard(text, author, container) {
  const favoriteCard = document.createElement("div");
  favoriteCard.classList.add("favorite-card");
  favoriteCard.innerHTML = `
      <p>${text}</p>
      <p class = 'author'>${author}</p>
      `;
  container.appendChild(favoriteCard);
}

function hideFavoriteCard(text) {
  const favoriteCards = document.querySelectorAll(".favorite-card");
  favoriteCards.forEach((card) => {
    if (card.textContent.includes(text)) {
      card.remove();
    }
  });
}

export {
  handleFavorite,
  toggleFavoritesIcon,
  showFavoriteCard,
  hideFavoriteCard,
  showBtn,
};
