const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkboxInput = document.getElementById("checkbox");
const existingButton = document.getElementById("existing");

const storedUsername = localStorage.getItem("username");
const storedPassword = localStorage.getItem("password");

if (storedUsername && storedPassword) {
    existingButton.style.display = "block";

    existingButton.addEventListener("click", function () {
        alert(`Logged in as ${storedUsername}`);
    });
}

loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const username = usernameInput.value;
    const password = passwordInput.value;
    const rememberMe = checkboxInput.checked;

    if (rememberMe) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
    } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
    }

    alert(`Logged in as ${username}`);

    usernameInput.value = '';
    passwordInput.value = '';
    checkboxInput.checked = false;
});
