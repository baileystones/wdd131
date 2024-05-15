const navMenu = document.querySelector(".menu-links");
const navButton = document.querySelector("#menu");
const title = document.querySelector("#title");
const navLinks = document.querySelector(".menu-links");

navButton.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    navButton.classList.toggle("show");
    navLinks.classList.toggle("show");
})

window.addEventListener("resize", function() {
    if (this.window.innerWidth >= 740) {
        navMenu.classList.remove("show");
        navButton.classList.remove("show");
        navButton.style.display = "none";
        navLinks.style.display = "flex";
    } else {
        navButton.style.display = "block";
        navLinks.style.display = "none";
    }
})

navMenu.addEventListener("click", function(event) {
    if (event.target.tagName === 'A') {
        title.textContent = event.target.textContent;
    }
})