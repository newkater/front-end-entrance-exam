document.addEventListener("DOMContentLoaded", () => {
    const contact = {
        title: "Let´s chat! I´m ready to work on excinting projects",
        email: "srkarthik.designscape@gmail.com"
    };

    const profileContainer = document.getElementById("contact-info");

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("contact-title", "edit");
    titleDiv.textContent = contact.title;

    const emailDiv = document.createElement("div");
    emailDiv.classList.add("contact-email", "edit");
    emailDiv.textContent = contact.email;

    profileContainer.appendChild(titleDiv);
    profileContainer.appendChild(emailDiv);
});
