//Wow.js
new WOW().init();

//Navbar Toggler
const navToggle = document.querySelector('.navToggle');
const navLinks = document.querySelectorAll('.navLink');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})
