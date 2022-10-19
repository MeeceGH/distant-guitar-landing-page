const nav = document.getElementById('nav');
const navBtn = document.querySelector('#header-top .nav-icon');

window.addEventListener('resize', () => {
    if (window.innerWidth >= 1000) {
        nav.classList.remove('show');
        nav.classList.remove('collapse');
    }
});

navBtn.addEventListener('click', () => {
    if (nav.classList.contains('show')) {
        nav.classList.remove('show');
        nav.classList.add('collapse');
    } else {
        nav.classList.add('show');
    };
});

