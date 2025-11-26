document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.header-right a');
    
    // Get all sections
    const sections = document.querySelectorAll('section');
    
    // Get the main content div
    const mainContent = document.querySelector('.content');
    
    // Add click event listeners to each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor behavior
            
            const targetId = this.getAttribute('href').substring(1); // Remove the # from href
            
            // First hide all sections and remove active class from all links
            sections.forEach(section => section.classList.remove('active'));
            navLinks.forEach(link => link.classList.remove('active'));
            
            // If clicking Unit links, hide main content and show appropriate section
            if (targetId.startsWith('unit')) {
                mainContent.style.display = 'none';
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.classList.add('active');
                }
                this.classList.add('active');
            } else if (targetId === 'home') {
                // If clicking Home, show main content and hide all sections
                mainContent.style.display = 'block';
                this.classList.add('active');
            }
        });
    });
});
