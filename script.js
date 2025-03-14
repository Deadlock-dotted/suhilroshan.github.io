document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".section");
    sections.forEach(section => {
        section.addEventListener("mouseover", () => {
            section.style.opacity = "0.8";
        });
        section.addEventListener("mouseleave", () => {
            section.style.opacity = "1";
        });
    });
});
