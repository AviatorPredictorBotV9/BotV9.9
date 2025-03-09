// Zayd’s bot, click to play,  
// Follow the steps, don’t delay!  

document.getElementById("startButton").addEventListener("click", function() {
    showSection("welcomeSection");
});

document.getElementById("continueButton").addEventListener("click", function() {
    showSection("selectionSection");
});

// Click to pick, then move ahead,  
// Choose your site, where bets are spread!  
function goToBettingSiteSelection() {
    showSection("bettingSiteSelection");
}

function bettingSiteSelected(siteName) {
    alert("You chose " + siteName + ", let’s begin!");
}

// Step by step, we guide the way,  
// To place your bet without delay!  
function goToBettingSiteID() {
    alert("Next up: Betting Site ID!");
}

// Hide them all, then show the right,  
// A smooth transition, day or night!  
function showSection(sectionId) {
    document.querySelectorAll(".container").forEach(section => {
        section.style.display = "none";
    });
    document.getElementById(sectionId).style.display = "block";
}
sceiot
