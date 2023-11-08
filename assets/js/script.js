// This is our javascript file for our application
const getClass = document.getElementById("Whatever the class ID will be")
const getRace = document.getElementById("whateve the race ID is")

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