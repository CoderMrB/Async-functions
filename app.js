console.log("hello world")
let h1 = document.getElementById("quote")
let quoteGenerator = document.getElementById("new-quote-button")
let quotesList= document.getElementById("quote-history")
quoteGenerator.addEventListener('click', getQuote)
let randomQuote = ''
let memeImage = document.getElementsByTagName('img')[0]
let memetext=document.createElement('h4')

async function getQuote(){
    memeImage.setAttribute('src', 'https://static.vecteezy.com/system/resources/thumbnails/000/381/000/small_2x/Education_2__28200_29.jpg')
    memetext.innerHTML=''
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
    randomQuote = result[Math.floor(Math.random()*1643)].text;
    h1.textContent = randomQuote

    
    

    let randomNumber = Math.floor(Math.random()*10)

     if (randomNumber === 9){
        let memedata = await fetch("https://api.imgflip.com/get_memes")
        let memeresult = await memedata.json()
        console.log(memeresult)
        let meme = memeresult.data.memes[Math.floor(Math.random()*99)].url
        memeImage.setAttribute('src', meme)
        memetext.textContent="You earned a random meme!"
        memeImage.after(memetext)
        let docbody = document.getElementsByTagName('body')[0]
        docbody.prepend(memeImage)
     }

}


