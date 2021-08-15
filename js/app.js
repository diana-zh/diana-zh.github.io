const navSlide = () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => { // animates links
            if (link.style.animation) {
                link.style.animation = ''
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
    
        });

        // animates hamburger into X
        hamburger.classList.toggle('toggle');
    });
}

navSlide();