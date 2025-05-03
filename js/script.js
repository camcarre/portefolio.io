document.addEventListener('DOMContentLoaded', function() {
    initThemeToggle();
    initScrollAnimations();
    initTimelineFilters();
});

function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.body.classList.add(currentTheme);
        if (currentTheme === 'dark-theme') {
            themeToggle.checked = true;
        }
    }
    
    themeToggle.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light-theme');
        }
    });
}

function initScrollAnimations() {
    animateTimelineItems();
    animateChronoItems();
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.animate-on-scroll').forEach(item => {
        observer.observe(item);
    });
}

function animateTimelineItems() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.timeline-item').forEach(item => {
        observer.observe(item);
    });
}

function animateChronoItems() {
    document.querySelectorAll('.chrono-item').forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('visible');
        }, 200 * index);
    });
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const item = entry.target;
                item.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });
    
    document.querySelectorAll('.chrono-item').forEach(item => {
        observer.observe(item);
    });
}

function initTimelineFilters() {
    const filterButtons = document.querySelectorAll('.timeline-filter');
    const chronoItems = document.querySelectorAll('.chrono-item');
    
    setTimeout(() => {
        chronoItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('visible');
            }, 200 * index);
        });
    }, 500);
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            chronoItems.forEach(item => {
                item.classList.remove('visible');
            });
            
            setTimeout(() => {
                chronoItems.forEach((item, index) => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        setTimeout(() => {
                            item.style.display = 'block';
                            item.classList.add('visible');
                        }, 100 * index);
                    } else {
                        item.style.display = 'none';
                    }
                });
            }, 300);
        });
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});
