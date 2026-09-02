// =========================
// BOROWSKA KEBAB
// JAVASCRIPT
// =========================

document.addEventListener("DOMContentLoaded", () => {

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });


    // Header background on scroll
    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {
            header.style.background = "rgba(17, 17, 17, 0.95)";
            header.style.backdropFilter = "blur(10px)";
        } else {
            header.style.background = "transparent";
            header.style.backdropFilter = "none";
        }

    });

});
