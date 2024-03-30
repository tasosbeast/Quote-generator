const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
const twitterBtn = document.getElementById("twitter");

let apiQuotes = [];

// Show New Quote
function newQuote() {
  // Pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log(quote);
}
// Get Quotes From API
// Define an asynchronous function named getQuote
async function getQuote() {
  // Set the URL of the API from which we want to fetch quotes
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";

  try {
    // Use the fetch API to make a request to the apiUrl
    const response = await fetch(apiUrl);

    // Wait for the response to come back and convert it to JSON
    // Assign the resulting data to the variable apiQuotes
    apiQuotes = await response.json();

    // Call newQuote to display a random quote
    newQuote();
  } catch (error) {
    // If there's an error in the try block, it will be caught here

    // Log a custom error message and the error itself to the console
    console.log("Whoops, no quote", error);
  }
}

// On Load
getQuote();
