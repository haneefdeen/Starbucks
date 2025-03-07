document.addEventListener("DOMContentLoaded", function () {
    const form = document.forms["myform"];
    const username = form["usename"];
    const password = form["pass"];
    const signinButton = document.querySelector(".signinbutton");

    signinButton.addEventListener("click", function (event) {
        event.preventDefault(); 
        let errors = [];

        if (!username.value.trim()) {
            errors.push("Username or Email is required.");
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(username.value)) {
            errors.push("Enter a valid email address.");
        }

        if (!password.value.trim()) {
            errors.push("Password is required.");
        } else if (password.value.length < 6) {
            errors.push("Password must be at least 6 characters long.");
        }

        if (errors.length > 0) {
            alert(errors.join("\n"));
        } else {
            alert("Login Successful!");
            form.submit();
        }
    });
});