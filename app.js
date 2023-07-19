console.log("hello world")
let h1 = document.getElementById("quote")

async function getQuote(){
    let quote = await fetch(`http://type.fit/api/quotes`);
    let result = await quote.json();
    let randomquote = result[Math.floor(Math.random()*1643)].text;
    h1.textContent = randomquote
}

getQuote()


