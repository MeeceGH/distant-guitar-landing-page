const nav = document.getElementById('nav');
const navBtn = document.querySelector('#header-top .nav-icon');
const bannerBoxes = document.querySelectorAll('#banner .box');
const bannerCircles = document.querySelectorAll('#banner .circle');
const bannerArrowRight = document.querySelector('#banner .arrow-right');
const bannerArrowLeft = document.querySelector('#banner .arrow-left');

let bannerIdx = 0;
let bannerInterval;

window.addEventListener('resize', () => {
    if (window.innerWidth >= 1000) {
        nav.classList.remove('show');
        nav.classList.remove('collapse');
    };
});

navBtn.addEventListener('click', () => {
    if (nav.classList.contains('show')) {
        nav.classList.remove('show');
        nav.classList.add('collapse');
    } else {
        nav.classList.add('show');
    };
});

bannerArrowRight.addEventListener('click', () => {
    bannerIdx += 1;
    updateBannerBox();
});

bannerArrowLeft.addEventListener('click', () => {
    bannerIdx -= 1;
    updateBannerBox();
});

bannerCircles.forEach((circle, idx) => {
    circle.addEventListener('click', () => {
        bannerIdx = idx;
        updateBannerBox();
    });
});

function updateBannerBox() {

    if (bannerIdx > bannerBoxes.length - 1) {
        bannerIdx = 0;
    } else if (bannerIdx < 0) {
        bannerIdx = bannerBoxes.length - 1;
    };

    updateBannerImage();
    updateBannerCircles();
    clearInterval(bannerInterval);
    setNewBannerInterval();
}

function updateBannerCircles() {
    bannerCircles.forEach(circle => {
        circle.classList.remove('active');
    });
    bannerCircles[bannerIdx].classList.add('active');
}

function updateBannerImage() {
    bannerBoxes.forEach((box, idx) => {
        box.style.transform = `translateX(${(idx * 100) - (bannerIdx * 100)}%)`;
    });
}

function setNewBannerInterval() {
    bannerInterval = setInterval(() => {
        bannerIdx += 1;
        if (bannerIdx > bannerBoxes.length - 1) {
            bannerIdx = 0;
        };

        updateBannerImage();
        updateBannerCircles();

    }, 5000);
}

setNewBannerInterval();