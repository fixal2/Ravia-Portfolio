// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Theme Switcher
const themeButtons = document.querySelectorAll('.theme-btn');
const body = document.body;

// Load saved theme from localStorage
const savedTheme = localStorage.getItem('theme') || 'blue';
body.setAttribute('data-theme', savedTheme);

// Set active theme button on page load
themeButtons.forEach(btn => {
    if (btn.getAttribute('data-theme') === savedTheme) {
        btn.classList.add('active');
    } else {
        btn.classList.remove('active');
    }
});

themeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const theme = button.getAttribute('data-theme');
        body.setAttribute('data-theme', theme);
        
        // Update active state
        themeButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Save theme to localStorage
        localStorage.setItem('theme', theme);
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-category, .project-card, .experience-item').forEach(el => {
    observer.observe(el);
});

// Header Background on Scroll
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 5px 20px var(--shadow)';
    } else {
        header.style.boxShadow = '0 2px 10px var(--shadow)';
    }
});

// Console message
console.log('%cRavia Begum Portfolio', 'color: #2563eb; font-size: 24px; font-weight: bold;');
console.log('%cBuilt with HTML, CSS, and JavaScript', 'color: #6b7280; font-size: 14px;');
