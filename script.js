const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

// Handle hamburger menu interactions
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close drawer immediately when a navigation link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});
