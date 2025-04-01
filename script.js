document.addEventListener("DOMContentLoaded", function () {
    // Section Elements
    const startSection = document.getElementById("startSection");
    const welcomeSection = document.getElementById("welcomeSection");
    const selectionSection = document.getElementById("selectionSection");
    const bettingSiteSelection = document.getElementById("bettingSiteSelection");
    const bettingSiteIDSection = document.getElementById("bettingSiteIDSection");
    const activationCodeSection = document.getElementById("activationCodeSection");
    const getSignalSection = document.getElementById("getSignalSection");

    // Buttons
    const startButton = document.getElementById("startButton");
    const continueButton = document.getElementById("continueButton");

    let selectedSite = "";

    // Start Button Click
    startButton.addEventListener("click", function () {
        startSection.style.display = "none";
        welcomeSection.style.display = "block";
    });

    // Continue Button Click (Welcome)
    continueButton.addEventListener("click", function () {
        welcomeSection.style.display = "none";
        selectionSection.style.display = "block";
    });

    // Move to Betting Site Selection
    window.goToBettingSiteSelection = function () {
        selectionSection.style.display = "none";
        bettingSiteSelection.style.display = "block";
    };

    // Betting Site Selected
    window.bettingSiteSelected = function (site) {
        selectedSite = site;
        bettingSiteSelection.style.display = "none";
        bettingSiteIDSection.style.display = "block";
        document.getElementById("selectedSiteName").innerText = site;
    };

    // Submit Betting Site ID
    window.submitBettingSiteID = function () {
        let siteID = document.getElementById("bettingSiteIDInput").value;
        if (siteID.trim() === "") {
            alert("Please enter your Betting Site ID.");
            return;
        }
        bettingSiteIDSection.style.display = "none";
        activationCodeSection.style.display = "block";
    };

    // Validate Activation Code
    window.validateActivationCode = function () {
        let activationCode = document.getElementById("activationCodeInput").value;
        if (activationCode.trim() === "") {
            alert("Please enter an Activation Code.");
            return;
        }
        activationCodeSection.style.display = "none";
        getSignalSection.style.display = "block";
    };

    // Get Signal Button Click
    window.getLiveSignal = function () {
        alert("⏳ Please wait as the bot is deciphering the next live signal for your betting site...");
        setTimeout(() => {
            alert("❌ Error: IP address mismatch. Please contact Admin.");
        }, 5000);
    };

    // Contact Support
    window.contactSupport = function () {
        alert("Please contact support at: support@zaydaviatorbot.com");
    };
});
