let apiQuotes = [];

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

    // Log the quotes data to the console
    console.log(apiQuotes);
  } catch (error) {
    // If there's an error in the try block, it will be caught here

    // Log a custom error message and the error itself to the console
    console.log("Whoops, no quote", error);
  }
}

// On Load
getQuote();
