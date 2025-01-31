document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");

    const revealSection = () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.75) {
                section.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", revealSection);
    revealSection();
});
