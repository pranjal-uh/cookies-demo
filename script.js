// Function to set a cookie with the user's name
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Function to get the user's name from the cookie
function getCookie(name) {
    const cookieName = name + "=";
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return "";
}

// Main function
function main() {
    const username = getCookie("username");
    if (username === "") {
        const promptName = prompt("Please enter your name:");
        if (promptName !== "") {
            setCookie("username", promptName, 30); // Store the name for 30 days
            document.getElementById("greeting").textContent = "Hello, " + promptName + "!";
        }
    } else {
        document.getElementById("greeting").textContent = "Hello, " + username + "!";
    }
}

// Call the main function
main();
