document.addEventListener("DOMContentLoaded", () => {
    const toolsData = [
        {
            header: "design",
            icons: [
                { src: "public/logoFigma.svg", alt: "Figma" },
                { src: "public/logoPhotoshop.svg", alt: "Photoshop" },
                { src: "public/logoIllustrator.svg", alt: "Illustrator" },
                { src: "public/logoPremiere.svg", alt: "Premiere" },
                { src: "public/logoNotion.svg", alt: "Notion" },
                { src: "public/logoMeet.svg", alt: "Google Meet" }
            ]
        },
        {
            header: "no-code",
            icons: [
                { src: "public/logoZapier.svg", alt: "Zapier" },
                { src: "public/logoWebflow.svg", alt: "Webflow" },
                { src: "public/logoFramer.svg", alt: "Framer" },
                { src: "public/logoWordpress.svg", alt: "Wordpress" },
            ]
        },
    ];

    const toolsList = document.getElementById("tools-list");

    toolsData.forEach(tool => {
        const block = document.createElement("div");
        block.classList.add("tools-block");

        const header = document.createElement("div");
        header.classList.add("tools-header", "edit");
        header.textContent = tool.header;

        const iconsContainer = document.createElement("div");
        iconsContainer.classList.add("icons-container");

        tool.icons.forEach(icon => {
            const img = document.createElement("img");
            img.classList.add("icon");
            img.src = icon.src;
            img.alt = icon.alt;
            iconsContainer.appendChild(img);
        });

        block.appendChild(header);
        block.appendChild(iconsContainer);

        toolsList.appendChild(block);
    });
});
