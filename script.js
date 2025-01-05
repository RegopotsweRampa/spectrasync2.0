function toggleMenu() {
    const menu = document.getElementById("menu");
    if (menu.style.width === "250px") {
        menu.style.width ="0";
    } else {
        menu.style.width = "250px"
    }
}

// Function to set a cookie when the user accepts the cookie consent
function acceptCookies() {
    // Set a cookie to remember the user's consent for 30 days
    document.cookie = "cookie-consent=true; max-age=" + 30*24*60*60 + "; path=/";
    
    // Hide the cookie consent banner
    document.getElementById("cookie-consent-banner").style.display = "none";
}

// Check if the cookie consent has already been accepted
function checkCookieConsent() {
    var consent = document.cookie.indexOf("cookie-consent=true") !== -1;
    
    if (consent) {
        document.getElementById("cookie-consent-banner").style.display = "none";
    }
}

// Run the cookie consent check when the page loads
checkCookieConsent();
