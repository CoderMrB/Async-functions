console.log("hello world")

async function getQuote(){
    let quote = await fetch(`http://type.fit/api/quotes`);
    let result = await quote.json();
    console.log(result[Math.floor(Math.random()*1643)].text);
}


getQuote()