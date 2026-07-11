"use strict";

import quotes from "./quotes.js";

const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const generateButton = document.getElementById("generate-btn");

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  // const quote = randomQuote.quote;
  // const author = randomQuote.author;
  //const { quote, author } = randomQuote;

  quoteElement.textContent = randomQuote.quote;
  authorElement.textContent = randomQuote.author;
}

generateButton.addEventListener("click", generateRandomQuote);

//Generate a random quote when the page loads
//generateRandomQuote();
