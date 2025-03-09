// Full list of betting sites
const bettingSites = [
    "Pin Up Casino", "1Win", "Melbet", "Crickex", "1xbet", "Dafabet", "Betway", "4rabet", "Hollywoodbets", "Jeetwin",
    "22Bet", "Parimatch", "Bet365", "Betfair", "LeoVegas", "Stake.com", "Wazobet", "Betobet", "Vbet", "Betano",
    "888casino", "Unibet", "Goldenbet", "Betmaster", "MCW.io", "Betvictor", "Pinnacle", "Betonline", "BetUS"
];

// Full list of countries
const countries = [
    "Afghanistan", "Albania", "Algeria", "Argentina", "Australia", "Bangladesh", "Brazil", "Canada", "China", 
    "Colombia", "Egypt", "France", "Germany", "India", "Indonesia", "Italy", "Japan", "Kenya", "Mexico", 
    "Morocco", "Nepal", "Netherlands", "Nigeria", "Pakistan", "South Africa", "Spain", "United Kingdom", "United States"
];

// Load countries
function loadCountries() {
    const countrySelect = document.getElementById("countrySelect");
    countries.forEach(country => {
        const option = document.createElement("option");
        option.value = country;
        option.textContent = country;
        countrySelect.appendChild(option);
    });
}

// Load betting sites
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

document.addEventListener("DOMContentLoaded", () => {
    loadBettingSites();
    loadCountries();
});
