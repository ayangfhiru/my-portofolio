// Navbar fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navbar = document.querySelector('#navMenu');
hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navbar.classList.toggle('hidden');
});

