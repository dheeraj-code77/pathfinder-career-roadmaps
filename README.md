# Pathfinder

Pathfinder is a compact, premium student career roadmap portal built with plain HTML, CSS, and JavaScript.

## Features

- Three-step journey from student details to domain selection to roadmap library
- Clean glassmorphism layout with responsive design for desktop and mobile
- No local storage, cookies, or external APIs for student data
- Domain-specific roadmap cards with individual PDF downloads
- Accessible labels, keyboard-friendly controls, and reduced-motion styles

## Local preview

1. Open a terminal in this folder.
2. Run:
   ```bash
   python -m http.server 8000
   ```
3. Open `http://localhost:8000` in your browser.

## Deployment for free

Use GitHub Pages with a static site:

1. Create a new GitHub repository and push this project.
2. In GitHub, open the repository settings.
3. Go to Pages.
4. Select the branch that contains the site, usually `main`.
5. Set the folder to `/root` or the project folder, depending on your publishing structure.
6. Save the settings.
7. GitHub will publish the website at a Pages URL.

If you prefer a different static host, the same project structure works on Netlify or Cloudflare Pages without any backend requirements.

## PDF notes

The nine roadmap PDFs are stored under `public/pdfs/` with the required filenames for the deployed static site. Each card downloads its own matching file.

## Important

This project keeps student details in memory only during the current browser session and does not store or transmit them.
