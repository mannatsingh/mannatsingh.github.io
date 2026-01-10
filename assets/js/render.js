/**
 * Render Functions
 * Dynamically renders content from data/content.js into the page
 */

(function() {
    'use strict';

    // =============================================
    // Render Research Areas
    // =============================================
    function renderResearchAreas() {
        const container = document.getElementById('research-areas');
        if (!container || !CONTENT.researchAreas) return;

        container.innerHTML = CONTENT.researchAreas.map(area => `
            <div class="research-card">
                <i class="${area.icon}"></i>
                <h3>${area.title}</h3>
                <p>${area.description}</p>
            </div>
        `).join('');
    }

    // =============================================
    // Render Publications
    // =============================================
    function renderPublications() {
        const container = document.getElementById('publications-list');
        if (!container || !CONTENT.publications) return;

        container.innerHTML = CONTENT.publications.map(pub => {
            const badge = pub.badge
                ? `<span class="pub-badge ${pub.badge.type}">${pub.badge.text}</span>`
                : '';

            const links = [];
            if (pub.links.paper) {
                links.push(`<a href="${pub.links.paper}" target="_blank" onclick="event.stopPropagation()"><i class="fas fa-file-pdf"></i> Paper</a>`);
            }
            if (pub.links.project) {
                links.push(`<a href="${pub.links.project}" target="_blank" onclick="event.stopPropagation()"><i class="fas fa-globe"></i> Project</a>`);
            }
            if (pub.links.code) {
                links.push(`<a href="${pub.links.code}" target="_blank" onclick="event.stopPropagation()"><i class="fab fa-github"></i> Code</a>`);
            }

            const mainLink = pub.links.paper || pub.links.project || '#';

            return `<div class="publication" onclick="window.open('${mainLink}', '_blank')"><div class="pub-image">${pub.image ? `<img src="${pub.image}" alt="${pub.title}">` : `<div class="pub-image-placeholder">${pub.title.substring(0, 20)}...</div>`}</div><div class="pub-content"><h3>${pub.title}${badge}</h3><p class="authors">${pub.authors}</p><p class="venue">${pub.venue}</p><div class="pub-links">${links.join('')}</div></div></div>`;
        }).join('');
    }

    // =============================================
    // Render Media Coverage
    // =============================================
    function renderMedia() {
        const container = document.getElementById('media-list');
        if (!container || !CONTENT.media) return;

        container.innerHTML = CONTENT.media.map(item => `
            <a href="${item.url}" target="_blank" class="news-item">
                <div class="news-preview">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="news-content">
                    <span class="news-source">
                        <img src="https://www.google.com/s2/favicons?domain=${item.favicon}&sz=32" alt="${item.source}">
                        ${item.source}
                    </span>
                    <span class="news-title">${item.title}</span>
                    <span class="news-date">${item.date}</span>
                </div>
            </a>
        `).join('');
    }

    // =============================================
    // Render Blog Posts
    // =============================================
    function renderBlogs() {
        const container = document.getElementById('blogs-list');
        if (!container || !CONTENT.blogs) return;

        container.innerHTML = CONTENT.blogs.map(blog => `
            <a href="${blog.url}" target="_blank" class="news-item">
                <div class="news-preview">
                    <img src="${blog.image}" alt="${blog.title}">
                </div>
                <div class="news-content">
                    <span class="news-source">${blog.source}</span>
                    <span class="news-title">${blog.title}</span>
                    <span class="news-date">${blog.date}</span>
                </div>
            </a>
        `).join('');
    }

    // =============================================
    // Render Projects
    // =============================================
    function renderProjects() {
        const container = document.getElementById('projects-grid');
        if (!container || !CONTENT.projects) return;

        container.innerHTML = CONTENT.projects.map(project => `
            <a href="${project.url}" target="_blank" class="project-card">
                <h4><i class="fab fa-github"></i> ${project.name}</h4>
                <p>${project.description}</p>
                <img class="github-stars" src="https://img.shields.io/github/stars/${project.repo}?style=social" alt="GitHub stars">
            </a>
        `).join('');
    }

    // =============================================
    // Initialize All Renderers
    // =============================================
    function renderAll() {
        renderResearchAreas();
        renderPublications();
        renderMedia();
        renderBlogs();
        renderProjects();
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderAll);
    } else {
        renderAll();
    }
})();
