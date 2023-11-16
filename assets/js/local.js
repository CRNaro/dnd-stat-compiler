// JS FOR OUR SAVE TO LOCAL STORAGE FUNCTIONALITY

//second try at this
document.addEventListener("DOMContentLoaded", function() {
    const saveCharacterBtn = document.getElementById("save-character-btn");
    const characterList = document.getElementById("character-list");
    const savedCharacters = JSON.parse(localStorage.getItem("savedCharacters")) || [];


    saveCharacterBtn.addEventListener("click", function(event) {
        const characterName = document.getElementById("character-name").value;
        if (characterName) {
            const characterData = {
                class: document.getElementById("displayClass").innerText.trim(),
                race: document.getElementById("displayRace").innerText.trim(),
                prof: document.getElementById("displayProf").innerText.trim(),
                spell: document.getElementById("displaySpell").innerText.trim(),
                poem: document.getElementById("displayPoem").innerText.trim(),
                alignment: document.getElementById("displayAlignment").innerText.trim(),
                language: document.getElementById("displayLanguage").innerText.trim(),
                traits: document.getElementById("displayTraits").innerText.trim(),
                name: characterName
            };
    
            savedCharacters.push(characterData);
            localStorage.setItem("savedCharacters", JSON.stringify(savedCharacters));
            renderCharacter(characterData);
        }
    });
    savedCharacters.forEach(renderCharacter);

    function renderCharacter(characterData) {
        const saveCharacterBtn = document.createElement("button");
        saveCharacterBtn.innerText = characterData.name;
        saveCharacterBtn.addEventListener("click", function() {
            localStorage.setItem("currentCharacter", JSON.stringify(characterData));
            window.location.href = "local.html";
        });
    
   
        // Display the character's data on the page
    document.addEventListener("DOMContentLoaded", function() {
        const currentCharacter = JSON.parse(localStorage.getItem("currentCharacter"));
        console.log(currentCharacter);
        
        document.getElementById("character-name").value = characterData.name;
        document.getElementById("displayClass").innerText = currentData.class;
        document.getElementById("displayRace").innerText = currentCharacter.race;
        document.getElementById("displayProf").innerText = currentCharacter.prof;
        document.getElementById("displaySpell").innerText = currentCharacter.spell;
        document.getElementById("displayPoem").innerText = currentCharacter.poem;
        document.getElementById("displayAlignment").innerText = currentCharacter.alignment;
        document.getElementById("displayLanguage").innerText = currentCharacter.language;
        document.getElementById("displayTraits").innerText = currentCharacter.traits;
     });
        
    characterList.appendChild(saveCharacterBtn); //was characterBtn
    //characterList.appendChild(characterBtn);
}

    const returnBtn = document.getElementById("return-main")
    returnBtn.addEventListener("click", function(event) {
        window.location.href = "index.html";
    });
});