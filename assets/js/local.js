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
        const characterBtn = document.createElement("button");
        characterBtn.textContent = characterData.name;
        characterBtn.addEventListener("click", function() {
            localStorage.setItem("", JSON.stringify(characterData));
            window.location.href = "local.html";
        });
    
        characterList.appendChild(characterBtn);
    }
        // was document need savedCharacters?
    document.addEventListener("DOMContentLoaded", function() {
        const currentCharacter = JSON.parse(localStorage.getItem("currentCharacter"));
        
        // Display the character's data on the page
        document.getElementById("character-name").textContent = currentCharacter.name;
        document.getElementById("displayClass").textContent = currentCharacter.class;
        document.getElementById("displayRace").textContent = currentCharacter.race;
        document.getElementById("displayProf").textContent = currentCharacter.prof;
        document.getElementById("displaySpell").textContent = currentCharacter.spell;
        document.getElementById("displayPoem").textContent = currentCharacter.poem;
        document.getElementById("displayAlignment").textContent = currentCharacter.alignment;
        document.getElementById("displayLanguage").textContent = currentCharacter.language;
        document.getElementById("displayTraits").textContent = currentCharacter.traits;
    });

    const returnBtn = document.getElementById("return-main")
    returnBtn.addEventListener("click", function(event) {
        window.location.href = "index.html";
    });
});