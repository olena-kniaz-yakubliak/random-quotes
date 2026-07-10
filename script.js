"use strict";

const quotes = [
  "Lorem5 ipsum dolor sit amet, consectetur adipiscing elit.1111111111111111111",
  "Lorem10 ipsum dolor sit amet, consectetur adipiscing elit.222222222222",
  "lorem20 ipsum dolor sit amet, consectetur adipiscing elit.33333",
];

const quoteElement = document.getElementById("quote");
const generateButton = document.getElementById("generate-btn");

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  quoteElement.textContent = randomQuote;
}

generateButton.addEventListener("click", generateRandomQuote);

//Generate a random quote when the page loads
//generateRandomQuote();
