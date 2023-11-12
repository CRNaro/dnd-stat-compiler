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
}



