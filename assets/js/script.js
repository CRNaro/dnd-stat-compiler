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

getApi()


function getClass() {
  
    let classUrl = "https://www.dnd5eapi.co/api/classes/" + getClass;
    console.log(classUrl)

}

function getRace() {
    let raceUrl = "https://www.dnd5eapi.co/api/races/" + getRace
    console.log(raceUrl)
}



