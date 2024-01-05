// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Prevent the default behavior of the link
            e.preventDefault();

            // Scroll to the target element smoothly
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Dark mode toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // Check if the darkModeToggle element exists
    if (darkModeToggle) {
        // Add a click event listener to the darkModeToggle button
        darkModeToggle.addEventListener('click', () => {
            // Toggle the 'dark-mode' class on the body element
            body.classList.toggle('dark-mode');
        });
    }
});
