// navbar on scroll
function navOnScroll() {
    const navbar = document.getElementById('navbar-on-scroll');
    const scrollValue = window.scrollY;


    if (scrollValue <80) {
        navbar.classList.remove('nav-background-color')
    } else {
        navbar.classList.add('nav-background-color')
    }

}
window.addEventListener('scroll', navOnScroll)