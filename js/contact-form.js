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

function checkInput() {
    if (cname.value.trim() === "") {
        updateFormStatus(true, "Please enter your name!");
        return false;
    }

    if (message.value.trim() === "") {
        updateFormStatus(true, "Please enter your message!");
        return false;
    }

    if (contact.value === "email") {
        if (email.value.trim() === "") {
            updateFormStatus(true, "Please enter your email or choose another contact type!");
            return false;
        }
    } else if (contact.value === "discord") {
        if (discord.value.trim() === "") {
            updateFormStatus(true, "Please enter your discord username or choose another contact type!");
            return false;
        } 
    }
    return true;
}

async function sendAPI() {
    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            access_key: "b97cb465-00b0-4548-b630-42822020bfd4",
            name: cname.value,
            message: message.value,
            "contact-method": contact.value,
            email: contact.value === "email" ? email.value : "",
            discord: contact.value === "discord" ? discord.value : ""
        })
    });

    const data = await response.json();

    if (!response.ok || data.success !== true) {
        throw new Error(data.message || `Server returned ${response.status}`);
    }

    updateFormStatus(false, data.message || "Successfully sent!");
}

async function submitForm(event) {

    event.preventDefault();

    if (!checkInput()) {
        return;
    }

    try {
        await sendAPI();
    } catch (error) {
        console.error(error);
        updateFormStatus(true, "Could not connect to the server!");
    }
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

form.addEventListener("submit", submitForm);

