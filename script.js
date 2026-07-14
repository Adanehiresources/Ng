document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        // Toggle mobile drawer layout open/close on click
        hamburger.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevents immediate closing from bubbling to document
            navMenu.classList.toggle('active');
        });

        // Close drawer immediately when a navigation link is clicked
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });

        // Close menu if user clicks anywhere outside the navigation drawer panel
        document.addEventListener('click', (event) => {
            if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
                navMenu.classList.remove('active');
            }
        });
    } else {
        console.error("Navigation drawer elements missing. Check ID configurations.");
    }
});
