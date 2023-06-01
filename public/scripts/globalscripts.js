var navBarElem = document.getElementById('navbar'); 
var navMenuElem = document.getElementById('menucontainer'); 
var navElem = document.querySelector('nav');
var hamburgerMenu = document.getElementById('hamburgermenu');
var soMeDesk = document.getElementById('someholder');
var soMeMobile = document.getElementById('somemobilerow');

if (window.innerWidth > 1024) {
    navBarElem.style.display = 'flex';
    hamburgerMenu.style.display = 'none';
} else {
    navElem.classList.add('displaynone');
}

function toggleNavMenu() {
    navElem.classList.toggle('displayflex');
    navElem.classList.toggle('displaynone');
}

hamburgerMenu.addEventListener('click', toggleNavMenu)