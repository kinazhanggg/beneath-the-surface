function login() {
    let user = document.getElementById("username").value.trim();
    let pass = document.getElementById("password").value.trim();
    let msg = document.getElementById("msg");

    if (user === "" || pass === "") {
        msg.innerText = "Please fill in all fields.";
        return;
    }

    if (user === "user" && pass === "1234") {
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("username", user);
        window.location.href = "index.html";
    } else {
        msg.innerText = "Incorrect username or password.";
    }
}
