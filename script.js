// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    navLinks.classList.remove('active');
  });
});

// Navbar Background Change on Scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.background = 'rgba(15, 23, 42, 1)';
  } else {
    header.style.background = 'rgba(15, 23, 42, 0.95)';
  }
});

// Contact Form Submission
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you! Your message has been sent successfully.');
  form.reset();
});