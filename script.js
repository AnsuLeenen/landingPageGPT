// JavaScript for Responsive Navigation
// Select elements
const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('nav ul');

// Toggle navigation on burger menu click
burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Close navigation on link click
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('show');
    });
});

// GSAP Animations
gsap.from(".hero h2", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
gsap.from(".hero p", { opacity: 0, y: 50, duration: 1, delay: 0.8 });
gsap.from(".hero .cta-button", { opacity: 0, y: 50, duration: 1, delay: 1 });

gsap.from(".features h2", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
gsap.from(".features p", { opacity: 0, y: 50, duration: 1, delay: 0.8 });
