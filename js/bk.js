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


document.querySelector('.faq-link').addEventListener('click', function(e) {
    e.preventDefault(); // Varsayılan link davranışını engelle
    
    const faqSection = document.querySelector('#faq-scroll');
    faqSection.scrollIntoView({ 
        behavior: 'smooth' 
    });
});


document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.getElementById('preloader').classList.add('hidden');
    }, 2000);
});



const block = document.getElementById("block");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      block.classList.add("animate"); // Sadece bir kez animasyon ekle
      observer.unobserve(block); // Daha fazla gözlemleme
    }
  });
});

observer.observe(block);