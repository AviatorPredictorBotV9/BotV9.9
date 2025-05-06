// Activation codes
const validCodes = ["GLE980", "ZAYD001", "AERO888"];

// Event: Start button
document.getElementById("startButton").onclick = () => {
  hideAllSections();
  document.getElementById("welcomeSection").style.display = "block";
};

// Event: Continue button
document.getElementById("continueButton").onclick = () => {
  hideAllSections();
  document.getElementById("selectionSection").style.display = "block";
};

// Navigate to betting site selection
function goToBettingSiteSelection() {
  hideAllSections();
  document.getElementById("bettingSiteSelection").style.display = "block";
}

// Betting site selected
function bettingSiteSelected(siteName) {
  console.log("Selected betting site:", siteName);
}

// Navigate to betting site ID section
function goToBettingSiteID() {
  hideAllSections();
  document.getElementById("bettingSiteID").style.display = "block";
}

// Navigate to activation code section
function goToActivationCode() {
  hideAllSections();
  document.getElementById("activationCodeSection").style.display = "block";
}

// Validate activation code
function validateActivationCode(GLE980) {
  const code = document.getElementById("activationCode").value.trim();
  const errorMessage = document.getElementById("error-message");

  if (validCodes.includes(code)) {
    errorMessage.style.display = "none";
    hideAllSections();
    document.getElementById("getSignalSection").style.display = "block";
  } else {
    errorMessage.style.display = "block";
  }
}

// Start signal generation
function getSignal() {
  hideAllSections();
  document.getElementById("signalRound1").style.display = "block";
  document.getElementById("watermark").style.display = "block";

  document.getElementById("round1Display").innerText = generateRandomMultiplier();
  document.getElementById("round2Display").innerText = generateRandomMultiplier();
  document.getElementById("round3Display").innerText = generateRandomMultiplier();
}

// Generate random multiplier (e.g., 3.25X)
function generateRandomMultiplier() {
  return (Math.random() * 5 + 1).toFixed(2) + "X";
}

// Show signal round
function showSignalRound(roundId) {
  hideAllSections();
  document.getElementById(roundId).style.display = "block";
}

// Hide all main sections
function hideAllSections() {
  const sections = document.querySelectorAll(".container");
  sections.forEach(section => section.style.display = "none");
}
