document.addEventListener("DOMContentLoaded", () => {
    const profileImage = {
        src: "public/profileimg.png",
        alt: "Profile Image"
    };

    const profileContainer = document.getElementById("profile-container");

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("profile-img-container");

    const img = document.createElement("img");
    img.classList.add("profile-img");
    img.src = profileImage.src;
    img.alt = profileImage.alt;

    imgContainer.appendChild(img);
    profileContainer.appendChild(imgContainer);
});
