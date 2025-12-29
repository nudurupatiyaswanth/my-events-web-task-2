/* Theme toggle */
function toggleTheme() {
    document.body.classList.toggle("dark");
}

/* Countdown */
const eventDate = new Date("Dec 31, 2025 10:00:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const diff = eventDate - now;

    if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        document.getElementById("countdown").innerHTML =
            days + " days remaining";
    } else {
        document.getElementById("countdown").innerHTML = "Event Started!";
    }
}, 1000);

/* Modal */
function openModal() {
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

/* Form validation */
function register() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        document.getElementById("formMessage").innerText =
            "Please fill all fields!";
    } else {
        document.getElementById("formMessage").innerText =
            "Registration successful!";
    }
}
