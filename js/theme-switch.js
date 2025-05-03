/**
 * Theme Switch JavaScript
 * Gestion du thème clair/sombre pour le site de Camille Douaud
 */

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const logoImage = document.getElementById('logo-image');
    
    // Définir les chemins des logos
    let logoPathLight, logoPathDark;
    
    // Vérifier si nous sommes sur la page d'accueil ou une page de projet
    const isProjectPage = window.location.pathname.includes('/projets/');
    
    if (isProjectPage) {
        // Chemins pour les pages de projets (avec ../)
        logoPathLight = '../images/logofondblanc.png';
        logoPathDark = '../images/logofondnoir.png';
    } else {
        // Chemins pour la page d'accueil
        logoPathLight = 'images/logofondblanc.png';
        logoPathDark = 'images/logofondnoir.png';
    }
    
    // Vérifier la préférence de l'utilisateur ou le thème sauvegardé
    const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const savedTheme = localStorage.getItem('theme');
    
    // Fonction pour définir le thème en fonction de l'état
    function setTheme(isDark) {
        if (isDark) {
            body.classList.add('dark-theme');
            themeToggle.checked = true;
            localStorage.setItem('theme', 'dark');
            // Changer le logo pour le mode sombre
            if (logoImage) {
                logoImage.src = logoPathDark;
            }
        } else {
            body.classList.remove('dark-theme');
            themeToggle.checked = false;
            localStorage.setItem('theme', 'light');
            // Changer le logo pour le mode clair
            if (logoImage) {
                logoImage.src = logoPathLight;
            }
        }
    }
    
    // Initialiser le thème
    if (savedTheme) {
        setTheme(savedTheme === 'dark');
    } else {
        setTheme(prefersColorScheme.matches);
    }
    
    // Écouter les changements de l'interrupteur
    themeToggle.addEventListener('change', () => {
        setTheme(themeToggle.checked);
    });
    
    // Écouter les changements de préférence du système
    prefersColorScheme.addEventListener('change', (e) => {
        // Ne mettre à jour que si l'utilisateur n'a pas explicitement choisi un thème
        if (!localStorage.getItem('theme')) {
            setTheme(e.matches);
        }
    });
});
