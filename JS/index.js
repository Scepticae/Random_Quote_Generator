const guoteContainer = document.getElementById('');
const guoteText = document.getElementById('quote');
const guoteAuthor = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

// Get Quote from API
async function getQuote(){
    const proxyURL = 'https://cors-anywhere.herokuapp.com/';
    const apiURL = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    try {
        const response = await fetch(proxyURL + apiURL);
        const data = await response.json();
        if (data.quoteText.length > 120) {
            quoteText.classList.add('long-quote');
        } else {
            quoteText.classList.remove('long-quote');
        }
        quoteText.innerText = data.quoteText;
        if (data.quoteAuthor === '') {
            quoteAuthor.innerText = 'Unknown Author';
        } else {
            quoteAuthor.innerText = data.quoteAuthor; 
        }  
    } catch (error) {
        getQuote();
    }
}

// On Load
getQuote();