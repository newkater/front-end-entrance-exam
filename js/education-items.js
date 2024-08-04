document.addEventListener("DOMContentLoaded", () => {
    const educationData = [
        {
            timeline: "2017-2019",
            header: "UI/UX",
            tags: ["UX", "UI", "research", "wireframing", "figma"],
            institution: "Coursera"
        },
        {
            timeline: "2015-2017",
            header: "Web Development",
            tags: ["HTML", "CSS", "JavaScript", "React", "Node.js", "CSS", "JavaScript", "React", "Node.js"],
            institution: "Udemy"
        },
        {
            timeline: "2015-2017",
            header: "Web Development",
            tags: ["HTML", "CSS", "JavaScript", "React", "Node.js", "CSS", "JavaScript", "React", "Node.js"],
            institution: "Udemy"
        },
    ];

    const educationList = document.getElementById("education-list");

    educationData.forEach(education => {
        const item = document.createElement("div");
        item.classList.add("education-item", "education-item-common");

        const timeline = document.createElement("div");
        timeline.classList.add("education-timeline");
        timeline.textContent = education.timeline;

        const content = document.createElement("div");
        content.classList.add("education-content");

        const header = document.createElement("div");
        header.classList.add("education-header");
        header.textContent = education.header;

        const tagsContainer = document.createElement("div");
        tagsContainer.classList.add("education-tags", "education-tags-common");

        education.tags.forEach(tag => {
            const tagElement = document.createElement("div");
            tagElement.textContent = `#${tag}`;
            tagsContainer.appendChild(tagElement);
        });

        const institution = document.createElement("div");
        institution.classList.add("education-institution");
        institution.textContent = education.institution;

        content.appendChild(header);
        content.appendChild(tagsContainer);

        item.appendChild(timeline);
        item.appendChild(content);
        item.appendChild(institution);

        educationList.appendChild(item);
    });
});
