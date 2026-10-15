# Career Catalyst Club

Career Catalyst Club operates under Disha Placement Cell, which is under the Student Technical Council. The website subtitle is “Under Disha Placement Cell, Student Technical Council.” It is built with plain HTML, CSS, and JavaScript.

## Features

- Three-step journey from student details to domain selection to roadmap library
- Clean glassmorphism layout with responsive design for desktop and mobile
- No local storage, cookies, or external APIs for student data
- Consolidated CSDA and AICS career comparison tables followed by individual roadmap PDF downloads
- Accessible labels, keyboard-friendly controls, and reduced-motion styles

## Local preview

1. Open a terminal in this folder.
2. Run:
   ```bash
   python -m http.server 8000
   ```
3. Open `http://localhost:8000` in your browser.

## Deployment for free

The existing GitHub Pages repository is `dheeraj-code77/pathfinder-career-roadmaps`. To publish an approved update:

1. Commit the intended website changes on the `main` branch and push them to `origin`.
2. In the existing GitHub repository, open **Settings → Pages** and keep its current publishing source (the `main` branch and repository root).
3. Wait for the Pages deployment to complete, then confirm the published site and PDF links.

## PDF notes

The nine roadmap PDFs are stored under `public/pdfs/` with the required filenames for the deployed static site. Each roadmap keeps its matching PDF. Comparison figures are research estimates; salary, employer-fit, and role-availability panels are reported separately from 0–10 scores.

## Important

This project keeps student details in memory only during the current browser session and does not store or transmit them.
