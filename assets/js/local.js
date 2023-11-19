// JS FOR OUR SAVE TO LOCAL STORAGE FUNCTIONALITY


const characterList = document.getElementById("character-container");
// Getting data from local storage
const userData = JSON.parse(localStorage.getItem("userData")) || []; 
// Display on page
const display = document.getElementById("character-container");
for (let i = 0; i < userData.length; i++) {
    const char = userData[i];

    const charDiv = document.createElement("div");
    
    
   
    // Create a new div for each character
  const nameDiv = document.createElement("div");
  nameDiv.innerHTML = `<p>${char.name}</p>`;
  nameDiv.style.color = "white";
  nameDiv.style.cursor = "pointer";
  nameDiv.style.fontSize = "20px";
  charDiv.appendChild(nameDiv);
// Delete button
  const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.style.color = "green";
    deleteBtn.style.backgroundColor = "light-green";
    deleteBtn.style.border = "1px solid black"; // Add a border to create a box
    deleteBtn.style.padding = "2px"; // Add some padding
    deleteBtn.style.float = "right";
    deleteBtn.style.marginTop = "-25px";
    
    deleteBtn.addEventListener("click", function(event) {
        characterList.removeChild(charDiv);
        // Remove from local storage
        userData.splice(i, 1);
        // Update/Save empty array to local storage
        localStorage.setItem("userData", JSON.stringify(userData));
    });
    charDiv.appendChild(deleteBtn);

  // div for class and race
  const classRaceDiv = document.createElement("div");
    classRaceDiv.innerHTML = `
    <p>Class: ${char.userClass}</p>
    <p>Race: ${char.userRace}</p>
    `;
    classRaceDiv.style.color = "white";
    classRaceDiv.style.border = "1px solid white"; // Add a border to create a box
    classRaceDiv.style.padding = "10px"; // Add some padding
    classRaceDiv.style.marginTop = "10px";
    charDiv.appendChild(classRaceDiv);
    
   

    // div for proficiencies and spells
    const profSpellDiv = document.createElement("div");
    profSpellDiv.innerHTML = `
    <p> ${char.userProf}</p>
    <p> ${char.userSpell}</p>
`;
classRaceDiv.style.color = "white";
    profSpellDiv.style.color = "white";
    profSpellDiv.style.border = "1px solid white"; // Add a border to create a box
    profSpellDiv.style.padding = "10px"; // Add some padding
    profSpellDiv.style.marginTop = "10px";

     
charDiv.appendChild(profSpellDiv);
    // div for alignment and languages
    const alignLangDiv = document.createElement("div");
    alignLangDiv.innerHTML = `
    <p> ${char.userAlignment}</p>
    <p> ${char.userLanguage}</p>
    `;
    alignLangDiv.style.color = "white";
    alignLangDiv.style.border = "1px solid white"; // Add a border to create a box
    alignLangDiv.style.padding = "10px"; // Add some padding
    alignLangDiv.style.marginTop = "10px";
    charDiv.appendChild(alignLangDiv);
    // div for traits 
    const traitsDiv = document.createElement("div");
    traitsDiv.innerHTML = `
    <p> ${char.userTraits}</p>`;
    traitsDiv.style.color = "white";
    traitsDiv.style.border = "1px solid white"; // Add a border to create a box
    traitsDiv.style.padding = "10px"; // Add some padding
    traitsDiv.style.marginTop = "10px";

    charDiv.appendChild(traitsDiv);
    // div for poem
    const poemDiv = document.createElement("div");
    poemDiv.innerHTML = `
    <p> ${char.userPoem}</p>`;
    poemDiv.style.color = "white";
    poemDiv.style.border = "1px solid white"; // Add a border to create a box
    poemDiv.style.padding = "10px"; // Add some padding
    poemDiv.style.marginTop = "10px";

    charDiv.appendChild(poemDiv);
    
    // Append the new div to the container
    characterList.appendChild(charDiv);
// Assuming nameDiv is the div containing the character name
classRaceDiv.style.display = "none";
profSpellDiv.style.display = "none";
alignLangDiv.style.display = "none";
traitsDiv.style.display = "none";
poemDiv.style.display = "none";

nameDiv.addEventListener("click", function() {
    if (classRaceDiv.style.display === "none") {
        classRaceDiv.style.display = "block";
        profSpellDiv.style.display = "block";
        alignLangDiv.style.display = "block";
        traitsDiv.style.display = "block";
        poemDiv.style.display = "block";
    } else {
        classRaceDiv.style.display = "none";
        profSpellDiv.style.display = "none";
        alignLangDiv.style.display = "none";
        traitsDiv.style.display = "none";
        poemDiv.style.display = "none";
    }
});

}

    const returnBtn = document.getElementById("return-main")
    returnBtn.addEventListener("click", function(event) {
        window.location.href = "index.html";
        
    });
