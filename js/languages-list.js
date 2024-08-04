document.addEventListener("DOMContentLoaded", () => {
    const languages = [
        { name: "English", proficiency: "100%" },
        { name: "Malayalam", proficiency: "100%" },
        { name: "Hindi", proficiency: "75%" },
        // Add more languages here
    ];

    const languagesListContainer = document.getElementById("languages-list");

    languages.forEach(language => {
        const listItem = document.createElement("li");
        listItem.classList.add("languages-list-item");

        const languageName = document.createElement("div");
        languageName.classList.add("edit");
        languageName.textContent = language.name;

        const proficiencyBar = document.createElement("div");
        proficiencyBar.classList.add("language-proficiency");
        proficiencyBar.style.width = language.proficiency;

        listItem.appendChild(languageName);
        listItem.appendChild(proficiencyBar);

        languagesListContainer.appendChild(listItem);
    });
});
