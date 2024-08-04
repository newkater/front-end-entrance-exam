document.addEventListener("DOMContentLoaded", () => {
    const interestsData = [
        "branding",
        "design",
        "photography",
        "illustration",
        "branding",
        "design",
        "photography",
        "illustration"
    ];

    const interestsList = document.getElementById("interests-list");

    interestsData.forEach(interest => {
        const item = document.createElement("div");
        item.classList.add("interests-list-item", "edit");
        item.textContent = interest;

        interestsList.appendChild(item);
    });
});
