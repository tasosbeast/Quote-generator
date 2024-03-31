const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
const twitterBtn = document.getElementById("twitter");
const facebookBtn = document.getElementById("facebook");
const loader = document.getElementById("loader");

let apiQuotes = [];

// Show Loading Spinner
function showLoadingSpinner() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// Hide Loading Spinner
function hideLoadingSpinner() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

// Show New Quote
function newQuote() {
  // Show loading spinner
  showLoadingSpinner();
  // Pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log(quote);
  // Check if the Author field is blank and replace it with 'Unknown'
  if (!quote.author) {
    authorText.textContent = "Unknown";
  } else {
    authorText.textContent = `- ${quote.author}`;
  }
  // Check Quote length to determine styling
  if (quote.quote.length > 90) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  // Set Quote, Hide Loader
  quoteText.textContent = quote.quote;
  hideLoadingSpinner();
}
// Get Quotes From API
// Define an asynchronous function named getQuote
async function getQuote() {
  // Call the loading function to show the loader
  showLoadingSpinner();
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

// Tweet Quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent}  ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
}

//share on facebook
function shareOnFacebook() {
  const facebookUrl = `https://www.facebook.com/sharer/`;
  window.open(facebookUrl, "_blank");
}

// Event Listeners

// Get a reference to the button with the id 'new-quote-btn' from the DOM
// This is done using the 'document.getElementById' method

// Add an event listener to the 'newQuoteBtn' button
// The 'addEventListener' method takes two arguments:
// 1. The type of the event to listen for - in this case, 'click'
// 2. The function to run when the event happens - in this case, 'newQuote'
newQuoteBtn.addEventListener("click", newQuote);

// new quote on right arrow key press
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    newQuote();
  }
});

// tweet on enter key press
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    tweetQuote();
  }
});

// Add an event listener to the 'twitterBtn' button
twitterBtn.addEventListener("click", tweetQuote);

// Add an event listener to the 'facebookBtn' button
facebookBtn.addEventListener("click", shareOnFacebook);

// On Load
getQuote();
