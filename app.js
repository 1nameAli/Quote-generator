let quote = document.getElementById("mainQuote");
let author = document.getElementById("authorName");
let generateQuote = document.getElementById("generateQuote");
let linkedInBtn = document.getElementById("linkedIn");

generateQuote.addEventListener("click", function () {
  async function getQuote() {
    try {
      let response = await fetch("https://dummyjson.com/quotes/random"); // Fetch from API
      let data = await response.json(); // Parse JSON response
      quote.textContent = data.quote; // Update the quote element
      author.textContent = data.author; // Update the author element
    } catch (error) {
      console.error("Error fetching quote:", error); // Error handling
    }
  }
  getQuote(); // Call the function
});
linkedInBtn.addEventListener("click", function () {
    let quoteText = quote.textContent;
    let authorText = author.textContent;
       // Copy the quote and author to clipboard
       let textToCopy = `"${quoteText}" - ${authorText}`;
       navigator.clipboard.writeText(textToCopy).then(() => {
           alert("Quote copied to clipboard. Now paste it into your LinkedIn post!");
           // Open LinkedIn to create a post
           window.open("https://www.linkedin.com/in/muhammad-ali-asif-9b79142a7/overlay/create-post/", '_blank');
       }).catch(err => {
           console.error('Failed to copy: ', err);
       });
});