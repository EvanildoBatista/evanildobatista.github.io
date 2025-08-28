const themeToggle = document.getElementById("theme-toggle");

const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    themeToggle.classList.toggle("bi-brightness-high");
    themeToggle.classList.toggle("bi-moon-stars");
};

themeToggle.addEventListener("click", toggleTheme);

const accordions = document.querySelectorAll(".accordion__item");

accordions.forEach(accordion => {
    const header = accordion.querySelector(".accordion__header");
    header.addEventListener("click", () => {
        accordion.classList.toggle("active");
    });
});

const menuLinks = document.querySelectorAll(".menu__link");

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        menuLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    });
});

