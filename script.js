document.getElementById('startButton').addEventListener('click', function() {
    document.getElementById('startSection').style.display = 'none';
    document.getElementById('welcomeSection').style.display = 'block';
});

document.getElementById('continueButton').addEventListener('click', function() {
    document.getElementById('welcomeSection').style.display = 'none';
    document.getElementById('selectionSection').style.display = 'block';
});

function goToBettingSiteSelection() {
    document.getElementById('selectionSection').style.display = 'none';
    document.getElementById('bettingSiteSelection').style.display = 'block';
}

function bettingSiteSelected(site) {
    document.getElementById('selectedSiteName').innerText = site;
    document.getElementById('bettingSiteSelection').style.display = 'none';
    document.getElementById('bettingSiteIDSection').style.display = 'block';
}

function submitBettingSiteID() {
    let idInput = document.getElementById('bettingSiteIDInput').value.trim();
    if (idInput !== "") {
        document.getElementById('bettingSiteIDSection').style.display = 'none';
        document.getElementById('activationCodeSection').style.display = 'block';
    } else {
        alert("Please enter a valid Betting Site ID.");
    }
}

function validateActivationCode() {
    let activationCode = document.getElementById('activationCodeInput').value.trim();
    if (activationCode !== "") { 
        alert("Activation Code Verified ✅");
        document.getElementById('activationCodeSection').style.display = 'none';
        document.getElementById('getSignalSection').style.display = 'block';
    } else {
        alert("Invalid Activation Code ❌");
    }
}

function getLiveSignal() {
    alert("Please wait as the bot is deciphering the next live signal for your betting site...");
    setTimeout(() => {
        alert("⚠️ Error: IP Address mismatch detected! Please contact Admin.");
    }, 3000);
}

function contactSupport() {
    alert("For assistance, contact Admin at: support@example.com");
}
