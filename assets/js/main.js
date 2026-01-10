/**
 * Main JavaScript for Mannat Singh's Portfolio
 * Handles: Theme toggle, Back to top, Nav highlighting, Scroll animations
 */

(function() {
    'use strict';

    // =============================================
    // Theme Management
    // =============================================
    function initTheme() {
        const themeToggle = document.getElementById('themeToggle');
        const html = document.documentElement;
        const icon = themeToggle.querySelector('i');

        // Check for saved theme preference or default to dark
        const savedTheme = localStorage.getItem('theme') || 'dark';
        html.setAttribute('data-theme', savedTheme);
        updateThemeIcon(icon, savedTheme);

        themeToggle.addEventListener('click', () => {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';

            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(icon, newTheme);
        });
    }

    function updateThemeIcon(icon, theme) {
        icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    }

    // =============================================
    // Back to Top Button
    // =============================================
    function initBackToTop() {
        const backToTop = document.getElementById('backToTop');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // =============================================
    // Active Navigation Highlighting
    // =============================================
    function initNavHighlighting() {
        const sections = document.querySelectorAll('section[id], h3[id]');
        const navLinks = document.querySelectorAll('.nav-links a');

        function updateActiveNav() {
            let current = '';
            const scrollPos = window.scrollY + 100;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (scrollPos >= sectionTop) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                const href = link.getAttribute('href');
                if (href === '#' && window.scrollY < 200) {
                    link.classList.add('active');
                } else if (href === '#' + current) {
                    link.classList.add('active');
                } else if (current === 'about' && href === '#') {
                    link.classList.add('active');
                }
            });
        }

        window.addEventListener('scroll', updateActiveNav);
        updateActiveNav();
    }

    // =============================================
    // Scroll Animations
    // =============================================
    function initScrollAnimations() {
        const fadeElements = document.querySelectorAll('.publication, .research-card, .project-card, .news-item');

        fadeElements.forEach(el => el.classList.add('fade-in'));

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        fadeElements.forEach(el => observer.observe(el));
    }

    // =============================================
    // Initialize All
    // =============================================
    function init() {
        initTheme();
        initBackToTop();
        initNavHighlighting();
        initScrollAnimations();
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
