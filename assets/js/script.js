// This is our javascript file for our application
const getUserClass = document.getElementById("class-select")
const getUserRace = document.getElementById("race-select")
const formEl = document.getElementById("select-form")
let classApiResults, raceApiResults;

function getClass(job) {

    let classUrl = "https://www.dnd5eapi.co/api/classes/" + job;
    console.log(classUrl)

    fetch(classUrl)
      .then(function(response) {
        if (!response.ok){
            throw response.json();
        }

        return response.json()
      })

      .then(function(localClass) {
        // console.log(localClass)
       classApiResults = localClass
       console.log(localClass)
      })
}

function getRace(race) {
    let raceUrl = "https://www.dnd5eapi.co/api/races/" + race;
    console.log(raceUrl)

    fetch(raceUrl)
      .then(function(response) {
        if (!response.ok){
            throw response.json();
        }

        return response.json()
      })

      .then(function(localRace) {
        // console.log(localRace)
        raceApiResults = localRace
        console.log(localRace)
      })
}

formEl.addEventListener("submit", function (event) {
    event.preventDefault()
    const userClass = getUserClass.value
    const userRace = getUserRace.value
    console.log(userClass, userRace)
    getClass(userClass)
    getRace(userRace)
})


