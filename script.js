document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("login-form");
  const existingButton = document.getElementById("existing");

  if (localStorage.getItem("username") && localStorage.getItem("password")) {
    existingButton.style.display = "block";
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const checkbox = document.getElementById("checkbox").checked;

    if (checkbox) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      existingButton.style.display = "block";
    } else {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
      existingButton.style.display = "none";
    }

    alert(`Logged in as ${username}`);
  });

  existingButton.addEventListener("click", function () {
    const username = localStorage.getItem("username")
    const password = localStorage.getItem("password");

    alert(`Logged in as ${username}`);
  });
});