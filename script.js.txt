document.addEventListener("DOMContentLoaded", () => {
    let selectedBettingSite = "";

    // Function to show specific section and hide others
    function showSection(sectionId) {
        document.querySelectorAll(".container").forEach(section => {
            section.style.display = "none";
        });
        document.getElementById(sectionId).style.display = "block";
    }

    // Start button event
    document.getElementById("startButton").addEventListener("click", () => {
        showSection("welcomeSection");
    });

    // Continue button event
    document.getElementById("continueButton").addEventListener("click", () => {
        showSection("selectionSection");
    });

    // Go to betting site selection
    window.goToBettingSiteSelection = function () {
        showSection("bettingSiteSelection");
    };

    // Betting site selection
    window.bettingSiteSelected = function (siteName, event) {
        selectedBettingSite = siteName;

        document.querySelectorAll(".site").forEach(site => site.classList.remove("selected"));
        event.target.classList.add("selected");

        // Proceed to Betting Site ID input screen
        showSection("bettingSiteIDSection");
        document.getElementById("selectedSiteName").innerText = siteName;
    };

    // Submit Betting Site ID
    window.submitBettingSiteID = function () {
        let bettingSiteID = document.getElementById("bettingSiteIDInput").value.trim();

        if (bettingSiteID === "") {
            alert("Please enter your Betting Site ID.");
            return;
        }

        // Proceed to Activation Code screen
        showSection("activationCodeSection");
    };

    // Validate Activation Code
    window.validateActivationCode = function () {
        let activationCode = document.getElementById("activationCodeInput").value.trim();

        if (activationCode === "GZF963") {
            showSection("getSignalSection");
        } else {
            alert("Invalid Activation Code. Please try again.");
        }
    };

    // Show warning when clicking GET SIGNAL
    window.showWarning = function () {
        alert("Dear Aviator Hack Bot user, please troubleshoot your network connection or contact your service provider for support.");
    };

    // Redirect to Telegram support
    window.contactSupport = function () {
        window.location.href = "https://t.me/zayd0011";
    };
});
