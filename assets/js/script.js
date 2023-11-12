// This is our javascript file for our application
const getUserClass = document.getElementById("class-select")
const getUserRace = document.getElementById("race-select")

function getApi() {
    let Url = "https://www.dnd5eapi.co/api/ability-scores/con"

    fetch(Url)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
    console.log(data)}
)}
// Adding in quote API as a test!!!!!!!!!!!
function getPoem () {
    let poemUrl = "https://poetrydb.org/random";
    console.log(poemUrl)
    fetch(poemUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
    console.log(data)
    let poemDisplay = document.getElementById("quote-box");
    poemDisplay.innerHTML = data[0].lines.join("<br>");
    });
}
getPoem() // THIS IS A TEST!!! Line 15 - 29 are test lines!!!

// Call the fetchQuote function to get and display a quote
fetchQuote();

// Display inside the stats
function displayStats(variable1, variable2, variable3) {
    document.getElementById("variable1").textContent = variable1;
    document.getElementById("variable2").textContent = variable2;
    document.getElementById("variable3").textContent = variable3;
}

getApi()


function getClass() {
  
    let classUrl = "https://www.dnd5eapi.co/api/classes/" + getClass;
    console.log(classUrl)

}

function getRace() {
    let raceUrl = "https://www.dnd5eapi.co/api/races/" + getRace
    console.log(raceUrl)
}
