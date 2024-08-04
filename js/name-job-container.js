document.addEventListener("DOMContentLoaded", () => {
    const person = {
        name: "Karthik SR",
        job: "UX/UI Designer"
    };

    const profileContainer = document.getElementById("name-job-container");

    const nameJobDiv = document.createElement("div");
    nameJobDiv.classList.add("name-job");

    const nameDiv = document.createElement("div");
    nameDiv.classList.add("name");
    nameDiv.textContent = person.name;

    const jobDiv = document.createElement("div");
    jobDiv.classList.add("job");
    jobDiv.textContent = person.job;

    nameJobDiv.appendChild(nameDiv);
    nameJobDiv.appendChild(jobDiv);

    profileContainer.appendChild(nameJobDiv);
});
