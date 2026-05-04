function toggleMode() {
    document.body.classList.toggle("dark");
}

function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("All fields required");
        return false;
    }
    return true;
}