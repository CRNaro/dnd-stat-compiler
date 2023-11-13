// This is our javascript file for our application
const getUserClass = document.getElementById("class-select")
const getUserRace = document.getElementById("race-select")
const quoteBox = document.getElementById("quote-box")
const formEl = document.getElementById("select-form")
let classApiResults, raceApiResults;

function getClass(job) {
  
    let classUrl = "https://www.dnd5eapi.co/api/classes/" + job;
    console.log(classUrl)

}

function getRace(race) {
    let raceUrl = "https://www.dnd5eapi.co/api/races/" + race;
    console.log(raceUrl)
}

// POEM API SECTION
function getPoem () {
    let poemUrl = "https://poetrydb.org/random";
    console.log(poemUrl)

    fetch(poemUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
    console.log(data)

    const title = data[0].title;
    const author = data[0].author;
    const lines = data[0].lines.slice(0, 20).join("<br>");

    document.getElementById("author").innerHTML = author;
    document.getElementById("title").innerHTML = title;
    document.getElementById("quote").innerHTML = lines;

    //let poemDisplay = document.getElementById("quote-box");
    //poemDisplay.innerHTML = data[0].lines.slice(0, 20).join("<br>"); 
    }); 
}                                                   
    //let authorDisplay =document.getElementById("author");
    //authorDisplay.innerHTML = data.authorDisplay;

//});                                                      
//}                                                       

formEl.addEventListener("submit", function() {
    event.preventDefault()
    const userClass = getUserClass.value
    const userRace = getUserRace.value
    console.log(userClass, userRace)
    getClass(userClass)
    getRace(userRace)
    getPoem() // POEM API SECTION
})


