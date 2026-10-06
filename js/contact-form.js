const form = document.getElementById("contact-form");
const cname = document.getElementById("name");
const message = document.getElementById("message");
const contact = document.getElementById("contact-method");
const field_email = document.getElementById("email-field");
const email = document.getElementById("email");
const field_discord = document.getElementById("discord-field");
const discord = document.getElementById("discord");
const formStatus = document.getElementById("form-status");


function updateFormStatus(error = false, msg = "Successfully sent!") {
    formStatus.textContent = msg;
    formStatus.classList.remove("t-error", "t-success");
    if (error) {
        formStatus.classList.add("t-error");
    } else {
        formStatus.classList.add("t-success");
    }
    return;

}

contact.addEventListener("change", function() {
    if (contact.value.trim() === "email") {
        field_email.hidden = false;
        field_discord.hidden = true;
    } else {
        field_email.hidden = true;
        field_discord.hidden = false;
    }
});

form.addEventListener("submit", async function(event) {
    event.preventDefault();
    if (cname.value.trim() === "") {
        updateFormStatus(true, "Please enter your name!");
        return;
    }
    if (message.value.trim() === "") {
        updateFormStatus(true, "Please enter your message!");
        return;
    }
    if (contact.value === "email") {
        if (email.value.trim() === "") {
            updateFormStatus(true, "Please enter your email or choose another contact type!");
            return;
        }
    } else if (contact.value === "discord") {
        if (discord.value.trim() === "") {
            updateFormStatus(true, "Please enter your discord username or choose another contact type!");
            return;
        } 
    }
    try {
        const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: cname.value,
                message: message.value,
                contactMethod: contact.value,
                credential: contact.value == "email"
                    ? email.value
                    : discord.value
            })
        });
        if (!response.ok) {
            updateFormStatus(true, "Server returned an error!");
            return;
        }

        const data = await response.json();

        updateFormStatus(false, data.message);

    } catch (error) {
        console.error(error);
        updateFormStatus(true, "Could not conntect to the server!");
    }
});

