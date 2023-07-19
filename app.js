console.log("hello world")
let h1 = document.getElementById("quote")
let quoteGenerator = document.getElementById("new-quote-button")
let quotesList= document.getElementById("quote-history")
quoteGenerator.addEventListener('click', getQuote)
let randomQuote = ''

async function getQuote(){
    let newLi = document.createElement("li")
    let currentList = document.querySelectorAll("li")
    let repeatQuote = false
   

    if (randomQuote !== ''){
        for(i=0; i<currentList.length;i++){
            if (randomQuote === currentList[i].textContent){
                repeatQuote = true;
                break
            }else{
                continue
            }
        }
    }
   
    if (repeatQuote === false && randomQuote !== ''){
        newLi.textContent = randomQuote
        quotesList.appendChild(newLi)
        }
        


    let quote = await fetch(`http://type.fit/api/quotes`);
    let result = await quote.json();
    randomQuote = result[Math.floor(Math.random()*3)].text;
    h1.textContent = randomQuote    
}


