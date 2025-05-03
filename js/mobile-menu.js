document.addEventListener('DOMContentLoaded', function() {
    // Éléments du menu mobile
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;
    const navItems = document.querySelectorAll('.nav-links li');
    
    // Vérification de l'existence des éléments
    if (!hamburgerMenu || !navLinks) {
        console.error("Menu hamburger: éléments non trouvés");
        return;
    }
    
    // Création de l'overlay
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    body.appendChild(overlay);
    
    // Fonction pour basculer le menu
    function toggleMenu() {
        hamburgerMenu.classList.toggle('active');
        navLinks.classList.toggle('active');
        overlay.classList.toggle('active');
        body.classList.toggle('no-scroll');
    }
    
    // Événement de clic sur le hamburger
    hamburgerMenu.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        toggleMenu();
    });
    
    // Fermer le menu quand on clique sur l'overlay
    overlay.addEventListener('click', toggleMenu);
    
    // Fermer le menu quand on clique sur un lien
    const navItemLinks = document.querySelectorAll('.nav-links a');
    navItemLinks.forEach(item => {
        item.addEventListener('click', function() {
            // Ne fermer que si le menu est ouvert
            if (navLinks.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
    
    // Gérer le redimensionnement de la fenêtre
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
            hamburgerMenu.classList.remove('active');
            navLinks.classList.remove('active');
            overlay.classList.remove('active');
            body.classList.remove('no-scroll');
        }
        
        // S'assurer que le menu hamburger est visible uniquement sur mobile
        if (window.innerWidth <= 768) {
            hamburgerMenu.style.display = 'flex';
        } else {
            hamburgerMenu.style.display = 'none';
        }
    });
    
    // Force un recalcul du style pour s'assurer que les transitions fonctionnent
    setTimeout(function() {
        navLinks.style.display = 'flex';
        navLinks.style.transition = 'all 0.4s ease';
        
        // Initialisation - s'assurer que tout est dans l'état initial correct
        if (window.innerWidth <= 768) {
            hamburgerMenu.style.display = 'flex';
        } else {
            hamburgerMenu.style.display = 'none';
        }
    }, 50);
});
