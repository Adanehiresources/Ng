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
            link.addEventListener('click', (event) => {
                navMenu.classList.remove('active');

                // Check if the clicked link is meant to open about.html
                // (Assuming your About Us link text or href targets "about.html")
                const href = link.getAttribute('href');
                if (link.textContent.includes('About Us') || href === 'about.html') {
                    event.preventDefault();
                    window.location.href = 'about.html';
                }
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

    // --- Image Slider Automatic Transition (Every 4 seconds) ---
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.getElementsByClassName("slide");
        let dots = document.getElementsByClassName("dot");

        if (slides.length > 0) {
            // Hide all slides
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }

            slideIndex++;
            if (slideIndex > slides.length) {
                slideIndex = 1;
            }

            // Remove active status from dots
            for (let i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }

            // Display current slide and activate corresponding dot
            slides[slideIndex - 1].style.display = "block";
            if (dots.length > 0) {
                dots[slideIndex - 1].className += " active";
            }

            // Change image every 4 seconds (4000 milliseconds)
            setTimeout(showSlides, 4000);
        }
    }
});
