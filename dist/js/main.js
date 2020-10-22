// DOM items selecteren

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuBranding = document.querySelector('.menu-branding');
const menuNav = document.querySelector('.menu-nav');

const navItems = document.querySelectorAll('.nav-item');

// Menu overlay setten
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

    // Als het menu niet getoond wordt, toon menu. Als het menu wel getoond wordt, sluit hem dan.
function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close'); 
        menu.classList.add('show'); 
        menuNav.classList.add('show'); 
        menuBranding.classList.add('show'); 
        navItems.forEach(item => item.classList.add('show'));
        // alle items worden getoond, dus showMenu wordt nu true
        showMenu = true;
    } else {
        menuBtn.classList.remove('close'); 
        menu.classList.remove('show'); 
        menuNav.classList.remove('show'); 
        menuBranding.classList.remove('show'); 
        navItems.forEach(item => item.classList.remove('show'));
        // alle items worden gesloten, dus showMenu wordt nu false
        showMenu = false;
    }
}


