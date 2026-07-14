document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        // Handle hamburger menu interactions
        hamburger.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevents bubbling issues
            navMenu.classList.toggle('active');
        });

        // Close drawer immediately when a navigation link is clicked
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });

        // Close menu if user clicks anywhere outside the navigation drawer
        document.addEventListener('click', (event) => {
            if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
                navMenu.classList.remove('active');
            }
        });
    } else {
        console.error("Navigation elements not found! Make sure element IDs match.");
    }
});
