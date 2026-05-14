function checkPassword() {
    let password = document.getElementById("password").value;
    let result = document.getElementById("result");

    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[!@#$%^&*]/.test(password)) score++;

    if (score === 5) {
        result.innerHTML = "Strong Password";
        result.style.color = "green";
    } else if (score >= 3) {
        result.innerHTML = "Medium Password";
        result.style.color = "orange";
    } else {
        result.innerHTML = "Weak Password";
        result.style.color = "red";
    }
}
