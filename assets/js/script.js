// This is our javascript file for our application
const getUserClass = document.getElementById("class-select")
const getUserRace = document.getElementById("race-select")

const quoteBox = document.getElementById("quote-box")

const formEl = document.getElementById("select-form")
let classApiResults, raceApiResults, spellApiResults;

function getClass(job) {

  let classUrl = "https://www.dnd5eapi.co/api/classes/" + job;
  console.log(classUrl)

  fetch(classUrl)
    .then(function (response) {

      return response.json()
    })

      .then(function(localClass) {
        // console.log(localClass)
       classApiResults = localClass
       console.log(localClass)

       // Store CLASS in local storage
       //localStorage.setItem('userClass', JSON.stringify(classApiResults));
       renderClass(localClass)
      })
    

    .catch((err) => {
      console.log(err);
      throw new Error('Error fetching class results');
    })
}

function getRace(race) {
  let raceUrl = "https://www.dnd5eapi.co/api/races/" + race;
  console.log(raceUrl)

  fetch(raceUrl)
    .then(function (response) {
      if (!response.ok) {
        throw response.json();
      }

      return response.json()
    })

      .then(function(localRace) {
        // console.log(localRace)
        raceApiResults = localRace
        console.log(localRace)
        // Store RACE in local storage
        //localStorage.setItem('userRace', JSON.stringify(raceApiResults));
        renderRace(localRace)
      })
    
}

function getSpells(spell) {
  let spellUrl = "https://www.dnd5eapi.co/api/classes/" + spell + "/spells"
  console.log(spellUrl)

  fetch(spellUrl)
    .then(function (response) {

      return response.json()
    })

    .then(function (localSpell) {
      spellApiResults = localSpell
      console.log(localSpell)
      
      renderSpell(spellApiResults)
    })

    .catch((err) => {
      console.log(err);
      throw new Error('Error: Class does not have Spells');
    })
}

// POEM API SECTION
function getPoem() {
  let poemUrl = "https://poetrydb.org/random";
  console.log(poemUrl)

  fetch(poemUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)

    const poem = {
      title: data[0].title, 
      author: data[0].author,
      lines: data[0].lines.slice(0, 20).join("<br>")
    };
    document.getElementById("title").innerHTML = "Title: " + poem.title;
    document.getElementById("author").innerHTML = "Author: " + poem.author;
    document.getElementById("quote").innerHTML = "Lines: " + poem.lines;

    //localStorage.setItem('userPoem', JSON.stringify(poem));

      let poemDisplay = document.getElementById("quote-box");
      //poemDisplay.innerHTML = data[0].lines.slice(0, 20).join("<br>"); 
    });
}

function renderRace() {
  let raceDisplay = document.getElementById("race");
  let alignDisplay = document.getElementById("alignment")
  let languageDisplay = document.getElementById("language")
  let traitsDisplay = document.getElementById("traits")
  let traitsLoop = raceApiResults.traits.length



  raceDisplay.innerHTML = "Race: " + raceApiResults.name
  alignDisplay.innerHTML = "Alignment: " + raceApiResults.alignment
  languageDisplay.innerHTML = "Languages: " + raceApiResults.language_desc

  if (traitsLoop) {
    for (var i = 0; i < traitsLoop; i++) {
      traitsDisplay.innerHTML += "  " + raceApiResults.traits[i].name + "<br>"
    }
  } else {
    traitsDisplay.innerHTML = "Traits: Not Applicable"
  }
}

function renderClass(classApiResults) {
  let classDisplay = document.getElementById("class");
  let profDisplay = document.getElementById("prof");
  let spellDisplay = document.getElementById("spell");
  // let equipDisplay = document.getElementById("equipment")
  let profLoop = classApiResults.proficiencies.length;
  let spellLoop = classApiResults.spellcasting?.info.length;
  let equipLoop = classApiResults.starting_equipment.length;

  // Class Display
  classDisplay.innerHTML = "Class: " + classApiResults.name;

  // Proficiences Display
  for (var i = 0; i < profLoop; i++) {
    profDisplay.innerHTML += "  " + classApiResults.proficiencies[i].name + "<br>"
  }

  // Spell Display (if applicable)
  if (spellLoop) {
    for (var i = 0; i < spellLoop; i++) {
      spellDisplay.innerHTML += "  " + classApiResults.spellcasting.info[i].name + ": " + classApiResults.spellcasting.info[i].desc + "<br>" + "<br>"
    }
  } else {
    spellDisplay.innerHTML = "Spell Type: Not Applicable"
  }
}

function renderSpell(){

  let userSpellsDisplay = document.getElementById("class-spells")
  let spellLoop = spellApiResults.results.length

  

  if (spellLoop) {
    for (var i = 0; i < spellLoop; i++) {
      userSpellsDisplay.innerHTML += "  " + spellApiResults.results[i].name + "<br>"
    }
  } else {
    userSpellsDisplay.innerHTML = "Spells: Not Applicable"
  }
}

function characterClear() {
  document.getElementById("class").innerHTML = "Class:"
  document.getElementById("prof").innerHTML = "Proficiencies:"
  document.getElementById("spell").innerHTML = "Spell Types:"
  document.getElementById("class-spells").innerHTML = "Spells:"
  document.getElementById("race").innerHTML = "Race:"
  document.getElementById("alignment").innerHTML = "Alignment:"
  document.getElementById("language").innerHTML = "Languages:"
  document.getElementById("traits").innerHTML = "Traits:"
}

// save content 
function saveData() {
  const userData = {
      userClass: document.getElementById("class").innerHTML,
      userRace: document.getElementById("race").innerHTML,
      userProf: document.getElementById("prof").innerHTML,
      userSpell: document.getElementById("spell").innerHTML,
      userPoem: document.getElementById("quote-box").innerHTML,
      userAlignment: document.getElementById("alignment").innerHTML,
      userLanguage: document.getElementById("language").innerHTML,
      userTraits: document.getElementById("traits").innerHTML
  };

  const allChars = JSON.parse(localStorage.getItem("userData")) || [];

  allChars.push(userData);

  localStorage.setItem("userData", JSON.stringify(allChars));
}


// Potential for on submit?

formEl.addEventListener("submit", function(event) {
    event.preventDefault()
    const userClass = getUserClass.value
    const userRace = getUserRace.value
    console.log(userClass, userRace)
    getSpells(userClass)
    getClass(userClass)
    getRace(userRace)
    getPoem() // POEM API SECTION
    //saveData()
    //window.location.href = "local.html" // redirect to local.html: take out after testing
});

const saveBtn= document.getElementById("save-button")

 saveBtn.addEventListener("click", function(event) {
  saveData()  
  window.location.href = "local.html"
 });
 


