// This is our javascript file for our application
const getUserClass = document.getElementById("class-select")
const getUserRace = document.getElementById("race-select")

const formEl = document.getElementById("select-form")

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


function getClass(job) {
  
    let classUrl = "https://www.dnd5eapi.co/api/classes/" + job;
    console.log(classUrl)

}

function getRace(race) {
    let raceUrl = "https://www.dnd5eapi.co/api/races/" + race;
    console.log(raceUrl)
}

formEl.addEventListener("submit", function() {
    event.preventDefault()
    const userClass = getUserClass.value
    const userRace = getUserRace.value
    console.log(userClass, userRace)
    getClass(userClass)
    getRace(userRace)
})


