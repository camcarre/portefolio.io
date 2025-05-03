/**
 * Timeline Animation JavaScript
 * Anime les éléments de la timeline au défilement
 */

document.addEventListener('DOMContentLoaded', () => {
    // Observer pour l'animation de la timeline
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });

    // Observer tous les éléments de la timeline
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        timelineObserver.observe(item);
    });
});
