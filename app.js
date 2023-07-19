console.log("hello world")
let h1 = document.getElementById("quote")
let quoteGenerator = document.getElementById("new-quote-button")
let quotesList= document.getElementById("quote-history")
quoteGenerator.addEventListener('click', getQuote)
let randomQuote = ''

async function getQuote(){
    let newLi = document.createElement("li")
    if (randomQuote !== ''){
        newLi.textContent = randomQuote
        quotesList.appendChild(newLi)
        }
    let quote = await fetch(`http://type.fit/api/quotes`);
    let result = await quote.json();
    randomQuote = result[Math.floor(Math.random()*1643)].text;
    h1.textContent = randomQuote
    
    
}


