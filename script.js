// Betting sites list
const bettingSites = [
    "Pin Up Casino", "1Win", "Melbet", "Crickex", "1xbet", "Dafabet", "Betway", "4rabet", "Hollywoodbets", "Jeetwin",
    "22Bet", "Parimatch", "Bet365", "Betfair", "LeoVegas", "Stake.com", "Wazobet", "Betobet", "Vbet", "Betano",
    "888casino", "Unibet", "Goldenbet", "Betmaster", "MCW.io", "Betvictor", "Pinnacle", "Betonline", "BetUS",
    "RedBet", "Betfred", "SBOBET", "M88", "MansionBet", "Royal Panda", "Casumo", "BetStars", "ComeOn", "5Gringos"
];

// Load betting sites dynamically
function loadBettingSites() {
    const container = document.getElementById("bettingSitesContainer");
    bettingSites.forEach(site => {
        const div = document.createElement("div");
        div.className = "betting-site";
        div.textContent = `➡️ ${site}`;
        div.onclick = () => showSection("bettingIdSection");
        container.appendChild(div);
    });
}

// Show the selected section and hide others
function showSection(sectionId) {
    document.querySelectorAll(".container").forEach(div => div.style.display = "none");
    document.getElementById(sectionId).style.display = "block";
}

// Start Button Click Event
document.getElementById("startButton").addEventListener("click", () => {
    showSection("selectionSection");
});

// Continue from Country & Language Selection
document.getElementById("selectionContinueButton").addEventListener("click", () => {
    if (document.getElementById("countrySelect").value) {
        showSection("bettingSection");
    } else {
        alert("Please select your country.");
    }
});

// Continue from Betting Site ID Entry
document.getElementById("bettingIdContinueButton").addEventListener("click", () => {
    if (document.getElementById("bettingId").value) {
        showSection("activationCodeSection");
    } else {
        alert("Please enter your Betting Site ID.");
    }
});

// Activation Code Validation
document.getElementById("activationContinueButton").addEventListener("click", () => {
    if (document.getElementById("activationCode").value === "GZF963") {
        showSection("getSignalSection");
    } else {
        document.getElementById("activationError").style.display = "block";
    }
});

// GET SIGNAL Button Click Event
document.getElementById("getSignalButton").addEventListener("click", () => {
    document.getElementById("popup").style.display = "block";
    setTimeout(() => {
        document.getElementById("popup").style.display = "none";
        alert("🚀 Signal Ready! Check your betting site.");
    }, 3000);
});

// Load betting sites when page is ready
document.addEventListener("DOMContentLoaded", loadBettingSites);
