document.addEventListener("DOMContentLoaded", function () {
    // Start Button
    document.getElementById("startButton").addEventListener("click", function () {
        document.getElementById("startSection").style.display = "none";
        document.getElementById("selectionSection").style.display = "block";
    });
});

// Proceed to Betting Site Selection
function goToBettingSiteSelection() {
    let language = document.getElementById("languageSelect").value;
    let country = document.getElementById("countrySelect").value;

    if (language && country) {
        document.getElementById("selectionSection").style.display = "none";
        document.getElementById("bettingSiteSelection").style.display = "block";
    } else {
        alert("Please select both language and country.");
    }
}

// User clicks a betting site
function bettingSiteSelected(site) {
    document.getElementById("bettingSiteSelection").style.display = "none";
    document.getElementById("bettingSiteIDSection").style.display = "block";
    document.getElementById("selectedSiteName").innerText = site;
}

// Betting Site ID submitted
function submitBettingSiteID() {
    let bettingID = document.getElementById("bettingSiteIDInput").value;

    if (bettingID) {
        document.getElementById("bettingSiteIDSection").style.display = "none";
        document.getElementById("activationCodeSection").style.display = "block";
    } else {
        alert("Please enter your Betting Site ID.");
    }
}

// Activation Code validation
function validateActivationCode() {
    let activationCode = document.getElementById("activationCodeInput").value;

    if (activationCode === "GTR155") {
        document.getElementById("getSignalButton").style.display = "block";
    } else {
        alert("Invalid Activation Code. Try again.");
    }
}

// GET SIGNAL button logic
function getLiveSignal() {
    document.getElementById("activationCodeSection").style.display = "none";

    // Open new signal popup
    let xButtonWindow = window.open("", "_blank", "width=400,height=200");
    xButtonWindow.document.write(`
        <html>
        <head>
            <title>2.4X Predictor</title>
            <style>
                body {
                    font-family: 'Courier New', monospace;
                    background: black;
                    color: lime;
                    text-align: center;
                    padding: 50px;
                }
                .x-btn {
                    font-size: 24px;
                    font-weight: bold;
                    padding: 15px 30px;
                    background: red;
                    color: white;
                    border: none;
                    cursor: pointer;
                    border-radius: 10px;
                }
            </style>
        </head>
        <body>
            <h2>🚀 2.4X Signal Ready!</h2>
            <button class="x-btn">2.4X</button>
        </body>
        </html>
    `);

    // After 10 seconds, close and show fake PowerShell
    setTimeout(() => {
        xButtonWindow.close();

        document.body.innerHTML = `
            <div style="background:black; color:lime; font-family:'Courier New',monospace; padding:20px;">
                <h3>Windows PowerShell</h3>
                <p>PS C:\\Users\\Admin> Initiating signal injection...</p>
                <p>PS C:\\Users\\Admin> Connecting to Aviator AI Core...</p>
                <p>PS C:\\Users\\Admin> Data linked successfully.</p>
                <p>PS C:\\Users\\Admin> Authenticating...</p>
                <p>PS C:\\Users\\Admin> Signal injected ✅</p>
                <p>PS C:\\Users\\Admin> Exit</p>
                <div id="nextRoundWrapper" style="display:none; margin-top:30px; text-align:center;">
                    <button id="nextRoundBtn" style="
                        font-size:24px;
                        font-weight:bold;
                        padding:15px 40px;
                        background:#00ff00;
                        color:#000;
                        border:none;
                        border-radius:10px;
                        cursor:pointer;
                        box-shadow:0 0 20px #00ff00;
                        animation: glowPulse 1s infinite alternate;
                    ">➡️ NEXT ROUND SIGNAL</button>
                </div>
                <style>
                    @keyframes glowPulse {
                        from { box-shadow: 0 0 10px #00ff00; }
                        to { box-shadow: 0 0 30px #00ff00; }
                    }
                </style>
            </div>
        `;

        // Show "Next Round" button after 5 seconds
        setTimeout(() => {
            document.getElementById("nextRoundWrapper").style.display = "block";

            document.getElementById("nextRoundBtn").addEventListener("click", function () {
                showUrgentUpgradeWindow();
            });
        }, 5000);
    }, 10000);
}

// Urgent Upgrade Warning Screen
function showUrgentUpgradeWindow() {
    document.body.innerHTML = `
        <div id="urgentUpgradeContainer">
            <style>
                @keyframes bgPulse {
                    0% { background-color: #000000; }
                    100% { background-color: #1a0000; }
                }

                @keyframes shake {
                    0% { transform: translate(1px, 1px) rotate(0deg); }
                    10% { transform: translate(-1px, -2px) rotate(-1deg); }
                    20% { transform: translate(-3px, 0px) rotate(1deg); }
                    30% { transform: translate(3px, 2px) rotate(0deg); }
                    40% { transform: translate(1px, -1px) rotate(1deg); }
                    50% { transform: translate(-1px, 2px) rotate(-1deg); }
                    60% { transform: translate(-3px, 1px) rotate(0deg); }
                    70% { transform: translate(3px, 1px) rotate(-1deg); }
                    80% { transform: translate(-1px, -1px) rotate(1deg); }
                    90% { transform: translate(1px, 2px) rotate(0deg); }
                    100% { transform: translate(1px, -2px) rotate(-1deg); }
                }

                @keyframes glitch {
                    0% { text-shadow: 2px 2px red; }
                    20% { text-shadow: -2px -2px lime; }
                    40% { text-shadow: 2px -2px cyan; }
                    60% { text-shadow: -2px 2px red; }
                    80% { text-shadow: 2px 2px lime; }
                    100% { text-shadow: -2px -2px cyan; }
                }

                body {
                    margin: 0;
                    padding: 0;
                    background: black;
                    overflow: hidden;
                    font-family: 'Courier New', monospace;
                    animation: bgPulse 2s infinite alternate;
                    color: red;
                    text-align: center;
                }

                #urgentUpgradeContainer {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    animation: shake 0.5s infinite;
                }

                h1 {
                    font-size: 60px;
                    animation: glitch 1s infinite;
                }

                p {
                    font-size: 20px;
                    color: lime;
                    margin-top: 20px;
                }

                .contact-btn {
                    margin-top: 30px;
                    font-size: 20px;
                    padding: 10px 25px;
                    background: red;
                    color: white;
                    border: none;
                    border-radius: 10px;
                    cursor: pointer;
                    animation: glowPulse 1s infinite alternate;
                    box-shadow: 0 0 20px red;
                }
            </style>

            <h1>⚠️ EMERGENCY UPGRADE REQUIRED ⚠️</h1>
            <p>Server error 675: Transaction ID mismatch</p>
            <p>Use your local device for all transactions</p>
            <p>VPN / Proxy detected</p>
            <p>Upgrade your package or contact admin</p>
            <a href="https://t.me/zayd0011" target="_blank">
                <button class="contact-btn">📞 Contact Admin Now</button>
            </a>
        </div>
    `;
}
