document.addEventListener("DOMContentLoaded", function () {
    // 🌙 Dark Mode Toggle
    document.getElementById("darkModeToggle").addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

    // 📝 Sign-Up Functionality
    document.getElementById("signupButton").addEventListener("click", function () {
        let email = document.getElementById("signupEmail").value;
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

        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", password);
        alert("Sign-up successful! Please log in.");
        document.getElementById("signupSection").style.display = "none";
        document.getElementById("loginSection").style.display = "block";
    });

    // 🔑 Login Functionality
    document.getElementById("loginButton").addEventListener("click", function () {
        let email = document.getElementById("loginEmail").value;
        let password = document.getElementById("loginPassword").value;

        if (email === localStorage.getItem("userEmail") && password === localStorage.getItem("userPassword")) {
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

    // 🎰 Handle Betting Site Selection
    document.querySelectorAll(".bettingSiteBtn").forEach(button => {
        button.addEventListener("click", function () {
            document.getElementById("bettingSiteSelection").style.display = "none";
            document.getElementById("bettingIdSection").style.display = "block";
        });
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

    // 🔓 Activation Code Validation
    const validCodes = ["ABC123", "XYZ789"];
    document.getElementById("activationContinueButton").addEventListener("click", function () {
        let code = document.getElementById("activationCode").value;
        if (validCodes.includes(code)) {
            document.getElementById("activationCodeSection").style.display = "none";
            document.getElementById("getSignalSection").style.display = "block";
        } else {
            document.getElementById("error-message").style.display = "block";
        }
    });

    // 📡 Get Signal Functionality
    document.getElementById("getSignalButton").addEventListener("click", function () {
        document.getElementById("signalWindow").style.display = "block";
        document.getElementById("loadingMessage").textContent = "Generating...";

        setTimeout(() => {
            let randomMultiplier = (Math.random() * (15.0 - 1.0) + 1.0).toFixed(2);
            document.getElementById("signalValue").textContent = randomMultiplier + "X";
            document.getElementById("loadingMessage").textContent = "Prediction Ready!";
            document.getElementById("signalSound").play();
        }, 3000);
    });
});
