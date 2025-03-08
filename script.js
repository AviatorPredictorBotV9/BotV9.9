document.addEventListener("DOMContentLoaded", function () {
    // 🌙 Dark Mode Toggle
    document.getElementById("darkModeToggle").addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

    // 📝 Sign-Up Functionality
    document.getElementById("signupButton").addEventListener("click", function () {
        let email = document.getElementById("signupEmail").value.trim().toLowerCase();
        let password = document.getElementById("signupPassword").value;
        let robotCheck = document.getElementById("robotCheck").checked;

        if (email === "" || password === "") {
            alert("Please enter your email and password.");
            return;
        }

        if (!robotCheck) {
            alert("Please confirm you are not a robot.");
            return;
        }

        // Store user credentials
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", password);
        alert("Sign-up successful! Please log in.");
        
        // Show login page
        document.getElementById("signupSection").style.display = "none";
        document.getElementById("loginSection").style.display = "block";
    });

    // 🔑 Login Functionality (Validates credentials from Local Storage)
    document.getElementById("loginButton").addEventListener("click", function () {
        let email = document.getElementById("loginEmail").value.trim().toLowerCase();
        let password = document.getElementById("loginPassword").value;

        let storedEmail = localStorage.getItem("userEmail");
        let storedPassword = localStorage.getItem("userPassword");

        if (email === storedEmail && password === storedPassword) {
            alert("Login successful!");
            document.getElementById("loginSection").style.display = "none";
            document.getElementById("startSection").style.display = "block";
        } else {
            document.getElementById("loginError").style.display = "block";
        }
    });

    // 🏁 Start Button Navigation
    document.getElementById("startButton").addEventListener("click", function () {
        document.getElementById("startSection").style.display = "none";
        document.getElementById("selectionSection").style.display = "block";
    });

    // 🛠️ Language & Country Selection
    document.getElementById("languageContinueButton").addEventListener("click", function () {
        document.getElementById("selectionSection").style.display = "none";
        document.getElementById("bettingSiteSelection").style.display = "block";
    });

    // 🎰 Load Betting Sites
    const bettingSites = [
        "Betway", "1xBet", "22Bet", "Bet365", "Parimatch", "Melbet", "Betfair", "Dafabet", "SportyBet", 
        "MozzartBet", "888casino", "BetWinner", "Pinnacle", "LV Bet", "Betobet", "Bitcasino", "BetUS", "Stake", 
        "FortuneJack", "Rolletto", "FezBet", "CampoBet", "William Hill", "MarathonBet", "GG.Bet", "Powbet"
    ];
    let bettingSiteContainer = document.getElementById("bettingSitesContainer");

    bettingSites.forEach(site => {
        let button = document.createElement("button");
        button.classList.add("bettingSiteBtn");
        button.textContent = site;
        button.dataset.site = site;
        button.addEventListener("click", function () {
            document.getElementById("bettingSiteSelection").style.display = "none";
            document.getElementById("bettingIdSection").style.display = "block";
        });
        bettingSiteContainer.appendChild(button);
    });

    // 🔑 Betting Site ID Entry
    document.getElementById("bettingIdContinueButton").addEventListener("click", function () {
        let bettingId = document.getElementById("bettingId").value;
        if (bettingId === "") {
            alert("Please enter your Betting Site ID.");
            return;
        }
        document.getElementById("bettingIdSection").style.display = "none";
        document.getElementById("activationCodeSection").style.display = "block";
    });

    // 🔓 Activation Code Validation (Correct Code: "GZF963")
    const validCode = "GZF963";
    document.getElementById("activationContinueButton").addEventListener("click", function () {
        let code = document.getElementById("activationCode").value;
        if (code === validCode) {
            alert("Activation successful!");
            document.getElementById("activationCodeSection").style.display = "none";
            document.getElementById("getSignalSection").style.display = "block";
        } else {
            document.getElementById("error-message").style.display = "block";
        }
    });
});
