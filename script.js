// Function to start the application and show language/country selection
function startApp() {
    document.getElementById('startSection').style.display = 'none';
    document.getElementById('selectionSection').style.display = 'block';
}

// Function to update language selection
function updateLanguage() {
    const language = document.getElementById('languageSelect').value;
    // Here you can implement your logic to change language dynamically based on the selection
    console.log("Language selected:", language);
}

// Function to navigate to the betting site selection section
function goToBettingSiteSelection() {
    const country = document.getElementById('countrySelect').value;
    if (country) {
        document.getElementById('selectionSection').style.display = 'none';
        document.getElementById('bettingSiteSelection').style.display = 'block';
    } else {
        alert('Please select a country');
    }
}

// Function to select a betting site
function selectBettingSite(siteName) {
    document.getElementById('selectedSiteName').textContent = siteName;
    document.getElementById('bettingSiteSelection').style.display = 'none';
    document.getElementById('bettingSiteIDSection').style.display = 'block';
}

// Function to submit the betting site ID
function submitBettingSiteID() {
    const bettingSiteID = document.getElementById('bettingSiteIDInput').value;
    if (bettingSiteID) {
        document.getElementById('bettingSiteIDSection').style.display = 'none';
        document.getElementById('activationCodeSection').style.display = 'block';
    } else {
        alert('Please enter your Betting Site ID');
    }
}

// Function to validate the activation code
function validateActivationCode() {
    const activationCode = document.getElementById('activationCodeInput').value;
    if (activationCode === 'GRN250') {
        document.getElementById('activationCodeSection').style.display = 'none';
        document.getElementById('getSignalButton').style.display = 'block';
    } else {
        alert('Invalid Activation Code');
    }
}

// Function to show support contact info
function contactSupport() {
    window.open('https://t.me/zayd0011', '_blank');
}

// Function to show the signal button
function getLiveSignal() {
    document.getElementById('getSignalButton').disabled = true;
    document.getElementById('getSignalButton').textContent = 'Loading Signal...';

    setTimeout(() => {
        document.getElementById('getSignalButton').textContent = 'GET SIGNAL';
        alert('Signal Loaded');
    }, 3000);
}
