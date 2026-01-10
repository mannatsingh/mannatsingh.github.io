# Mannat Singh - Personal Website

Personal portfolio website showcasing research publications, media coverage, blog posts, and open source projects.

🌐 **Live Site**: [mannatsingh.github.io](https://mannatsingh.github.io)

## Project Structure

```
mannatsingh.github.io/
├── index.html              # Main HTML file
├── favicon.svg             # Site favicon
├── README.md               # This file
│
├── assets/
│   ├── css/
│   │   ├── base.css        # CSS variables, reset, typography
│   │   ├── components.css  # Reusable UI components (navbar, buttons, badges)
│   │   ├── sections.css    # Page section styles (hero, publications, etc.)
│   │   └── responsive.css  # Media queries for mobile/tablet
│   │
│   ├── js/
│   │   ├── main.js         # Core functionality (theme toggle, animations)
│   │   └── render.js       # Dynamic content rendering
│   │
│   └── images/             # All images and GIFs
│       ├── self.jpg
│       ├── blog-*.{gif,png,jpg}
│       └── *.{gif,png,jpg}
│
└── data/
    └── content.js          # All content data (publications, projects, media)
```

## Adding/Updating Content

All content is managed in `data/content.js`. Edit this file to add or update:

### Publications

```javascript
{
    title: "Paper Title",
    authors: "Author 1, <strong>Mannat Singh</strong>, Author 2",
    venue: "CVPR 2025",
    badge: { type: "highlight", text: "Highlight" },  // optional
    image: "assets/images/paper-image.png",
    links: {
        paper: "https://arxiv.org/abs/...",
        project: "https://project-page.com/",
        code: "https://github.com/..."
    }
}
```

### Media Coverage

```javascript
{
    title: "Article Title",
    source: "The Verge",
    favicon: "theverge.com",
    date: "Oct 2024",
    url: "https://...",
    image: "https://..."
}
```

### Blog Posts

```javascript
{
    title: "Blog Post Title",
    source: "Meta AI Blog",
    date: "Oct 2024",
    url: "https://ai.meta.com/blog/...",
    image: "assets/images/blog-image.gif"
}
```

### Projects

```javascript
{
    name: "Project Name",
    description: "Short description",
    repo: "facebookresearch/project-name",
    url: "https://github.com/facebookresearch/project-name"
}
```

## Development

### Local Preview

Simply open `index.html` in a browser, or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .
```

Then visit `http://localhost:8000`

### Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

## CSS Architecture

The CSS is split into modular files for maintainability:

| File | Purpose |
|------|---------|
| `base.css` | CSS variables (theming), reset, typography, links |
| `components.css` | Navbar, buttons, badges, social links, animations |
| `sections.css` | Hero, publications, news, projects, footer styles |
| `responsive.css` | Media queries for mobile and tablet breakpoints |

## Features

- 🌓 **Dark/Light Mode**: Persisted in localStorage
- 📱 **Responsive Design**: Works on all device sizes
- 🎨 **Modular CSS**: Easy to maintain and extend
- 📊 **Data-Driven**: All content in a single JS file
- ⚡ **Fast Loading**: No build step required, minimal dependencies
- 🔍 **SEO Optimized**: Open Graph and Twitter Card meta tags

## License

© 2025 Mannat Singh. All rights reserved.
