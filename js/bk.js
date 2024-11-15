function toggleMenu() {
    const sideMenu = document.getElementById('side-menu');
    sideMenu.classList.toggle('active');
}


const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider img');
const navDots = document.querySelectorAll('.slider-nav a');
let currentIndex = 0;

function updateActiveDot(index) {
    navDots.forEach(dot => dot.classList.remove('active'));
    navDots[index].classList.add('active');
}

setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    slider.scrollLeft = slides[currentIndex].offsetLeft;
    updateActiveDot(currentIndex);
}, 5000);

updateActiveDot(currentIndex);