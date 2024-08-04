document.addEventListener("DOMContentLoaded", () => {
    const workExperiences = [
        {
            jobTitle: "Graphic / Web Designer",
            position: "Freelance",
            startDate: "June 2018",
            endDate: "December 2019",
            descriptions: ["Development of internal projects from scratch, product design of brands ",
                "Landing page, webapps and hybrid apps",
                "Coordinating with outside agencies, art services, web designer, marketing, printers, and colleagues as necessary."]
        },
        {
            jobTitle: "Legal Assistant",
            company: "Law Firm",
            position: "Intern",
            startDate: "January 2018",
            endDate: "May 2018",
            descriptions: ["Provide administrative support to lawyer and enhance office effectiveness",
                "Handle communication with clients, witnesses etc.;Prepare case briefs and summarize depositions, interrogatories and testimony"]
        }
    ];

    const workExperiencesContainer = document.getElementById("work-experiences");

    workExperiences.forEach(experience => {
        const block = document.createElement("div");
        block.classList.add("experience-block", "experience-block-common");

        const timeline = document.createElement("div");
        timeline.classList.add("position-timeline");
        timeline.textContent = `${experience.startDate} - ${experience.endDate}`;

        const content = document.createElement("div");
        content.classList.add("position-content");

        const jobInfo = document.createElement("div");
        jobInfo.classList.add("position-jobinfo");

        const jobTitle = document.createElement("div");
        jobTitle.classList.add("position-title");
        jobTitle.textContent = experience.jobTitle;

        const aboutJob = document.createElement("div");
        aboutJob.classList.add("position-aboutjob");
        aboutJob.textContent = experience.company ? `${experience.company} | ${experience.position}` : `${experience.position}`;

        jobInfo.appendChild(jobTitle);
        jobInfo.appendChild(aboutJob);

        const descriptions = document.createElement("ul");
        descriptions.classList.add("position-descriptions");

        experience.descriptions.forEach(description => {
            const listItem = document.createElement("li");
            listItem.textContent = description;
            descriptions.appendChild(listItem);
        });

        content.appendChild(jobInfo);
        content.appendChild(descriptions);

        block.appendChild(timeline);
        block.appendChild(content);

        workExperiencesContainer.appendChild(block);
    });
});