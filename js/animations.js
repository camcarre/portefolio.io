/**
 * Animations JavaScript
 * Animations fluides inspirées du style Apple pour le site de Camille Douaud
 */

document.addEventListener('DOMContentLoaded', () => {
    // Animation des éléments au scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll, section');
        const windowHeight = window.innerHeight;
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const elementVisible = 150; // Distance de déclenchement
            
            if (elementPosition < windowHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
    };
    
    // Initialiser les animations
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Lancer au chargement initial
    
    // Animation de la grille de fond
    const gridAnimation = document.querySelector('.grid-animation');
    if (gridAnimation) {
        const drawGrid = () => {
            // Créer des points animés dans la grille
            for (let i = 0; i < 5; i++) {
                const point = document.createElement('div');
                point.classList.add('grid-point');
                
                // Position aléatoire
                const x = Math.random() * 100;
                const y = Math.random() * 100;
                
                point.style.left = `${x}%`;
                point.style.top = `${y}%`;
                
                // Animation de pulsation
                point.style.animationDelay = `${Math.random() * 2}s`;
                
                gridAnimation.appendChild(point);
            }
        };
        
        drawGrid();
    }
    
    // Animation des compétences
    const animateSkills = () => {
        const skillItems = document.querySelectorAll('.skill-item');
        
        skillItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 100 * index);
        });
    };
    
    // Observer pour déclencher l'animation des compétences
    const skillsSection = document.querySelector('.skills-section');
    if (skillsSection) {
        const skillsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkills();
                    skillsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        skillsObserver.observe(skillsSection);
    }
    
    // Animation des projets au survol
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const icon = card.querySelector('.icon-wrapper');
            
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(10deg)';
                setTimeout(() => {
                    icon.style.transform = 'scale(1.1) rotate(0deg)';
                }, 200);
            }
        });
        
        card.addEventListener('mouseleave', () => {
            const icon = card.querySelector('.icon-wrapper');
            
            if (icon) {
                icon.style.transform = 'scale(1)';
            }
        });
    });
    
    // Animation du texte principal
    const animateHeroText = () => {
        const heroTitle = document.querySelector('.hero-content h1');
        const heroSubtitle = document.querySelector('.hero-content .subtitle');
        const heroButtons = document.querySelector('.hero-buttons');
        
        if (heroTitle) {
            setTimeout(() => {
                heroTitle.style.opacity = '1';
                heroTitle.style.transform = 'translateY(0)';
            }, 300);
        }
        
        if (heroSubtitle) {
            setTimeout(() => {
                heroSubtitle.style.opacity = '1';
                heroSubtitle.style.transform = 'translateY(0)';
            }, 500);
        }
        
        if (heroButtons) {
            setTimeout(() => {
                heroButtons.style.opacity = '1';
                heroButtons.style.transform = 'translateY(0)';
            }, 700);
        }
    };
    
    // Appliquer les styles initiaux pour l'animation
    const heroTitle = document.querySelector('.hero-content h1');
    const heroSubtitle = document.querySelector('.hero-content .subtitle');
    const heroButtons = document.querySelector('.hero-buttons');
    
    if (heroTitle) heroTitle.style.opacity = '0';
    if (heroTitle) heroTitle.style.transform = 'translateY(30px)';
    if (heroTitle) heroTitle.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    
    if (heroSubtitle) heroSubtitle.style.opacity = '0';
    if (heroSubtitle) heroSubtitle.style.transform = 'translateY(30px)';
    if (heroSubtitle) heroSubtitle.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    
    if (heroButtons) heroButtons.style.opacity = '0';
    if (heroButtons) heroButtons.style.transform = 'translateY(30px)';
    if (heroButtons) heroButtons.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    
    // Déclencher l'animation après un court délai
    setTimeout(animateHeroText, 100);
    
    // Animation du scroll parallaxe
    let scrollPos = 0;
    const parallaxElements = document.querySelectorAll('.hero-visual');
    
    window.addEventListener('scroll', () => {
        // Calculer la direction et la vitesse du scroll
        const newScrollPos = window.scrollY;
        const scrollDelta = newScrollPos - scrollPos;
        scrollPos = newScrollPos;
        
        // Animer les éléments en parallaxe
        parallaxElements.forEach(element => {
            // Ajouter un léger effet parallaxe
            const currentTranslate = parseFloat(element.dataset.translateY || 0);
            const newTranslate = currentTranslate - scrollDelta * 0.1;
            
            element.dataset.translateY = newTranslate;
            element.style.transform = `translateY(${newTranslate}px)`;
        });
    });
});
