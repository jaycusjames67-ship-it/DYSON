// Dyson Web OS - Main Interactivity Script
document.addEventListener('DOMContentLoaded', () => {
    console.log('Dyson Web OS Initialized');
    
    // Set active nav link based on current page URL
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});
