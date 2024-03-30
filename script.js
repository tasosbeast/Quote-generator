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
  // Check if the Author field is blank and replace it with 'Unknown'
  if (!quote.author) {
    authorText.textContent += "Unknown";
  } else {
    authorText.textContent += quote.author;
  }
  // Check Quote length to determine styling
  quoteText.textContent = quote.quote;
}
// Get Quotes From API
// Define an asynchronous function named getQuote
async function getQuote() {
  // Set the URL of the API from which we want to fetch quotes
  const apiUrl = "https://dummyjson.com/quotes ";
  const apiUrl2 =
    "https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

  try {
    // Use the fetch API to make a request to the apiUrl
    const response = await fetch(apiUrl);
    const response2 = await fetch(apiUrl2);

    // Wait for the response to come back and convert it to JSON
    // Assign the resulting data to the variable apiQuotes
    const apiQuotesJson = await response.json();
    const apiQuotesJson2 = await response2.json();
    apiQuotes = apiQuotesJson.quotes.concat(apiQuotesJson2.quotes);
    console.log(apiQuotes);

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
