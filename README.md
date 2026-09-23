# Muhammad Habil Arifin — Developer Portfolio

Personal portfolio website built with [Astro](https://astro.build) and [Tailwind CSS v4](https://tailwindcss.com).

- **Design**: dark mode by default (zinc palette, emerald accent), Shadcn-inspired minimalist UI, Inter font, light/dark theme toggle
- **Structure**: one-page scroll (Hero, About, Experience, Skills, Projects, Contact) + dynamic project case-study pages
- **Content**: projects are managed as Markdown files via Astro Content Collections

## Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start local dev server at `localhost:4321`   |
| `npm run build`   | Build the production site to `./dist/`       |
| `npm run preview` | Preview the production build locally         |

## Adding a new project

Create a new Markdown file in `src/content/projects/` (e.g. `my-new-project.md`):

```md
---
title: "Project Name"
tagline: "One-line tagline"
summary: "Short summary shown on the project card."
techStack: ["Java", "Spring Boot"]
keyFeatures:
  - "Highlighted feature #1"
  - "Highlighted feature #2"
heroImage: "/images/projects/my-image.svg"
heroImageAlt: "Description of the hero image"
github_link: "https://github.com/devhabil/my-repo"
order: 4
---

## Overview

Case-study narrative written in Markdown...
```

The homepage card grid and the dynamic case-study page (`/projects/<file-name>/`) are generated automatically.

## Project structure

```text
/
├── public/
│   └── images/projects/     # Hero mockup images (SVG placeholders)
├── src/
│   ├── components/          # Navbar, Hero, About, Experience, Skills, Projects, Contact, ...
│   ├── content/
│   │   └── projects/        # Project Markdown files (Content Collection)
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro      # One-page scroll homepage
│   │   └── projects/[id].astro  # Dynamic case-study pages
│   └── styles/global.css    # Tailwind v4 theme tokens (dark/light, emerald accent)
└── astro.config.mjs
```
