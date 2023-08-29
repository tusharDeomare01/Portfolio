document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navbar ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", scrollToSection);
    });

    function scrollToSection(event) {
        event.preventDefault();
        const targetId = event.target.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: "smooth"
            });
        }
    }
});

const toggle_btn = document.querySelector('#checkbox');

toggle_btn.addEventListener('change', () => {
    if (toggle_btn.checked) {
        document.body.classList.add('dark-mode');
        document.querySelectorAll('.project').forEach(project => project.classList.add('dark-mode'));
        document.querySelector('header').classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
        document.querySelectorAll('.project').forEach(project => project.classList.remove('dark-mode'));
        document.querySelector('header').classList.remove('dark-mode');
    }
});

