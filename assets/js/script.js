var menuBtn = document.querySelector(".menu-btn");
var navMenu = document.querySelector(".menu");
var menuBranding = document.querySelector(".menu-branding");
var navList = document.querySelector(".nav-list");
var navLinks = document.querySelectorAll(".nav-item");

// Set initial state of the menu
let showMenu = false;

// Toggle menu function
var toggleMenu = function() {
    if(!showMenu) {
        menuBtn.classList.add("close");
        navMenu.classList.add("show");
        menuBranding.classList.add("show");
        navList.classList.add("show");
        navLinks.forEach(item => item.classList.add("show"));

        // Set menu state
        showMenu = true;
    } else {
        menuBtn.classList.remove("close");
        navMenu.classList.remove("show");
        menuBranding.classList.remove("show");
        navList.classList.remove("show");
        navLinks.forEach(item => item.classList.remove("show"));

        // Set menu state
        showMenu = false;
    }
}


menuBtn.addEventListener("click", toggleMenu);

