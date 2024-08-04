document.addEventListener("DOMContentLoaded", () => {
    const workExperiences = [
        {
            jobTitle: "Marketing Manager",
            company: "Pankayam",
            position: "Full-time",
            startDate: "January 2020",
            endDate: "Present",
            descriptions: ["Strategy development and planning of campaigns that promote the business and generate genuine traffic",
                "SEO Content Creation for Blogs, Website, Social media"]
        }
    ];

    const workExperiencesContainer = document.getElementById("work-experiences-recent");

    workExperiences.forEach(experience => {
        const block = document.createElement("div");
        block.classList.add("experience-block", "experience-block-recent");

        const recentTimeline = document.createElement("div");
        recentTimeline.classList.add("position-timeline", "position-timeline-recent");
        
        const timeline = document.createElement("div");
        timeline.classList.add("edit");
        timeline.textContent = `${experience.startDate} - ${experience.endDate}`;

        const mostRecent = document.createElement("div");
        mostRecent.classList.add("most-recent");
        mostRecent.textContent = "most recent";

        const content = document.createElement("div");
        content.classList.add("position-content");

        const jobInfo = document.createElement("div");
        jobInfo.classList.add("position-jobinfo");

        const jobTitle = document.createElement("div");
        jobTitle.classList.add("position-title", "edit");
        jobTitle.textContent = experience.jobTitle;

        const aboutJob = document.createElement("div");
        aboutJob.classList.add("position-aboutjob-recent", "edit");
        aboutJob.textContent = experience.company ? `${experience.company} | ${experience.position}` : `${experience.position}`;

        jobInfo.appendChild(jobTitle);
        jobInfo.appendChild(aboutJob);

        const descriptions = document.createElement("ul");
        descriptions.classList.add("position-descriptions");

        experience.descriptions.forEach(description => {
            const listItem = document.createElement("li");
            listItem.classList.add("edit");
            listItem.textContent = description;
            descriptions.appendChild(listItem);
        });

        recentTimeline.appendChild(timeline);
        recentTimeline.appendChild(mostRecent);

        content.appendChild(jobInfo);
        content.appendChild(descriptions);

        block.appendChild(recentTimeline);
        block.appendChild(content);

        workExperiencesContainer.appendChild(block);
    });
});