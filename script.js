let log = console.log;


const apiUrl = "https://type.fit/api/quotes";

let apiQuotes = []


async function getQuotes(){
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
// log(apiQuotes)

//* What changes we want to do inside DOM
document.querySelector("#new-quote").addEventListener("click",function(){
    let currentIndex = Math.floor(Math.random() * apiQuotes.length)

    document.getElementById("quote").textContent = apiQuotes[currentIndex].text;
    document.querySelector("#author").textContent = "-"+ apiQuotes[currentIndex].author

})

//error handling
    } catch(err){
        log("Error: "+ err)
    }
}
 
getQuotes();























