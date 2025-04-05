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

// Betting Site Selection
function bettingSiteSelected(site) {
    document.getElementById("bettingSiteSelection").style.display = "none";
    document.getElementById("bettingSiteIDSection").style.display = "block";
    document.getElementById("selectedSiteName").innerText = site;
}

// Submit Betting Site ID
function submitBettingSiteID() {
    let bettingID = document.getElementById("bettingSiteIDInput").value;

    if (bettingID) {
        document.getElementById("bettingSiteIDSection").style.display = "none";
        document.getElementById("activationCodeSection").style.display = "block";
    } else {
        alert("Please enter your Betting Site ID.");
    }
}

// Validate Activation Code
function validateActivationCode() {
    let activationCode = document.getElementById("activationCodeInput").value;

    if (activationCode === "GTR155") {
        document.getElementById("getSignalButton").style.display = "block";
    } else {
        alert("Invalid Activation Code. Try again.");
    }
}

// GET SIGNAL Button Click
function getLiveSignal() {
    document.getElementById("activationCodeSection").style.display = "none";

    // Open 2.4X Signal in New Window
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

    // After 10 sec, close signal window and show hacker screen
    setTimeout(() => {
        xButtonWindow.close();

        // Open fake hacker PowerShell window
        let hackerWindow = window.open("", "_blank", "width=600,height=400");
        hackerWindow.document.write(`
            <html>
            <head>
                <title>PowerShell Terminal</title>
                <style>
                    body {
                        font-family: 'Courier New', monospace;
                        background: black;
                        color: limegreen;
                        padding: 20px;
                    }
                    .log {
                        font-size: 16px;
                        line-height: 1.5;
                    }
                </style>
            </head>
            <body>
                <h3>Windows PowerShell</h3>
                <p class="log">PS C:\\Users\\Admin> Initiating signal injection...</p>
                <p class="log">PS C:\\Users\\Admin> Connecting to Aviator AI Core...</p>
                <p class="log">PS C:\\Users\\Admin> Data linked successfully.</p>
                <p class="log">PS C:\\Users\\Admin> Authenticating...</p>
                <p class="log">PS C:\\Users\\Admin> Signal injected ✅</p>
                <p class="log">PS C:\\Users\\Admin> Exit</p>
            </body>
            </html>
        `);

        // Show URGENT UPGRADE WARNING in same window after 5 seconds
        setTimeout(() => {
            document.body.innerHTML = `
                <div id="urgentUpgradeContainer">
                    <style>
                        body {
                            margin: 0;
                            padding: 0;
                            background: black;
                            overflow: hidden;
                            font-family: 'Courier New', monospace;
                            animation: bgPulse 2s infinite alternate;
                        }
                        #urgentUpgradeContainer {
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                            height: 100vh;
                            color: #FF0000;
                            text-align: center;
                            padding: 20px;
                            animation: shake 0.5s infinite;
                        }
                        h1 {
                            font-size: 60px;
                            text-shadow: 0 0 10px red, 0 0 20px yellow;
                            animation: flash 1s infinite;
                        }
                        .warning-line {
                            font-size: 24px;
                            margin: 10px;
                            color: #ff6666;
                            animation: flicker 1.5s infinite alternate;
                        }
                        .highlight {
                            color: yellow;
                            font-weight: bold;
                            text-shadow: 0 0 10px yellow;
                        }
                        .contact-btn {
                            margin-top: 40px;
                            padding: 15px 40px;
                            font-size: 24px;
                            font-weight: bold;
                            background: red;
                            color: white;
                            border: 2px solid yellow;
                            border-radius: 15px;
                            cursor: pointer;
                            animation: glow 1s infinite alternate;
                            box-shadow: 0 0 30px red;
                        }
                        @keyframes bgPulse {
                            0% { background-color: black; }
                            100% { background-color: #330000; }
                        }
                        @keyframes flash {
                            0%, 100% { opacity: 1; }
                            50% { opacity: 0.3; }
                        }
                        @keyframes flicker {
                            0% { opacity: 0.8; }
                            100% { opacity: 1; }
                        }
                        @keyframes glow {
                            from { box-shadow: 0 0 10px red; }
                            to { box-shadow: 0 0 30px yellow; }
                        }
                        @keyframes shake {
                            0%, 100% { transform: translate(0, 0); }
                            25% { transform: translate(2px, -2px); }
                            50% { transform: translate(-2px, 2px); }
                            75% { transform: translate(2px, 2px); }
                        }
                    </style>

                    <h1>🚨 SYSTEM OVERRIDE: UPGRADE REQUIRED 🚨</h1>
                    <div class="warning-line">❌ Multiple Transactions Detected</div>
                    <div class="warning-line highlight">⚠️ You MUST make only <u>ONE</u> transaction</div>
                    <div class="warning-line">❌ Device & IP mismatch</div>
                    <div class="warning-line highlight">⚠️ Use the <u>same device</u> and keep the <u>same IP address</u></div>
                    <div class="warning-line">❌ Package authentication failed</div>
                    <div class="warning-line highlight">⚠️ Upgrade required to unlock access</div>
                    <button class="contact-btn" onclick="window.open('https://t.me/zayd0011', '_blank')">🚨 CONTACT ADMIN IMMEDIATELY</button>
                </div>
            `;
        }, 5000);
    }, 10000);
}

// Contact Support (optional backup)
function contactSupport() {
    window.open("https://t.me/zayd0011", "_blank");
}
