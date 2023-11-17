// JS FOR OUR SAVE TO LOCAL STORAGE FUNCTIONALITY
document.addEventListener("DOMContentLoaded", function() {
    // Retrieve the character stats from local storage
    const displayedClass = localStorage.getItem("userClass"); //userClass?
    const displayedRace = localStorage.getItem("userRace"); //userRace?
    const displayedPoem = localStorage.getItem("userPoem"); //userPoem?
    
    // Display the character stats on the page
    document.getElementById("displayClass").innerHTML = `${displayedClass}`;
    document.getElementById("displayRace").innerHTML = `${displayedRace}`;
    document.getElementById("displayPoem").innerHTML = `Poem: ${displayedPoem}`;
    console.log()
    // Display poem on the page
});



const returnBtn= document.getElementById("return-main")

returnBtn.addEventListener("click", function(event) {
    console.log("returnBtn")
    window.location.href = "index.html";
}); 