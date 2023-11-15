// This is our javascript file for our application
const getUserClass = document.getElementById("class-select")
const getUserRace = document.getElementById("race-select")

const quoteBox = document.getElementById("quote-box")

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

       // Store CLASS in local storage
       localStorage.setItem('userClass', JSON.stringify(classApiResults));
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
        // Store RACE in local storage
        localStorage.setItem('userRace', JSON.stringify(raceApiResults));
      })
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

    const poem = {
      title: data[0].title, 
      author: data[0].author,
      lines: data[0].lines.slice(0, 20).join("<br>")
    };
    document.getElementById("title").innerHTML = "Title: " + poem.title;
    document.getElementById("author").innerHTML = "Author: " + poem.author;
    document.getElementById("quote").innerHTML = "Lines: " + poem.lines;

    localStorage.setItem('userPoem', JSON.stringify(poem));

    //let poemDisplay = document.getElementById("quote-box");
    //poemDisplay.innerHTML = data[0].lines.slice(0, 20).join("<br>"); 
    }); 
}                                                   
    //let authorDisplay =document.getElementById("author");
    //authorDisplay.innerHTML = data.authorDisplay;

//});                                                      
//}                                                       

formEl.addEventListener("submit", function(event) {



    event.preventDefault()
    const userClass = getUserClass.value
    const userRace = getUserRace.value
    console.log(userClass, userRace)
    getClass(userClass)
    getRace(userRace)
    getPoem() // POEM API SECTION
    //window.location.href = "local.html" // redirect to local.html: take out after testing
});

const saveBtn= document.getElementById("save-button")

saveBtn.addEventListener("click", function(event) {
    window.location.href = "local.html"
});


