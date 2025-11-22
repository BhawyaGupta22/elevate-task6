const form = document.getElementById("contactForm");
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // stop real submit for demo

    let valid = true;

    // clear previous errors
    document.querySelectorAll(".error").forEach(el => el.textContent = "");
    successMsg.textContent = "";

    // name validation
    if (name.value.trim() === "") {
        name.nextElementSibling.textContent = "Name is required";
        valid = false;
    }

    // email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === "") {
        email.nextElementSibling.textContent = "Email is required";
        valid = false;
    } else if (!emailPattern.test(email.value)) {
        email.nextElementSibling.textContent = "Invalid email format";
        valid = false;
    }

    // message validation
    if (message.value.trim() === "") {
        message.nextElementSibling.textContent = "Message is required";
        valid = false;
    }

    // success section
    if (valid) {
        successMsg.textContent = "Message sent successfully! (Demo only)";
        form.reset();

        // animated success appearance
        successMsg.classList.add("show");

        // auto-hide after 5 seconds
        setTimeout(() => {
            successMsg.classList.remove("show");
        }, 5000);
    }
});
