// Function to show the Welcome Section
document.getElementById('startButton').addEventListener('click', function() {
    document.getElementById('startSection').style.display = 'none';
    document.getElementById('welcomeSection').style.display = 'block';
});

// Function to show the Language and Country Selection
document.getElementById('continueButton').addEventListener('click', function() {
    document.getElementById('welcomeSection').style.display = 'none';
    document.getElementById('selectionSection').style.display = 'block';
});

// Function to show the Betting Site Selection
function goToBettingSiteSelection() {
    document.getElementById('selectionSection').style.display = 'none';
    document.getElementById('bettingSiteSelection').style.display = 'block';
}

// Function to handle Betting Site Selection
function bettingSiteSelected(siteName) {
    alert(`You selected: ${siteName}`);
}

// Function to show Betting Site ID input section
function goToBettingSiteID() {
    document.getElementById('bettingSiteSelection').style.display = 'none';
    alert("Proceed to enter your Betting Site ID.");
}
